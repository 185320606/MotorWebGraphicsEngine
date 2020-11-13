define(["exports","./when-7ef6387a","./Cartesian3-ca5d3f12","./Ellipsoid-57478151","./Transforms-7a1c9ee7","./Matrix4-027dd006","./Cartesian2-d6edb867","./ComponentDatatype-f4fabeaa","./GeometryAttribute-c5b9902a","./PrimitiveType-4c1d698a","./GeometryAttributes-cb18da36","./GeometryPipeline-4da09974","./IndexDatatype-bfeda8ca","./arrayRemoveDuplicates-c3d7845d","./ArcType-2ee8dfbb","./EllipsoidRhumbLine-2da2335c","./PolygonPipeline-dfc0793b"],(function(e,t,r,i,a,n,o,s,u,l,h,c,f,p,d,y,g){"use strict";function v(){this._array=[],this._offset=0,this._length=0}Object.defineProperties(v.prototype,{length:{get:function(){return this._length}}}),v.prototype.enqueue=function(e){this._array.push(e),this._length++},v.prototype.dequeue=function(){if(0!==this._length){var e=this._array,t=this._offset,r=e[t];return e[t]=void 0,++t>10&&2*t>e.length&&(this._array=e.slice(t),t=0),this._offset=t,this._length--,r}},v.prototype.peek=function(){if(0!==this._length)return this._array[this._offset]},v.prototype.contains=function(e){return-1!==this._array.indexOf(e)},v.prototype.clear=function(){this._array.length=this._offset=this._length=0},v.prototype.sort=function(e){this._offset>0&&(this._array=this._array.slice(this._offset),this._offset=0),this._array.sort(e)};var m={computeHierarchyPackedLength:function(e){for(var i=0,a=[e];a.length>0;){var n=a.pop();if(t.defined(n)){i+=2;var o=n.positions,s=n.holes;if(t.defined(o)&&(i+=o.length*r.Cartesian3.packedLength),t.defined(s))for(var u=s.length,l=0;l<u;++l)a.push(s[l])}}return i},packPolygonHierarchy:function(e,i,a){for(var n=[e];n.length>0;){var o=n.pop();if(t.defined(o)){var s=o.positions,u=o.holes;if(i[a++]=t.defined(s)?s.length:0,i[a++]=t.defined(u)?u.length:0,t.defined(s))for(var l=s.length,h=0;h<l;++h,a+=3)r.Cartesian3.pack(s[h],i,a);if(t.defined(u))for(var c=u.length,f=0;f<c;++f)n.push(u[f])}}return a},unpackPolygonHierarchy:function(e,t){for(var i=e[t++],a=e[t++],n=new Array(i),o=a>0?new Array(a):void 0,s=0;s<i;++s,t+=r.Cartesian3.packedLength)n[s]=r.Cartesian3.unpack(e,t);for(var u=0;u<a;++u)o[u]=m.unpackPolygonHierarchy(e,t),t=o[u].startingIndex,delete o[u].startingIndex;return{positions:n,holes:o,startingIndex:t}}},C=new r.Cartesian3;function b(e,t,i,a){return r.Cartesian3.subtract(t,e,C),r.Cartesian3.multiplyByScalar(C,i/a,C),r.Cartesian3.add(e,C,C),[C.x,C.y,C.z]}m.subdivideLineCount=function(e,t,i){var a=r.Cartesian3.distance(e,t)/i,n=Math.max(0,Math.ceil(r.CesiumMath.log2(a)));return Math.pow(2,n)};var T=new i.Cartographic,w=new i.Cartographic,I=new i.Cartographic,x=new r.Cartesian3;m.subdivideRhumbLineCount=function(e,t,i,a){var n=e.cartesianToCartographic(t,T),o=e.cartesianToCartographic(i,w),s=new y.EllipsoidRhumbLine(n,o,e).surfaceDistance/a,u=Math.max(0,Math.ceil(r.CesiumMath.log2(s)));return Math.pow(2,u)},m.subdivideLine=function(e,i,a,n){var o=m.subdivideLineCount(e,i,a),s=r.Cartesian3.distance(e,i),u=s/o;t.defined(n)||(n=[]);var l=n;l.length=3*o;for(var h=0,c=0;c<o;c++){var f=b(e,i,c*u,s);l[h++]=f[0],l[h++]=f[1],l[h++]=f[2]}return l},m.subdivideRhumbLine=function(e,i,a,n,o){var s=e.cartesianToCartographic(i,T),u=e.cartesianToCartographic(a,w),l=new y.EllipsoidRhumbLine(s,u,e),h=l.surfaceDistance/n,c=Math.max(0,Math.ceil(r.CesiumMath.log2(h))),f=Math.pow(2,c),p=l.surfaceDistance/f;t.defined(o)||(o=[]);var d=o;d.length=3*f;for(var g=0,v=0;v<f;v++){var m=l.interpolateUsingSurfaceDistance(v*p,I),C=e.cartographicToCartesian(m,x);d[g++]=C.x,d[g++]=C.y,d[g++]=C.z}return d};var E=new r.Cartesian3,P=new r.Cartesian3,A=new r.Cartesian3,_=new r.Cartesian3;m.scaleToGeodeticHeightExtruded=function(e,a,n,o,s){o=t.defaultValue(o,i.Ellipsoid.WGS84);var u=E,l=P,h=A,c=_;if(t.defined(e)&&t.defined(e.attributes)&&t.defined(e.attributes.position))for(var f=e.attributes.position.values,p=f.length/2,d=0;d<p;d+=3)r.Cartesian3.fromArray(f,d,h),o.geodeticSurfaceNormal(h,u),c=o.scaleToGeodeticSurface(h,c),l=r.Cartesian3.multiplyByScalar(u,n,l),l=r.Cartesian3.add(c,l,l),f[d+p]=l.x,f[d+1+p]=l.y,f[d+2+p]=l.z,s&&(c=r.Cartesian3.clone(h,c)),l=r.Cartesian3.multiplyByScalar(u,a,l),l=r.Cartesian3.add(c,l,l),f[d]=l.x,f[d+1]=l.y,f[d+2]=l.z;return e},m.polygonOutlinesFromHierarchy=function(e,i,a){var n,o,s,u=[],l=new v;for(l.enqueue(e);0!==l.length;){var h=l.dequeue(),c=h.positions;if(i)for(s=c.length,n=0;n<s;n++)a.scaleToGeodeticSurface(c[n],c[n]);if(!((c=p.arrayRemoveDuplicates(c,r.Cartesian3.equalsEpsilon,!0)).length<3)){var f=h.holes?h.holes.length:0;for(n=0;n<f;n++){var d=h.holes[n],y=d.positions;if(i)for(s=y.length,o=0;o<s;++o)a.scaleToGeodeticSurface(y[o],y[o]);if(!((y=p.arrayRemoveDuplicates(y,r.Cartesian3.equalsEpsilon,!0)).length<3)){u.push(y);var g=0;for(t.defined(d.holes)&&(g=d.holes.length),o=0;o<g;o++)l.enqueue(d.holes[o])}}u.push(c)}}return u},m.polygonsFromHierarchy=function(e,i,a,n){var o=[],s=[],u=new v;for(u.enqueue(e);0!==u.length;){var l,h,c=u.dequeue(),f=c.positions,d=c.holes;if(a)for(h=f.length,l=0;l<h;l++)n.scaleToGeodeticSurface(f[l],f[l]);if(!((f=p.arrayRemoveDuplicates(f,r.Cartesian3.equalsEpsilon,!0)).length<3)){var y=i(f);if(t.defined(y)){var m=[],C=g.PolygonPipeline.computeWindingOrder2D(y);C===g.WindingOrder.CLOCKWISE&&(y.reverse(),f=f.slice().reverse());var b,T=f.slice(),w=t.defined(d)?d.length:0,I=[];for(l=0;l<w;l++){var x=d[l],E=x.positions;if(a)for(h=E.length,b=0;b<h;++b)n.scaleToGeodeticSurface(E[b],E[b]);if(!((E=p.arrayRemoveDuplicates(E,r.Cartesian3.equalsEpsilon,!0)).length<3)){var P=i(E);if(t.defined(P)){(C=g.PolygonPipeline.computeWindingOrder2D(P))===g.WindingOrder.CLOCKWISE&&(P.reverse(),E=E.slice().reverse()),I.push(E),m.push(T.length),T=T.concat(E),y=y.concat(P);var A=0;for(t.defined(x.holes)&&(A=x.holes.length),b=0;b<A;b++)u.enqueue(x.holes[b])}}}o.push({outerRing:f,holes:I}),s.push({positions:T,positions2D:y,holes:m})}}}return{hierarchy:o,polygons:s}};var G=new o.Cartesian2,L=new r.Cartesian3,M=new a.Quaternion,D=new n.Matrix3;m.computeBoundingRectangle=function(e,i,o,s,u){for(var l=a.Quaternion.fromAxisAngle(e,s,M),h=n.Matrix3.fromQuaternion(l,D),c=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,p=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,y=o.length,g=0;g<y;++g){var v=r.Cartesian3.clone(o[g],L);n.Matrix3.multiplyByVector(h,v,v);var m=i(v,G);t.defined(m)&&(c=Math.min(c,m.x),f=Math.max(f,m.x),p=Math.min(p,m.y),d=Math.max(d,m.y))}return u.x=c,u.y=p,u.width=f-c,u.height=d-p,u},m.createGeometryFromPositions=function(e,t,r,i,a,n){var o=g.PolygonPipeline.triangulate(t.positions2D,t.holes);o.length<3&&(o=[0,1,2]);var h=t.positions;if(i){for(var f=h.length,p=new Array(3*f),y=0,v=0;v<f;v++){var m=h[v];p[y++]=m.x,p[y++]=m.y,p[y++]=m.z}var C=new u.Geometry({attributes:{position:new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})},indices:o,primitiveType:l.PrimitiveType.TRIANGLES});return a.normal?c.GeometryPipeline.computeNormal(C):C}return n===d.ArcType.GEODESIC?g.PolygonPipeline.computeSubdivision(e,h,o,r):n===d.ArcType.RHUMB?g.PolygonPipeline.computeRhumbLineSubdivision(e,h,o,r):void 0};var S=[],R=new r.Cartesian3,N=new r.Cartesian3;m.computeWallGeometry=function(e,t,i,a,n){var o,c,p,y,g,v=e.length,C=0;if(a)for(c=3*v*2,o=new Array(2*c),p=0;p<v;p++)y=e[p],g=e[(p+1)%v],o[C]=o[C+c]=y.x,o[++C]=o[C+c]=y.y,o[++C]=o[C+c]=y.z,o[++C]=o[C+c]=g.x,o[++C]=o[C+c]=g.y,o[++C]=o[C+c]=g.z,++C;else{var b=r.CesiumMath.chordLength(i,t.maximumRadius),T=0;if(n===d.ArcType.GEODESIC)for(p=0;p<v;p++)T+=m.subdivideLineCount(e[p],e[(p+1)%v],b);else if(n===d.ArcType.RHUMB)for(p=0;p<v;p++)T+=m.subdivideRhumbLineCount(t,e[p],e[(p+1)%v],b);for(c=3*(T+v),o=new Array(2*c),p=0;p<v;p++){var w;y=e[p],g=e[(p+1)%v],n===d.ArcType.GEODESIC?w=m.subdivideLine(y,g,b,S):n===d.ArcType.RHUMB&&(w=m.subdivideRhumbLine(t,y,g,b,S));for(var I=w.length,x=0;x<I;++x,++C)o[C]=w[x],o[C+c]=w[x];o[C]=g.x,o[C+c]=g.x,o[++C]=g.y,o[C+c]=g.y,o[++C]=g.z,o[C+c]=g.z,++C}}v=o.length;var E=f.IndexDatatype.createTypedArray(v/3,v-6*e.length),P=0;for(v/=6,p=0;p<v;p++){var A=p,_=A+1,G=A+v,L=G+1;y=r.Cartesian3.fromArray(o,3*A,R),g=r.Cartesian3.fromArray(o,3*_,N),r.Cartesian3.equalsEpsilon(y,g,r.CesiumMath.EPSILON10,r.CesiumMath.EPSILON10)||(E[P++]=A,E[P++]=G,E[P++]=_,E[P++]=_,E[P++]=G,E[P++]=L)}return new u.Geometry({attributes:new h.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o})}),indices:E,primitiveType:l.PrimitiveType.TRIANGLES})},e.PolygonGeometryLibrary=m}));
//# sourceMappingURL=PolygonGeometryLibrary-18ce596c.js.map
