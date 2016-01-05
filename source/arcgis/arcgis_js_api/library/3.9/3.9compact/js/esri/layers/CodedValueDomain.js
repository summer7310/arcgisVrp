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
define("esri/layers/CodedValueDomain","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/lang esri/layers/Domain".split(" "),function(b,c,d,e,f,g){b=b([g],{declaredClass:"esri.layers.CodedValueDomain",constructor:function(a){a&&c.isObject(a)&&(this.codedValues=a.codedValues)},toJson:function(){var a=this.inherited(arguments);a.codedValues=c.clone(this.codedValues);return f.fixJson(a)}});d("extend-esri")&&c.setObject("layers.CodedValueDomain",b,e);return b});