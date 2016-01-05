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
define("esri/tasks/locator","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/_base/json dojo/has esri/kernel esri/request esri/deferredUtils esri/tasks/Task esri/tasks/AddressCandidate".split(" "),function(p,k,v,q,m,w,x,r,s,y,t){p=p(y,{declaredClass:"esri.tasks.Locator",_eventMap:{"address-to-locations-complete":["addresses"],"addresses-to-locations-complete":["addresses"],"location-to-address-complete":["address"]},constructor:function(a){this._geocodeHandler=k.hitch(this,
this._geocodeHandler);this._geocodeAddressesHandler=k.hitch(this,this._geocodeAddressesHandler);this._reverseGeocodeHandler=k.hitch(this,this._reverseGeocodeHandler);this.registerConnectEvents()},outSpatialReference:null,setOutSpatialReference:function(a){this.outSpatialReference=a},_geocodeHandler:function(a,e,h,f,b){try{var g=a.candidates,c;e=[];var d,n=g.length,l=a.spatialReference,u;for(d=0;d<n;d++){c=g[d];if(u=c.location)u.spatialReference=l;e[d]=new t(c)}this._successHandler([e],"onAddressToLocationsComplete",
h,b)}catch(k){this._errorHandler(k,f,b)}},_geocodeAddressesHandler:function(a,e,h,f,b){try{var g=a.locations;e=[];var c,d=g.length,n=a.spatialReference,l;for(c=0;c<d;c++){if(l=g[c].location)l.spatialReference=n;e[c]=new t(g[c])}this._successHandler([e],"onAddressesToLocationsComplete",h,b)}catch(k){this._errorHandler(k,f,b)}},addressToLocations:function(a,e,h,f,b){var g;a.address&&(f=h,h=e,e=a.outFields,b=a.searchExtent,a=a.address,g=a.magicKey);b&&(b=b._normalize(!0));var c=this.outSpatialReference;
a=this._encode(k.mixin({},this._url.query,a,{f:"json",outSR:c&&m.toJson(c.toJson()),outFields:e&&e.join(",")||null,searchExtent:b&&m.toJson(b.toJson()),magicKey:g||null}));var d=this._geocodeHandler,n=this._errorHandler,l=new q(s._dfdCanceller);l._pendingDfd=r({url:this._url.path+"/findAddressCandidates",content:a,callbackParamName:"callback",load:function(a,b){d(a,b,h,f,l)},error:function(a){n(a,f,l)}});return l},addressesToLocations:function(a,e,h){var f=this.outSpatialReference,b=[];v.forEach(a.addresses,
function(a,c){b.push({attributes:a})});a=this._encode(k.mixin({},this._url.query,{addresses:m.toJson({records:b})},{f:"json",outSR:f&&m.toJson(f.toJson())}));var g=this._geocodeAddressesHandler,c=this._errorHandler,d=new q(s._dfdCanceller);d._pendingDfd=r({url:this._url.path+"/geocodeAddresses",content:a,callbackParamName:"callback",load:function(a,b){g(a,b,e,h,d)},error:function(a){c(a,h,d)}});return d},_reverseGeocodeHandler:function(a,e,h,f,b){try{var g=new t({address:a.address,location:a.location,
score:100});this._successHandler([g],"onLocationToAddressComplete",h,b)}catch(c){this._errorHandler(c,f,b)}},locationToAddress:function(a,e,h,f){a&&this.normalization&&(a=a.normalize());var b=this.outSpatialReference;a=this._encode(k.mixin({},this._url.query,{outSR:b&&m.toJson(b.toJson()),location:a&&m.toJson(a.toJson()),distance:e,f:"json"}));var g=this._reverseGeocodeHandler,c=this._errorHandler,d=new q(s._dfdCanceller);d._pendingDfd=r({url:this._url.path+"/reverseGeocode",content:a,callbackParamName:"callback",
load:function(a,b){g(a,b,h,f,d)},error:function(a){c(a,f,d)}});return d},onAddressToLocationsComplete:function(){},onAddressesToLocationsComplete:function(){},onLocationToAddressComplete:function(){}});w("extend-esri")&&k.setObject("tasks.Locator",p,x);return p});