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
define("esri/geometry/scaleUtils","dojo/_base/lang dojo/has esri/kernel esri/config esri/lang esri/WKIDUnitConversion".split(" "),function(h,q,f,r,s,t){function k(a,b,c){return a&&b?a.getWidth()/b*(c||l)*m*n.screenDPI:0}function p(a,b,c,d,g){return a.expand(d*b/(((g?c:e.values[e[c]])||l)*m*n.screenDPI)/a.getWidth())}var m=39.37,l=20015077/180,n=r.defaults,e=t,g={getUnitValue:function(a){var b,c,d;a&&("object"===typeof a?(b=a.wkid,c=a.wkt):"number"===typeof a?b=a:"string"===typeof a&&(c=a));b?d=e.values[e[b]]:
c&&-1!==c.search(/^PROJCS/i)&&(a=/UNIT\[([^\]]+)\]\]$/i.exec(c))&&a[1]&&(d=parseFloat(a[1].split(",")[1]));return d},getScale:function(a,b,c){var d,e,f;1<arguments.length&&s.isDefined(b)&&!b.declaredClass?(d=a,e=b,b=null,f=g.getUnitValue(c)):(d=b||a.extent,e=a.width,f=g.getUnitValue(d&&d.spatialReference));return k(d,e,f)},getExtentForScale:function(a,b,c){return p(c||a.extent,a.width,g.getUnitValue(a.spatialReference),b,!0)}};q("extend-esri")&&(h.mixin(h.getObject("geometry",!0,f),g),f.geometry._getScale=
k,f.geometry._getExtentForScale=p);return g});