/**
 * learn controller
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2014-12-17 18:12:34
 * @version $Id$
 */
define([
	'helpers/lee/demo'
	],function(demo){
		var init = function(){

			//新建一个名为help的module
			var help = angular.module('help', []);

			//新建一个名为learn的controller
			help.controller('learn', function($scope){
				$scope.test = function(){
					demo.testFunction();
				}

				//数据双向绑定演示数据源
				$scope.data = [{
					'place'	: "西湖区",
					'a'		: 1231,
					'b'		: 432,
					'c'		: 5435454 
				},{
					'place'	: '江干区',
					'a'		: 23454,
					'b'		: 543,
					'c'		: 54343
				},{
					'place'	: '滨江区',
					'a'		: 54354543,
					'b'		: 432,
					'c'		: 6546
				}]

				//初始化图表
				demo.highCharts();
			});

		}
		return {
			'init'	: init()
		}
});

