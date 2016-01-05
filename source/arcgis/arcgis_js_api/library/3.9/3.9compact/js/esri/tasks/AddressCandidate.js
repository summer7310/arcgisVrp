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
define("esri/tasks/AddressCandidate",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/geometry/Point"],function(a,b,c,d,e){a=a(null,{declaredClass:"esri.tasks.AddressCandidate",constructor:function(a){b.mixin(this,a);this.location=new e(this.location)}});c("extend-esri")&&b.setObject("tasks.AddressCandidate",a,d);return a});