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
define("esri/ServerInfo",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/lang"],function(a,b,c,d,e){a=a(null,{declaredClass:"esri.ServerInfo",constructor:function(a){b.mixin(this,a)},toJson:function(){return e.fixJson({server:this.server,tokenServiceUrl:this.tokenServiceUrl,adminTokenServiceUrl:this.adminTokenServiceUrl,shortLivedTokenValidity:this.shortLivedTokenValidity,owningSystemUrl:this.owningSystemUrl,owningTenant:this.owningTenant,currentVersion:this.currentVersion,
hasPortal:this.hasPortal,hasServer:this.hasServer,webTierAuth:this.webTierAuth})}});c("extend-esri")&&(d.ServerInfo=a);return a});