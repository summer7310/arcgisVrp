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
define("esri/tasks/geoenrichment/studyAreaFromJson",["./GeometryStudyArea","./AddressStudyArea","./StandardGeographyStudyArea","../../extend"],function(c,d,e,f){var b=function(a){if(a.geometry)return new c(a);if(a.address)return new d(a);if(a.layer)return new e(a)};f("esri.tasks.geoenrichment.studyAreaFromJson",b);return b});