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
define("esri/tasks/geoenrichment/RingBuffer",["../../declare","esri/units","./StudyAreaOptions"],function(b,c,d){return b("esri.tasks.geoenrichment.RingBuffer",[d],{radii:null,units:null,constructor:function(a){a&&(a.bufferRadii?this.radii=a.bufferRadii:a.radius?this.radii=[a.radius]:a.radii&&(this.radii=a.radii),this.units=a.bufferUnits||a.units);this.radii||(this.radii=[1]);this.units||(this.units=c.MILES)},toJson:function(){return{areaType:"RingBuffer",bufferUnits:this.units,bufferRadii:this.radii}}})});