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
define("esri/layers/TimeInfo","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/TimeExtent esri/layers/TimeReference esri/layers/LayerTimeOptions".split(" "),function(b,c,d,e,f,g,h){b=b(null,{declaredClass:"esri.layers.TimeInfo",constructor:function(a){null!==a&&(c.mixin(this,a),a.exportOptions&&(this.exportOptions=new h(a.exportOptions)),this.timeExtent=new f(a.timeExtent),this.timeReference=new g(a.timeReference))}});c.mixin(b,{UNIT_CENTURIES:"esriTimeUnitsCenturies",UNIT_DAYS:"esriTimeUnitsDays",
UNIT_DECADES:"esriTimeUnitsDecades",UNIT_HOURS:"esriTimeUnitsHours",UNIT_MILLISECONDS:"esriTimeUnitsMilliseconds",UNIT_MINUTES:"esriTimeUnitsMinutes",UNIT_MONTHS:"esriTimeUnitsMonths",UNIT_SECONDS:"esriTimeUnitsSeconds",UNIT_UNKNOWN:"esriTimeUnitsUnknown",UNIT_WEEKS:"esriTimeUnitsWeeks",UNIT_YEARS:"esriTimeUnitsYears"});d("extend-esri")&&c.setObject("layers.TimeInfo",b,e);return b});