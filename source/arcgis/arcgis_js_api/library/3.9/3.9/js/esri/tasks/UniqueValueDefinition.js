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
define("esri/tasks/UniqueValueDefinition",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/tasks/ClassificationDefinition"],function(a,b,c,d,e){a=a(e,{declaredClass:"esri.tasks.UniqueValueDefinition",type:"uniqueValueDef",attributeField:null,attributeField2:null,attributeField3:null,fieldDelimiter:null,toJson:function(){var a=this.inherited(arguments);this.uniqueValueFields=[];this.attributeField&&this.uniqueValueFields.push(this.attributeField);this.attributeField2&&this.uniqueValueFields.push(this.attributeField2);
this.attributeField3&&this.uniqueValueFields.push(this.attributeField3);b.mixin(a,{type:this.type,uniqueValueFields:this.uniqueValueFields});this.fieldDelimiter&&b.mixin(a,{fieldDelimiter:this.fieldDelimiter});return a}});c("extend-esri")&&b.setObject("tasks.UniqueValueDefinition",a,d);return a});