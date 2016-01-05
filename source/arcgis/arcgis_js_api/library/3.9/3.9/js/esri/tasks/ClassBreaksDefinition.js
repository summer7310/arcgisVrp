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
define("esri/tasks/ClassBreaksDefinition",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/tasks/ClassificationDefinition"],function(d,b,e,f,g){d=d(g,{declaredClass:"esri.tasks.ClassBreaksDefinition",type:"classBreaksDef",classificationField:null,classificationMethod:null,breakCount:null,standardDeviationInterval:null,normalizationType:null,normalizationField:null,toJson:function(){var c=this.inherited(arguments),a;switch(this.classificationMethod.toLowerCase()){case "natural-breaks":a=
"esriClassifyNaturalBreaks";break;case "equal-interval":a="esriClassifyEqualInterval";break;case "quantile":a="esriClassifyQuantile";break;case "standard-deviation":a="esriClassifyStandardDeviation";break;case "geometrical-interval":a="esriClassifyGeometricalInterval";break;default:a=this.classificationMethod}b.mixin(c,{type:this.type,classificationField:this.classificationField,classificationMethod:a,breakCount:this.breakCount});if(this.normalizationType){switch(this.normalizationType.toLowerCase()){case "field":a=
"esriNormalizeByField";break;case "log":a="esriNormalizeByLog";break;case "percent-of-total":a="esriNormalizeByPercentOfTotal";break;default:a=this.normalizationType}b.mixin(c,{normalizationType:a})}this.normalizationField&&b.mixin(c,{normalizationField:this.normalizationField});this.standardDeviationInterval&&b.mixin(c,{standardDeviationInterval:this.standardDeviationInterval});return c}});e("extend-esri")&&b.setObject("tasks.ClassBreaksDefinition",d,f);return d});