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
define("esri/geometry/Multipoint","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/SpatialReference esri/geometry/Geometry esri/geometry/Point esri/geometry/Extent".split(" "),function(b,c,q,f,r,s,g,m){var e={type:"multipoint",points:null};b=b(s,{declaredClass:"esri.geometry.Multipoint",constructor:function(a){c.mixin(this,e);this.points=[];a&&(a.points?c.mixin(this,a):this.spatialReference=a,this.spatialReference&&(this.spatialReference=new r(this.spatialReference)));this.verifySR()},
_extent:null,addPoint:function(a){this._extent=null;c.isArray(a)?this.points.push(a):this.points.push([a.x,a.y]);return this},removePoint:function(a){if(this._validateInputs(a))return this._extent=null,new g(this.points.splice(a,1)[0],this.spatialReference)},getExtent:function(){if(this._extent)return new m(this._extent);var a=this.points,n=a.length;if(n){var d=a[0],b,c,e=b=d[0],k=c=d[1],f=Math.min,g=Math.max,p=this.spatialReference,l,h;for(h=0;h<n;h++)d=a[h],l=d[0],d=d[1],e=f(e,l),k=f(k,d),b=g(b,
l),c=g(c,d);this._extent={xmin:e,ymin:k,xmax:b,ymax:c,spatialReference:p?p.toJson():null};return new m(this._extent)}},_validateInputs:function(a){return null===a||0>a||a>=this.points.length?!1:!0},getPoint:function(a){if(this._validateInputs(a))return a=this.points[a],new g(a[0],a[1],this.spatialReference)},setPoint:function(a,b){if(this._validateInputs(a))return this._extent=null,this.points[a]=[b.x,b.y],this},toJson:function(){var a={points:c.clone(this.points)},b=this.spatialReference;b&&(a.spatialReference=
b.toJson());return a}});b.defaultProps=e;q("extend-esri")&&(c.setObject("geometry.Multipoint",b,f),f.geometry.defaultMultipoint=e);return b});