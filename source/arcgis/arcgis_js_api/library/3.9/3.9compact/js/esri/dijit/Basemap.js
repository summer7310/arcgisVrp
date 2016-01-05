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
define("esri/dijit/Basemap","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has esri/kernel esri/request esri/dijit/BasemapLayer".split(" "),function(c,f,d,g,e,h,k){c=c(null,{declaredClass:"esri.dijit.Basemap",id:null,title:"",thumbnailUrl:null,layers:null,itemId:null,basemapGallery:null,constructor:function(a,l){a=a||{};!a.layers&&!a.itemId&&console.error("esri.dijit.Basemap: unable to find the 'layers' property in parameters");this.id=a.id;this.itemId=a.itemId;this.layers=a.layers;this.title=
a.title||"";this.thumbnailUrl=a.thumbnailUrl;this.basemapGallery=l},getLayers:function(a){if(this.layers)return this.layers;if(this.itemId)return a=h({url:(a||e.dijit._arcgisUrl)+"/content/items/"+this.itemId+"/data",content:{f:"json"},callbackParamName:"callback",error:d.hitch(this,function(a,c){if(this.basemapGallery)this.basemapGallery.onError("esri.dijit.Basemap: could not access basemap item.");else console.error("esri.dijit.Basemap: could not access basemap item.")})}),a.addCallback(d.hitch(this,
function(a,c){if(a.baseMap)return this.layers=[],f.forEach(a.baseMap.baseMapLayers,function(a){var b={};a.url&&(b.url=a.url);a.type&&(b.type=a.type);a.isReference&&(b.isReference=a.isReference);a.displayLevels&&(b.displayLevels=a.displayLevels);a.visibleLayers&&(b.visibleLayers=a.visibleLayers);a.bandIds&&(b.bandIds=a.bandIds);this.layers.push(new k(b))},this),this.layers;if(this.basemapGallery)this.basemapGallery.onError("esri.dijit.Basemap: could not access basemap item.");else console.error("esri.dijit.Basemap: could not access basemap item.");
return[]})),a}});g("extend-esri")&&d.setObject("dijit.Basemap",c,e);return c});