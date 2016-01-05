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
define("esri/tasks/geoenrichment/GeographyQuery",["../../declare","./GeographyQueryBase"],function(b,c){return b("esri.tasks.geoenrichment.GeographyQuery",[c],{geographyLayerIDs:null,geographyIDs:null,where:null,constructor:function(a){a&&(a.geographyLayers&&(this.geographyLayerIDs=a.geographyLayers.split(";")),a.geographyIDs&&(this.geographyIDs=a.geographyIDs),a.geographyQuery&&(this.where=a.geographyQuery))},toJson:function(){var a=this.inherited(arguments);this.geographyLayerIDs&&(a.geographyLayers=
this.geographyLayerIDs.join(";"));this.geographyIDs&&(a.geographyIDs=this.geographyIDs);this.where&&(a.geographyQuery=this.where);return a}})});