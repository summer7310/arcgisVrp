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
define("esri/layers/LayerDataSource","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/lang esri/layers/LayerSource esri/layers/TableDataSource esri/layers/QueryDataSource esri/layers/JoinDataSource esri/layers/RasterDataSource".split(" "),function(b,c,d,e,f,g,h,k,l,m){b=b(g,{declaredClass:"esri.layers.LayerDataSource",type:"dataLayer",constructor:function(a){if(a&&a.dataSource){switch(a.dataSource.type){case "table":a=new h(a.dataSource);break;case "queryTable":a=new k(a.dataSource);
break;case "joinTable":a=new l(a.dataSource);break;case "raster":a=new m(a.dataSource);break;default:a=a.dataSource}this.dataSource=a}},toJson:function(){var a={type:"dataLayer",dataSource:this.dataSource&&this.dataSource.toJson()};return f.fixJson(a)}});d("extend-esri")&&c.setObject("layers.LayerDataSource",b,e);return b});