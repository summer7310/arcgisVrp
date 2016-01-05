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
define("esri/dijit/editing/Union","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/OperationBase esri/dijit/editing/Cut".split(" "),function(b,c,d,e,f,g){b=b(f,{declaredClass:"esri.dijit.editing.Union",type:"edit",label:"Union Features",constructor:function(a){a=a||{};this._cut=new g({featureLayer:a.featureLayer,addedGraphics:a.deletedGraphics,preUpdatedGraphics:a.preUpdatedGraphics,postUpdatedGraphics:a.postUpdatedGraphics})},performUndo:function(){this._cut.performRedo()},performRedo:function(){this._cut.performUndo()}});
d("extend-esri")&&c.setObject("dijit.editing.Union",b,e);return b});