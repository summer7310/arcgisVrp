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
			//console.log('init base map');
			//gmap = app;
			gmap.factory('mapObj', function(){
				//alert('fac');
				return new Map("mapDiv", {
					center: [120.179787 , 30.263478],
					zoom: 12,
					//slider: "small",
					//navigationMode: 'classic',
					basemap: "gray"
				});
			});
			
			gmap.controller('baseMap', function($scope, mapObj){
				$scope.map = mapObj;
				//添加图层
				// var basemap = new esri.layers.ArcGISTiledMapServiceLayer("http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer");
			 	//$scope.map.addLayer(basemap);
			 	var layer = new esri.layers.ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/hangzhou/dsbase/MapServer");
			 	$scope.map.addLayer(layer);
			    
			    // var labels = new ArcGISTiledMapServiceLayer("http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer");
			    // var main_streets = new FeatureLayer("http://localhost:6080/arcgis/rest/services/hangzhou/HZStreets/FeatureServer/0",{
		     //      mode: FeatureLayer.MODE_ONDEMAND, 
		     //      showLabels: true,
		     //      opacity :1,
		     //      outFields: ['*']
		     //    });
		     //    $scope.map.addLayer(main_streets);
		     //    var other_streets = new FeatureLayer("http://localhost:6080/arcgis/rest/services/hangzhou/HZStreets/FeatureServer/1",{
		     //      mode: FeatureLayer.MODE_ONDEMAND, 
		     //      showLabels: true,
		     //      opacity :1,
		     //      outFields: ['*']
		     //    });
		     //    $scope.map.addLayer(other_streets);
		        
			    
			
			});

			//angular.bootstrap(document.body, ['gmap']);
		}

		var init = function(){
			initMap();
		}

		return {
			init: init
		}
});
