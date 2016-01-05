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
define("esri/geometry/geodesicUtils","dojo/_base/array dojo/_base/lang dojo/has esri/kernel esri/SpatialReference esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon".split(" "),function(s,B,F,G,H,u,y,C){function v(a){var r=Math.PI/180,b=Math.sin(a.y*r),b=0.9933056200098026*(b/(1-0.006694379990197414*b*b)-6.111035746609262*Math.log((1-0.0818191908429643*b)/(1+0.0818191908429643*b)));return new u(6378137*a.x*r,3189068.5*b)}function x(a,r,b,d){var f=1/298.257223563,p=Math.sin(b);b=Math.cos(b);
a=(1-f)*Math.tan(a);var l=1/Math.sqrt(1+a*a),m=a*l,e=Math.atan2(a,b);a=l*p;for(var h=1-a*a,c=2.7233160610754688E11*h/4.040829998466145E13,t=1+c/16384*(4096+c*(-768+c*(320-175*c))),g=c/1024*(256+c*(-128+c*(74-47*c))),c=d/(6356752.31424518*t),w=2*Math.PI,k,n,q;1E-12<Math.abs(c-w);){q=Math.cos(2*e+c);k=Math.sin(c);n=Math.cos(c);var s=g*k*(q+g/4*(n*(-1+2*q*q)-g/6*q*(-3+4*k*k)*(-3+4*q*q))),w=c,c=d/(6356752.31424518*t)+s}d=m*k-l*n*b;d=Math.atan2(m*n+l*k*b,(1-f)*Math.sqrt(a*a+d*d));p=Math.atan2(k*p,l*n-
m*k*b);b=f/16*h*(4+f*(4-3*h));return new u((r+(p-(1-b)*f*a*(c+b*k*(q+b*n*(-1+2*q*q)))))/(Math.PI/180),d/(Math.PI/180),new H({wkid:4326}))}function z(a,r,b,d){var f=1/298.257223563,p=d-r,l=Math.atan((1-f)*Math.tan(a)),m=Math.atan((1-f)*Math.tan(b)),e=Math.sin(l),l=Math.cos(l),h=Math.sin(m),m=Math.cos(m),c=p,t,g=1E3,w,k,n,q,s;do{n=Math.sin(c);q=Math.cos(c);k=Math.sqrt(m*n*m*n+(l*h-e*m*q)*(l*h-e*m*q));if(0===k)return 0;q=e*h+l*m*q;s=Math.atan2(k,q);var u=l*m*n/k;w=1-u*u;n=q-2*e*h/w;isNaN(n)&&(n=0);var v=
f/16*w*(4+f*(4-3*w));t=c;c=p+(1-v)*f*u*(s+v*k*(n+v*q*(-1+2*n*n)))}while(1E-12<Math.abs(c-t)&&0<--g);if(0===g)return e=6371009*Math.acos(Math.sin(a)*Math.sin(b)+Math.cos(a)*Math.cos(b)*Math.cos(d-r)),h=d-r,l=Math.sin(h)*Math.cos(b),a=Math.cos(a)*Math.sin(b)-Math.sin(a)*Math.cos(b)*Math.cos(h),{azimuth:Math.atan2(l,a),geodesicDistance:e};a=2.7233160610754688E11*w/4.040829998466145E13;b=a/1024*(256+a*(-128+a*(74-47*a)));a=6356752.31424518*(1+a/16384*(4096+a*(-768+a*(320-175*a))))*(s-b*k*(n+b/4*(q*(-1+
2*n*n)-b/6*n*(-3+4*k*k)*(-3+4*n*n))));b=Math.atan2(m*Math.sin(c),l*h-e*m*Math.cos(c));e=Math.atan2(l*Math.sin(c),l*h*Math.cos(c)-e*m);return{azimuth:b,geodesicDistance:a,reverseAzimuth:e}}function D(a,r){var b=Math.PI/180;637.100877151506>r&&(r=637.100877151506);if(!(a instanceof y||a instanceof C))throw console.error("_geodesicDensify: the input geometry is neither polyline nor polygon"),Error("_geodesicDensify: the input geometry is neither polyline nor polygon");var d=a instanceof y,f=[],p;s.forEach(d?
a.paths:a.rings,function(a){f.push(p=[]);p.push([a[0][0],a[0][1]]);var m,e,h,c,t,g;m=a[0][0]*b;e=a[0][1]*b;for(t=0;t<a.length-1;t++)if(h=a[t+1][0]*b,c=a[t+1][1]*b,!(m===h&&e===c)){c=z(e,m,c,h);h=c.azimuth;c=c.geodesicDistance;var d=c/r;if(1<d){for(g=1;g<=d-1;g++){var k=x(e,m,h,g*r);p.push([k.x,k.y])}g=x(e,m,h,(c+Math.floor(d-1)*r)/2);p.push([g.x,g.y])}e=x(e,m,h,c);p.push([e.x,e.y]);m=e.x*b;e=e.y*b}});return d?new y({paths:f,spatialReference:a.spatialReference}):new C({rings:f,spatialReference:a.spatialReference})}
var A={esriMiles:1,esriKilometers:1.609344,esriFeet:5280,esriMeters:1609.34,esriYards:1760,esriNauticalMiles:0.869,esriCentimeters:160934,esriDecimeters:16093.4,esriInches:63360,esriMillimeters:1609340,esriAcres:1,esriAres:40.4685642,esriSquareKilometers:0.00404685642,esriSquareMiles:0.0015625,esriSquareFeet:43560,esriSquareMeters:4046.85642,esriHectares:0.404685642,esriSquareYards:4840,esriSquareInches:6272640,esriSquareMillimeters:4046856420,esriSquareCentimeters:4.04685642E7,esriSquareDecimeters:404685.642},
E={geodesicDensify:D,geodesicLengths:function(a,r){var b=Math.PI/180,d=[];s.forEach(a,function(a,p){var l=0;s.forEach(a.paths,function(a,e){var h=0,c,d,g,f,k;for(c=1;c<a.length;c++)d=a[c-1][0]*b,g=a[c][0]*b,f=a[c-1][1]*b,k=a[c][1]*b,f===k&&d===g||(d=z(f,d,k,g),h+=d.geodesicDistance/1609.344);l+=h});l*=A[r];d.push(l)});return d},geodesicAreas:function(a,r){var b=[];s.forEach(a,function(a,d){var e=D(a,1E4);b.push(e)});var d=[],f,p;s.forEach(b,function(a,b){var e=0;s.forEach(a.rings,function(a,b){f=
v(new u(a[0][0],a[0][1]));p=v(new u(a[a.length-1][0],a[a.length-1][1]));var d=p.x*f.y-f.x*p.y,g;for(g=0;g<a.length-1;g++)f=v(new u(a[g+1][0],a[g+1][1])),p=v(new u(a[g][0],a[g][1])),d+=p.x*f.y-f.x*p.y;e+=d/4046.87});e*=A[r];d.push(e/-2)});return d},_unitsDictionary:A,_toEqualAreaPoint:v,_directGeodeticSolver:x,_inverseGeodeticSolver:z};F("extend-esri")&&B.mixin(B.getObject("geometry",!0,G),E);return E});