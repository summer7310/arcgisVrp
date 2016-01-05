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
define("esri/tasks/DistanceParameters","dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has esri/kernel esri/geometry/jsonUtils".split(" "),function(c,f,d,g,h,e){c=c(null,{declaredClass:"esri.tasks.DistanceParameters",geometry1:null,geometry2:null,distanceUnit:null,geodesic:null,toJson:function(){var a={},b=this.geometry1;b&&(a.geometry1=d.toJson({geometryType:e.getJsonType(b),geometry:b}));if(b=this.geometry2)a.geometry2=d.toJson({geometryType:e.getJsonType(b),geometry:b});a.sr=d.toJson(this.geometry1.spatialReference.toJson());
this.distanceUnit&&(a.distanceUnit=this.distanceUnit);this.geodesic&&(a.geodesic=this.geodesic);return a}});g("extend-esri")&&f.setObject("tasks.DistanceParameters",c,h);return c});