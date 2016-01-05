/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/has",["require","module"],function(l,k){var b=l.has||function(){};if(!b("dojo-has-api")){var m=this,g="undefined"!=typeof window&&("undefined"!=typeof location&&"undefined"!=typeof document&&window.location==location&&window.document==document)&&document,n=g&&g.createElement("DiV"),c=k.config&&k.config()||{},b=function(a){return"function"==typeof c[a]?c[a]=c[a](m,g,n):c[a]};b.cache=c;b.add=function(a,p,d,e){("undefined"==typeof c[a]||e)&&(c[a]=p);return d&&b(a)}}b.add("dom-addeventlistener",
!!document.addEventListener);b.add("touch","ontouchstart"in document||0<window.navigator.msMaxTouchPoints);b.add("device-width",screen.availWidth||innerWidth);var h=document.createElement("form");b.add("dom-attributes-explicit",0==h.attributes.length);b.add("dom-attributes-specified-flag",0<h.attributes.length&&40>h.attributes.length);b.clearElement=function(a){a.innerHTML="";return a};b.normalize=function(a,c){var d=a.match(/[\?:]|[^:\?]*/g),e=0,f=function(a){var c=d[e++];if(":"==c)return 0;if("?"==
d[e++]){if(!a&&b(c))return f();f(!0);return f(a)}return c||0};return(a=f())&&c(a)};b.load=function(a,b,c){a?b([a],c):c()};return b});