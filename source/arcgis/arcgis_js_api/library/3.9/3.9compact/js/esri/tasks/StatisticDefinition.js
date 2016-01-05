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
define("esri/tasks/StatisticDefinition",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(a,b,c,d){a=a(null,{declaredClass:"esri.tasks.StatisticDefinition",toJson:function(){return{statisticType:this.statisticType,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount}}});c("extend-esri")&&b.setObject("tasks.StatisticDefinition",a,d);return a});