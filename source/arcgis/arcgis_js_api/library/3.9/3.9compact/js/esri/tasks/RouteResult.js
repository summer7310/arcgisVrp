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
define("esri/tasks/RouteResult","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has esri/kernel esri/graphic esri/tasks/DirectionsFeatureSet".split(" "),function(b,d,e,k,l,f,m){b=b(null,{declaredClass:"esri.tasks.RouteResult",constructor:function(a){var b=a.spatialReference,c=a.route;if(a.directions){var g=[],h=[];e.forEach(a.directions.features,function(a,b){h[b]=a.compressedGeometry;g[b]=a.strings});a.directions.strings=g;this.directions=new m(a.directions,h)}this.routeName=a.routeName;
c&&(c.geometry&&(c.geometry.spatialReference=b),this.route=new f(c));if(a.stops){var d=this.stops=[];e.forEach(a.stops,function(a,c){a.geometry&&(a.geometry.spatialReference=b);d[a.attributes.Sequence-1]=new f(a)})}},routeName:null,directions:null,route:null,stops:null});k("extend-esri")&&d.setObject("tasks.RouteResult",b,l);return b});