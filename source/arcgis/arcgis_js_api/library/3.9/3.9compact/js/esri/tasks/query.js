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
define("esri/tasks/query","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has esri/kernel esri/geometry/jsonUtils esri/tasks/SpatialRelationship dojo/has!extend-esri?esri/tasks/QueryTask dojo/has!extend-esri?esri/tasks/RelationshipQuery dojo/has!extend-esri?esri/tasks/StatisticDefinition".split(" "),function(p,c,q,d,r,s,t,u){var e=p(null,{declaredClass:"esri.tasks.Query",constructor:function(){this.spatialRelationship=e.SPATIAL_REL_INTERSECTS},text:null,where:"",geometry:null,
groupByFieldsForStatistics:null,objectIds:null,returnGeometry:!1,orderByFields:null,outSpatialReference:null,outFields:null,outStatistics:null,timeExtent:null,relationParam:null,pixelSize:null,distance:null,units:null,resultOffset:null,resultRecordCount:null,_units:{meters:"esriSRUnit_Meter",kilometers:"esriSRUnit_Kilometer",feet:"esriSRUnit_Foot",miles:"esriSRUnit_StatuteMile","nautical-miles":"esriSRUnit_NauticalMile","us-nautical-miles":"esriSRUnit_USNauticalMile"},toJson:function(f){var a={text:this.text,
where:this.where,returnGeometry:this.returnGeometry,spatialRel:this.spatialRelationship,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},b=f&&f.geometry||this.geometry,c=this.objectIds,h=this.outFields,g=this.outSpatialReference,k=this.groupByFieldsForStatistics,l=this.orderByFields,m=this.outStatistics;f=this.distance;b&&(a.geometry=b,a.geometryType=t.getJsonType(b),a.inSR=b.spatialReference.wkid||d.toJson(b.spatialReference.toJson()));c&&(a.objectIds=c.join(","));
h&&(a.outFields=h.join(","));k&&(a.groupByFieldsForStatistics=k.join(","));l&&(a.orderByFields=l.join(","));if(m){var n=[];q.forEach(m,function(a,b){n.push(a.toJson())});a.outStatistics=d.toJson(n)}null!==g?a.outSR=g.wkid||d.toJson(g.toJson()):b&&(a.outSR=b.spatialReference.wkid||d.toJson(b.spatialReference.toJson()));b=this.timeExtent;a.time=b?b.toJson().join(","):null;if((b=this.relationParam)&&this.spatialRelationship===e.SPATIAL_REL_RELATION)a.relationParam=b;f&&(a.distance=this.distance,this.hasOwnProperty("units")?
a.units=this._units[this.units]||this._units.meters:(console.warn("esri/tasks/query::no distance unit provided, defaulting to meters"),a.units=this._units.meters));this.hasOwnProperty("start")&&(a.resultOffset=this.start,a.resultRecordCount=10,""===a.where&&(a.where="1\x3d1"));this.hasOwnProperty("num")&&(a.resultRecordCount=this.num);a.pixelSize=this.pixelSize?d.toJson(this.pixelSize.toJson()):null;a._ts=this._ts;return a}});c.mixin(e,u);r("extend-esri")&&c.setObject("tasks.Query",e,s);return e});