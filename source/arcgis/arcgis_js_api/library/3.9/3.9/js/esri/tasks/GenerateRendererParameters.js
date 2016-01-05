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
define("esri/tasks/GenerateRendererParameters",["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","esri/kernel"],function(a,b,c,d,e){a=a(null,{declaredClass:"esri.tasks.GenerateRendererParameters",classificationDefinition:null,where:null,precision:null,prefix:null,unitLabel:null,formatLabel:null,toJson:function(){return{classificationDef:c.toJson(this.classificationDefinition.toJson()),where:this.where}}});d("extend-esri")&&b.setObject("tasks.GenerateRendererParameters",a,e);return a});