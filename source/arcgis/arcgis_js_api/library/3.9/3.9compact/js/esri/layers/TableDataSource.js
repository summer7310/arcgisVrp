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
define("esri/layers/TableDataSource","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/lang esri/layers/DataSource".split(" "),function(a,b,c,d,e,f){a=a(f,{declaredClass:"esri.layers.TableDataSource",toJson:function(){return e.fixJson({type:"table",workspaceId:this.workspaceId,dataSourceName:this.dataSourceName,gdbVersion:this.gdbVersion})}});c("extend-esri")&&b.setObject("layers.TableDataSource",a,d);return a});