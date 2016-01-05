/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/geometry/jsonUtils","dojo/_base/lang dojo/has esri/kernel esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/geometry/Multipoint esri/geometry/Extent".split(" "),function(g,k,l,b,c,d,e,f){var h={fromJson:function(a){if(void 0!==a.x&&void 0!==a.y)return new b(a);if(void 0!==a.paths)return new c(a);if(void 0!==a.rings)return new d(a);if(void 0!==a.points)return new e(a);if(void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax)return new f(a)},getJsonType:function(a){return a instanceof
b?"esriGeometryPoint":a instanceof c?"esriGeometryPolyline":a instanceof d?"esriGeometryPolygon":a instanceof f?"esriGeometryEnvelope":a instanceof e?"esriGeometryMultipoint":null},getGeometryType:function(a){return"esriGeometryPoint"===a?b:"esriGeometryPolyline"===a?c:"esriGeometryPolygon"===a?d:"esriGeometryEnvelope"===a?f:"esriGeometryMultipoint"===a?e:null}};k("extend-esri")&&g.mixin(g.getObject("geometry",!0,l),h);return h});