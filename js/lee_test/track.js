/**
 * @content lee track model for arcigs javascript
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2014-11-24 10:08:58
 * @version 1.0
 * 注：因为计时器中无法获取this对象，所以计时器执行函数必须都传入对象本身
 */
define([	"dojo/_base/declare", 
			"esri/layers/GraphicsLayer",
			"esri/geometry/Polyline",
			"esri/symbols/SimpleLineSymbol",
			"esri/Color",
			"esri/SpatialReference",
			"esri/graphic",
			"dojo/domReady!"], 
	function(
			declare,
			GraphicsLayer,
			Polyline,
			SimpleLineSymbol,
			Color,
			SpatialReference,
			Graphic
	){
	return declare(
	null,
	{
		id			: null,
		interval	: null,//单位秒
		data		: null,//异步jsonp数据
		debug  		: 'normal',//异常处理模式，normal||alert
		url			: 'http://zhigezi.sinaapp.com/index.php/rest',//数据源地址，返回JSONP格式
		timer		: null,//定时器
		layer		: null,
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
				 	if(data.error){
				 		this.logger('data.error');
				 	} else {
				 		//alert(data);
				 		console.log(data);
				 		var path = [];
				 		for (key in data) {
				 			path[key] = [data[key].lontitude, data[key].latitude];
				 		};
				 		console.log(path);
				 		obj.layer.clear();
						var singlePathPolyline = new Polyline();
						singlePathPolyline.addPath(path);
						var symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([102,204,51]), 0.7).setWidth(4);;
					
						obj.layer.add(new Graphic(singlePathPolyline, symbol));
				 	}
				},
				error: function(error){
				 	this.logger('传输错误，请检查网络' + error);
				}
			};
			dojo.io.script.get(jsonpArgs);
		},
		startTimer: function(obj){//刷新定时,需要回传对象本身
			this.timer = setInterval(function(){
				obj.request(obj);
			}, this.interval);
		},
		stopTimer: function(){//停止计时器
			clearInterval(this.timer);
		},
		draw: function(){
			

		}
	});
});
