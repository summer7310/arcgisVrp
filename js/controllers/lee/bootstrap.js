/**
 * 主模块，再次初始化其他模块和配置路由
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2014-12-11 14:16:35
 * @version $Id$
 */
define([
   'controllers/lee/gmap',
   'controllers/lee/tracks',
   'controllers/sum/vrps',
   'controllers/sum/busCtr',
   'controllers/lee/help',
   'controllers/sum/graph',
   'controllers/sum/help',
   'controllers/sum/guide',
   
   
   ],function(gmap, tracks, vrps, busCtr){
       
       var init = function(){
           gmap.init();
           tracks.init();
           vrps.init();
           busCtr.init();

            
           var gisApp = angular.module('gisApp', ['ngRoute', 'tracks', 'vrps', 'busCtr', 'graph', 'help', 'helpCtrls', 'guideCtrls']);

           //路由生成
           gisApp.config(['$routeProvider', function($routeProvider){             
               $routeProvider.
               when('/track', {
                   templateUrl: 'views/lee/track.html',
                   controller: 'tracker'//来自tracks中的控制器
               }).
               when('/learn', {
                   templateUrl: 'views/lee/learn.html',
                   controller: 'learn'
               }).
               when('/guide', {
                   templateUrl: 'views/sum/guide.html',
                   controller: 'guideCtrl'
               }).
               when('/vrp', {
                   templateUrl: 'views/sum/vrp.html',
                   controller: 'vrper'
               }).
               when('/search', {
                   templateUrl: 'system/search.html',
                   controller: 'helpCtrl'
               }).
               when('/dataform', {
                   templateUrl: 'views/sum/dataform.html',
                   controller: 'vrper'
               }).
               when(
                   '/', {
                   templateUrl: 'views/lee/learn.html',
                   controller: 'learn'
               }).
               when(
                   '/goods', {
                   templateUrl: 'system/goods.html',
                   controller: ''
               }).
               when(
                   '/car', {
                   templateUrl: 'system/car.html',
                   controller: ''
               }).
               when(
                   '/driver', {
                   templateUrl: 'system/driver.html',
                   controller: ''
               }).
              when(
                   '/busArrange', {
                   templateUrl: 'system/busArrange.html',
                   controller: 'buser'
               }).
               when(
                   '/graph', {
                   templateUrl: 'system/graph.html',
                   controller: 'graph'
               }).
               when(
                   '/graph2', {
                   templateUrl: 'system/graph2.html',
                   controller: 'graph'
               })

           }]);
 
           angular.bootstrap(document.body, ['gisApp', 'gmap']);//????????????????????????????
       }
 
   return {
       init : init
   }    
});