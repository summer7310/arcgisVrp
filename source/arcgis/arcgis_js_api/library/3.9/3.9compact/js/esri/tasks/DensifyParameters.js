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
define("esri/tasks/DensifyParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has esri/kernel esri/geometry/jsonUtils".split(" "),function(a,d,e,c,f,g,h){a=a(null,{declaredClass:"esri.tasks.DensifyParameters",geometries:null,geodesic:null,lengthUnit:null,maxSegmentLength:null,toJson:function(){var a=e.map(this.geometries,function(a){return a.toJson()}),b={};this.geometries&&0<this.geometries.length&&(b.geometries=c.toJson({geometryType:h.getJsonType(this.geometries[0]),
geometries:a}),b.sr=c.toJson(this.geometries[0].spatialReference.toJson()));this.geodesic&&(b.geodesic=this.geodesic);this.lengthUnit&&(b.lengthUnit=this.lengthUnit);this.maxSegmentLength&&(b.maxSegmentLength=this.maxSegmentLength);return b}});f("extend-esri")&&d.setObject("tasks.DensifyParameters",a,g);return a});