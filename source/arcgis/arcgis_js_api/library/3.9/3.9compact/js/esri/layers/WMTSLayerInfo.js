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
define("esri/layers/WMTSLayerInfo",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(b,c,d,e){b=b(null,{declaredClass:"esri.layers.WMTSLayerInfo",identifier:null,tileMatrixSet:null,format:null,style:null,tileInfo:null,title:null,fullExtent:null,initialExtent:null,description:null,dimension:null,constructor:function(a){a&&(this.title=a.title,this.tileMatrixSet=a.tileMatrixSet,this.format=a.format,this.style=a.style,this.tileInfo=a.tileInfo,this.fullExtent=a.fullExtent,this.initialExtent=
a.initialExtent,this.identifier=a.identifier,this.description=a.description,this.dimension=a.dimension)}});d("extend-esri")&&c.setObject("layers.WMTSLayerInfo",b,e);return b});