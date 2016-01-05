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
define("esri/tasks/LinearUnit",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(b,c,d,e){b=b(null,{declaredClass:"esri.tasks.LinearUnit",constructor:function(a){a&&c.mixin(this,a)},distance:0,units:null,toJson:function(){var a={};this.distance&&(a.distance=this.distance);this.units&&(a.units=this.units);return a}});d("extend-esri")&&c.setObject("tasks.LinearUnit",b,e);return b});