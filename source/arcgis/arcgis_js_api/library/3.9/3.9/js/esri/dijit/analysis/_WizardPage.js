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
require({cache:{"url:esri/dijit/analysis/templates/_WizardPage.html":'\ufeff\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-attach-point\x3d"_layoutGrid" data-dojo-props\x3d"doLayout:true" class\x3d"Grid" style\x3d"width:100%;height:100%;"\x3e\n        ${content}\n    \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/analysis/_WizardPage","esri/declare dojo/string dojo/dom-class dojox/mvc/Templated dijit/layout/_LayoutWidget dojo/text!esri/dijit/analysis/templates/_WizardPage.html esri/dijit/geoenrichment/Grid".split(" "),function(h,k,g,l,n,m,b){var f={busy:"Wizard_Loading",done:"Wizard_Done",error:"Wizard_Error"};return h("esri.dijit.analysis._WizardPage",[l],{progressPromises:null,buildRendering:function(){var a=this.templateString;0<a.length&&"\ufeff"==a[0]&&(a=a.substr(1));this.templateString=
k.substitute(m,{content:a});this.inherited(arguments)},load:function(){this.resize()},resize:function(){this._layoutGrid.resize()},_setStackingAttr:function(a){this._layoutGrid.rows=[b.AUTO,b.AUTO,b.AUTO];switch(a){case "stretch":this._layoutGrid.rows[1]=b.STRETCH;break;case "stack":this._layoutGrid.rows[1]=b.STACK}},showProgress:function(a,d){this.progressPromises||(this.progressPromises={});var c;c="string"==typeof d||d instanceof String?d:Math.random().toString();this.progressPromises[c]&&this.progressPromises[c].cancel();
var b=a.isResolved(),e=this;b||(this.progressPromises[c]=a,a.always(function(){delete e.progressPromises[c]}),this._setState("busy"));a.then(function(){(d instanceof Function?d:e[d]).apply(e,arguments);b||e._setState("done")},function(a){"CancelError"==a.name?b||e._setState("done"):e._setState("error",a.toString())})},cancelProgress:function(a){(a=this.progressPromises&&this.progressPromises[a])&&a.cancel()},_setState:function(a,b){if(this.progressDiv){this.progressDiv.innerHTML=b||"";for(var c in f)c==
a?g.add(this.progressDiv,f[c]):g.remove(this.progressDiv,f[c])}},destroy:function(){if(this.progressPromises){for(var a in this.progressPromises)this.progressPromises[a].cancel();this.progressPromises=null}this.inherited(arguments)}})});