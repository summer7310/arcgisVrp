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
define("esri/symbols/MarkerSymbol","dojo/_base/declare dojo/_base/lang dojo/has dojox/gfx/_base esri/kernel esri/symbols/Symbol".split(" "),function(b,e,f,c,g,h){b=b(h,{declaredClass:"esri.symbol.MarkerSymbol",angle:0,xoffset:0,yoffset:0,size:12,constructor:function(a){a&&e.isObject(a)&&(this.size="auto"===this.size?this.size:c.pt2px(this.size),this.xoffset=c.pt2px(this.xoffset),this.yoffset=c.pt2px(this.yoffset),this.angle&&(this.angle*=-1))},setAngle:function(a){this.angle=a;return this},setSize:function(a){this.size=
a;return this},setOffset:function(a,c){this.xoffset=a;this.yoffset=c;return this},toJson:function(){var a=c.px2pt(this.size),a=isNaN(a)?void 0:a,b=c.px2pt(this.xoffset),b=isNaN(b)?void 0:b,d=c.px2pt(this.yoffset),d=isNaN(d)?void 0:d;return e.mixin(this.inherited("toJson",arguments),{size:"auto"===this.size?this.size:a,angle:this.angle&&-1*this.angle,xoffset:b,yoffset:d})}});f("extend-esri")&&e.setObject("symbol.MarkerSymbol",b,g);return b});