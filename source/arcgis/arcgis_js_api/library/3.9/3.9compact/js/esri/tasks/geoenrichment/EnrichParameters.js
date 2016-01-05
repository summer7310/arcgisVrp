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
define("esri/tasks/geoenrichment/EnrichParameters",["../../declare","esri/SpatialReference","./EnrichParametersBase","./StandardIntersectingGeography"],function(d,e,f,g){return d("esri.tasks.geoenrichment.EnrichParameters",[f],{variables:null,returnGeometry:!1,outSR:null,intersectingGeographies:null,forStorage:!0,constructor:function(a){this.variables=[];if(a&&(this.variables=a.analysisVariables||a.variables||null,a.returnGeometry&&(this.returnGeometry=!0),a.outSR&&(this.outSR=new e(a.outSR)),a.forStorage&&
(this.forStorage=a.forStorage),a.intersectingGeographies)){this.intersectingGeographies=[];for(var b=0;b<a.intersectingGeographies.length;b++){var c=a.intersectingGeographies[b];"standard"==c.geographyType&&this.intersectingGeographies.push(new g(c))}}},toJson:function(){var a=this.inherited(arguments);a.analysisVariables=this.variables;this.returnGeometry&&(a.returnGeometry=!0);this.outSR&&(a.outSR=this.outSR.toJson());this.forStorage||(a.forStorage=!1);if(this.intersectingGeographies){a.intersectingGeographies=
[];for(var b=0;b<this.intersectingGeographies.length;b++)a.intersectingGeographies.push(this.intersectingGeographies[b].toJson())}return a}})});