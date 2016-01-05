/**
 * vrp模块
 * @authors summer
 * @date    2015-12-27 11:58:26
 * @version $Id$
 */

define([
	'helpers/sum/vrp',
	'controllers/lee/gmap'
	], function(vrp){
		var restUrl = 'http://www.zhigezi.com/rest';

		//初始化跟踪对象
		var initVrp = function(){
			var vrps = angular.module('vrps', ['gmap']);

			//控制器vrper
			vrps.controller('vrper', function($scope, mapObj, $timeout){

				$scope.vrp  = new vrp({
					interval: 500,
					url: restUrl
				});
				$scope.test = '1234';
				mapObj.addLayer($scope.vrp.getLayer());
				//开始画路径
				$scope.startVrp = function(){
					$scope.vrp.startDraw($scope.vrp);
				}

				//清楚路径
				$scope.clearVrp = function(){
					$scope.vrp.clear($scope.vrp);
					//clearInterval($scope.timer);
				}

			});
		}

	
		var init = function(){
			initVrp();
		}

		return {
			init: init
		}
})

