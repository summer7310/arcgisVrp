/**
 * 地图显示模块，初始化地图显示
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2014-12-11 10:53:25
 * @version $Id$
 */
define([
	'esri/map',
	'esri/layers/ArcGISTiledMapServiceLayer',
	'esri/layers/FeatureLayer'
	], function(Map, ArcGISTiledMapServiceLayer, FeatureLayer){

		//地图控制器
		var initMap = function(){
			var gmap = angular.module('gmap', []);
			gmap.factory('mapObj', function(){
				return new Map("mapDiv", {
					center: [120.179787 , 30.263478],
					zoom: 12,
					basemap: "gray"
				});
			});
			
			gmap.controller('baseMap', function($scope, mapObj){
				$scope.map = mapObj;
				//添加图层
			 	var layer = new esri.layers.ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/hangzhou/dianshang/MapServer");
			 	$scope.map.addLayer(layer);
			    	
			});
		}

		var init = function(){
			initMap();
		}

		return {
			init: init
		}
});
