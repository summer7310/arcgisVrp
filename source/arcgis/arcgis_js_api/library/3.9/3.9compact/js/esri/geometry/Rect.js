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
define("esri/geometry/Rect","dojo/_base/declare dojo/_base/lang dojo/has dojox/gfx/_base esri/kernel esri/SpatialReference esri/geometry/Geometry esri/geometry/Point esri/geometry/Extent".split(" "),function(k,c,l,m,g,n,p,q,r){function h(a){return new r(parseFloat(a.x),parseFloat(a.y)-parseFloat(a.height),parseFloat(a.x)+parseFloat(a.width),parseFloat(a.y),a.spatialReference)}var b=k(p,{declaredClass:"esri.geometry.Rect",constructor:function(a,d,b,e,f){c.mixin(this,m.defaultRect);c.isObject(a)&&"extent"===
a.type&&(d=a.ymax,b=a.getWidth(),e=a.getHeight(),f=a.spatialReference,a=a.xmin);c.isObject(a)?(c.mixin(this,a),this.spatialReference&&(this.spatialReference=new n(this.spatialReference))):(this.x=a,this.y=d,this.width=b,this.height=e,this.spatialReference=f);this.verifySR()},getCenter:function(){return new q(this.x+this.width/2,this.y+this.height/2,this.spatialReference)},offset:function(a,d){return new b(this.x+a,this.y+d,this.width,this.height,this.spatialReference)},intersects:function(a){return a.x+
a.width<=this.x||a.y+a.height<=this.y||a.y>=this.y+this.height||a.x>=this.x+this.width?!1:!0},getExtent:function(){return h(this)},update:function(a,b,c,e,f){this.x=a;this.y=b;this.width=c;this.height=e;this.spatialReference=f;return this}});l("extend-esri")&&(c.setObject("geometry.Rect",b,g),g.geometry._rectToExtent=h,g.geometry._extentToRect=function(a){return new b(a)});return b});