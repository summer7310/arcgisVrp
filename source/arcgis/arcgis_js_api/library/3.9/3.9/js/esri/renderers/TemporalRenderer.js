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
define("esri/renderers/TemporalRenderer",["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/renderers/Renderer"],function(a,f,g,h,k){a=a(k,{declaredClass:"esri.renderer.TemporalRenderer",constructor:function(b,a,d,c){this.observationRenderer=b;this.latestObservationRenderer=a;this.trackRenderer=d;this.observationAger=c},getSymbol:function(b){var a=b.getLayer(),d=this.getObservationRenderer(b),c=d&&d.getSymbol(b),e=this.observationAger;a.timeInfo&&(a._map.timeExtent&&d===this.observationRenderer&&
e&&c)&&(c=e.getAgedSymbol(c,b));return c},getObservationRenderer:function(a){return 0===a.getLayer()._getKind(a)?this.observationRenderer:this.latestObservationRenderer||this.observationRenderer}});g("extend-esri")&&f.setObject("renderer.TemporalRenderer",a,h);return a});