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
define("esri/tasks/geoenrichment/AddressStudyArea",["../../declare","./StudyArea"],function(b,c){return b("esri.tasks.geoenrichment.AddressStudyArea",[c],{address:null,constructor:function(a){a&&a.address&&(this.address=a.address)},toJson:function(){var a=this.inherited(arguments);a.address=this.address;return a},getGeomType:function(){return"point"}})});