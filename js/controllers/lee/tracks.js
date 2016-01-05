/**
 * track模块
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2014-12-11 11:58:26
 * @version $Id$
 */

define([
	'helpers/lee/track',
	'controllers/lee/gmap'
	], function(track){
		var restUrl = 'http://www.zhigezi.com/rest';

		//初始化跟踪对象
		var initTrack = function(){
			var tracks = angular.module('tracks', ['gmap']);

			//控制器tracker
			tracks.controller('tracker', function($scope, mapObj, $timeout){

				$scope.track  = new track({
					interval: 500,
					url: restUrl
				});
				$scope.test = '1234';
				mapObj.addLayer($scope.track.getLayer());

				//开始追踪
				$scope.startTrack = function(){
					$scope.track.startTimer($scope.track);
					$scope.timer = setInterval(function(){
						$scope.$apply(function(){
							$scope.trackData = $scope.track.getData();
						});
					}, 2000);
				}

				//停止追踪
				$scope.stopTrack = function(){
					$scope.track.stopTimer($scope.track);
					clearInterval($scope.timer);
				}

			});
		}

	
		var init = function(){
			initTrack();
		}

		return {
			init: init
		}
})

