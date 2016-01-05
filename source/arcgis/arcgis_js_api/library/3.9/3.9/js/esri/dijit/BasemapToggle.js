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
require({cache:{"url:esri/dijit/templates/BasemapToggle.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\n    \x3cdiv class\x3d"${_css.container}"\x3e\n        \x3cdiv data-dojo-attach-point\x3d"_toggleNode" title\x3d"${_i18n.widgets.basemapToggle.toggle}" role\x3d"button" class\x3d"${_css.toggleButton}"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/BasemapToggle","dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has esri/kernel dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/text!esri/dijit/templates/BasemapToggle.html dojo/i18n!esri/nls/jsapi dojo/dom-class dojo/dom-style dojo/dom-construct".split(" "),function(g,n,f,p,q,r,s,t,k,u,d,h,l,m){var e=require.toUrl("esri/dijit");g=n([r,t,g],{declaredClass:"esri.dijit.BasemapToggle",templateString:u,options:{theme:"BasemapToggle",map:null,visible:!0,basemap:"hybrid",
defaultBasemap:"streets",basemaps:{streets:{label:d.widgets.basemapToggle.basemapLabels.streets,url:e+"/images/basemaps/streets.jpg"},satellite:{label:d.widgets.basemapToggle.basemapLabels.satellite,url:e+"/images/basemaps/satellite.jpg"},hybrid:{label:d.widgets.basemapToggle.basemapLabels.hybrid,url:e+"/images/basemaps/hybrid.jpg"},topo:{label:d.widgets.basemapToggle.basemapLabels.topo,url:e+"/images/basemaps/topo.jpg"},gray:{label:d.widgets.basemapToggle.basemapLabels.gray,url:e+"/images/basemaps/gray.jpg"},
oceans:{label:d.widgets.basemapToggle.basemapLabels.oceans,url:e+"/images/basemaps/oceans.jpg"},"national-geographic":{label:d.widgets.basemapToggle.basemapLabels["national-geographic"],url:e+"/images/basemaps/national-geographic.jpg"},osm:{label:d.widgets.basemapToggle.basemapLabels.osm,url:e+"/images/basemaps/osm.jpg"}}},constructor:function(a,b){var c=f.mixin({},this.options,a);this.domNode=b;this._i18n=d;this.set("map",c.map);this.set("theme",c.theme);this.set("visible",c.visible);this.set("basemaps",
c.basemaps);this.set("basemap",c.basemap);this.set("defaultBasemap",c.defaultBasemap);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this._css={container:"basemapContainer",toggleButton:"toggleButton",basemapImage:"basemapImage",basemapTitle:"basemapTitle"}},postCreate:function(){this.inherited(arguments);this.own(k(this._toggleNode,s,f.hitch(this,this.toggle)))},startup:function(){this.map||(this.destroy(),console.log("BasemapToggle::map required"));if(this.map.loaded)this._init();
else k.once(this.map,"load",f.hitch(this,function(){this._init()}))},destroy:function(){this.inherited(arguments)},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},toggle:function(){var a=this.map.getBasemap();a&&this.set("defaultBasemap",a);var a=this.get("defaultBasemap"),b=this.get("basemap"),c={previousBasemap:a,currentBasemap:b};a!==b?(this.map.setBasemap(b),this.set("basemap",a),this._basemapChange()):c.error=Error("BasemapToggle::Current basemap is same as new basemap");
this.emit("toggle",c)},_init:function(){this._visible();this._basemapChange();k(this.map,"basemap-change",f.hitch(this,function(){this._basemapChange()}));this.set("loaded",!0);this.emit("load",{})},_getBasemapInfo:function(a){var b=this.get("basemaps");if(b&&b.hasOwnProperty(a))return b[a]},_updateImage:function(){var a=this.get("basemap"),a=this._getBasemapInfo(a),b;b=""+('\x3cdiv class\x3d"'+this._css.basemapImage+'"\x3e\x3cimg alt\x3d"'+a.label+'" src\x3d"'+a.url+'" /\x3e\x3c/div\x3e');b+='\x3cdiv class\x3d"'+
this._css.basemapTitle+'"\x3e'+a.label+"\x3c/div\x3e";m.empty(this._toggleNode);m.place(b,this._toggleNode,"only")},_basemapChange:function(){var a=this.map.getBasemap();a&&this.set("defaultBasemap",a);var a=this.get("defaultBasemap"),b=this.get("basemap");this._updateImage();h.remove(this._toggleNode,a);h.add(this._toggleNode,b)},_updateThemeWatch:function(a,b,c){this.get("loaded")&&(h.remove(this.domNode,b),h.add(this.domNode,c))},_visible:function(){this.get("visible")?l.set(this.domNode,"display",
"block"):l.set(this.domNode,"display","none")}});p("extend-esri")&&f.setObject("dijit.BasemapToggle",g,q);return g});