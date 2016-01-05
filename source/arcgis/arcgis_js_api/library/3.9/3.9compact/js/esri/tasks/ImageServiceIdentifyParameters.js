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
define("esri/tasks/ImageServiceIdentifyParameters","dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has esri/kernel esri/lang esri/geometry/jsonUtils".split(" "),function(c,f,d,g,h,e,k){c=c(null,{declaredClass:"esri.tasks.ImageServiceIdentifyParameters",geometry:null,mosaicRule:null,renderingRule:null,pixelSizeX:null,pixelSizeY:null,pixelSize:null,returnGeometry:!1,returnCatalogItems:!0,timeExtent:null,toJson:function(a){var b=a&&a.geometry||this.geometry;a={geometry:b,returnGeometry:this.returnGeometry,
returnCatalogItems:this.returnCatalogItems,mosaicRule:this.mosaicRule?d.toJson(this.mosaicRule.toJson()):null,renderingRule:this.renderingRule?d.toJson(this.renderingRule.toJson()):null};b&&(a.geometryType=k.getJsonType(b));b=this.timeExtent;a.time=b?b.toJson().join(","):null;e.isDefined(this.pixelSizeX)&&e.isDefined(this.pixelSizeY)?a.pixelSize=d.toJson({x:parseFloat(this.pixelSizeX),y:parseFloat(this.pixelSizeY)}):this.pixelSize&&(a.pixelSize=this.pixelSize?d.toJson(this.pixelSize.toJson()):null);
return a}});g("extend-esri")&&f.setObject("tasks.ImageServiceIdentifyParameters",c,h);return c});