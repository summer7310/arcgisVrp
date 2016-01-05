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
define("esri/geometry/webMercatorUtils","dojo/_base/array dojo/_base/lang dojo/has esri/kernel esri/SpatialReference esri/geometry/Point".split(" "),function(k,e,p,q,m,c){function f(a,d,g,h){if("point"===a.type){var b=d(a.x,a.y,h);return new a.constructor(b[0],b[1],new m(g))}if("extent"===a.type){var b=d(a.xmin,a.ymin,h),c=d(a.xmax,a.ymax,h);return new a.constructor(b[0],b[1],c[0],c[1],new m(g))}if("polyline"===a.type||"polygon"===a.type){var b="polyline"===a.type,l=[],e;k.forEach(b?a.paths:a.rings,
function(a){l.push(e=[]);k.forEach(a,function(a){e.push(d(a[0],a[1],h))})});return b?new a.constructor({paths:l,spatialReference:g}):new a.constructor({rings:l,spatialReference:g})}if("multipoint"===a.type){var f=[];k.forEach(a.points,function(a){f.push(d(a[0],a[1],h))});return new a.constructor({points:f,spatialReference:g})}}var n={lngLatToXY:c.lngLatToXY,xyToLngLat:c.xyToLngLat,geographicToWebMercator:function(a){return f(a,c.lngLatToXY,{wkid:102100})},webMercatorToGeographic:function(a,d){return f(a,
c.xyToLngLat,{wkid:4326},d)}};p("extend-esri")&&e.mixin(e.getObject("geometry",!0,q),n);return n});