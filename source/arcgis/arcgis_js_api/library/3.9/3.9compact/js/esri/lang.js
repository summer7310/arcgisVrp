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
define("esri/lang","dojo/_base/array dojo/_base/json dojo/_base/kernel dojo/_base/lang dojo/date dojo/has dojo/number dojo/date/locale esri/kernel".split(" "),function(l,s,t,f,u,v,w,x,n){function q(b,d,a){return[f.isString(b)?b.split(""):b,d||t.global,f.isString(a)?new Function("item","index","array",a):a]}function h(b){return void 0!==b&&null!==b}function m(b,d,a){var c=a.match(/([^\(]+)(\([^\)]+\))?/i),e=f.trim(c[1]);a=d[b];var c=s.fromJson((c[2]?f.trim(c[2]):"()").replace(/^\(/,"({").replace(/\)$/,
"})")),g=c.utcOffset;if(-1===l.indexOf(y,e))e=f.getObject(e),f.isFunction(e)&&(a=e(a,b,d));else if("number"===typeof a||"string"===typeof a&&a&&!isNaN(Number(a)))switch(a=Number(a),e){case "NumberFormat":return w.format(a,c);case "DateString":b=new Date(a);if(c.local||c.systemLocale)return c.systemLocale?b.toLocaleDateString()+(c.hideTime?"":" "+b.toLocaleTimeString()):b.toDateString()+(c.hideTime?"":" "+b.toTimeString());b=b.toUTCString();c.hideTime&&(b=b.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,
""));return b;case "DateFormat":return b=new Date(a),h(g)&&(b=u.add(b,"minute",b.getTimezoneOffset()-g)),x.format(b,c)}return h(a)?a:""}function p(b,d){var a;if(d)for(a in b)b.hasOwnProperty(a)&&(void 0===b[a]||null===b[a]?delete b[a]:b[a]instanceof Object&&p(b[a],!0));else for(a in b)b.hasOwnProperty(a)&&void 0===b[a]&&delete b[a];return b}var y=["NumberFormat","DateString","DateFormat"],r={valueOf:function(b,d){for(var a in b)if(b[a]==d)return a;return null},substitute:function(b,d,a){var c,e,g;
h(a)&&(f.isObject(a)?(c=a.first,e=a.dateFormat,g=a.numberFormat):c=a);if(!d||"${*}"===d){d=[];for(var k in b){a=b[k];if(e&&-1!==l.indexOf(e.properties||"",k))a=m(k,b,e.formatter||"DateString");else if(g&&-1!==l.indexOf(g.properties||"",k))a=m(k,b,g.formatter||"NumberFormat");d.push(k+" \x3d "+(h(a)?a:"")+"\x3cbr/\x3e");if(c)break}return d.join("")}return f.replace(d,f.hitch({obj:b},function(b,a){var c=a.split(":");return 1<c.length?(a=c[0],c.shift(),m(a,this.obj,c.join(":"))):e&&-1!==l.indexOf(e.properties||
"",a)?m(a,this.obj,e.formatter||"DateString"):g&&-1!==l.indexOf(g.properties||"",a)?m(a,this.obj,g.formatter||"NumberFormat"):h(this.obj[a])?this.obj[a]:""}),/\$\{([^\}]+)\}/g)},filter:function(b,d,a){d=q(b,a,d);a={};var c;b=d[0];for(c in b)d[2].call(d[c],b[c],c,b)&&(a[c]=b[c]);return a},isDefined:h,fixJson:p};v("extend-esri")&&(f.mixin(n,r),n._isDefined=h,n._getParts=q,n._sanitize=p);return r});