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
define("esri/urlUtils","dojo/_base/lang dojo/_base/array dojo/_base/url dojo/io-query esri/kernel esri/config esri/sniff".split(" "),function(f,r,n,q,g,s,p){var b={},l=s.defaults.io,m=window.location.protocol;"file:"===m&&(m="http:");b.urlToObject=function(a){var c=a.indexOf("?");return-1===c?{path:a,query:null}:{path:a.substring(0,c),query:q.queryToObject(a.substring(c+1))}};b.getProxyUrl=function(a,c){var d=f.isString(a)?0===f.trim(a).toLowerCase().indexOf("https:"):a,e=l.proxyUrl,k,h;if(f.isString(a)&&
(h=b.getProxyRule(a)))e=h.proxyUrl;if(!e)throw console.log("esri.config.defaults.io.proxyUrl is not set."),Error("esri.config.defaults.io.proxyUrl is not set.");d&&(!1!==c&&0!==window.location.href.toLowerCase().indexOf("https:"))&&(d=e,0!==d.toLowerCase().indexOf("http")&&(d=b.getAbsoluteUrl(d)),d=d.replace(/^http:/i,"https:"),b.canUseXhr(d)&&(e=d,k=1));e=b.urlToObject(e);e._xo=k;return e};b.addProxy=function(a){var c=b.getProxyRule(a),d;c?d=b.urlToObject(c.proxyUrl):l.alwaysUseProxy&&(d=b.getProxyUrl());
d&&(c=b.urlToObject(a),a=d.path+"?"+c.path,(d=q.objectToQuery(f.mixin(d.query||{},c.query)))&&(a+="?"+d));return a};b.addProxyRule=function(a){var c=a.urlPrefix=b.urlToObject(a.urlPrefix).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//ig,"").toLowerCase(),d=l.proxyRules,e,k=d.length,h,f=k;for(e=0;e<k;e++)if(h=d[e].urlPrefix,0===c.indexOf(h)){if(c.length===h)return-1;f=e;break}else 0===h.indexOf(c)&&(f=e+1);d.splice(f,0,a);return f};b.getProxyRule=function(a){var c=l.proxyRules,d=c.length,e=
b.urlToObject(a).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//ig,"").toLowerCase(),f;for(a=0;a<d;a++)if(0===e.indexOf(c[a].urlPrefix)){f=c[a];break}return f};b.hasSameOrigin=function(a,c,d){a=a.toLowerCase();c=c.toLowerCase();var b=window.location.href.toLowerCase();a=0===a.indexOf("http")?new n(a):b=new n(b);c=0===c.indexOf("http")?new n(c):f.isString(b)?new n(b):b;return(d||a.scheme===c.scheme)&&a.host===c.host&&a.port===c.port};b.canUseXhr=function(a,c){var d=p("esri-phonegap")?!0:!1,e=
b.hasSameOrigin,k=l.corsEnabledServers,h,g=-1;!d&&(p("esri-cors")&&k&&k.length)&&(d=r.some(k,function(b,c){h=0!==f.trim(b).toLowerCase().indexOf("http");return e(a,h?"http://"+b:b)||h&&e(a,"https://"+b)?(g=c,!0):!1}));return c?g:d};b.getAbsoluteUrl=function(a){return f.isString(a)&&-1===a.indexOf("http://")&&-1===a.indexOf("https://")?0===a.indexOf("//")?m+a:0===a.indexOf("/")?m+"//"+window.location.host+a:g._appBaseUrl+a:a};b.fixUrl=function(a){/^\/\//i.test(a)&&(a=m+a);return a=a.replace(/^(https?:\/\/)(arcgis\.com)/i,
"$1www.$2")};p("extend-esri")&&(f.mixin(g,b),g._getProxyUrl=b.getProxyUrl,g._getProxiedUrl=b.addProxy,g._hasSameOrigin=b.hasSameOrigin,g._canDoXOXHR=b.canUseXhr,g._getAbsoluteUrl=b.getAbsoluteUrl,g.fixUrl=b.fixUrl);return b});