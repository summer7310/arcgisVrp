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
define("esri/layers/GeoRSSLayer","dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has esri/kernel esri/config esri/request esri/layers/ServiceGeneratedFeatureCollection".split(" "),function(a,b,d,e,f,c,g,h){a=a([h],{declaredClass:"esri.layers.GeoRSSLayer",serviceUrl:location.protocol+"//utility.arcgis.com/sharing/rss",constructor:function(a,b){c.defaults.geoRSSService&&(this.serviceUrl=c.defaults.geoRSSService);this._createLayer()},parse:function(){return this._io=g({url:this.serviceUrl,content:{url:this.url,
refresh:this.loaded?!0:void 0,outSR:this._outSR?d.toJson(this._outSR.toJson()):void 0},callbackParamName:"callback"})},_initLayer:function(a){this.inherited(arguments);this.loaded||(this.loaded=!0,this.onLoad(this))}});e("extend-esri")&&b.setObject("layers.GeoRSSLayer",a,f);return a});