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
define("esri/renderers/Renderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has esri/kernel esri/Color".split(" "),function(m,k,p,s,t,q){m=m(null,{declaredClass:"esri.renderer.Renderer",constructor:function(a){if(a&&!a.declaredClass){this.rotationInfo=a.rotationInfo;if(!this.rotationInfo){var b=a.rotationType,c=a.rotationExpression;if(b||c)this.rotationInfo={type:b,expression:c}}this.setRotationInfo(this.rotationInfo);this.setProportionalSymbolInfo(a.proportionalSymbolInfo);this.setColorInfo(a.colorInfo)}this.getSymbol=
k.hitch(this,this.getSymbol)},getSymbol:function(a){},setRotationInfo:function(a){if((a=this.rotationInfo="string"===typeof a?{field:a}:a)&&a.expression&&!a.field){var b=a.expression.match(this.rotationRE);b&&b[1]&&(a.field=b[1])}return this},rotationRE:/^\[([^\]]+)\]$/i,getRotationAngle:function(a){var b=this.rotationInfo,c="arithmetic"===b.type,b=b.field,d=a.attributes,e=0;b&&(k.isFunction(b)?e=b.apply(this,arguments):d&&(e=d[b]||0),e=(e+(c?-90:0))*(c?-1:1));return e},setProportionalSymbolInfo:function(a){this.proportionalSymbolInfo=
a;return this},getSize:function(a,b){var c=a.attributes,d=this.proportionalSymbolInfo,e=d&&d.field,f=0,g="number"===typeof a?a:null;if(e){var h=d.minSize,l=d.maxSize,n=d.minDataValue,m=d.maxDataValue,p=d.valueUnit||"unknown",q=d.valueRepresentation,d=d.normalizationField,r=c?parseFloat(c[d]):void 0,d=b&&b.shape;"number"!==typeof g&&(k.isFunction(e)?g=e.apply(this,arguments):c&&(g=c[e]||0));isNaN(r)||(g/=r);if(null!=h&&null!=l&&null!=n&&null!=m)f=g<=n?h:g>=m?l:h+(g-n)/(m-n)*(l-h);else if("unknown"===
p)null!=h&&null!=n&&(h&&n?(g/=n,f="circle"===d?2*Math.sqrt(g*Math.pow(h/2,2)):"square"===d||"diamond"===d||"image"===d?Math.sqrt(g*Math.pow(h,2)):g*h):f=g+(h||n),f=f<h?h:f,null!=l&&f>l&&(f=l));else{c=(b&&b.resolution?b.resolution:a.getLayer().getMap().getResolutionInMeters())*this._meterIn[p];if("area"===q)f=Math.sqrt(g/Math.PI)/c,f*=2;else if(f=g/c,"radius"===q||"distance"===q)f*=2;null!=h&&f<h&&(f=h);null!=l&&f>l&&(f=l)}}return f=isNaN(f)?0:f},setColorInfo:function(a){this.colorInfo=a;this._interpolateData();
return this},getColor:function(a){var b=a.attributes,c=this.colorInfo,d=c&&c.field,e="number"===typeof a?a:null,f;d&&(c=c.normalizationField,c=b?parseFloat(b[c]):void 0,"number"!==typeof e&&(k.isFunction(d)?e=d.apply(this,arguments):b&&(e=b[d]||0)),isNaN(c)||(e/=c),this._interpolatedValues&&(f=this._getColor(e)));return f},_interpolateData:function(){var a=this.colorInfo,b;if(a)if(a.colors){var c=a.colors.length,d=a.minDataValue,e=(a.maxDataValue-d)/(c-1);b=[];for(a=0;a<c;a++)b[a]=d+a*e}else a.stops&&
(b=p.map(a.stops,function(a){return a.value}));this._interpolatedValues=b},_getColor:function(a){a=this._getColorRange(a);var b=this.colorInfo,c;if(a){c=a[0];var d=a[1];c=c===d?this._getColorObj(b,c):q.blendColors(this._getColorObj(b,c),this._getColorObj(b,d),a[2])}return c},_getColorObj:function(a,b){return a.colors?a.colors[b]:a.stops[b].color},_getColorRange:function(a){var b=this._interpolatedValues,c;if(b){var d=0,e=b.length-1;p.some(b,function(b,c){if(a<b)return e=c,!0;d=c;return!1});c=[d,e,
(a-b[d])/(b[e]-b[d])]}return c},_meterIn:{inches:39.3701,feet:3.28084,yards:1.09361,miles:6.21371E-4,"nautical-miles":5.39957E-4,millimeters:1E3,centimeters:100,decimeters:10,meters:1,kilometers:0.0010,"decimal-degrees":180/20015077},toJson:function(){var a=this.proportionalSymbolInfo,b,c=this.colorInfo,d=this.rotationInfo;b=d&&d.field;var e=d&&(d.expression||b&&(k.isFunction(b)?b:"["+b+"]"));c&&(c=k.mixin({},c),c.colors&&(c.colors=p.map(c.colors,function(a){return k.isArray(a)?k.clone(a):q.toJsonColor(a)})),
c.stops&&(c.stops=p.map(c.stops,function(a){return{value:a.value,color:k.isArray(a.color)?k.clone(a.color):q.toJsonColor(a.color)}})));if(a&&(a=k.mixin({},a),b=a.legendOptions))if(a.legendOptions=k.mixin({},b),b=b.customValues)a.legendOptions.customValues=b.slice(0);return{rotationType:e&&(d.type||"geographic"),rotationExpression:e,colorInfo:c,proportionalSymbolInfo:a}}});s("extend-esri")&&k.setObject("renderer.Renderer",m,t);return m});