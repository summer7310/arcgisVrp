/**
 * app angular
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2014-12-10 15:36:06
 * @version $Id$
 */

var myapp = angular.module('myapp', ['ngRoute', 'mytest']);

myapp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/users', {
		templateUrl: 'angular2.html',
		controller: 'leftController'
	})
}]);