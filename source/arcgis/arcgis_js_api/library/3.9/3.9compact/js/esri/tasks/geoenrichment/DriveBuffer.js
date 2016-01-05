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
define("esri/tasks/geoenrichment/DriveBuffer",["../../declare","./StudyAreaOptions","./DriveUnits"],function(b,c,d){return b("esri.tasks.geoenrichment.DriveBuffer",[c],{radii:null,units:null,constructor:function(a){a&&(a.bufferRadii?this.radii=a.bufferRadii:a.radius?this.radii=[a.radius]:a.radii&&(this.radii=a.radii),this.units=a.bufferUnits||a.units);this.radii||(this.radii=[5]);this.units||(this.units=d.MINUTES)},toJson:function(){return{areaType:"DriveTimeBuffer",bufferUnits:this.units,bufferRadii:this.radii}}})});