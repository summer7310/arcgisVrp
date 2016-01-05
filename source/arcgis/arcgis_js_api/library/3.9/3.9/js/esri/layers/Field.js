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
define("esri/layers/Field","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/layers/RangeDomain esri/layers/CodedValueDomain".split(" "),function(b,c,d,e,f,g){b=b(null,{declaredClass:"esri.layers.Field",constructor:function(a){if(a&&c.isObject(a)&&(this.name=a.name,this.type=a.type,this.alias=a.alias,this.length=a.length,this.editable=a.editable,this.nullable=a.nullable,(a=a.domain)&&c.isObject(a)))switch(a.type){case "range":this.domain=new f(a);break;case "codedValue":this.domain=new g(a)}}});
d("extend-esri")&&c.setObject("layers.Field",b,e);return b});