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
require({cache:{"url:esri/dijit/geoenrichment/templates/VariablesPage.html":'\ufeff\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 0" class\x3d"Wizard_TopPane"\x3e\n    \x3ctable class\x3d"VariablesPage_DataCollection"\x3e\n        \x3ctr\x3e\n            \x3ctd class\x3d"DataCollection_Icon" data-dojo-attach-point\x3d"dataCollectionIcon"\x3e\x3c/td\x3e\n            \x3ctd class\x3d"DataCollection_Label"\x3e\n                \x3cspan data-dojo-attach-point\x3d"dataCollectionName"\x3e\x3c/span\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n    \x3c/table\x3e\n\x3c/div\x3e\n\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 1" class\x3d"Wizard_CenterPane"\x3e\n    \x3cdiv data-dojo-attach-point\x3d"varsDiv"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 2" class\x3d"Wizard_BottomPane"\x3e\n    \x3cbutton class\x3d"Wizard_Button" data-dojo-attach-event\x3d"click: _back"\x3e${nls.back}\x3c/button\x3e\n    \x3cbutton class\x3d"Wizard_Button" data-dojo-attach-event\x3d"click: _ok"\x3e${nls.ok}\x3c/button\x3e\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/VariablesPage","../../declare ./_WizardPage dojo/i18n!../../nls/jsapi dojo/text!./templates/VariablesPage.html dojo/dom-construct dijit/form/CheckBox dojo/dom-class dijit/layout/ContentPane".split(" "),function(k,l,d,m,g,n,e){d=d.geoenrichment.dijit.VariablesPage;return k("esri.dijit.geoenrichment.VariablesPage",[l],{templateString:m,nls:d,dataCollection:null,checks:null,_checkBoxes:null,_eventMap:{ok:!0,back:!0},_setDataCollectionAttr:function(a){this.dataCollection&&
e.remove(this.dataCollectionIcon,"DataCollection_"+this.dataCollection.metadata.icon);this._set("dataCollection",a);this.dataCollectionName.innerHTML=a.metadata.title;e.add(this.dataCollectionIcon,"DataCollection_"+a.metadata.icon);this._checkBoxes=[];for(var b=document.createDocumentFragment(),c=0;c<a.variables.length;c++){var d=a.variables[c],h=new n({checked:!this.checks||this.checks[d.id]});this._checkBoxes.push(h);var f=g.create("label",{"class":"VariablesPage_Variable"},b);0==c%2&&e.add(f,"Wizard_AltRow");
h.placeAt(f);g.create("span",{innerHTML:d.alias},f)}this.varsDiv.innerHTML="";this.varsDiv.appendChild(b)},_setChecksAttr:function(a){this._set("checks",a);for(var b=0;b<this._checkBoxes.length;b++)this._checkBoxes[b].set("checked",!a||a[this.dataCollection.variables[b].id])},_ok:function(){for(var a=!0,b={},c=0;c<this._checkBoxes.length;c++)this._checkBoxes[c].get("checked")?b[this.dataCollection.variables[c].id]=!0:a=b[this.dataCollection.variables[c].id]=!1,this.checks=a?null:b;this.onOK()},onOK:function(){},
_back:function(){this.onBack()},onBack:function(){}})});