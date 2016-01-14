define([
	'helpers/sum/bus',
	],function(bus){
		var initBus = function(){
			var busCtr = angular.module('busCtr',[]);

			busCtr.controller('buser', function($scope){
				$scope.busArrange = function(){
					bus.BusSchedule();
					$scope.busData = bus.getData();
					//console.log($scope.busData)
				}
			});

			busCtr.directive("busdata", function(){
				return{
					restrict: 'EA',
					transclude: true,
					templateUrl: 'system/busData.html',
					controllerAs: 'buser'
				}
			})
		}

		var init = function(){
			initBus();
		}

		return {
			init: init
		}
	});