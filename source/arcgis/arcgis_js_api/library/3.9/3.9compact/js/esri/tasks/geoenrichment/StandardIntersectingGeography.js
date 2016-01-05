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
define("esri/tasks/geoenrichment/StandardIntersectingGeography",["../../declare","./IntersectingGeography"],function(b,c){return b("esri.tasks.geoenrichment.StandardIntersectingGeography",[c],{geographyLayerID:null,constructor:function(a){a&&(this.geographyLayerID=a.geographyLayer||a.geographyLayerID||null)},toJson:function(){var a=this.inherited(arguments);a.geographyType="standard";a.geographyLayer=this.geographyLayerID;return a}})});