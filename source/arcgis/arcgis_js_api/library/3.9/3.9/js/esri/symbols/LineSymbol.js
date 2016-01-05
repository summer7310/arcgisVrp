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
define("esri/symbols/LineSymbol","dojo/_base/declare dojo/_base/lang dojo/has dojox/gfx/_base esri/kernel esri/symbols/Symbol".split(" "),function(b,c,e,d,f,g){b=b(g,{declaredClass:"esri.symbol.LineSymbol",constructor:function(a){c.isObject(a)?this.width=d.pt2px(this.width):this.width=12},setWidth:function(a){this.width=a;return this},toJson:function(){var a=d.px2pt(this.width),a=isNaN(a)?void 0:a;return c.mixin(this.inherited("toJson",arguments),{width:a})}});e("extend-esri")&&c.setObject("symbol.LineSymbol",
b,f);return b});