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
require({cache:{"url:esri/dijit/templates/FontAlignment.html":'\x3cdiv class\x3d"esriFontAlignment"\x3e\n  \x3cdiv class\x3d"top"\x3e\n    \x3cbutton class\x3d"icon" value\x3d"top,left" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"top-left"\x3e\x3c/div\x3e\x3c/button\x3e\n    \x3cbutton class\x3d"icon" value\x3d"top,center" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"top-mid"\x3e\x3c/button\x3e\n    \x3cbutton class\x3d"icon" value\x3d"top,right" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"top-right"\x3e\x3c/button\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"mid"\x3e\n    \x3cbutton class\x3d"icon" value\x3d"middle,left" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"mid-left"\x3e\x3c/button\x3e\n    \x3cbutton class\x3d"icon" value\x3d"middle,center" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"mid-mid"\x3e\x3c/button\x3e\n    \x3cbutton class\x3d"icon" value\x3d"middle,right" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"mid-right"\x3e\x3c/button\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"bot"\x3e\n    \x3cbutton class\x3d"icon" value\x3d"baseline,left" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"bot-left"\x3e\x3c/button\x3e\n    \x3cbutton class\x3d"icon" value\x3d"baseline,center" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"bot-mid"\x3e\x3c/button\x3e\n    \x3cbutton class\x3d"icon" value\x3d"baseline,right" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"bot-right"\x3e\x3c/button\x3e\n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/FontAlignment","require dojo/_base/declare dojo/_base/lang dojo/has esri/kernel dojo/_base/array dojo/query dojo/dom-style dijit/_Widget dijit/_TemplatedMixin dojo/text!esri/dijit/templates/FontAlignment.html".split(" "),function(a,c,g,h,k,e,f,b,l,m,n){a=c([l,m],{declaredClass:"esri.dijit.FontAlignment",widgetsInTemplate:!0,templateString:n,_imageUrl:a.toUrl("esri/dijit/images/positionSprite.png"),constructor:function(d,a){},destroy:function(){this.inherited(arguments)},setValue:function(d){this.value=
d;var a=f("button",this.domNode);e.forEach(a,function(a){b.set(a,{border:"1px solid #bfbfbf"});a.value===d&&b.set(a,{border:"1px solid #2c6dc2"})})},getValue:function(){return this.value},changeValue:function(a){var c=f("button",this.domNode);e.forEach(c,function(a){b.set(a,{border:"1px solid #bfbfbf"})});b.set(a.currentTarget,{border:"1px solid #2c6dc2"});this.value=a.currentTarget.value;this.emit("change",{value:this.value})}});h("extend-esri")&&g.setObject("dijit.FontAlignment",a,k);return a});