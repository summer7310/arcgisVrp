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
define("esri/dijit/editing/Util",["dojo/_base/lang","dojo/_base/array","dojo/has","esri/kernel"],function(e,d,f,g){var c={},c={findFeatures:function(c,a,b){var h=a.objectIdField;a=d.filter(a.graphics,function(a){return d.some(c,function(b){return a.attributes[h]===b.objectId})});if(b)b(a);else return a},getSelection:function(c){var a=[];d.forEach(c,function(b){b=b.getSelectedFeatures();d.forEach(b,function(b){a.push(b)})});return a}};f("extend-esri")&&e.setObject("dijit.editing.Util.LayerHelper",
c,g);return c});