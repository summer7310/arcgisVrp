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
define("esri/layers/RasterFunction",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/lang"],function(b,c,d,e,f){b=b(null,{declaredClass:"esri.layers.RasterFunction",functionName:null,arguments:null,functionArguments:null,variableName:null,outputPixelType:null,constructor:function(a){c.isObject(a)&&(c.mixin(this,a),a.rasterFunction&&(this.functionName=a.rasterFunction),a.rasterFunctionArguments?this.functionArguments=a.rasterFunctionArguments:a.arguments&&(this.functionArguments=
a.arguments))},toJson:function(){return f.filter({rasterFunction:this.functionName,rasterFunctionArguments:this.functionArguments||this.arguments,variableName:this.variableName,outputPixelType:this.outputPixelType?this.outputPixelType:null},function(a){if(null!==a&&void 0!==a)return!0})}});d("extend-esri")&&c.setObject("layers.RasterFunction",b,e);return b});