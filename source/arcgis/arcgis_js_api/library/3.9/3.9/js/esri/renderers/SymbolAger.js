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
define("esri/renderers/SymbolAger",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(c,d,e,f){c=c(null,{declaredClass:"esri.renderer.SymbolAger",getAgedSymbol:function(a,b){},_setSymbolSize:function(a,b){switch(a.type){case "simplemarkersymbol":a.setSize(b);break;case "picturemarkersymbol":a.setWidth(b);a.setHeight(b);break;case "simplelinesymbol":case "cartographiclinesymbol":a.setWidth(b);break;case "simplefillsymbol":case "picturefillsymbol":a.outline&&a.outline.setWidth(b)}}});
e("extend-esri")&&d.setObject("renderer.SymbolAger",c,f);return c});