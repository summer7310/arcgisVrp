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
define("esri/kernel",["dojo/_base/kernel","dojo/_base/config","dojo/has"],function(c,d,e){var b=window.location,a=b.pathname,a={version:3.9,_appBaseUrl:b.protocol+"//"+b.host+a.substring(0,a.lastIndexOf(a.split("/")[a.split("/").length-1]))};d.noGlobals||(window.esri=a);c.isAsync||e.add("extend-esri",1);(a.dijit=a.dijit||{})._arcgisUrl=b.protocol+"//www.arcgis.com/sharing/rest";return a});