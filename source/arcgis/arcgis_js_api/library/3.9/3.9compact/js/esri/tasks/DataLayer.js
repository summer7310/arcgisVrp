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
define("esri/tasks/DataLayer","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/lang esri/geometry/jsonUtils esri/tasks/SpatialRelationship".split(" "),function(a,c,d,e,f,g,h){a=a(null,{declaredClass:"esri.tasks.DataLayer",name:null,where:null,geometry:null,spatialRelationship:null,toJson:function(){var a={type:"layer",layerName:this.name,where:this.where,spatialRel:this.spatialRelationship},b=this.geometry;b&&(a.geometryType=g.getJsonType(b),a.geometry=b.toJson());return f.filter(a,function(a){if(null!==
a)return!0})}});c.mixin(a,h);d("extend-esri")&&c.setObject("tasks.DataLayer",a,e);return a});