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
define("esri/tasks/geoenrichment/StandardGeographyStudyArea",["../../declare","./StudyArea"],function(c,d){return c("esri.tasks.geoenrichment.StandardGeographyStudyArea",[d],{countryID:null,geographyLayerID:null,ids:null,constructor:function(a){if(a){var b=a.sourceCountry||a.countryID;b&&(this.countryID=b);if(b=a.layer||a.geographyLayerID)this.geographyLayerID=b;a.ids&&(this.ids=a.ids)}},toJson:function(){var a=this.inherited(arguments);this.countryID&&(a.sourceCountry=this.countryID);this.geographyLayerID&&
(a.layer=this.geographyLayerID);this.ids&&(a.ids=this.ids);return a},getGeomType:function(){return"polygon"}})});