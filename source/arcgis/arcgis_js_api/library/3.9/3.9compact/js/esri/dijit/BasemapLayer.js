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
define("esri/dijit/BasemapLayer",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(b,c,d,e){b=b(null,{declaredClass:"esri.dijit.BasemapLayer",constructor:function(a){a=a||{};!a.url&&!a.type&&console.error("esri.dijit.BasemapLayer: unable to find the 'url' or 'type' property in parameters");this.url=a.url;this.type=a.type;this.isReference=!0===a.isReference?!0:!1;this.opacity=a.opacity;this.visibleLayers=a.visibleLayers;this.displayLevels=a.displayLevels;this.bandIds=a.bandIds;
this.copyright=a.copyright;this.subDomains=a.subDomains;this.fullExtent=a.fullExtent;this.initialExtent=a.initialExtent;this.tileInfo=a.tileInfo;this.tileServers=a.tileServers}});d("extend-esri")&&c.setObject("dijit.BasemapLayer",b,e);return b});