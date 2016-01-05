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
define("esri/tasks/DirectionsFeatureSet","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has esri/kernel esri/geometry/Extent esri/geometry/Polyline esri/tasks/FeatureSet".split(" "),function(d,m,f,p,q,r,n,s){d=d(s,{declaredClass:"esri.tasks.DirectionsFeatureSet",constructor:function(c,l){this.routeId=c.routeId;this.routeName=c.routeName;m.mixin(this,c.summary);this.extent=new r(this.envelope);var b=this._fromCompressedGeometry,h=this.features,e=this.extent.spatialReference,a=[];f.forEach(l,
function(c,g){h[g].setGeometry(a[g]=b(c,e))});this.strings=c.strings;this.mergedGeometry=this._mergePolylinesToSinglePath(a,e);this.geometryType="esriGeometryPolyline";delete this.envelope},_fromCompressedGeometry:function(c,l){var b=0,h=0,e=[],a,d,g,f;g=c.match(/((\+|\-)[^\+\-]+)/g);f=parseInt(g[0],32);for(var k=1;k<g.length;k+=2)b=a=parseInt(g[k],32)+b,h=d=parseInt(g[k+1],32)+h,e.push([a/f,d/f]);b=new n({paths:[e]});b.setSpatialReference(l);return b},_mergePolylinesToSinglePath:function(c,d){var b=
[];f.forEach(c,function(a){f.forEach(a.paths,function(a){b=b.concat(a)})});var h=[],e=[0,0];f.forEach(b,function(a){if(a[0]!==e[0]||a[1]!==e[1])h.push(a),e=a});return(new n({paths:[h]})).setSpatialReference(d)}});p("extend-esri")&&m.setObject("tasks.DirectionsFeatureSet",d,q);return d});