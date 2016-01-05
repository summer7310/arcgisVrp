/**
 * angular controllers model
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2014-12-09 19:41:26
 * @version $Id$
 */

define([
		"dist/angular"
	], function(
		angular
	){
		fuck = window.angular.module('gistraffic', ['ngRoute']);
		//angular.bootstrap(document,["gistraffic"]);
		fuck.controller('trackController', function($scope){
			$scope.test = function(){
				alert('testtttttttttttttttttttt');
			}
		});

});