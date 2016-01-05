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
define("esri/layers/RangeDomain","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/lang esri/layers/Domain".split(" "),function(b,c,d,e,f,g){b=b([g],{declaredClass:"esri.layers.RangeDomain",constructor:function(a){a&&c.isObject(a)&&(this.minValue=a.range[0],this.maxValue=a.range[1])},toJson:function(){var a=this.inherited(arguments);a.range=[this.minValue,this.maxValue];return f.fixJson(a)}});d("extend-esri")&&c.setObject("layers.RangeDomain",b,e);return b});