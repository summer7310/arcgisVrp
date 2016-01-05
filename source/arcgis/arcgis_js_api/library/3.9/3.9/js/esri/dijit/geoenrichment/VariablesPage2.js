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
require({cache:{"url:esri/dijit/geoenrichment/templates/VariablesPage2.html":'\ufeff\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 0" class\x3d"Wizard_TopPane"\x3e\n    \x3ctable class\x3d"VariablesPage_DataCollection"\x3e\n        \x3ctr\x3e\n            \x3ctd class\x3d"DataCollection_Icon" data-dojo-attach-point\x3d"dataCollectionIcon"\x3e\x3c/td\x3e\n            \x3ctd class\x3d"DataCollection_Label"\x3e\n                \x3cspan data-dojo-attach-point\x3d"dataCollectionName"\x3e\x3c/span\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n    \x3c/table\x3e\n\x3c/div\x3e\n\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 1" class\x3d"Wizard_CenterPane"\x3e\n    \x3cdiv data-dojo-attach-point\x3d"itemsRoot"\x3e\x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/VariablesPage2","../../declare dojo/text!./templates/VariablesPage2.html dojo/dom-construct dojo/dom-class ./CheckListPage dijit/layout/ContentPane".split(" "),function(e,f,b,c,g){return e([g],{templateString:f,multiSelectClass:"VarsMultiSelect",singleSelectClass:"VarsSingleSelect",renderSingleSelectRow:function(a,c){return b.create("div",{"class":"VarLabel",innerHTML:a.alias})},renderMultiSelectRow:function(a,c){var d=b.create("div");b.create("div",{"class":"dijit dijitInline dijitCheckBox"},
d);b.create("div",{"class":"dijitInline VarLabel",innerHTML:a.alias},d);return d},_setDataCollectionAttr:function(a){this.dataCollection&&c.remove(this.dataCollectionIcon,"DataCollection_"+this.dataCollection.metadata.icon);this._set("dataCollection",a);this.dataCollectionName.innerHTML=a.metadata.title;c.add(this.dataCollectionIcon,"DataCollection_"+a.metadata.icon);this.set("items",a.variables)}})});