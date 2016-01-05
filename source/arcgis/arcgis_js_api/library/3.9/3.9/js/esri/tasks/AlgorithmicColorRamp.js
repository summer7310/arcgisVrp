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
define("esri/tasks/AlgorithmicColorRamp","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/Color esri/tasks/ColorRamp".split(" "),function(b,d,e,f,c,g){b=b(g,{declaredClass:"esri.tasks.AlgorithmicColorRamp",type:"algorithmic",fromColor:null,toColor:null,algorithm:null,toJson:function(){var a;switch(this.algorithm.toLowerCase()){case "cie-lab":a="esriCIELabAlgorithm";break;case "hsv":a="esriHSVAlgorithm";break;case "lab-lch":a="esriLabLChAlgorithm"}a={type:"algorithmic",algorithm:a};a.fromColor=
c.toJsonColor(this.fromColor);a.toColor=c.toJsonColor(this.toColor);return a}});e("extend-esri")&&d.setObject("tasks.AlgorithmicColorRamp",b,f);return b});