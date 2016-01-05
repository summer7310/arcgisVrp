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
define("esri/layers/CSVLayer","dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/arcgis/csv esri/layers/FeatureLayer esri/geometry/Extent esri/tasks/FeatureSet".split(" "),function(h,f,e,k,l,g,m,n,p){f=f(m,{declaredClass:"esri.layers.CSVLayer",_preventInit:!0,_fieldTypeMap:{Date:"esriFieldTypeDate",Number:"esriFieldTypeDouble",String:"esriFieldTypeString"},constructor:function(b,a){this.url=b;a=e.mixin(a,{outFields:["*"]});this.columnDelimiter=a.columnDelimiter;this.latitudeFieldName=
a.latitudeFieldName;this.longitudeFieldName=a.longitudeFieldName;var c=a.layerDefinition;c||(c={fields:a.fields||[],geometryType:"esriGeometryPoint",copyrightText:a.copyright},a.fields&&h.forEach(a.fields,e.hitch(this,function(a){a.type=this._fieldTypeMap[a.type||"String"];a.alias||(a.alias=a.name)})));this._buildCsvFcParam={url:this.url,columnDelimiter:this.columnDelimiter,layerDefinition:c};this.latitudeFieldName&&this.longitudeFieldName&&(this._buildCsvFcParam.locationInfo={locationType:"coordinates",
latitudeFieldName:this.latitudeFieldName,longitudeFieldName:this.longitudeFieldName});this._projectFeatures=e.hitch(this,this._projectFeatures);this._addFeatures=e.hitch(this,this._addFeatures);this._initCSVLayer(a)},refresh:function(){this._fireUpdateStart();this.applyEdits(null,null,this.graphics);this._loadFeatures()},_setMap:function(b){var a=this.inherited(arguments);this._fireUpdateStart();this._projectFeatures(this._csvFC).then(this._addFeatures).otherwise(this._errorHandler);this._csvFC=null;
return a},_initCSVLayer:function(b){var a=this;g.buildCSVFeatureCollection(this._buildCsvFcParam).then(function(c){a._csvFC=c;var d=c.layerDefinition;d.extent=a._getFCExtent(c);a._initFeatureLayer({layerDefinition:d},b)}).otherwise(this._errorHandler)},_loadFeatures:function(){g.buildCSVFeatureCollection(this._buildCsvFcParam).then(this._projectFeatures).then(this._addFeatures).otherwise(this._errorHandler)},_projectFeatures:function(b){return g.projectFeatureCollection(b,this._map.spatialReference)},
_addFeatures:function(b){b=new p(b.featureSet);this.applyEdits(b.features,null,null);this._fireUpdateEnd()},_getFCExtent:function(b){var a;if(b&&b.featureSet&&b.featureSet.features){b=b.featureSet.features;var c=b.length;if(1<c){var d=b[0].geometry;a=new n(d.x,d.y,d.x,d.y);for(c-=1;0<c;c--)d=b[c].geometry,a.xmin=Math.min(a.xmin,d.x),a.ymin=Math.min(a.ymin,d.y),a.xmax=Math.max(a.xmax,d.x),a.ymax=Math.max(a.ymax,d.y);0>=a.getWidth()&&0>=a.getHeight()&&(a=null)}}return a}});k("extend-esri")&&e.setObject("layers.CSVLayer",
f,l);return f});