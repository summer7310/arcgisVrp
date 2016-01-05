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
define("esri/renderers/TimeClassBreaksAger","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has dojo/date esri/kernel esri/lang esri/symbols/jsonUtils esri/renderers/SymbolAger".split(" "),function(a,h,c,d,k,l,m,n,p){a=a(p,{declaredClass:"esri.renderer.TimeClassBreaksAger",constructor:function(b,a){this.infos=b;this.timeUnits=a||"day";b.sort(function(b,a){return b.minAge<a.minAge?-1:b.minAge>a.minAge?1:0})},getAgedSymbol:function(b,a){var c=a.getLayer(),d=a.attributes,e=m.isDefined;b=n.fromJson(b.toJson());
var f=c._map.timeExtent.endTime;if(!f)return b;var g=k.difference(new Date(d[c._startTimeField]),f,this.timeUnits);h.some(this.infos,function(a){if(g>=a.minAge&&g<=a.maxAge){var c=a.color,d=a.size;a=a.alpha;c&&b.setColor(c);e(d)&&this._setSymbolSize(b,d);e(a)&&b.color&&(b.color.a=a);return!0}},this);return b}});c.mixin(a,{UNIT_DAYS:"day",UNIT_HOURS:"hour",UNIT_MILLISECONDS:"millisecond",UNIT_MINUTES:"minute",UNIT_MONTHS:"month",UNIT_SECONDS:"second",UNIT_WEEKS:"week",UNIT_YEARS:"year"});d("extend-esri")&&
c.setObject("renderer.TimeClassBreaksAger",a,l);return a});