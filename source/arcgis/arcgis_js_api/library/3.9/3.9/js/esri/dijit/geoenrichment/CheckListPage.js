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
define("esri/dijit/geoenrichment/CheckListPage","../../declare dojo/_base/lang dojo/dom-construct dojo/dom-class dojo/query dojo/store/Memory dgrid/List dgrid/Selection ./_Invoke ./_WizardPage dijit/layout/ContentPane".split(" "),function(e,g,f,d,h,k,l,m,n,p){f=e([l,m],{store:null,_setStore:function(a){this.store=a;this.refresh();this.renderArray(a.data)}});var q=e([f],{selectionMode:"single"}),r=e([f],{selectionMode:"toggle",_handleSelect:function(a,b){("mousedown"==a.type||"touchpress"==a.type)&&
this.select(b,null,null)},select:function(a){this.inherited(arguments);var b=this.row(a).element;if(b){var c=h(".dijitCheckBox",b)[0];d.contains(b,"dgrid-selected")?d.add(c,"dijitCheckBoxChecked"):d.remove(c,"dijitCheckBoxChecked")}}});return e([p,n],{multiSelectClass:null,singleSelectClass:null,multiSelect:!0,selection:null,items:null,_list:null,buildRendering:function(){this.inherited(arguments);var a=this.itemsRoot;this.multiSelect?(this._list=new r({},a),this._list.renderRow=this.renderMultiSelectRow,
d.add(a.parentNode,this.multiSelectClass)):(this._list=new q({},a),this._list.renderRow=this.renderSingleSelectRow,d.add(a.parentNode,this.singleSelectClass));a=g.hitch(this,this._onSelect);this._list.on("dgrid-select",a);if(this.multiSelect)this._list.on("dgrid-deselect",a)},renderSingleSelectRow:function(a,b){},renderMultiSelectRow:function(a,b){},_setItemsAttr:function(a){this._set("items",a);this._list.set("store",new k({data:a}));this._started&&this.resize();this.invoke("_applySelection")},_setSelectionAttr:function(a){this._set("selection",
a);this._list&&this.invoke("_applySelection")},_applySelection:function(){var a=this.selection;this._list.clearSelection();if(a&&this.items)for(var b=this.items,c=0;c<b.length;c++)a[b[c].id]&&this._list.select(b[c].id)},_onSelect:function(){this.selection=this._list.get("selection");this.onSelect()},onSelect:function(){}})});