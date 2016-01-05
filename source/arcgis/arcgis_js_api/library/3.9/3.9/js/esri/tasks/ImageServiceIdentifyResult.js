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
define("esri/tasks/ImageServiceIdentifyResult","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/geometry/jsonUtils esri/tasks/FeatureSet".split(" "),function(b,c,d,e,f,g){b=b(null,{declaredClass:"esri.tasks.ImageServiceIdentifyResult",constructor:function(a){a.catalogItems&&(this.catalogItems=new g(a.catalogItems));a.location&&(this.location=f.fromJson(a.location));this.catalogItemVisibilities=a.catalogItemVisibilities;this.name=a.name;this.objectId=a.objectId;this.value=a.value;this.properties=
a.properties}});d("extend-esri")&&c.setObject("tasks.ImageServiceIdentifyResult",b,e);return b});