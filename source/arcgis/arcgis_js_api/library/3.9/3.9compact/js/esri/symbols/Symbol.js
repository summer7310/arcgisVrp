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
define("esri/symbols/Symbol","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/lang esri/Color".split(" "),function(b,c,e,f,g,d){b=b(null,{declaredClass:"esri.symbol.Symbol",color:new d([0,0,0,1]),type:null,constructor:function(a){if(a&&c.isObject(a)&&(c.mixin(this,a),this.color&&g.isDefined(this.color[0])&&(this.color=d.toDojoColor(this.color)),(a=this.type)&&0===a.indexOf("esri")))this.type={esriSMS:"simplemarkersymbol",esriPMS:"picturemarkersymbol",esriSLS:"simplelinesymbol",esriCLS:"cartographiclinesymbol",
esriSFS:"simplefillsymbol",esriPFS:"picturefillsymbol",esriTS:"textsymbol",esriSHD:"shieldlabelsymbol"}[a]},setColor:function(a){this.color=a;return this},toJson:function(){return{color:d.toJsonColor(this.color)}}});e("extend-esri")&&c.setObject("symbol.Symbol",b,f);return b});