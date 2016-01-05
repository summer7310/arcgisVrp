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
define("esri/plugins/spatialIndex",["esri/process/SpatialIndex","dojo/Deferred"],function(e,f){return{add:function(a,b){b=b||{};if(a.spatialIndex)return a.spatialIndex;if("spatialIndex"in b){if(!1!==b.spatialIndex)return a.spatialIndex=b.spatialIndex,a.spatialIndex}else{var d=new f;b.autostart=!1;a.spatialIndex=new e(b);var c=a.spatialIndex;-1<a.declaredClass.indexOf("Map")?c.setMap(a):c.addLayer(a);c.on("start",function(){d.resolve(c)});c.start();return d}},remove:function(a){var b=a.spatialIndex;
b&&(-1<a.declaredClass.indexOf("Map")?b.unsetMap(a):b.remove(a),a.spatialIndex=void 0)}}});