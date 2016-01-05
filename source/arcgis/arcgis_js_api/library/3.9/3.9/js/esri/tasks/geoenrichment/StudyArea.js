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
define("esri/tasks/geoenrichment/StudyArea",["../../declare","dojo/_base/lang","./StudyAreaOptions","./studyAreaOptionsFromJson","./GeographyLevel"],function(d,e,f,g,b){return d("esri.tasks.geoenrichment.StudyArea",null,{attributes:null,options:null,returnGeometry:!1,comparisonGeographyLevels:null,constructor:function(a){a&&(a.attributes&&(this.attributes=a.attributes),a.areaType?this.options=g(a):a.options instanceof f&&(this.options=a.options),a.returnGeometry&&(this.returnGeometry=!0),this.comparisonGeographyLevels=
b.fromJsonArray(a.comparisonGeographyLevels||a.comparisonLevels));this.comparisonGeographyLevels||(this.comparisonGeographyLevels=[])},toJson:function(){var a={};this.attributes&&(a.attributes=this.attributes);this.options&&e.mixin(a,this.options.toJson());this.returnGeometry&&(a.returnGeometry=!0);var c=b.toJsonArray(this.comparisonGeographyLevels);c&&(a.comparisonLevels=c);return a},getGeomType:function(){throw"Not implemented";}})});