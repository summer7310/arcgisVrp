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
define("esri/layers/DynamicLayerInfo","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/lang esri/layers/LayerInfo esri/layers/LayerMapSource esri/layers/LayerDataSource".split(" "),function(b,d,e,f,g,h,c,k){b=b(h,{declaredClass:"esri.layers.DynamicLayerInfo",defaultVisibility:!0,parentLayerId:-1,maxScale:0,minScale:0,constructor:function(a){a&&(a.source?a="mapLayer"===a.source.type?new c(a.source):new k(a.source):(a=new c,a.mapLayerId=this.id),this.source=a)},toJson:function(){var a=
this.inherited(arguments);a.source=this.source&&this.source.toJson();return g.fixJson(a)}});e("extend-esri")&&d.setObject("layers.DynamicLayerInfo",b,f);return b});