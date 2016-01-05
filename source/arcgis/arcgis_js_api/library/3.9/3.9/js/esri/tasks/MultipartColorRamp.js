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
define("esri/tasks/MultipartColorRamp","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has esri/kernel esri/symbols/Symbol esri/tasks/ColorRamp".split(" "),function(a,b,c,d,e,f){a=a(f,{declaredClass:"esri.tasks.MultipartColorRamp",type:"multipart",constructor:function(){this.colorRamps=[]},addColorRamp:function(a){this.colorRamps.push(a)},toJson:function(){return{type:"multipart",colorRamps:c.map(this.colorRamps,function(a){return a.toJson()})}}});d("extend-esri")&&b.setObject("tasks.MultipartColorRamp",
a,e);return a});