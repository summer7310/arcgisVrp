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
define("esri/dijit/geoenrichment/DataBrowser","../../declare dojo/_base/lang ./_Wizard ./DataCollectionsPage ./VariablesPage2 dojo/i18n!../../nls/jsapi".split(" "),function(h,e,k,l,m,f){f=f.geoenrichment.dijit.WizardButtons;return h("esri.dijit.geoenrichment.DataBrowser",[k],{okButton:f.ok,backButton:f.back,cancelButton:f.cancel,countryID:null,countryBox:!0,selection:null,multiSelect:!1,_dataCollections:null,constructor:function(){this._dataCollections={};this.selection=[]},startup:function(){this.inherited(arguments);
this.pages.d=new l({countryID:this.countryID,countryBox:this.countryBox,multiSelect:!1,dataCollections:this._dataCollections,onSelect:e.hitch(this,this._loadVarsPage)});var a=[];this.backButton&&a.push({label:this.backButton,onClick:e.hitch(this,this._onBack)});this.cancelButton&&a.push({label:this.cancelButton,onClick:e.hitch(this,this._onCancel)});this.addButtons("d",a);this.loadPage("d")},_loadVarsPage:function(){if(!this.pages.v){this.pages.v=new m({multiSelect:this.multiSelect,onSelect:e.hitch(this,
this._onSelect)});var a=[{label:f.back,onClick:e.hitch(this,this.loadPage,"d")}];this.okButton&&a.push({label:this.okButton,onClick:e.hitch(this,this._onOK)});this.cancelButton&&a.push({label:this.cancelButton,onClick:e.hitch(this,this._onCancel)});this.addButtons("v",a)}a=this.pages.d;this.countryID=a.get("countryID");for(var a=a.get("selection"),b=this._dataCollections[this.countryID],c,d=0;d<b.length;d++)if(a[b[d].id]){c=b[d];break}if(c){this.pages.v.set("dataCollection",c);b=!1;a={};for(d=0;d<
this.selection.length;d++){var g=this.selection[d].split(".");g[0]==c.id&&(b=a[g[1]]=!0)}!this.multiSelect&&!b&&(a[c.variables[0].id]=!0);this.pages.v.set("selection",a);this.loadPage("v")}},_onSelect:function(){this.selection=[];var a=this.pages.v.get("dataCollection"),b=this.pages.v.get("selection");if(b)for(var c in b)b[c]&&this.selection.push(a.id+"."+c);else this.selection.push(a.id+".*");this.onSelect()},onSelect:function(){},_onBack:function(){this.onBack()},onBack:function(){},_onOK:function(){this.loadPage("d");
this.onOK()},onOK:function(){},_onCancel:function(){this.onCancel()},onCancel:function(){}})});