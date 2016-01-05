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
define("esri/tasks/geoenrichment/IntersectingGeographies",["../../declare","./StudyAreaOptions","./GeographyLevel"],function(c,d,b){return c("esri.tasks.geoenrichment.IntersectingGeographies",[d],{geographyLevels:null,constructor:function(a){this.geographyLevels=b.fromJsonArray(a?a.intersectingGeographies||a.levels||a.geographyLevels:[{layerID:"Admin2"}])},toJson:function(){return{areaType:"StandardGeography",intersectingGeographies:b.toJsonArray(this.geographyLevels)}}})});