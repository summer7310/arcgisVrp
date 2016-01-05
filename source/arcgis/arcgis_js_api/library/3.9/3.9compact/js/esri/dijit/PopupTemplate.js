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
define("esri/dijit/PopupTemplate","dojo/_base/declare dojo/_base/lang dojo/has dojo/dom-construct esri/kernel esri/InfoTemplate esri/PopupInfo esri/dijit/PopupRenderer".split(" "),function(a,b,c,d,e,f,g,h){a=a([f,g],{declaredClass:"esri.dijit.PopupTemplate","-chains-":{constructor:"manual"},chartTheme:null,constructor:function(k,a){b.mixin(this,a);this.initialize(k,a)},getTitle:function(a){return this.info?this.getComponents(a).title:""},getContent:function(a){return this.info?(new h({template:this,
graphic:a,chartTheme:this.chartTheme},d.create("div"))).domNode:""}});c("extend-esri")&&b.setObject("dijit.PopupTemplate",a,e);return a});