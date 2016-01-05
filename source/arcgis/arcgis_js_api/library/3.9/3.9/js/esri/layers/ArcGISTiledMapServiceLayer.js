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
define("esri/layers/ArcGISTiledMapServiceLayer","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has dojo/io-query esri/kernel esri/urlUtils esri/SpatialReference esri/layers/TiledMapServiceLayer esri/layers/ArcGISMapServiceLayer esri/layers/TileInfo esri/layers/TimeInfo esri/layers/TileMap".split(" "),function(m,f,d,h,n,p,g,q,k,r,s,t,u,v,w){f=f([s,t],{declaredClass:"esri.layers.ArcGISTiledMapServiceLayer",_agolAttrs:["ocean/world_ocean_base","ocean_basemap",
"world_imagery","world_street_map","world_topo_map"],constructor:function(a,b){b&&(b.roundrobin&&(m.deprecated(this.declaredClass+" : Constructor option 'roundrobin' deprecated. Use option 'tileServers'."),b.tileServers=b.roundrobin),this._setTileServers(b.tileServers),this._loadCallback=b.loadCallback);this._params=d.mixin({},this._url.query);var c=h.some(["servicesdev.arcgisonline.com/arcgis/rest/services","services.arcgisonline.com/arcgis/rest/services","servicesqa.arcgisonline.com/arcgis/rest/services"],
function(b){return-1<a.toLowerCase().indexOf(b.toLowerCase())});if((this.resampling=b&&b.resampling||(!b||!1!==b.resampling)&&c)&&c)this.tileMap=new w(this);this._initLayer=d.hitch(this,this._initLayer);(c=b&&b.resourceInfo)?this._initLayer(c):(this._load=d.hitch(this,this._load),this._load())},_TILE_FORMATS:{PNG:"png",PNG8:"png",PNG24:"png",PNG32:"png",JPG:"jpg",JPEG:"jpg",GIF:"gif"},_setTileServers:function(a){if(a&&0<a.length){this.tileServers=a;var b,c=a.length;for(b=0;b<c;b++)a[b]=k.urlToObject(a[b]).path}},
_initLayer:function(a,b){this.inherited(arguments);this.resourceInfo=n.toJson(a);this.tileInfo=new u(a.tileInfo);!this.spatialReference&&this.tileInfo.spatialReference&&(this.spatialReference=new r(this.tileInfo.spatialReference.toJson()));this.isPNG32="PNG24"===this.tileInfo.format||"PNG32"===this.tileInfo.format;a.timeInfo&&(this.timeInfo=new v(a.timeInfo));var c=this._url.path,l=this._loadCallback,f="file:"===window.location.protocol?"http:":window.location.protocol,e=c.match(/^https?\:\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i),
e=e&&e[2];if(!this.tileServers)if(a.tileServers)this._setTileServers(a.tileServers);else{var d=-1!==c.search(/^https?\:\/\/server\.arcgisonline\.com/i),g=-1!==c.search(/^https?\:\/\/services\.arcgisonline\.com/i);if(d||g)this._setTileServers([c,c.replace(d?/server\.arcgisonline/i:/services\.arcgisonline/i,d?"services.arcgisonline":"server.arcgisonline")])}e&&-1!==h.indexOf(this._agolAttrs,e.toLowerCase())&&(this.hasAttributionData=!0,this.attributionDataUrl=this.attributionDataUrl||f+"//static.arcgis.com/attribution/"+
e);this.loaded=!0;this.onLoad(this);l&&(delete this._loadCallback,l(this))},getTileUrl:function(a,b,c){var d=this.tileServers,f=this._getToken(),e=this._url.query;a=(d?d[b%d.length]:this._url.path)+"/tile/"+a+"/"+b+"/"+c;this.resampling&&!this.tileMap&&(a+="?blankTile\x3dfalse");e&&(a=this.resampling&&!this.tileMap?a+("\x26"+g.objectToQuery(e)):a+("?"+g.objectToQuery(e)));if(f&&(!e||!e.token))a+=(-1===a.indexOf("?")?"?":"\x26")+"token\x3d"+f;a=this.addTimestampToURL(a);return k.addProxy(a)}});p("extend-esri")&&
d.setObject("layers.ArcGISTiledMapServiceLayer",f,q);return f});