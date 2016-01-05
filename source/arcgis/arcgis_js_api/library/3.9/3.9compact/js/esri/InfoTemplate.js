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
define("esri/InfoTemplate",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/lang"],function(b,c,d,e,f){b=b(null,{declaredClass:"esri.InfoTemplate",constructor:function(a,b){a&&c.isObject(a)&&!c.isFunction(a)?c.mixin(this,a):(this.title=a||"${*}",this.content=b||"${*}")},setTitle:function(a){this.title=a;return this},setContent:function(a){this.content=a;return this},toJson:function(){return f.fixJson({title:this.title,content:this.content})}});d("extend-esri")&&(e.InfoTemplate=
b);return b});