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
require({cache:{"url:esri/dijit/templates/HomeButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\n    \x3cdiv class\x3d"${_css.container}"\x3e\n            \x3cdiv data-dojo-attach-point\x3d"_homeNode" title\x3d"${_i18n.widgets.homeButton.home.title}" role\x3d"button" class\x3d"${_css.home}"\x3e\x3cspan\x3e${_i18n.widgets.homeButton.home.button}\x3c/span\x3e\x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/HomeButton","dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has esri/kernel dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!esri/dijit/templates/HomeButton.html dojo/i18n!esri/nls/jsapi dojo/dom-class dojo/dom-style".split(" "),function(e,k,d,l,m,n,p,q,g,r,s,t,f,h){e=k([n,q,e],{declaredClass:"esri.dijit.HomeButton",templateString:s,options:{theme:"HomeButton",map:null,extent:null,visible:!0},constructor:function(c,a){var b=d.mixin({},
this.options,c);this.domNode=a;this._i18n=t;this.set("map",b.map);this.set("theme",b.theme);this.set("visible",b.visible);this.set("extent",b.extent);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this._css={container:"homeContainer",home:"home",loading:"loading"}},postCreate:function(){this.inherited(arguments);this.own(g(this._homeNode,p,d.hitch(this,this.home)))},startup:function(){this.map||(this.destroy(),console.log("HomeButton::map required"));if(this.map.loaded)this._init();
else g.once(this.map,"load",d.hitch(this,function(){this._init()}))},destroy:function(){this.inherited(arguments)},home:function(){var c=new r,a=this.get("extent");this._showLoading();var b={extent:a};a?this.map.setExtent(a).then(d.hitch(this,function(){this._hideLoading();this.emit("home",b);c.resolve(b)}),d.hitch(this,function(a){a||(a=Error("HomeButton::Failed setting extent on map"));b.error=a;this.emit("home",b);c.reject(a)})):(this._hideLoading(),a=Error("HomeButton::no home extent"),b.error=
a,this.emit("home",b),c.reject(a));return c.promise},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_init:function(){this._visible();this.get("extent")||this.set("extent",this.map.extent);this.set("loaded",!0);this.emit("load",{})},_showLoading:function(){f.add(this._homeNode,this._css.loading)},_hideLoading:function(){f.remove(this._homeNode,this._css.loading)},_updateThemeWatch:function(c,a,b){f.remove(this.domNode,a);f.add(this.domNode,b)},_visible:function(){this.get("visible")?
h.set(this.domNode,"display","block"):h.set(this.domNode,"display","none")}});l("extend-esri")&&d.setObject("dijit.HomeButton",e,m);return e});