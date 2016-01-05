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
define("esri/geometry/Polyline","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has esri/kernel esri/lang esri/SpatialReference esri/geometry/Geometry esri/geometry/Point esri/geometry/Extent".split(" "),function(e,k,d,z,y,A,B,C,g,w){var h={type:"polyline",paths:null};e=e(C,{declaredClass:"esri.geometry.Polyline",constructor:function(a){d.mixin(this,h);this.paths=[];this._path=0;a&&(d.isArray(a)?this.paths=d.isArray(a[0][0])?a:[a]:a.paths?d.mixin(this,a):this.spatialReference=a,this.spatialReference&&
(this.spatialReference=new B(this.spatialReference)));this.verifySR()},_extent:null,addPath:function(a){this._extent=null;this._path=this.paths.length;this.paths[this._path]=[];d.isArray(a[0])?k.forEach(a,this._addPointArr,this):k.forEach(a,this._addPoint,this);return this},_addPointArr:function(a){this.paths[this._path].push(a)},_addPoint:function(a){this.paths[this._path].push([a.x,a.y])},_insertPoints:function(a,b){this._extent=null;this._path=b;this.paths[this._path]||(this.paths[this._path]=
[]);k.forEach(a,this._addPoint,this)},_validateInputs:function(a,b){return null!==a&&void 0!==a&&(0>a||a>=this.paths.length)||null!==b&&void 0!==a&&(0>b||b>=this.paths[a].length)?!1:!0},getPoint:function(a,b){if(this._validateInputs(a,b))return new g(this.paths[a][b],this.spatialReference)},setPoint:function(a,b,c){if(this._validateInputs(a,b))return this._extent=null,this.paths[a][b]=[c.x,c.y],this},insertPoint:function(a,b,c){if(this._validateInputs(a)&&A.isDefined(b)&&0<=b&&b<=this.paths[a].length)return this._extent=
null,this.paths[a].splice(b,0,[c.x,c.y]),this},removePath:function(a){if(this._validateInputs(a,null)){this._extent=null;a=this.paths.splice(a,1)[0];var b,c=a.length,f=this.spatialReference;for(b=0;b<c;b++)a[b]=new g(a[b],f);return a}},removePoint:function(a,b){if(this._validateInputs(a,b))return this._extent=null,new g(this.paths[a].splice(b,1)[0],this.spatialReference)},getExtent:function(){var a;if(this._extent)return a=new w(this._extent),a._partwise=this._partwise,a;a=this.paths;var b=a.length;
if(b&&a[0].length){var c,f,d,e,l,m,n,k,g=e=a[0][0][0],h=l=a[0][0][1],p=Math.min,q=Math.max,r=this.spatialReference,x=[],s,t,u,v;for(m=0;m<b;m++){c=a[m];s=t=c[0]&&c[0][0];u=v=c[0]&&c[0][1];k=c.length;for(n=0;n<k;n++)f=c[n],d=f[0],f=f[1],g=p(g,d),h=p(h,f),e=q(e,d),l=q(l,f),s=p(s,d),u=p(u,f),t=q(t,d),v=q(v,f);x.push(new w({xmin:s,ymin:u,xmax:t,ymax:v,spatialReference:r?r.toJson():null}))}this._extent={xmin:g,ymin:h,xmax:e,ymax:l,spatialReference:r?r.toJson():null};this._partwise=1<x.length?x:null;a=
new w(this._extent);a._partwise=this._partwise;return a}},toJson:function(){var a={paths:d.clone(this.paths)},b=this.spatialReference;b&&(a.spatialReference=b.toJson());return a}});e.defaultProps=h;z("extend-esri")&&(d.setObject("geometry.Polyline",e,y),y.geometry.defaultPolyline=h);return e});