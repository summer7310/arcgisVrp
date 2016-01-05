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
define("esri/dijit/geoenrichment/config",[],function(){return{portalUrl:location.protocol+"//arcgis.com",server:location.protocol+"//geoenrich.arcgis.com/arcgis/rest/services/World/GeoenrichmentServer",levels:["Admin3","Admin2"],highestLevel:"Admin1",locatorUrl:location.protocol+"//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",addressFormat:"${Address}, ${City}, ${Region} ${Postal}"}});