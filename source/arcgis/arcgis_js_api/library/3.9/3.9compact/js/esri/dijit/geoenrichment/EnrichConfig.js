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
define("esri/dijit/geoenrichment/EnrichConfig","../../declare dojo/_base/lang ./_Wizard ../../tasks/geoenrichment/EnrichParameters ../../tasks/geoenrichment/RingBuffer ./EnrichDataCollectionsPage ./EnrichOptionsPage".split(" "),function(n,e,p,q,r,s,t,u){function l(c){var f={};if(c)for(var d in c)f[d.split(".")[0]]=!0;return f}return n("esri.dijit.geoenrichment.EnrichConfig",[p],{enrichParams:null,geomType:null,fields:null,fieldsMap:null,allowNewColumns:!0,studyAreaCount:null,showBackButton:!0,_dataCollections:null,
_eventMap:{back:!0,finish:["params","fieldsMap","dataCollections"]},startup:function(){this.inherited(arguments);this.enrichParams||(this.enrichParams=new q);this.enrichParams.studyAreaOptions=new r;this.pages.dataCollections=new s({country:this.enrichParams.countryID,showBackButton:this.showBackButton,onBack:e.hitch(this,this._onBack),onNext:e.hitch(this,this._onDataCollectionsPicked)});this._loadDataCollectionsPage()},_loadDataCollectionsPage:function(){var c=l(this.fieldsMap);this.pages.dataCollections.set("checks",
c);this.loadPage("dataCollections")},_onDataCollectionsPicked:function(){this._dataCollections=this.pages.dataCollections.dataCollections;this.pages.options||(this.pages.options=new t({buffer:this.enrichParams.studyAreaOptions,geomType:this.geomType,fields:this.fields,allowNewColumns:this.allowNewColumns,studyAreaCount:this.studyAreaCount,onBack:e.hitch(this,function(){this.fieldsMap=this.pages.options.get("fieldsMap");this._loadDataCollectionsPage()}),onFinish:e.hitch(this,this._finish)}));this.pages.options.set("dataCollections",
this._dataCollections);for(var c=l(this.fieldsMap),f=this.pages.dataCollections.get("checks"),d={},a=0;a<this._dataCollections.length;a++){var g=this._dataCollections[a].id;if(f[g])for(var h=this._dataCollections[a].variables,b=0;b<h.length;b++){var m=g+"."+h[b].id,k;if(c[g]){if(k=this.fieldsMap[m],!e.isString(k))continue}else k="";d[m]=k}}this.fieldsMap=d;this.pages.options.set("fieldsMap",d);this.loadPage("options")},_onBack:function(){this.onBack()},onBack:function(){},_finish:function(){this.enrichParams.countryID=
this.pages.dataCollections.get("country");this.fieldsMap=null;this.pages.options&&(this.enrichParams.studyAreaOptions=this.pages.options.get("buffer"),this.fieldsMap=this.pages.options.get("fieldsMap"));var c=[],f=l(this.fieldsMap);this.enrichParams.variables=[];for(var d=0;d<this._dataCollections.length;d++){var a=this._dataCollections[d];if(f[a.id]){c.push(a);for(var g=!0,h=[],b=0;b<a.variables.length;b++){var e=a.id+"."+a.variables[b].id;void 0!==this.fieldsMap[e]?h.push(e):g=!1}if(g)this.enrichParams.variables.push(a.id+
".*");else for(b=0;b<h.length;b++)this.enrichParams.variables.push(h[b])}}this.onFinish(this.enrichParams,this.fieldsMap,c)},onFinish:function(c,e,d){}})});