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
define("esri/tasks/NAMessage",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(a,b,c,d){a=a(null,{declaredClass:"esri.tasks.NAMessage",constructor:function(a){b.mixin(this,a)}});b.mixin(a,{TYPE_INFORMATIVE:0,TYPE_PROCESS_DEFINITION:1,TYPE_PROCESS_START:2,TYPE_PROCESS_STOP:3,TYPE_WARNING:50,TYPE_ERROR:100,TYPE_EMPTY:101,TYPE_ABORT:200});c("extend-esri")&&b.setObject("tasks.NAMessage",a,d);return a});