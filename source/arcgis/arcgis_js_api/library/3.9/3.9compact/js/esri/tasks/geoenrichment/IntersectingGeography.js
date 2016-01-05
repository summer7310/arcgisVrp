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
define("esri/tasks/geoenrichment/IntersectingGeography",["../../declare"],function(b){return b("esri.tasks.geoenrichment.IntersectingGeography",null,{name:null,geometryType:"esriGeometryPoint",spatialRel:"esriSpatialRelIntersects",outFields:null,constructor:function(a){a&&(this.name=a.name||null,this.outFields=a.outFields||null,a.intersectionInfo?(a.intersectionInfo.geometryType&&(this.geometryType=a.intersectionInfo.geometryType),a.intersectionInfo.spatialRel&&(this.spatialRel=a.intersectionInfo.spatialRel)):
(a.geometryType&&(this.geometryType=a.geometryType),a.spatialRel&&(this.spatialRel=a.spatialRel)))},toJson:function(){return{name:this.name,outFields:this.outFields,intersectionInfo:{geometryType:this.geometryType,spatialRel:this.spatialRel}}}})});