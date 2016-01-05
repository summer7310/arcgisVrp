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
define("esri/tasks/geoenrichment/EnrichParametersBase",["../../declare","esri/SpatialReference","./StudyAreaOptions","./studyAreaFromJson","./studyAreaOptionsFromJson"],function(g,h,k,l,f){return g("esri.tasks.geoenrichment.EnrichParametersBase",null,{studyAreaOptions:null,studyAreas:null,countryID:null,datasetID:null,constructor:function(a){this.studyAreas=[];if(a){if(a.studyAreas){var b;a.inSR&&(b=a.inSR);for(var c=a.studyAreas,d=0;d<c.length;d++){var e=l(c[d]);b&&e.geometry&&e.geometry.setSpatialReference(new h(b));
this.studyAreas.push(e)}}a.studyAreasOptions?this.studyAreaOptions=f(a.studyAreasOptions):a.studyAreaOptions&&(this.studyAreaOptions=a.studyAreaOptions instanceof k?a.studyAreaOptions:f(a.studyAreaOptions));(b=a.useData)?(b.sourceCountry&&(this.countryID=b.sourceCountry),b.dataset&&(this.datasetID=b.dataset)):(a.countryID&&(this.countryID=a.countryID),a.datasetID&&(this.datasetID=a.datasetID))}},toJson:function(){for(var a={},b=[],c=0;c<this.studyAreas.length;c++)b.push(this.studyAreas[c].toJson());
0<b.length&&(a.studyAreas=b);this.studyAreaOptions&&(a.studyAreasOptions=this.studyAreaOptions.toJson());if(this.countryID||this.datasetID)b={},this.countryID&&(b.sourceCountry=this.countryID),this.datasetID&&(b.dataset=this.datasetID),a.useData=b;return a}})});