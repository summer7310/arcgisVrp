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
define("esri/symbols/FillSymbol","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/symbols/Symbol esri/symbols/SimpleLineSymbol".split(" "),function(b,c,d,e,f,g){b=b(f,{declaredClass:"esri.symbol.FillSymbol",constructor:function(a){a&&(c.isObject(a)&&a.outline)&&(this.outline=new g(a.outline))},setOutline:function(a){this.outline=a;return this},toJson:function(){var a=this.inherited("toJson",arguments);this.outline&&(a.outline=this.outline.toJson());return a}});d("extend-esri")&&c.setObject("symbol.FillSymbol",
b,e);return b});