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
define("esri/tasks/geoenrichment/ReportParameters",["../../declare","./EnrichParametersBase"],function(b,c){return b("esri.tasks.geoenrichment.ReportParameters",[c],{reportID:null,format:"pdf",fields:null,constructor:function(a){a&&(this.reportID=a.report||a.reportID||null,this.format=a.format,this.fields=a.reportFields||a.fields||null)},toJson:function(){var a=this.inherited(arguments);this.reportID&&(a.report=this.reportID);this.format&&(a.format=this.format);this.fields&&(a.reportFields=this.fields);
return a}})});