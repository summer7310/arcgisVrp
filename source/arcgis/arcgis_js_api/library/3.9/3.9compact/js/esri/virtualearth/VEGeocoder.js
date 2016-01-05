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
define("esri/virtualearth/VEGeocoder","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/has esri/kernel esri/urlUtils esri/tasks/Task esri/virtualearth/VEGeocodeResult esri/deferredUtils esri/request".split(" "),function(b,c,k,l,m,n,p,q,r,s,t){b=b(q,{declaredClass:"esri.virtualearth.VEGeocoder",constructor:function(a){try{a=c.mixin({bingMapsKey:null},a||{});var e=window.location.protocol;"file:"===e&&(e="http:");this.url=e+"//serverapi.arcgisonline.com/veadaptor/production/services/geocode/geocode";
this._url=p.urlToObject(this.url);this._queue=[];this.bingMapsKey=a.bingMapsKey;this.culture=a.culture||"en-US";this._errorHandler=c.hitch(this,this._errorHandler);this._addressToLocationsHandler=c.hitch(this,this._addressToLocationsHandler);if(!this.bingMapsKey)throw Error("BingMapsKey must be provided.");}catch(d){throw this.onError(d),d;}},addressToLocations:function(a,e,d){if(this.bingMapsKey){var b=c.mixin({},this._url.query,{query:a,token:this.bingMapsKey,culture:this.culture}),f=this._addressToLocationsHandler,
h=this._errorHandler,g=new l(s._dfdCanceller);g._pendingDfd=t({url:this._url.path,content:b,callbackParamName:"callback",load:function(a,b){f(a,b,e,d,g)},error:function(a){h(a,d,g)}});return g}console.debug("Server token not retrieved. Queing request to be executed after server token retrieved.");this._queue.push(arguments)},_addressToLocationsHandler:function(a,b,d,c,f){try{k.forEach(a,function(b,c){a[c]=new r(b)}),this._successHandler([a],"onAddressToLocationsComplete",d,f)}catch(h){this._errorHandler(h,
c,f)}},onAddressToLocationsComplete:function(){},setBingMapsKey:function(a){this.bingMapsKey=a},setCulture:function(a){this.culture=a}});m("extend-esri")&&c.setObject("virtualearth.VEGeocoder",b,n);return b});