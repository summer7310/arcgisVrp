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
require({cache:{"url:esri/dijit/analysis/templates/AnalysisToolItem.html":'\x3cdiv class\x3d\'toolContainer\' data-dojo-attach-point\x3d"_toolCtr" style\x3d"cursor:pointer;cursor:hand;" data-dojo-attach-event\x3d"onclick:_handleToolIconClick"\x3e\n  \x3cdiv data-dojo-attach-point\x3d\'_toolIcon\'\x3e\x3c/div\x3e\n  \x3cdiv class\x3d\'esriLeadingMargin5\' style\x3d\'margin-top:-42px;\'\x3e\n    \x3ca  href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"toolDescription" data-dojo-attach-point\x3d"_helpIconNode"\x3e\x3c/a\x3e\n  \t\x3clabel data-dojo-attach-point\x3d\'_toolNameLabel\' style\x3d"cursor:pointer;cursor:hand;"\x3e\x3c/label\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d\'esriLeadingMargin2\' data-dojo-attach-point\x3d"optionsDiv" style\x3d"margin-top:0.5em;font-size:0.85em;"\x3e\x3clabel class\x3d"esriLeadingMargin5 comingSoonIcon"\x3e${i18n.comingSoonLabel}\x3c/label\x3e\x3c/div\x3e\t\n\x3c/div\x3e\n'}});
define("esri/dijit/analysis/AnalysisToolItem","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/event dojo/has dojo/i18n dojo/dom-class dojo/dom-attr dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dijit/_OnDijitClickMixin dijit/_FocusMixin esri/kernel dojo/text!esri/dijit/analysis/templates/AnalysisToolItem.html".split(" "),function(b,g,d,t,h,k,f,c,l,e,m,n,p,q,r,s){b=g([m,n,p,q],{declaredClass:"esri.dijit.analysis.AnalysisToolItem",templateString:s,basePath:b.toUrl("esri/dijit/analysis"),
widgetsInTemplate:!0,i18n:null,_helpIconNode:null,_toolIcon:null,_toolIconClass:null,_toolNameLabel:null,toolName:null,helpTopic:null,helpFileName:"Analysis",constructor:function(a,b){a.toolIcon&&(this._toolIconClass=a.toolIcon);a.name&&(this.toolName=a.name,this.helpTopic=a.helpTopic)},postCreate:function(){this.inherited(arguments);this._toolNameLabel.innerHTML=this.toolName;c.add(this._toolIcon,this._toolIconClass);l.set(this._helpIconNode,"esriHelpTopic",this.helpTopic);this.set("showComingSoonLabel",
!0)},postMixInProperties:function(){this.inherited(arguments);this.i18n={};d.mixin(this.i18n,f.getLocalization("esri","jsapi").common);d.mixin(this.i18n,f.getLocalization("esri","jsapi").analysisTools)},_handleToolNameClick:function(){this.onToolSelect(this)},_handleToolIconClick:function(a){h.stop(a);this.onToolSelect(this)},_setShowComingSoonLabelAttr:function(a){e.set(this.optionsDiv,"display",!0===a?"block":"none");c.toggle(this._toolCtr,"esriToolContainerDisabled",a);c.toggle(this._toolNameLabel,
"esriTransparentNode",a);c.toggle(this._toolIcon,"esriTransparentNode",a);e.set(this._toolNameLabel,"cursor",!0===a?"default":"pointer");e.set(this._toolCtr,"cursor",!0===a?"default":"pointer")},onToolSelect:function(a){}});k("extend-esri")&&d.setObject("dijit.analysis.AnalysisToolItem",b,r);return b});