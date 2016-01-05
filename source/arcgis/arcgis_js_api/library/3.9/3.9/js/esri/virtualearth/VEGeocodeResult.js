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
define("esri/virtualearth/VEGeocodeResult","dojo/_base/declare dojo/_base/lang dojo/has esri/kernel esri/geometry/Point esri/geometry/Extent esri/virtualearth/VEAddress".split(" "),function(a,b,c,d,e,f,g){a=a(null,{declaredClass:"esri.virtualearth.VEGeocodeResult",constructor:function(a){b.mixin(this,{address:null,bestView:null,calculationMethod:null,confidence:null,displayName:null,entityType:null,location:null,matchCodes:null},a);this.address&&(this.address=new g(this.address));this.bestView&&(this.bestView=
new f(this.bestView));this.locationArray&&(this.calculationMethod=this.locationArray[0].calculationMethod,this.location=new e(this.locationArray[0]))}});c("extend-esri")&&b.setObject("virtualearth.VEGeocodeResult",a,d);return a});