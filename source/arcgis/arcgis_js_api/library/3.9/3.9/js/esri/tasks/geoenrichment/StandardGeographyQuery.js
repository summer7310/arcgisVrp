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
define("esri/tasks/geoenrichment/StandardGeographyQuery","../../declare ./taskHelper esri/tasks/FeatureSet ./GeographyQueryBase ./GeographyQuery ./SubGeographyQuery".split(" "),function(c,b,d,e,f,g){return c("esri.tasks.geoenrichment.StandardGeographyQuery",null,{constructor:function(a){this.url=a||location.protocol+"//geoenrich.arcgis.com/arcgis/rest/services/World/GeoenrichmentServer"},execute:function(a){return b.invokeMethod(this,"/StandardGeographyQuery/execute",function(){a instanceof e||(a=
a.returnSubGeographyLayer?new g(a):new f(a));return b.jsonToRest(a.toJson())},function(a){(!a.results||1>a.results.length||!a.results[0].value)&&b.throwEmptyResponse();return{featureSet:new d(a.results[0].value),messages:a.messages}},"onExecuteComplete","onError")},onExecuteComplete:function(a){},onError:function(a){}})});