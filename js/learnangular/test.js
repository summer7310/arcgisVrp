/**
 * test basee on angularjs
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2014-12-09 10:38:14
 * @version $Id$
 */
var mytest = angular.module('mytest', []);

mytest.controller('leftController', ['$scope', '$http', function($scope, $http){
	$http.get('js/learnangular/data.json').success(function(data){
		$scope.users = data;
		console.log(data);
		//alert(typeof data)
	});
}]);


