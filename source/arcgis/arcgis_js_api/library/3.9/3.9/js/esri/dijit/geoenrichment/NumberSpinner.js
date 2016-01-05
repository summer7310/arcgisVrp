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
require({cache:{"url:esri/dijit/geoenrichment/templates/NumberSpinner.html":'\ufeff\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft NumberSpinner" id\x3d"widget_${id}" role\x3d"presentation"\x3e\n    \x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\x3e\n        \x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation" /\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\x3e\n        \x3cinput class\x3d\'dijitReset dijitInputInner\' data-dojo-attach-point\x3d"textbox,focusNode" type\x3d"${type}" data-dojo-attach-event\x3d"onkeydown:_onKeyDown"\n\t\t\trole\x3d"spinbutton" autocomplete\x3d"off" ${!nameAttrSetting}/\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"upArrowNode" class\x3d"NumberSpinner_RadiusButton NumberSpinner_RadiusPlus"\x3e+\x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"downArrowNode" class\x3d"NumberSpinner_RadiusButton NumberSpinner_RadiusMinus"\x3e\x26ndash;\x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/NumberSpinner",["../../declare","dijit/form/NumberSpinner","dojo/text!./templates/NumberSpinner.html"],function(e,f,g){return e([f],{templateString:g,cssStateNodes:{},required:!0,adjust:function(b,a){var c=this.inherited(arguments),d=this.constraints;return"min"in d&&0>=this.compare(c,d.min)?b:c},rangeCheck:function(b,a){return("min"in a?0<this.compare(b,a.min):!0)&&("max"in a?0>=this.compare(b,a.max):!0)}})});