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
define("esri/geometry/Geometry",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/SpatialReference"],function(a,b,c,d,e){a=a(null,{declaredClass:"esri.geometry.Geometry",spatialReference:null,type:null,setSpatialReference:function(a){this.spatialReference=a;return this},verifySR:function(){this.spatialReference||this.setSpatialReference(new e(4326))},getExtent:function(){return null}});c("extend-esri")&&b.setObject("geometry.Geometry",a,d);return a});