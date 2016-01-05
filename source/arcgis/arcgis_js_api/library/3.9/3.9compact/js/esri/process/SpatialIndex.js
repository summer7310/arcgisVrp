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
define("esri/process/SpatialIndex","esri/sniff esri/kernel dojo/_base/declare dojo/Deferred dojo/_base/lang dojo/_base/array esri/process/Processor esri/workers/RequestClient esri/workers/WorkerClient esri/layers/FeatureLayer".split(" "),function(s,t,n,l,p,u,q,v,m,r){return n([q],{declaredClass:"esri.process.SpatialIndex",index:null,indexType:"rtree",workerCallback:["esri/workers/scripts/helpers","esri/workers/scripts/indexInterface","esri/workers/indexWorker"],autostart:!1,constructor:function(a){a=
a||{};var b=!1!==a.autostart;p.mixin(this,a);if(!this.fetchWithWorker){var c=this;this.workerClient=new m("esri/workers/mutableWorker",!0);this.workerCallback.push("esri/workers/libs/"+this.indexType);this.workerClient.importScripts(this.workerCallback).then(function(){c._attachedSystem=!0;b&&c.start()})}this._featCache={}},addLayer:function(a,b){if(a.graphics&&a.graphics.length||b||a.isInstanceOf(r))if(this._attachedSystem)this.inherited(arguments,[a]);else{var c=this.workerClient,f=this;this.inherited(arguments,
[a,!0]);c.importScripts("esri/workers/libs/"+this.indexType).then(function(){f.runProcess(a.grahics,a.id);f._attachedSystem=!0})}},unsetMap:function(){this.stop();this.workerClient.terminate();this.fetchWithWorker||(this.workerClient=new m(this.workerCallback,!0));this.inherited(arguments);this.start()},removeLayer:function(a){this.inherited(arguments)},runProcess:function(a,b){if(a&&a.length){var c=this,f=this.workerClient,d=a[0]._graphicsLayer;!b&&0!==b&&(b=d?d.id:"rawFeatures_"+Object.keys(this._featCache).length);
this._featCache[b]||(this._featCache[b]={});for(var e,g,h=[],k=a.length,l=d&&d.objectIdField;k--;)if(g=a[k],e=g.attributes[l],null==e||!this._featCache[b][e])this._featCache[b][e]=1,g.declaredClass?h.push({geometry:g.geometry,attributes:g.attributes}):h.push(g);f.postMessage({insert:h,system:this.indexType,options:this.indexOptions,idField:d&&d.objectIdField,layerId:b}).then(function(a){d.emit("process-end",{processor:c,results:{insert:a.insert}})});d.emit("process-start",{processor:this})}},_sendFeaturesFromLayer:function(a,
b){var c=b.graphic,f=this.workerClient,d=this,e=c.attributes[a.objectIdField];this._featCache[a.id]||(this._featCache[a.id]={});this._featCache[a.id][e]||(this._featCache[a.id][e]=1,f.postMessage({insert:[{attributes:c.attributes,geometry:c.geometry}],system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:d,results:{insert:b.insert}})}),a.emit("process-start",{processor:d}))},_notifyProcessStart:function(a,b){},_sendFeaturesFromTask:function(a,
b){var c=b.featureSet.features,f=[],d=this.workerClient,e=this,g=c.length,h,k;for(this._featCache[a.id]||(this._featCache[a.id]={});g--;)k=c[g],h=k.attributes[a.objectIdField],this._featCache[a.id][h]||(this._featCache[a.id][h]=1,f.push(k));d.postMessage({insert:f,system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:e,results:{insert:b.insert}})});a.emit("process-start",{processor:e})},get:function(){},intersects:function(a,
b,c){return"rtree"!=this.indexType?(console.error("Index.intersects only works with rtree indexes"),a=new l,a.reject({message:"Index.intersects only works with rtree indexes"}),a.promise):a=this.workerClient.postMessage({search:a,layerId:b,returnNode:c})},within:function(a,b,c){if("rtree"!=this.indexType)return console.error("Index.within only works with rtree indexes"),a=new l,a.reject({message:"Index.within only works with rtree indexes"}),a.promise},nearest:function(a){return"kdtree"!=this.indexType?
(console.error("Index.nearest only works with kdtree indexes"),a=new l,a.reject({message:"Index.nearest only works with kdtree indexes"}),a.promise):a=this.workerClient.postMessage({search:a})}})});