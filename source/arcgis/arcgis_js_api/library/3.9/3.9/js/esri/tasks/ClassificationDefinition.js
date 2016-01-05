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
define("esri/tasks/ClassificationDefinition",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(a,b,c,d){a=a(null,{declaredClass:"esri.tasks.ClassificationDefinition",type:null,baseSymbol:null,colorRamp:null,toJson:function(){var a={};this.baseSymbol&&b.mixin(a,{baseSymbol:this.baseSymbol.toJson()});this.colorRamp&&!b.isString(this.colorRamp)&&b.mixin(a,{colorRamp:this.colorRamp.toJson()});return a}});c("extend-esri")&&b.setObject("tasks.ClassificationDefinition",a,d);return a});