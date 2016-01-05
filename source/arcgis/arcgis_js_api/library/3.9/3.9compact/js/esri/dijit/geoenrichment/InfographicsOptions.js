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
define("esri/dijit/geoenrichment/InfographicsOptions","../../declare dojo/_base/lang dojo/Deferred dojo/string ../../tasks/geoenrichment/studyAreaOptionsFromJson ../../tasks/geoenrichment/GeoenrichmentTask ./lang ./config ./InfographicsOptionsItem".split(" "),function(g,s,w,A,x,y,l,n,t){function z(a,c){var b=parseFloat(a.index),e=parseFloat(c.index);return isNaN(b)&&isNaN(e)?0:isNaN(b)?1:isNaN(e)?-1:b-e}function u(a,c){for(var b=0;b<a.length;b++){var e=a[b];if(e.type==c.type&&l.arraysEqual(e.variables,
c.variables))return{report:e,index:b}}return null}function p(a,c){if(a)for(var b in a){c[b]=[];for(var e=0;e<a[b].length;e++){var d={};v(a[b][e],d);c[b].push(d)}}}function v(a,c){c.type=a.type||("OneVarMultiComparison"==a.report?"OneVar":a.report);if(a.dataCollection)if(a.vars){c.variables=[];for(var b=0;b<a.vars.length;b++)c.variables.push(a.dataCollection+"."+a.vars[b])}else c.variables=[a.dataCollection+".*"];else c.variables=a.variables;l.isBoolean(a.isVisible)?c.isVisible=a.isVisible:l.isBoolean(a.checked)&&
(c.isVisible=a.checked)}g=g("esri.dijit.geoenrichment.InfographicsOptions",null,{_items:null,_loaded:null,studyAreaOptions:null,theme:"common",constructor:function(a){this._loaded={};this.studyAreaOptions=x(a&&(a.buffer||a.studyAreaOptions));this._items={};a&&(p(a.reports||a.items,this._items),a.theme&&(this.theme=a.theme))},toJson:function(){var a={};p(this._items,a);return{studyAreaOptions:this.studyAreaOptions.toJson(),items:a,theme:this.theme}},getItems:function(a){var c=new w;if(this._loaded[a])c.resolve(this._items[a]);
else{var b=new y(n.server);b.token=n.token;b.getDataCollections(a).then(s.hitch(this,this._mergeItems,a,c),function(a){c.reject(a)})}return c.promise},_mergeItems:function(a,c,b){try{for(var e=[],d=0;d<b.length;d++){var h=b[d].metadata.infographics;if(h){var k=JSON.parse(h),g;for(g in k){var q=new t(g,[b[d].id+".*"]),l;for(l in k[g])q[l]=k[g][l];var m=u(e,q);m?e[m.index]=q:e.push(q)}}}var r,f=this._items[a];f||(f=[],f.push(new t("OneVar",["KeyGlobalFacts.AVGHHSZ"])),this._items[a]=f);for(d=f.length-
1;0<=d;d--)if(m=u(e,f[d]))v(f[d],m.report),f[d]=m.report,e.splice(m.index,1);else{if("OneVar"==f[d].type&&1==f[d].variables.length){var n,p=f[d].variables[0];if(!r){r={};for(h=0;h<b.length;h++)for(k=0;k<b[h].variables.length;k++)r[b[h].id+"."+b[h].variables[k].id]=b[h].variables[k]}if(n=r[p]){f[d].title=n.alias;continue}}f.splice(d,1);d--}for(d=0;d<e.length;d++)f.push(e[d]);f.sort(z);this._loaded[a]=!0;c.resolve(f)}catch(s){c.reject(s)}}});g.Item=t;return g});