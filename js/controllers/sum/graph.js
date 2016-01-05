/**
 * 图标控制器
 * @author summer
 * @date 2015030
 */

define([
	'helpers/sum/graph'
	],function(graph){
		var init = function(){
			//新建一个名为graph的module
			var graph = angular.module('graph', []);
			//新建一个名为graph的controller
			graph.controller('graph', function($scope){
				$scope.test = function(){
					graph.testFunction();
				}

				//初始化图表
				graph.quantity();
				graph.price();
			});
		}

		return {
			'init' : init()
		}
	});