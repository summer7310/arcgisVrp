/**
 * 多点线路间路径诱导模块
 * @authors: Summer
 * @version $Id$
 * @Date 2015-01-16 14:29:09
 */

define([
        "esri/urlUtils",
		    "esri/tasks/GeometryService",
        "esri/toolbars/edit",
        "esri/graphic",            
        "esri/tasks/RouteTask",            
        "esri/tasks/RouteParameters",
        "esri/tasks/FeatureSet", 
        "dojo/on",
        "dijit/registry",
        "esri/geometry/Extent",
        "esri/symbols/PictureMarkerSymbol",
        "dojo/_base/array",
        "dojo/dom",    
        "esri/Color",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/dijit/editing/Editor",
        "esri/dijit/HomeButton",
        "esri/dijit/Measurement",
        "esri/dijit/editing/TemplatePicker",
        "esri/config",
        "dojo/i18n!esri/nls/jsapi",
        "dojo/_base/array", "dojo/parser", "dojo/keys",
        "dijit/layout/BorderContainer", "dijit/layout/ContentPane", 
        "dijit/TitlePane",
        "dijit/form/CheckBox",
        "dijit/form/HorizontalSlider",
        "dijit/form/HorizontalRuleLabels",
        "dojo/domReady!"

		], 
	function(
          urlUtils,
			    GeometryService, Edit, 
	       	  
	        Graphic,RouteTask, RouteParameters,FeatureSet,on, registry,Extent,
	        PictureMarkerSymbol,array,dom,

	        Color, SimpleMarkerSymbol, SimpleLineSymbol, 
	        Editor, HomeButton,Measurement,TemplatePicker,
	        esriConfig, jsapiBundle,
	        arrayUtils, parser, keys
	){
        //parser.parser();
        //all requests to route.arcgis.com will proxy to the proxyUrl defined in this object.
        // urlUtils.addProxyRule({
        //   urlPrefix: "route.arcgis.com",  
        //   proxyUrl: "/sproxy/"
        // });
        // urlUtils.addProxyRule({
        //   urlPrefix: "traffic.arcgis.com",  
        //   proxyUrl: "/sproxy/"
        // });

		    var mapObj;
        var routeTask, routeParams, routes = [];
        var stopSymbol, barrierSymbol, routeSymbols, polylineBarrierSymbol;
        var mapOnClick_addStops_connect, mapOnClick_addBarriers_connect,
            mapOnClick_addpolylineBarriers_connect;
        //新建路径查询任务对象
		    routeTask = new RouteTask("http://localhost:6080/arcgis/rest/services/hangzhou/HZNSStreets/NAServer/Route");
        //路径参数设置
        routeParams = new RouteParameters();
        routeParams.stops = new FeatureSet();
        routeParams.barriers = new FeatureSet();
        routeParams.polylineBarriers = new FeatureSet();
        routeParams.outSpatialReference = {"wkid":102100};
        
        routeTask.on("solve-complete", showRoute);
        routeTask.on("error", errorHandler);
        //停靠点样式       
        stopSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_CIRCLE).setSize(2);
        stopSymbol.outline.setWidth(8).setColor(new Color([60,179,113]));
        //障碍点样式
        barrierSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_X).setSize(10);
        barrierSymbol.outline.setWidth(6).setColor(new Color([255,0,0]));

        var polylineBarrierSymbol = new SimpleLineSymbol().setColor(new Color([255,0,0]));
        routeSymbols = {
          "Route 0": new SimpleLineSymbol().setColor(new Color([100,149,237,1])).setWidth(5),
          "Route 1": new SimpleLineSymbol().setColor(new Color([100,149,237,1])).setWidth(5),
          "Route 2": new SimpleLineSymbol().setColor(new Color([0,0,0,1])).setWidth(5),
          "Route 3": new SimpleLineSymbol().setColor(new Color([255,0,255,1])).setWidth(5)
        };

        function addStops(){
          removeEventHandlers();
          mapOnClick_addStops_connect = mapObj.on("click", addStop);
        }

        function clearStops(){
          removeEventHandlers();
          for (var i=routeParams.stops.features.length-1; i>=0; i--) {
            mapObj.graphics.remove(routeParams.stops.features.splice(i, 1)[0]);
          }
        }
        //Adds a stop. The stop is associated with the route currently displayed in the dropdown
        function addStop(evt) {
          routeParams.stops.features.push(
            mapObj.graphics.add(
              new esri.Graphic(
                evt.mapPoint,
                stopSymbol,
                { RouteName:dom.byId("routeName").value }
              )
            )
          );
        }

        function addBarriers() {
          removeEventHandlers();
          mapOnClick_addBarriers_connect = on(mapObj, "click", addBarrier);
        }

        function clearBarriers(){
          removeEventHandlers();
          for (var i=routeParams.barriers.features.length-1; i>=0; i--) {
            mapObj.graphics.remove(routeParams.barriers.features.splice(i, 1)[0]);
          }
        }
        //Adds a barrier
        function addBarrier(evt) {
          routeParams.barriers.features.push(
            mapObj.graphics.add(
              new esri.Graphic(
                evt.mapPoint,
                barrierSymbol
              )
            )
          );
        }
        //Stops listening for click events to add barriers and stops (if they've already been wired)
        function removeEventHandlers() {        
          if (mapOnClick_addStops_connect) {
            mapOnClick_addStops_connect.remove();
          }
          if (mapOnClick_addBarriers_connect) {
            mapOnClick_addBarriers_connect.remove();
          }
          if (mapOnClick_addpolylineBarriers_connect) {
            mapOnClick_addpolylineBarriers_connect.remove();
          }
        }

        function solveRoute(){
          removeEventHandlers();
          routeTask.solve(routeParams);
        }

        function clearRoutes(){
          for (var i=routes.length-1; i>=0; i--) {
            mapObj.graphics.remove(routes.splice(i, 1)[0]);
          }
          routes = [];
        }

        //Draws the resulting routes on the map
        function showRoute(evt) {
          clearRoutes();

          array.forEach(evt.result.routeResults, function(routeResult, i) {
            routes.push(
              mapObj.graphics.add(
                routeResult.route.setSymbol(routeSymbols[routeResult.routeName])
              )
            );
          });

          var msgs = ["Server messages:"];
          array.forEach(evt.result.messages, function(message) {
            msgs.push(message.type + " : " + message.description);
          });
          if (msgs.length > 1) {
            //alert(msgs.join("\n - "));
          }
        }
        //Reports any errors that occurred during the solve
        function errorHandler(err) {
          //alert("An error occured\n" + err.message + "\n" + err.details.join("\n"));
        }
        //返回函数
		return {      
          setmapObj : function(map){
            mapObj = map;
            // console.log(mapObj)
          },
          //Begins listening for click events to add stops
          addStops : function() {
            addStops()
          },
          //Clears all stops
          clearStops : function() {
            clearStops()
          },
          //Begins listening for click events to add barriers
          addBarriers : function() {
            addBarriers()
          },
          //Clears all barriers
          clearBarriers : function() {
            clearBarriers()
          },
          //Solves the routes. Any errors will trigger the errorHandler function.
          solveRoute : function() {
            solveRoute()
          },
          //Clears all routes
          clearRoutes : function() {
           clearRoutes()
          },
		}
		
});
