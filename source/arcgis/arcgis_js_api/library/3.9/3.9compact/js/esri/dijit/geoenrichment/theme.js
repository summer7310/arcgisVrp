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
define("esri/dijit/geoenrichment/theme","require dojo/_base/declare dojo/_base/lang dojo/Evented dojo/dom-class dojo/dom-construct ./dom dojo/query dojo/Deferred ../../extend".split(" "),function(g,e,k,l,f,m,n,p,q,r){function h(c,a){for(var b in a)try{c[b]=a[b].constructor==Object?h(c[b],a[b]):a[b]}catch(d){c[b]=a[b]}return c}var d="common";e=new (e([l],{set:function(c,a){if(a&&"common"!=a){var b=g.toUrl("./themes/"+a+"/main.css");p("link").some(function(a){return-1<a.href.toLowerCase().indexOf(b)})||
m.create("link",{rel:"stylesheet",href:b},n.head())}d&&"common"!=d&&f.remove(c,d);(d=a)&&"common"!=a&&f.add(c,a);this.emit("change")},get:function(){return d},load:function(c){function a(){f&&f.remove();b.resolve(e)}var b=new q,e=null,f=g.on("error",a);g(["./themes/common/"+c],function(b){e=k.clone(b);!d||"common"==d?a():g(["./themes/"+d+"/"+c],function(b){h(e,b);a()})});return b.promise}}));r("esri.dijit.geoenrichment.theme",e);return e});