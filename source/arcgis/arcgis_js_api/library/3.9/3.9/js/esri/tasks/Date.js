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
define("esri/tasks/Date",["dojo/_base/declare","dojo/_base/lang","dojo/date/locale","dojo/has","esri/kernel"],function(a,c,b,d,e){a=a(null,{declaredClass:"esri.tasks.Date",constructor:function(a){a&&(a.format&&(this.format=a.format),this.date=b.parse(a.date,{selector:"date",datePattern:this.format}))},date:new Date,format:"EEE MMM dd HH:mm:ss zzz yyyy",toJson:function(){return{date:b.format(this.date,{selector:"date",datePattern:this.format}),format:this.format}}});d("extend-esri")&&c.setObject("tasks.Date",
a,e);return a});