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
define("esri/tasks/ProjectParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has esri/kernel esri/lang esri/geometry/jsonUtils".split(" "),function(a,d,e,c,f,g,h,k){a=a(null,{declaredClass:"esri.tasks.ProjectParameters",geometries:null,outSR:null,transformation:null,transformForward:null,toJson:function(){var a=e.map(this.geometries,function(a){return a.toJson()}),b={};b.outSR=this.outSR.wkid||c.toJson(this.outSR.toJson());b.inSR=this.geometries[0].spatialReference.wkid||
c.toJson(this.geometries[0].spatialReference.toJson());b.geometries=c.toJson({geometryType:k.getJsonType(this.geometries[0]),geometries:a});this.transformation&&(b.transformation=this.transformation.wkid||c.toJson(this.transformation));h.isDefined(this.transformForward)&&(b.transformForward=this.transformForward);return b}});f("extend-esri")&&d.setObject("tasks.ProjectParameters",a,g);return a});