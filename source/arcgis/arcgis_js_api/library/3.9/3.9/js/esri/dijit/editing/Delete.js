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
define("esri/dijit/editing/Delete","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/OperationBase esri/dijit/editing/Add".split(" "),function(a,b,c,d,e,f){a=a(e,{declaredClass:"esri.dijit.editing.Delete",type:"edit",label:"Delete Features",constructor:function(a){a=a||{};this._add=new f({featureLayer:a.featureLayer,addedGraphics:a.deletedGraphics})},performUndo:function(){this._add.performRedo()},performRedo:function(){this._add.performUndo()}});c("extend-esri")&&b.setObject("dijit.editing.Delete",
a,d);return a});