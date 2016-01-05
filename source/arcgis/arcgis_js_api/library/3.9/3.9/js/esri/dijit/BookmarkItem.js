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
define("esri/dijit/BookmarkItem",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(c,d,e,f){c=c(null,{declaredClass:"esri.dijit.BookmarkItem",constructor:function(a){this.name=a.name;this.extent=a.extent},toJson:function(){var a={},b=this.extent.toJson();a.extent={spatialReference:b.spatialReference,xmax:b.xmax,xmin:b.xmin,ymax:b.ymax,ymin:b.ymin};a.name=this.name;return a}});e("extend-esri")&&d.setObject("dijit.BookmarkItem",c,f);return c});