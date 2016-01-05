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
define("esri/renderers/TimeRampAger","dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has esri/kernel esri/symbols/jsonUtils esri/renderers/SymbolAger".split(" "),function(g,m,n,p,q,r,s){g=g(s,{declaredClass:"esri.renderer.TimeRampAger",constructor:function(h,g,a){this.colorRange=h;this.sizeRange=g;this.alphaRange=a},getAgedSymbol:function(h,g){var a=g.getLayer(),c=g.attributes;h=r.fromJson(h.toJson());var b=a._map.timeExtent,d=b.startTime,b=b.endTime;if(!d||!b)return h;d=d.getTime();b=b.getTime();
a=new Date(c[a._startTimeField]);a=a.getTime();a<d&&(a=d);d=b===d?1:(a-d)/(b-d);if(a=this.sizeRange)c=a[0],b=a[1],a=Math.abs(b-c)*d,this._setSymbolSize(h,c<b?c+a:c-a);if(a=this.colorRange){var b=a[0],f=a[1],l=Math.round,c=new n,e=b.r,k=f.r,a=Math.abs(k-e)*d;c.r=l(e<k?e+a:e-a);e=b.g;k=f.g;a=Math.abs(k-e)*d;c.g=l(e<k?e+a:e-a);e=b.b;k=f.b;a=Math.abs(k-e)*d;c.b=l(e<k?e+a:e-a);b=b.a;f=f.a;a=Math.abs(f-b)*d;c.a=b<f?b+a:b-a;h.setColor(c)}c=h.color;if((a=this.alphaRange)&&c)b=a[0],f=a[1],a=Math.abs(f-b)*
d,c.a=b<f?b+a:b-a;return h}});p("extend-esri")&&m.setObject("renderer.TimeRampAger",g,q);return g});