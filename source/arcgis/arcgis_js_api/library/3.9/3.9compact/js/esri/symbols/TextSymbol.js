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
define("esri/symbols/TextSymbol","dojo/_base/declare dojo/_base/lang dojo/has dojox/gfx/_base esri/kernel esri/lang esri/Color esri/symbols/Symbol esri/symbols/Font".split(" "),function(c,e,n,f,k,l,m,p,g){var h={type:"textsymbol",x:0,y:0,text:"",rotated:!1,kerning:!0,color:[0,0,0,1],font:f.defaultFont,angle:0,xoffset:0,yoffset:0,horizontalAlignment:"center"},q={start:"left",middle:"center",end:"right"},r={left:"start",center:"middle",right:"end",justify:"start"},s={top:"text-before-edge",middle:"central",
baseline:"alphabetic",bottom:"text-after-edge"};c=c(p,{declaredClass:"esri.symbol.TextSymbol",angle:0,xoffset:0,yoffset:0,constructor:function(a,b,d){e.mixin(this,h);this.font=new g(this.font);this.color=new m(this.color);a&&(e.isObject(a)?(e.mixin(this,a),this.color&&l.isDefined(this.color[0])&&(this.color=m.toDojoColor(this.color)),this.type="textsymbol",this.font=new g(this.font),this.xoffset=f.pt2px(this.xoffset),this.yoffset=f.pt2px(this.yoffset),this.angle&&(this.angle*=-1)):(this.text=a,b&&
(this.font=b),d&&(this.color=d)));this.setAlign(this.align||this.getSVGAlign())},setFont:function(a){this.font=a;return this},setAngle:function(a){this.angle=a;return this},setOffset:function(a,b){this.xoffset=a;this.yoffset=b;return this},setAlign:function(a){this.align=a;this.setHorizontalAlignment(a&&q[a.toLowerCase()]||"center");return this},setHorizontalAlignment:function(a){this.horizontalAlignment=a;return this},getSVGAlign:function(){var a=this.horizontalAlignment;return a=a&&r[a.toLowerCase()]||
"middle"},setVerticalAlignment:function(a){this.verticalAlignment=a;return this},getSVGBaseline:function(){var a=this.verticalAlignment;return a&&s[a.toLowerCase()]||"alphabetic"},getSVGBaselineShift:function(){return"bottom"===this.verticalAlignment?"super":null},setDecoration:function(a){this.decoration=a;this.font||this.setFont(new g);this.font.setDecoration(a);return this},setRotated:function(a){this.rotated=a;return this},setKerning:function(a){this.kerning=a;return this},setText:function(a){this.text=
a;return this},getStroke:function(){return null},getFill:function(){return this.color},getWidth:function(){var a=this.getHeight(),b=0,d,c;for(d=0;d<this.text.length;d++)c=this.text.charAt(d),b=c==c.toUpperCase()?b+0.7*a:b+0.5*a;return b},getHeight:function(){return f.normalizedLength(this.font.size)},toJson:function(){var a=f.px2pt(this.xoffset),b=f.px2pt(this.yoffset),a=isNaN(a)?void 0:a,b=isNaN(b)?void 0:b;return l.fixJson(e.mixin(this.inherited("toJson",arguments),{type:"esriTS",backgroundColor:this.backgroundColor,
borderLineColor:this.borderLineColor,borderLineSize:this.borderLineSize,haloSize:this.haloSize,haloColor:this.haloColor,verticalAlignment:this.verticalAlignment,horizontalAlignment:this.horizontalAlignment,rightToLeft:this.rightToLeft,width:this.width,angle:this.angle&&-1*this.angle,xoffset:a,yoffset:b,text:this.text,rotated:this.rotated,kerning:this.kerning,font:this.font.toJson()}))}});e.mixin(c,{ALIGN_START:"start",ALIGN_MIDDLE:"middle",ALIGN_END:"end",DECORATION_NONE:"none",DECORATION_UNDERLINE:"underline",
DECORATION_OVERLINE:"overline",DECORATION_LINETHROUGH:"line-through"});c.defaultProps=h;n("extend-esri")&&(e.setObject("symbol.TextSymbol",c,k),k.symbol.defaultTextSymbol=h);return c});