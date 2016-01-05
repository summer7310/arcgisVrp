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
define("esri/layers/KMLFolder",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/lang"],function(a,b,c,d,e){a=a(null,{declaredClass:"esri.layers.KMLFolder",constructor:function(a){b.mixin(this,a);e.isDefined(this.visibility)&&(this.visible=!!this.visibility)}});c("extend-esri")&&b.setObject("layers.KMLFolder",a,d);return a});