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
define("esri/tasks/DataFile",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(b,c,d,e){b=b(null,{declaredClass:"esri.tasks.DataFile",constructor:function(a){a&&c.mixin(this,a)},url:null,itemID:null,toJson:function(){var a={};this.url&&(a.url=this.url);this.itemID&&(a.itemID=this.itemID);return a}});d("extend-esri")&&c.setObject("tasks.DataFile",b,e);return b});