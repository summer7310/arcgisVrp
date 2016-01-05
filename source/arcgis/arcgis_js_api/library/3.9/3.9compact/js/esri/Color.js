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
define("esri/Color",["dojo/_base/declare","dojo/_base/Color","dojo/has","esri/kernel"],function(b,d,f,g){b=b([d],{declaredClass:"esri.Color"});b.toJsonColor=function(a){return a&&[a.r,a.g,a.b,1<a.a?a.a:Math.round(255*a.a)]};b.toDojoColor=function(a){return a&&new d([a[0],a[1],a[2],a[3]/255])};var c,e="named blendColors fromRgb fromHex fromArray fromString".split(" ");for(c=0;c<e.length;c++)b[e[c]]=d[e[c]];f("extend-esri")&&(g.Color=b);return b});