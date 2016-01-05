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
require({cache:{"url:esri/dijit/geoenrichment/templates/InfographicsDataCollectionsPage.html":'\ufeff\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 0" class\x3d"Wizard_TopPane"\x3e\n    ${nls.chooseDataCollection}\n\x3c/div\x3e\n\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 1" class\x3d"Wizard_CenterPane"\x3e\n    \x3cdiv data-dojo-attach-point\x3d"itemsDiv" style\x3d"min-height: 70px;"\x3e\x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"progressDiv" class\x3d"Wizard_Progress"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 2" class\x3d"Wizard_BottomPane"\x3e\n    \x3cbutton class\x3d"Wizard_Button" data-dojo-attach-event\x3d"click: _back"\x3e${nls.back}\x3c/button\x3e\n    \x3cbutton class\x3d"Wizard_Button" data-dojo-attach-event\x3d"click: _cancel"\x3e${nls.cancel}\x3c/button\x3e\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/InfographicsDataCollectionsPage","../../declare dojo/_base/lang dojo/dom-class dojo/dom-construct ./dom dojo/on ./_WizardPage dojo/i18n!../../nls/jsapi dojo/text!./templates/InfographicsDataCollectionsPage.html ../../tasks/geoenrichment/GeoenrichmentTask ./config dijit/layout/ContentPane dijit/form/Select".split(" "),function(e,l,m,d,n,p,q,b,r,s,c){b=b.geoenrichment.dijit.DataCollectionsPage;return e("esri.dijit.geoenrichment.InfographicsDataCollectionsPage",[q],{templateString:r,
nls:b,country:null,_request:null,_loaded:!1,_task:null,_eventMap:{pick:["dataCollection"],back:!0,cancel:!0},constructor:function(){this._task=new s(c.server);this._task.token=c.token},_setCountryAttr:function(a){this.country!=a&&(this._set("country",a),this._loaded=!1)},load:function(){this.inherited(arguments);this._loaded||this.showProgress(this._task.getDataCollections(this.country),"_onDataCollectionsResponse")},_onDataCollectionsResponse:function(a){n.clear(this.itemsDiv);for(var b=document.createDocumentFragment(),
f=0;f<a.length;f++){var g=a[f],c=d.create("table",{"class":"DataCollection"},b),h=d.create("tr",null,c),e=d.create("td",{"class":"DataCollection_Icon"},h),k=g.metadata.icon;k&&m.add(e,"DataCollection_"+k);d.create("td",{"class":"DataCollection_Label",innerHTML:g.metadata.title},h);p(c,"click",l.hitch(this,this._onPick,g))}this.itemsDiv.appendChild(b);this.resize();this._loaded=!0},_onPick:function(a){this.onPick(a)},onPick:function(a){},_back:function(){this.cancelProgress("_onDataCollectionsResponse");
this.onBack()},onBack:function(){},_cancel:function(){this.cancelProgress("_onDataCollectionsResponse");this.onCancel()},onCancel:function(){}})});