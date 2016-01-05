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
define("esri/dijit/geoenrichment/InfographicsConfig","../../declare dojo/_base/lang dojo/string ./_Wizard ./InfographicsOptions ./InfographicsMainPage ./InfographicsDataCollectionsPage ./VariablesPage ./lang".split(" "),function(m,b,t,n,g,p,q,r,s){function h(c,b){return"OneVar"!=c.type||1!=c.variables.length||!s.startsWith(c.variables[0],b.id)?!1:!0}return m("esri.dijit.geoenrichment.InfographicsConfig",[n],{options:null,_eventMap:{ok:!0,cancel:!0},constructor:function(){this.pages.main=new p({onAddVariables:b.hitch(this,
this._addVariables),onOK:b.hitch(this,this._onOK),onCancel:b.hitch(this,this._onCancel)})},startup:function(){this.inherited(arguments);this.options||this.set("options",new g);this.loadPage("main")},_setOptionsAttr:function(c){this._set("options",c);this.pages.main.set("options",c)},_addVariables:function(){this.pages.dataCollections||(this.pages.dataCollections=new q({onPick:b.hitch(this,this._onDataCollectionPicked),onBack:b.hitch(this,this.loadPage,"main"),onCancel:b.hitch(this,this._onCancel)}));
this.pages.dataCollections.set("country",this.pages.main.get("country"));this.loadPage("dataCollections")},_onDataCollectionPicked:function(c){this.pages.variables||(this.pages.variables=new r({onOK:b.hitch(this,this._applyVariables),onBack:b.hitch(this,this.loadPage,"dataCollections"),onCancel:b.hitch(this,this._onCancel)}));this.pages.variables.set("dataCollection",c);for(var k={},d=this.pages.main.get("items"),e=0;e<d.length;e++){var a=d[e];h(a,c)&&(a=a.variables[0].split(".")[1],k[a]=!0)}this.pages.variables.set("checks",
k);this.loadPage("variables")},_applyVariables:function(){for(var c={},b=this.pages.variables.get("dataCollection"),d=this.pages.variables.get("checks"),e=b.variables,a=0;a<e.length;a++)c[e[a].id]=!d||d[e[a].id];d=this.pages.main.get("items");for(a=d.length-1;0<=a;a--){var f=d[a];h(f,b)&&(f=f.variables[0].split(".")[1],c[f]?c[f]=!1:d.splice(a,1))}for(a=0;a<e.length;a++)if(c[e[a].id]){var l=e[a],f=new g.Item("OneVar",[b.id+"."+l.id]);f.title=l.alias;d.push(f)}this.pages.main.set("options",this.options);
this.loadPage("main")},_onOK:function(){this.onOK()},onOK:function(){},_onCancel:function(){this.onCancel()},onCancel:function(){}})});