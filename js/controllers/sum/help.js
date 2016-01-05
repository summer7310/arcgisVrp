define([
		'helpers/sum/demo'
		],function(demo){
			var init = function(){
				var helpCtrls = angular.module('helpCtrls',[]);
				helpCtrls.controller('helpCtrl', function($scope){
					$scope.test = function(){
						demo.play();
					}
					// $scope.test2 = function(){
					// 	demo.play2();
					// }
					$scope.books = [
						{title:"《Ext江湖》",author:"1"},
			        	{title:"《ActionScript游戏设计基础（第二版）》",author:"2"},
			        	{title:"《用AngularJS开发下一代WEB应用》",author:"3"}
					]
				});
			}
			return {
				'init' : init()
			}
		}
		);