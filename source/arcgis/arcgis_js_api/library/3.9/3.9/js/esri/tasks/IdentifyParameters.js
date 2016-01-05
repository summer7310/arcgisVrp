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
define("esri/tasks/IdentifyParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has esri/kernel esri/layerUtils esri/geometry/jsonUtils esri/geometry/scaleUtils".split(" "),function(g,e,h,f,m,n,k,p,q){var d=g(null,{declaredClass:"esri.tasks.IdentifyParameters",constructor:function(){this.layerOption=d.LAYER_OPTION_TOP},geometry:null,spatialReference:null,layerIds:null,tolerance:null,returnGeometry:!1,mapExtent:null,width:400,height:400,dpi:96,layerDefinitions:null,
timeExtent:null,layerTimeOptions:null,dynamicLayerInfos:null,toJson:function(a){var c=a&&a.geometry||this.geometry,b=this.mapExtent,d=this.spatialReference,e=this.layerIds;a={geometry:c,tolerance:this.tolerance,returnGeometry:this.returnGeometry,mapExtent:b,imageDisplay:this.width+","+this.height+","+this.dpi,maxAllowableOffset:this.maxAllowableOffset};c&&(a.geometryType=p.getJsonType(c));null!==d?a.sr=d.wkid||f.toJson(d.toJson()):c?a.sr=c.spatialReference.wkid||f.toJson(c.spatialReference.toJson()):
b&&(a.sr=b.spatialReference.wkid||f.toJson(b.spatialReference.toJson()));a.layers=this.layerOption;e&&(a.layers+=":"+e.join(","));a.layerDefs=k._serializeLayerDefinitions(this.layerDefinitions);c=this.timeExtent;a.time=c?c.toJson().join(","):null;a.layerTimeOptions=k._serializeTimeOptions(this.layerTimeOptions);if(this.dynamicLayerInfos&&0<this.dynamicLayerInfos.length){var b=q.getScale({extent:b,width:this.width,spatialReference:b.spatialReference}),g=k._getLayersForScale(b,this.dynamicLayerInfos),
l=[];h.forEach(this.dynamicLayerInfos,function(a){if(!a.subLayerIds){var b=a.id;if((!this.layerIds||this.layerIds&&-1!==h.indexOf(this.layerIds,b))&&-1!==h.indexOf(g,b)){var c={id:b};c.source=a.source&&a.source.toJson();var d;this.layerDefinitions&&this.layerDefinitions[b]&&(d=this.layerDefinitions[b]);d&&(c.definitionExpression=d);var e;this.layerTimeOptions&&this.layerTimeOptions[b]&&(e=this.layerTimeOptions[b]);e&&(c.layerTimeOptions=e.toJson());l.push(c)}}},this);b=f.toJson(l);"[]"===b&&(b="[{}]");
a.dynamicLayers=b}return a}});e.mixin(d,{LAYER_OPTION_TOP:"top",LAYER_OPTION_VISIBLE:"visible",LAYER_OPTION_ALL:"all"});m("extend-esri")&&e.setObject("tasks.IdentifyParameters",d,n);return d});