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
define("esri/dijit/analysis/GroupToggleButton","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/has dojo/dom-class dijit/form/ToggleButton esri/kernel".split(" "),function(b,e,f,c,g,d,h,k){b=e([h],{groupName:"defaultGroup",declaredClass:"esri.dijit.analysis.GroupToggleButton",postMixInProperties:function(){this.inherited(arguments);this.unselectChannel="/ButtonGroup/"+this.groupName;c.subscribe(this.unselectChannel,this,"doUnselect")},postCreate:function(){this.inherited(arguments);
d.add(this.domNode,"esriGroupButton")},doUnselect:function(a){a!==this&&this.checked&&this.set("checked",!1)},_setCheckedAttr:function(a,b){this.inherited(arguments);a&&c.publish(this.unselectChannel,[this]);d.toggle(this.focusNode,"esriGroupChecked",a);console.log("checked",this.id,a)}});g("extend-esri")&&f.setObject("dijit.analysis.GroupToggleButton",b,k);return b});