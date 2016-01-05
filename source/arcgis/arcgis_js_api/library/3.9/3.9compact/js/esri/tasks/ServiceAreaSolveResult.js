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
define("esri/tasks/ServiceAreaSolveResult","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has esri/kernel esri/graphic esri/SpatialReference esri/tasks/NAMessage".split(" "),function(b,e,c,f,g,h,k,l){b=b(null,{declaredClass:"esri.tasks.ServiceAreaSolveResult",constructor:function(a){a.saPolygons&&(this.serviceAreaPolygons=this._graphicsFromJson(a.saPolygons));a.saPolylines&&(this.serviceAreaPolylines=this._graphicsFromJson(a.saPolylines));a.facilities&&(this.facilities=this._graphicsFromJson(a.facilities));
a.barriers&&(this.pointBarriers=this._graphicsFromJson(a.barriers));a.polylineBarriers&&(this.polylineBarriers=this._graphicsFromJson(a.polylineBarriers));a.polygonBarriers&&(this.polygonBarriers=this._graphicsFromJson(a.polygonBarriers));a.messages&&(this.messages=c.map(a.messages,function(a,b){return new l(a)}))},serviceAreaPolygons:null,serviceAreaPolylines:null,facilities:null,pointBarriers:null,polylineBarriers:null,polygonBarriers:null,messages:null,_graphicsFromJson:function(a){var b=new k(a.spatialReference);
return c.map(a.features,function(a,c){var d=new h(a);d.geometry.setSpatialReference(b);return d})}});f("extend-esri")&&e.setObject("tasks.ServiceAreaSolveResult",b,g);return b});