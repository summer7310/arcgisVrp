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
define("esri/deferredUtils",["dojo/_base/lang","dojo/has","esri/kernel"],function(f,g,h){var c={_dfdCanceller:function(a){a.canceled=!0;var b=a._pendingDfd;-1===a.fired&&(b&&-1===b.fired)&&b.cancel();a._pendingDfd=null},_fixDfd:function(a){var b=a.then;a.then=function(a,d,c){if(a){var e=a;a=function(a){return a&&a._argsArray?e.apply(null,a):e(a)}}return b.call(this,a,d,c)};return a},_resDfd:function(a,b,c){var d=b.length;1===d?c?a.errback(b[0]):a.callback(b[0]):1<d?(b._argsArray=!0,a.callback(b)):
a.callback()}};g("extend-esri")&&f.mixin(h,c);return c});