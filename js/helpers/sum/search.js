/**
 * 路径查询模块
 * @authors: Summer
 * @version $Id$
 * @Date 2015-01-19 10:14:06
 */

define([
        "esri/urlUtils",
        "esri/toolbars/edit",
        "esri/dijit/editing/Editor",
        "esri/dijit/HomeButton",
        "esri/dijit/Measurement",
        "esri/dijit/Directions",
        "dojo/parser", "dojo/keys",
		], 
	function(
          urlUtils,Edit,        
	        Editor, HomeButton,Measurement,Directions,
          parser, keys
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
    //输入地名搜索路径
    function adddir(){
        var directions = new Directions({
        map: mapObj,
        routeTaskUrl: "http://192.168.0.107:6080/arcgis/rest/services/hangzhou/HZNSStreets/NAServer/%E8%B7%AF%E5%BE%84",
        //routeSymbol : SimpleLineSymbol().setColor(new dojo.Color([0, 0, 255, 1])).setWidth(5)
        routeParams: {},
        },"dir");
        directions.startup();
    }
		return {      
          setmapObj : function(map){
            mapObj = map;
          },
          adddir : function() {
            adddir()
          },
		}
		
});
