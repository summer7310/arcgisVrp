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
define("esri/layers/PurgeOptions",["dojo/_base/declare","dojo/_base/lang","dojo/Stateful","dojo/has","esri/kernel"],function(a,d,e,f,g){a=a([e],{declaredClass:"esri.layers.PurgeOptions",constructor:function(a,b){this.parent=a;for(var c in b)this[c]=b[c]},_displayCountSetter:function(a){this.displayCount=a;this.parent.refresh()}});f("extend-esri")&&d.setObject("layers.PurgeOptions",a,g);return a});