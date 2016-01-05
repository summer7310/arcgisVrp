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
define("esri/tasks/FindTask","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/has esri/kernel esri/request esri/deferredUtils esri/tasks/Task esri/tasks/FindResult".split(" "),function(b,c,f,k,l,m,n,p,q,r){b=b(q,{declaredClass:"esri.tasks.FindTask",constructor:function(a,g){this._url.path+="/find";this._handler=c.hitch(this,this._handler);this.gdbVersion=g&&g.gdbVersion},_handler:function(a,g,b,c,e){try{var d=[];f.forEach(a.results,function(a,b){d[b]=new r(a)});this._successHandler([d],
"onComplete",b,e)}catch(s){this._errorHandler(s,c,e)}},execute:function(a,b,h){a=this._encode(c.mixin({},this._url.query,{f:"json"},a.toJson()));var f=this._handler,e=this._errorHandler;this.gdbVersion&&(a.gdbVersion=this.gdbVersion);var d=new k(p._dfdCanceller);d._pendingDfd=n({url:this._url.path,content:a,callbackParamName:"callback",load:function(a,c){f(a,c,b,h,d)},error:function(a){e(a,h,d)}});return d},onComplete:function(){}});l("extend-esri")&&c.setObject("tasks.FindTask",b,m);return b});