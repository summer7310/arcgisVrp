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
define("esri/tasks/BufferParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has esri/kernel esri/geometry/Polygon esri/geometry/jsonUtils".split(" "),function(b,g,k,d,l,m,n,p){b=b(null,{declaredClass:"esri.tasks.BufferParameters",geometries:null,outSpatialReference:null,bufferSpatialReference:null,distances:null,unit:null,unionResults:!1,geodesic:!1,toJson:function(){var a={unit:this.unit,unionResults:this.unionResults,geodesic:this.geodesic},h=this.distances,c=
this.outSpatialReference,e=this.bufferSpatialReference,b=k.map(this.geometries,function(a){a="extent"===a.type?this._extentToPolygon(a):a;return a.toJson()},this),f=this.geometries;if(f&&0<f.length){var g="extent"===f[0].type?"esriGeometryPolygon":p.getJsonType(f[0]);a.geometries=d.toJson({geometryType:g,geometries:b});a.inSR=f[0].spatialReference.wkid?f[0].spatialReference.wkid:d.toJson(f[0].spatialReference.toJson())}h&&(a.distances=h.join(","));c&&(a.outSR=c.wkid?c.wkid:d.toJson(c.toJson()));e&&
(a.bufferSR=e.wkid?e.wkid:d.toJson(e.toJson()));return a},_extentToPolygon:function(a){var b=a.xmin,c=a.ymin,e=a.xmax,d=a.ymax;return new n({rings:[[[b,c],[b,d],[e,d],[e,c],[b,c]]],spatialReference:a.spatialReference.toJson()})}});l("extend-esri")&&g.setObject("tasks.BufferParameters",b,m);return b});