define(["exports","./Cartesian3-ca5d3f12"],(function(r,t){"use strict";var a={computePositions:function(r,a,e,i,n){var o,s=.5*r,c=-s,u=i+i,f=new Float64Array(3*(n?2*u:u)),y=0,d=0,h=n?3*u:0,m=n?3*(u+i):3*i;for(o=0;o<i;o++){var v=o/i*t.CesiumMath.TWO_PI,C=Math.cos(v),M=Math.sin(v),l=C*e,p=M*e,P=C*a,b=M*a;f[d+h]=l,f[d+h+1]=p,f[d+h+2]=c,f[d+m]=P,f[d+m+1]=b,f[d+m+2]=s,d+=3,n&&(f[y++]=l,f[y++]=p,f[y++]=c,f[y++]=P,f[y++]=b,f[y++]=s)}return f}};r.CylinderGeometryLibrary=a}));
//# sourceMappingURL=CylinderGeometryLibrary-c69898f4.js.map