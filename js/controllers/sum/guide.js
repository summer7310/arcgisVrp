define([
		'helpers/sum/guide',
		'helpers/sum/search',
		'controllers/lee/gmap'
		],function(guide, search){
			var init = function(){
				var guideCtrls = angular.module('guideCtrls',['gmap']);

				guideCtrls.controller('guideCtrl', function($scope, mapObj){
					guide.setmapObj(mapObj);
					//console.log(mapObj)
					
					$scope.addStops = function(){
						guide.addStops();
					}
					$scope.clearStops= function(){
						guide.clearStops();
					}
					$scope.addBarriers= function(){
						guide.addBarriers();
					}
					$scope.clearBarriers= function(){
						guide.clearBarriers();
					}
					$scope.solveRoute= function(){
						guide.solveRoute();
					}
					$scope.clearRoutes= function(){
						guide.clearRoutes();
					}

					search.adddir();

					
				});
			}
			return {
				'init' : init()
			}
		}
		);