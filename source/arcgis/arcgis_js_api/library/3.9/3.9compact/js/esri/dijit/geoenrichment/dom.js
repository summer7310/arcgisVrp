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
define("esri/dijit/geoenrichment/dom",["dojo/dom-construct","dijit/registry"],function(f,e){return{text:function(a,b){a.appendChild(document.createTextNode(b))},clear:function(a){if(a){var b=e.findWidgets(a);if(b)for(var c=0;c<b.length;c++)b[c].destroy();a.innerHTML=""}},pct:function(a){return(100*a).toFixed(2)+"%"},head:function(){return document.getElementsByTagName("head")[0]},createCols:function(a,b){for(var c=f.create("colgroup",null,a),d=0;d<b.length;d++){var e=f.create("col",null,c);b[d]&&
(e.style.width=this.pct(b[d]))}}}});