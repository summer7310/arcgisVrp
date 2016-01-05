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
define("esri/tasks/geoenrichment/GeographyLevel",["../../declare"],function(f){var d=f("esri.tasks.geoenrichment.GeographyLevel",null,{layerID:null,datasetID:null,countryID:null,constructor:function(a){a&&(this.layerID=a.layer||a.layerID||null,this.datasetID=a.dataset||a.datasetID||null,this.countryID=a.sourceCountry||a.countryID||null)},toJson:function(){var a={};this.layerID&&(a.layer=this.layerID);this.datasetID&&(a.dataset=this.datasetID);this.countryID&&(a.sourceCountry=this.countryID);return a}});
d.fromJsonArray=function(a){var c=[];if(!a)return c;for(var b=0;b<a.length;b++){var e=a[b];e instanceof d||(e=new d(e));c.push(e)}return c};d.toJsonArray=function(a){if(!a||0==a.length)return null;for(var c=[],b=0;b<a.length;b++)c.push(a[b].toJson());return c};return d});