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
define("esri/layers/StreamLayer","dojo/_base/declare dojo/_base/connect dojo/_base/array esri/graphic esri/layers/FeatureLayer esri/geometry/jsonUtils ./PurgeOptions".split(" "),function(f,g,h,k,l,m,e){return f([l],{constructor:function(a,b){b=b||{};this.purgeOptions=new e(this,b.purgeOptions||{})},_initLayer:function(a,b){this.inherited(arguments);if(a){if(a.layerDefinition)this.purgeOptions=new e(this,this._params.purgeOptions||{}),this.socketUrl=this._params.socketUrl||a.layerDefinition.socketUrl||
void 0;else if(this._params.socketUrl)this.socketUrl=this._params.socketUrl;else{var c=a.webSocketUrls;c?(this.socketUrl=c[Math.floor(Math.random()*c.length)],this.socketDirection="broadcast"===this._params.socketDirection?"broadcast":"subscribe",this.socketUrl+="/"+this.socketDirection):this.socketUrl=void 0}this._map&&(this.socketUrl&&!this._connected)&&this.connect()}},_setMap:function(){this.socketUrl&&!this._connected&&this.connect();return this.inherited(arguments)},_unsetMap:function(a,b){h.forEach(this._connects,
g.disconnect);this._connected&&this.disconnect();this._map=null},add:function(a){this.inherited(arguments);this.refresh()},remove:function(a){this.inherited(arguments)},refresh:function(){this._purge()},destroy:function(){this.disconnect();this.inherited(arguments)},connect:function(a){var b=this;try{this._connected||(this.socket=new WebSocket(this.socketUrl),this.socket.onopen=function(){b._connected=!0;b._bind();b.onConnect();a&&a(null,!0)},this.socket.onclose=function(a){this._connected&&(this._connected=
!1,this.onDisconnect())})}catch(c){a&&a(c,!1)}},disconnect:function(a){this.socket.close();this._connected=!1;this.onDisconnect();a&&a(null,!0)},onUpdate:function(){},onMessage:function(){},onRemove:function(){},onConnect:function(){},onDisconnect:function(){},_purge:function(){if(this.purgeOptions.displayCount&&this.graphics.length>this.purgeOptions.displayCount)for(var a=0;a<this.graphics.length-this.purgeOptions.displayCount;a++){var b=this.graphics[0];this.remove(b);this.onRemove({graphic:b})}},
_bind:function(){var a=this;this.socket.onmessage=function(b){a._onMessage(JSON.parse(b.data))}},_onMessage:function(a){var b=this;this.onMessage(a);var c={create:function(a){b._create(a)},update:function(a){b._update(a)},"delete":function(a){b._delete(a)}};if(a.type)c[a.type](a.feature);else this._create(a)},_create:function(a){function b(a){a=new k(a);c.add(a)}var c=this;a.length?a.forEach(function(a){a&&a.geometry&&b(a)}):a&&a.geometry&&b(a)},_delete:function(a){var b=this,c=a[b.objectIdField]||
a.attributes[b.objectIdField],d=!1;this.graphics.forEach(function(a){a.attributes[b.objectIdField]==c&&(d=a)});d&&this.remove(d)},_update:function(a){var b=this,c=!1;this.graphics.forEach(function(d){d.attributes[b.objectIdField]==a.attributes[b.objectIdField]&&(c=d)});c&&(a.attributes&&c.setAttributes(a.attributes),a.geometry&&c.setGeometry(new m.fromJson(a.geometry)),b.onUpdate({graphic:c}))}})});