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
define("esri/domUtils",["dojo/_base/connect","dojo/_base/lang","dojo/dom-style","dojo/has","esri/kernel"],function(n,r,s,p,t){var q={show:function(a){a&&(a.style.display="block")},hide:function(a){a&&(a.style.display="none")},toggle:function(a){a.style.display="none"===a.style.display?"block":"none"},documentBox:p("ie")?{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}:{w:window.innerWidth,h:window.innerHeight},setScrollable:function(a){var f=0,g=0,h=0,k=0,l=0,m=0;return[n.connect(a,
"ontouchstart",function(d){f=d.touches[0].screenX;g=d.touches[0].screenY;h=a.scrollWidth;k=a.scrollHeight;l=a.clientWidth;m=a.clientHeight}),n.connect(a,"ontouchmove",function(d){d.preventDefault();var e=a.firstChild;e instanceof Text&&(e=a.childNodes[1]);var b=e._currentX||0,c=e._currentY||0,b=b+(d.touches[0].screenX-f);0<b?b=0:0>b&&Math.abs(b)+l>h&&(b=-1*(h-l));e._currentX=b;c+=d.touches[0].screenY-g;0<c?c=0:0>c&&Math.abs(c)+m>k&&(c=-1*(k-m));e._currentY=c;s.set(e,{"-webkit-transition-property":"-webkit-transform",
"-webkit-transform":"translate("+b+"px, "+c+"px)"});f=d.touches[0].screenX;g=d.touches[0].screenY})]}};p("extend-esri")&&r.mixin(t,q);return q});