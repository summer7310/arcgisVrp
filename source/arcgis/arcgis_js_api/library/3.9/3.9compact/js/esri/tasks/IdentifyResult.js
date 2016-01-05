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
define("esri/tasks/IdentifyResult","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/graphic esri/geometry/jsonUtils".split(" "),function(a,b,c,d,e,f){a=a(null,{declaredClass:"esri.tasks.IdentifyResult",constructor:function(a){b.mixin(this,a);this.feature=new e(a.geometry?f.fromJson(a.geometry):null,null,a.attributes);delete this.geometry;delete this.attributes}});c("extend-esri")&&b.setObject("tasks.IdentifyResult",a,d);return a});