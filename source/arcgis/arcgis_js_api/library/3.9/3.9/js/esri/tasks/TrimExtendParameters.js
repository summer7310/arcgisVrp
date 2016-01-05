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
define("esri/tasks/TrimExtendParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has esri/kernel".split(" "),function(a,d,e,c,f,g){a=a(null,{declaredClass:"esri.tasks.TrimExtendParameters",polylines:null,trimExtendTo:null,extendHow:null,toJson:function(){var a=e.map(this.polylines,function(a){return a.toJson()}),b={};b.polylines=c.toJson(a);b.trimExtendTo=c.toJson(this.trimExtendTo.toJson());b.sr=c.toJson(this.polylines[0].spatialReference.toJson());b.extendHow=this.extendHow||
0;return b}});d.mixin(a,{DEFAULT_CURVE_EXTENSION:0,RELOCATE_ENDS:1,KEEP_END_ATTRIBUTES:2,NO_END_ATTRIBUTES:4,NO_EXTEND_AT_FROM:8,NO_EXTEND_AT_TO:16});f("extend-esri")&&d.setObject("tasks.TrimExtendParameters",a,g);return a});