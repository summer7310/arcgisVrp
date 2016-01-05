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
define("esri/dijit/analysis/tree","dojo/_base/declare dojo/_base/array dojo/_base/Deferred dojo/_base/lang dojo/query dojo/on dojo/aspect dgrid/util/has-css3 dgrid/Grid dojo/has!touch?dgrid/util/touch put-selector/put".split(" "),function(C,x,y,z,r,A,f,t,B,u,k){function v(c,f,l,d){d=this.grid.isRTL?"right":"left";var b=".dgrid-expando-icon";f&&(b+=".ui-icon.ui-icon-triangle-1-"+(l?"se":"e"));c=k("div"+b+"[style\x3dmargin-"+d+": "+c*(this.indentWidth||9)+"px; float: "+d+"]");c.innerHTML="\x26nbsp;";
return c}function w(c){var f=this,l=this.style.height;l&&(this.style.display="0px"==l?"none":"block");c&&(k(this,".dgrid-tree-resetting"),setTimeout(function(){k(f,"!dgrid-tree-resetting")}));this.style.height=""}function m(c){var m=c.renderCell||B.defaultRenderCell,l,d;c||(c={});c.shouldExpand=c.shouldExpand||function(b,c,e){return e};f.after(c,"init",function(){var b=c.grid,n=".dgrid-content .dgrid-column-"+c.id,e=[];b.cleanEmptyObservers=!1;if(!b.store)throw Error("dgrid tree column plugin requires a store to operate.");
c.renderExpando||(c.renderExpando=v);e.push(b.on(c.expandOn||".dgrid-expando-icon:click,"+n+":dblclick,"+n+":keydown",function(a){var c=b.row(a);(!b.store.mayHaveChildren||b.store.mayHaveChildren(c.data))&&(("keydown"!=a.type||32==a.keyCode)&&!("dblclick"==a.type&&d&&1<d.count&&c.id==d.id&&-1<a.target.className.indexOf("dgrid-expando-icon")))&&b.expand(c);-1<a.target.className.indexOf("dgrid-expando-icon")&&(d&&d.id==b.row(a).id?d.count++:d={id:b.row(a).id,count:1})}));t("touch")&&e.push(b.on(u.selector(n,
u.dbltap),function(){b.expand(this)}));b._expanded||(b._expanded={});e.push(f.after(b,"insertRow",function(a){var b=this.row(a);c.shouldExpand(b,l,this._expanded[b.id])&&this.expand(a,!0,!0);return a}));e.push(f.before(b,"removeRow",function(a,c){var g=a.connected;g&&(r("\x3e.dgrid-row",g).forEach(function(a){b.removeRow(a,!0)}),c||k(g,"!"))}));c.collapseOnRefresh&&e.push(f.after(b,"cleanup",function(){this._expanded={}}));b._calcRowHeight=function(a){var b=a.connected;return a.offsetHeight+(b?b.offsetHeight:
0)};b.expand=function(a,p,g){var e=a.element?a:b.row(a),d=t("transitionend");a=e.element;if((a=-1<a.className.indexOf("dgrid-expando-icon")?a:r(".dgrid-expando-icon",a)[0])&&a.mayHaveChildren&&(g||p!==!!this._expanded[e.id])){var f=void 0===p?!this._expanded[e.id]:p;k(a,".ui-icon-triangle-1-"+(f?"se":"e")+"!ui-icon-triangle-1-"+(f?"e":"se"));var l=a.preloadNode;p=e.element;var h,q,n,m={originalQuery:this.query};if(!l){h=p.connected=k("div.dgrid-tree-container");var l=a.preloadNode=k(p,"+",h,"div.dgrid-preload"),
s=function(a){return b.store.getChildren(e.data,a)};c.allowDuplicates&&(m.parentId=e.id);"level"in a&&(s.level=a.level);y.when(b.renderQuery?b._trackError(function(){return b.renderQuery(s,l,m)}):b.renderArray(s(m),l,"level"in s?{queryLevel:s.level}:{}),function(){if(b._expanded[e.id]&&d){var a=h.scrollHeight;h.style.height=a?a+"px":"auto"}});d?A(h,d,w):w.call(h)}h=p.connected;h.hidden=!f;q=h.style;!d||g?(q.display=f?"block":"none",q.height=""):(f?(q.display="block",n=h.scrollHeight,q.height="0px"):
(k(h,".dgrid-tree-resetting"),q.height=h.scrollHeight+"px"),setTimeout(function(){k(h,"!dgrid-tree-resetting");q.height=f?n?n+"px":"auto":"0px"}));f?this._expanded[e.id]=!0:delete this._expanded[e.id]}};f.after(c,"destroy",function(){x.forEach(e,function(a){a.remove()});delete b.expand;delete b._calcRowHeight})});c.renderCell=function(b,f,e,a){var d=c.grid,g=Number(a&&a.queryLevel)+1,k=!d.store.mayHaveChildren||d.store.mayHaveChildren(b),r=a.parentId,g=l=isNaN(g)?0:g,d=c.renderExpando(g,k,d._expanded[(r?
r+"-":"")+d.store.getIdentity(b)],b);d.level=g;d.mayHaveChildren=k;a.level=g;m.call(c,b,f,e,a);e.insertBefore(d,e.firstChild)};return c}m.defaultRenderExpando=v;z.getObject("esri.dijit.analysis.tree",!0);return esri.dijit.analysis.tree=m});