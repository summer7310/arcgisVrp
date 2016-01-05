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
define("esri/tasks/GPMessage",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(a,b,c,d){a=a(null,{declaredClass:"esri.tasks.GPMessage",constructor:function(a){b.mixin(this,a)}});b.mixin(a,{TYPE_INFORMATIVE:"esriJobMessageTypeInformative",TYPE_PROCESS_DEFINITION:"esriJobMessageTypeProcessDefinition",TYPE_PROCESS_START:"esriJobMessageTypeProcessStart",TYPE_PROCESS_STOP:"esriJobMessageTypeProcessStop",TYPE_WARNING:"esriJobMessageTypeWarning",TYPE_ERROR:"esriJobMessageTypeError",
TYPE_EMPTY:"esriJobMessageTypeEmpty",TYPE_ABORT:"esriJobMessageTypeAbort"});c("extend-esri")&&b.setObject("tasks.GPMessage",a,d);return a});