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
define("esri/tasks/geoenrichment/GeometryStudyArea",["../../declare","esri/geometry/jsonUtils","esri/geometry/Geometry","./StudyArea"],function(b,c,d,e){return b("esri.tasks.geoenrichment.GeometryStudyArea",[e],{geometry:null,constructor:function(a){a&&a.geometry&&(this.geometry=a.geometry instanceof d?a.geometry:c.fromJson(a.geometry))},toJson:function(){var a=this.inherited(arguments);a.geometry=this.geometry.toJson();return a},getGeomType:function(){return this.geometry.type}})});