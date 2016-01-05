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
define("esri/dijit/geoenrichment/Grid",["../../declare","dojo/dom-class","dojo/dom-geometry","dijit/layout/_LayoutWidget"],function(l,g,m,n){var c=l("esri.dijit.geoenrichment.Grid",[n],{layout:function(){for(var h=this.getChildren(),d=[],a=0;a<this.rows.length;a++)d.push(0);g.add(this.domNode,"Grid_Measure");for(var k=[],a=0;a<h.length;a++){var b=h[a],e=b.row,b=b.domNode;b.style.position="relative";g.add(b,"GridCell_Measure");var f=b.scrollHeight;g.remove(b,"GridCell_Measure");b=f;k.push(b);b>d[e]&&
(d[e]=b)}e=m.getContentBox(this.domNode).h;g.remove(this.domNode,"Grid_Measure");for(a=b=0;a<d.length;a++)switch(this.rows[a]){case c.AUTO:e-=d[a];break;case c.STRETCH:case c.STACK:b++}d=e/b;for(a=0;a<h.length;a++){b=h[a];e=b.row;f={w:this._contentBox.w};switch(this.rows[e]){case c.AUTO:f.h=k[a];break;case c.STRETCH:f.h=d;break;case c.STACK:f.h=Math.min(d,k[a])}b.resize(f)}}});c.AUTO="auto";c.STRETCH="stretch";c.STACK="stack";return c});