/**
 * @content vrp model for arcigs javascript
 * @authors summer
 * @date    2015-12-27 11:58:26

 * 注：因为计时器中无法获取this对象，所以计时器执行函数必须都传入对象本身
 */
define([  "dojo/_base/declare", 
      "esri/layers/GraphicsLayer",
      "esri/geometry/Polyline",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/Color",
      "esri/SpatialReference",
      "esri/graphic",
      "dojo/domReady!"], 
  function(
      declare,
      GraphicsLayer,
      Polyline,
      SimpleFillSymbol,
      SimpleLineSymbol,
      Color,
      SpatialReference,
      Graphic
  ){
  return declare(
  null,
  {
    id      : null,
    interval  : null,//单位秒
    datas   : null,//异步jsonp数据
    debug     : 'normal',//异常处理模式，normal||alert
    url     : 'http://zhigezi.sinaapp.com/index.php/rest',//数据源地址，返回JSONP格式
    timer   : null,//定时器
    layer   : null,

    constructor: function(options){
      this.interval = options.interval?options.interval:5000;
      this.id = "obj_"+new Date().getTime();
      this.layer = new GraphicsLayer();
    },

    logger: function(info){//异常处理
      if (this.debug == 'normal') {
        console.log(info);
      } else {
        alert(info);
      };
    },

    getLayer: function(){
      return this.layer;
    },


    drawLine: function(obj){
        
        var url1 = "../vrp/data/data1.json";
        var url2 = '../vrp/data/data2.json';
        var url3 = '../vrp/data/data3.json';

        var url4 = "../vrp/data/data4.json";
        var url5 = '../vrp/data/data5.json';
        var url6 = '../vrp/data/data6.json';

        var url7 = "../vrp/data/data7.json";
        var url8 = '../vrp/data/data8.json';
        var url9 = '../vrp/data/data9.json';

        var url10 = "../vrp/data/data10.json";
        var url11 = '../vrp/data/data11.json';
        var url12 = '../vrp/data/data12.json';       

        var a = Math.floor((Math.random()*6));

        //var a=5;
        var url = [[url1,url2,url3],[url4,url5,url6],[url7,url8,url9],[url10,url11,url12],[url1,url5,url12],[url8,url7,url11]];
        //console.log(url[a][2])
        obj.layer.clear();
        draw(url[a][0],[255,0,255,1]);
        draw(url[a][1],[0,0,0,1]);
        draw(url[a][2],[100,149,237,1]);

        function createA(a){         
          if(a > 3){
            a = 0
          }else{
            a+=1;
          }
          return a;
        }

        function draw(url, color){
          obj.layer.clear();
          $.getJSON(url, function(data){
            console.log(data)
/*            var symbol = new SimpleLineSymbol().setColor(new Color(color)).setWidth(5);
            var polylineJson = {
              "paths":data,
              "spatialReference":{"wkid":4326}
            };
            var polyline = new Polyline(polylineJson);
            var graphic = new Graphic(polyline, symbol);*/


            var path = [];
            for (key in data) {
              path[key] = [data[key].lontitude, data[key].latitude];
            };
            var singlePathPolyline = new Polyline();
            singlePathPolyline.addPath(path);
             var symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color(color), 0.7).setWidth(5);
            obj.layer.add(new Graphic(singlePathPolyline, symbol));
         
          })
        }
        

    },

    /* 请求数据，格式化，绘制图像
     * 必须传入对象本身
     */
    request: function(obj){
      //alert(this.interval);
      var jsonpArgs = {
        url: this.url,
        callbackParamName: "callback",
        content: {
          v: "1.0",
          q: "dojo toolkit"
        },
        load: function(data){
          if(0){
            //this.logger('data.error');
          } else {
            //alert(data);
            obj.datas = data;
            var path = [];
            for (key in data) {
              path[key] = [data[key].lontitude, data[key].latitude];
            };
            obj.layer.clear();
            var singlePathPolyline = new Polyline();
            singlePathPolyline.addPath(path);
            var symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([102,204,51]), 0.7).setWidth(4);
            obj.layer.add(new Graphic(singlePathPolyline, symbol));
             
          }
        }
      };
      dojo.io.script.get(jsonpArgs);
    },

    //画路经
    startDraw: function(obj){
      //obj.request(obj);
      obj.drawLine(obj);
    },
    //清楚路径
    clear: function(obj){
      obj.layer.clear(); 
    },

    getData: function(){
      return this.datas;
    }
  });
});
