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
define("esri/tasks/GenerateRendererTask","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/number dojo/_base/json dojo/_base/Deferred dojo/has esri/kernel esri/lang esri/request esri/deferredUtils esri/urlUtils esri/renderers/jsonUtils esri/tasks/Task esri/tasks/QueryTask esri/tasks/query dojo/has!extend-esri?esri/tasks/GenerateRendererParameters dojo/has!extend-esri?esri/tasks/ClassificationDefinition dojo/has!extend-esri?esri/tasks/ClassBreaksDefinition dojo/has!extend-esri?esri/tasks/UniqueValueDefinition dojo/has!extend-esri?esri/tasks/ColorRamp dojo/has!extend-esri?esri/tasks/AlgorithmicColorRamp dojo/has!extend-esri?esri/tasks/MultipartColorRamp".split(" "),
function(s,m,l,q,n,t,r,u,v,E,w,x,y,z,A,B,C){m=m(A,{declaredClass:"esri.tasks.GenerateRendererTask",_eventMap:{complete:["renderer"]},constructor:function(a,d){l.isObject(a)&&"esri.layers.FeatureLayer"===a.declaredClass?a.url&&l.isString(a.url)?(this.url=a.url,this._url=y.urlToObject(this.url),this._url.path+="/generateRenderer"):this._features=a.graphics:(this.url=a,this._url.path+="/generateRenderer");this._handler=l.hitch(this,this._handler);this.source=d&&d.source;this.gdbVersion=d&&d.gdbVersion;
this.checkValueRange=d&&d.checkValueRange;this.registerConnectEvents()},_handler:function(a,d,h,e,f){try{var c;"esri.renderer.ClassBreaksRenderer"===a.declaredClass||"esri.renderer.UniqueValueRenderer"===a.declaredClass?c=a:(c=z.fromJson(a),"classBreaks"===a.type&&c.setMaxInclusive(!0));if(this.checkValueRange){var k=new B(this.url),b=new C,g=new esri.tasks.StatisticDefinition;g.statisticType="min";g.onStatisticField=this._field;var p=new esri.tasks.StatisticDefinition;p.statisticType="max";p.onStatisticField=
this._field;b.outStatistics=[g,p];k.execute(b).then(l.hitch(this,function(a){a=a.features[0].attributes;for(var b in a)if(0===b.toLowerCase().indexOf("min"))var d=a[b];else var e=a[b];c=this._processRenderer(c,this._prefix,this._unitLabel,this._formatLabel,this._precision,d,e);this._successHandler([c],"onComplete",h,f)}))}else c=this._processRenderer(c,this._prefix,this._unitLabel,this._formatLabel,this._precision),this._successHandler([c],"onComplete",h,f)}catch(D){this._errorHandler(D,e,f)}},_processRenderer:function(a,
d,h,e,f,c,k){"esri.renderer.ClassBreaksRenderer"===a.declaredClass?q.forEach(a.infos,function(b,g){0===g&&(void 0!==c&&null!==c)&&(b.minValue=c);g===a.infos.length-1&&(void 0!==k&&null!==k)&&(b.classMaxValue=b.maxValue=k);f&&(b.classMaxValue=b.maxValue=Math.round(b.maxValue/f)*f,b.minValue=Math.round(b.minValue/f)*f);e&&(b.label=n.format(b.minValue)+" - "+n.format(b.maxValue));d&&(b.label=d+" "+b.label);h&&(b.label=b.label+" "+h)}):q.forEach(a.infos,function(b,f){0===f&&(void 0!==c&&null!==c)&&(b.value=
c);f===a.infos.length-1&&(void 0!==k&&null!==k)&&(b.value=k);e&&(b.label=n.format(b.value));d&&(b.label=d+" "+b.label);h&&(b.label=b.label+" "+h)});return a},execute:function(a,d,h){var e,f=this._handler,c=this._errorHandler;this._precision=a.precision;this._prefix=a.prefix;this._unitLabel=a.unitLabel;this._formatLabel=a.formatLabel;if(this._features=a.features||this._features){e=new r;var k=this._features;s(["esri/tasks/generateRenderer"],function(b){var g;"esri.tasks.ClassBreaksDefinition"===a.classificationDefinition.declaredClass?
g=b.createClassBreaksRenderer({features:k,definition:a.classificationDefinition}):"esri.tasks.UniqueValueDefinition"===a.classificationDefinition.declaredClass&&(g=b.createUniqueValueRenderer({features:k,definition:a.classificationDefinition}));g?f(g,null,d,h,e):c(null,h,e)})}else{var b=l.mixin(a.toJson(),{f:"json"});this._field="esri.tasks.ClassBreaksDefinition"===a.classificationDefinition.declaredClass?a.classificationDefinition.classificationField:a.classificationDefinition.attributeField;if(this.source){var g=
{source:this.source.toJson()};b.layer=t.toJson(g)}this.gdbVersion&&(b.gdbVersion=this.gdbVersion);e=new r(x._dfdCanceller);e._pendingDfd=w({url:this._url.path,content:b,callbackParamName:"callback",load:function(a,b){f(a,b,d,h,e)},error:function(a){c(a,h,e)}})}return e},onComplete:function(){}});u("extend-esri")&&l.setObject("tasks.GenerateRendererTask",m,v);return m});