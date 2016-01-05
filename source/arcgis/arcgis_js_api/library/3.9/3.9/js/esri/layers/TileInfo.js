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
define("esri/layers/TileInfo","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has esri/kernel esri/lang esri/SpatialReference esri/geometry/Point esri/layers/LOD".split(" "),function(c,d,e,g,h,k,f,l,m){c=c(null,{declaredClass:"esri.layers.TileInfo",constructor:function(a){d.mixin(this,a);this.width=this.cols;this.height=this.rows;a=this.spatialReference;var b=this.origin;a&&(a=this.spatialReference=new f(a.toJson?a.toJson():a));b&&(this.origin=new l(b.toJson?b.toJson():b),!b.spatialReference&&
a&&this.origin.setSpatialReference(new f(a.toJson())));this.lods=e.map(this.lods,function(a){return new m(a)})},toJson:function(){return k.fixJson({rows:this.rows,cols:this.cols,dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin&&this.origin.toJson(),spatialReference:this.spatialReference&&this.spatialReference.toJson(),lods:this.lods&&e.map(this.lods,function(a){return a.toJson()})})}});g("extend-esri")&&d.setObject("layers.TileInfo",c,h);return c});