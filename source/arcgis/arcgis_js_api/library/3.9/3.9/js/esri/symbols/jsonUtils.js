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
define("esri/symbols/jsonUtils","dojo/_base/lang dojo/has esri/kernel esri/symbols/SimpleMarkerSymbol esri/symbols/PictureMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/CartographicLineSymbol esri/symbols/SimpleFillSymbol esri/symbols/PictureFillSymbol esri/symbols/TextSymbol".split(" "),function(c,e,f,g,h,k,l,m,n,p){var d={fromJson:function(a){var b=null;switch(a.type.substring(0,6)){case "esriSM":b=new g(a);break;case "esriPM":b=new h(a);break;case "esriTS":b=new p(a);break;case "esriSL":b=
void 0!==a.cap?new l(a):new k(a);break;case "esriSF":b=new m(a);break;case "esriPF":b=new n(a)}return b},getShapeDescriptors:function(a){return a&&a.getShapeDescriptors?a.getShapeDescriptors():{defaultShape:null,fill:null,stroke:null}}};e("extend-esri")&&c.mixin(c.getObject("symbol",!0,f),d);return d});