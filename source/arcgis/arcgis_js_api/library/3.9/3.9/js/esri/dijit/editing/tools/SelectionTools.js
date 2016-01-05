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
define("esri/dijit/editing/tools/SelectionTools",["dojo/_base/lang","dojo/has","esri/layers/FeatureLayer","esri/toolbars/draw","esri/kernel"],function(c,d,a,b,e){a={select:{id:"btnNewSelection",_enabledIcon:"toolbarIcon newSelectionIcon",_disabledIcon:"toolbarIcon newSelectionIcon",_drawType:b.EXTENT,_selectMethod:a.SELECTION_NEW,_label:"NLS_selectionNewLbl"},selectadd:{id:"btnAddToSelection",_enabledIcon:"toolbarIcon addToSelectionIcon",_disabledIcon:"toolbarIcon addToSelectionIcon",_drawType:b.EXTENT,
_selectMethod:a.SELECTION_ADD,_label:"NLS_selectionAddLbl"},selectremove:{id:"btnSubtractFromSelection",_enabledIcon:"toolbarIcon removeFromSelectionIcon",_disabledIcon:"toolbarIcon removeFromSelectionIcon",_drawType:b.EXTENT,_selectMethod:a.SELECTION_SUBTRACT,_label:"NLS_selectionRemoveLbl"},selectClear:{id:"btnClearSelection",_enabledIcon:"toolbarIcon clearSelectionIcon",_disabledIcon:"toolbarIcon clearSelectionIcon",_enabled:!1,_label:"NLS_selectionClearLbl"}};d("extend-esri")&&c.setObject("dijit.editing.tools.SelectionTools",
a,e);return a});