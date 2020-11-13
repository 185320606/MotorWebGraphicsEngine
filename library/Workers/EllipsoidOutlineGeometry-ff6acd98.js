define(["exports","./when-7ef6387a","./Check-ed6a1804","./Math-85667bf9","./Cartesian3-2a8ef78e","./Ellipsoid-367a1bb3","./Transforms-2448ecca","./ComponentDatatype-a863af81","./GeometryAttribute-a3332dc3","./PrimitiveType-4c1d698a","./GeometryAttributes-cb18da36","./IndexDatatype-f12d39b5","./GeometryOffsetAttribute-5cfc2755"],(function(e,t,i,r,a,o,n,s,u,m,f,d,l){"use strict";var c=new a.Cartesian3(1,1,1),p=Math.cos,C=Math.sin;function h(e){e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT);var o=t.defaultValue(e.radii,c),n=t.defaultValue(e.innerRadii,o),s=t.defaultValue(e.minimumClock,0),u=t.defaultValue(e.maximumClock,r.CesiumMath.TWO_PI),m=t.defaultValue(e.minimumCone,0),f=t.defaultValue(e.maximumCone,r.CesiumMath.PI),d=Math.round(t.defaultValue(e.stackPartitions,10)),p=Math.round(t.defaultValue(e.slicePartitions,8)),C=Math.round(t.defaultValue(e.subdivisions,128));if(d<1)throw new i.DeveloperError("options.stackPartitions cannot be less than 1");if(p<0)throw new i.DeveloperError("options.slicePartitions cannot be less than 0");if(C<0)throw new i.DeveloperError("options.subdivisions must be greater than or equal to zero.");if(t.defined(e.offsetAttribute)&&e.offsetAttribute===l.GeometryOffsetAttribute.TOP)throw new i.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._radii=a.Cartesian3.clone(o),this._innerRadii=a.Cartesian3.clone(n),this._minimumClock=s,this._maximumClock=u,this._minimumCone=m,this._maximumCone=f,this._stackPartitions=d,this._slicePartitions=p,this._subdivisions=C,this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}h.packedLength=2*a.Cartesian3.packedLength+8,h.pack=function(e,r,o){if(!t.defined(e))throw new i.DeveloperError("value is required");if(!t.defined(r))throw new i.DeveloperError("array is required");return o=t.defaultValue(o,0),a.Cartesian3.pack(e._radii,r,o),o+=a.Cartesian3.packedLength,a.Cartesian3.pack(e._innerRadii,r,o),o+=a.Cartesian3.packedLength,r[o++]=e._minimumClock,r[o++]=e._maximumClock,r[o++]=e._minimumCone,r[o++]=e._maximumCone,r[o++]=e._stackPartitions,r[o++]=e._slicePartitions,r[o++]=e._subdivisions,r[o]=t.defaultValue(e._offsetAttribute,-1),r};var _=new a.Cartesian3,v=new a.Cartesian3,b={radii:_,innerRadii:v,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};h.unpack=function(e,r,o){if(!t.defined(e))throw new i.DeveloperError("array is required");r=t.defaultValue(r,0);var n=a.Cartesian3.unpack(e,r,_);r+=a.Cartesian3.packedLength;var s=a.Cartesian3.unpack(e,r,v);r+=a.Cartesian3.packedLength;var u=e[r++],m=e[r++],f=e[r++],d=e[r++],l=e[r++],c=e[r++],p=e[r++],C=e[r];return t.defined(o)?(o._radii=a.Cartesian3.clone(n,o._radii),o._innerRadii=a.Cartesian3.clone(s,o._innerRadii),o._minimumClock=u,o._maximumClock=m,o._minimumCone=f,o._maximumCone=d,o._stackPartitions=l,o._slicePartitions=c,o._subdivisions=p,o._offsetAttribute=-1===C?void 0:C,o):(b.minimumClock=u,b.maximumClock=m,b.minimumCone=f,b.maximumCone=d,b.stackPartitions=l,b.slicePartitions=c,b.subdivisions=p,b.offsetAttribute=-1===C?void 0:C,new h(b))},h.createGeometry=function(e){var i=e._radii;if(!(i.x<=0||i.y<=0||i.z<=0)){var a=e._innerRadii;if(!(a.x<=0||a.y<=0||a.z<=0)){var c=e._minimumClock,h=e._maximumClock,_=e._minimumCone,v=e._maximumCone,b=e._subdivisions,y=o.Ellipsoid.fromCartesian3(i),k=e._slicePartitions+1,A=e._stackPartitions+1;(k=Math.round(k*Math.abs(h-c)/r.CesiumMath.TWO_PI))<2&&(k=2),(A=Math.round(A*Math.abs(v-_)/r.CesiumMath.PI))<2&&(A=2);var w=0,P=1,x=a.x!==i.x||a.y!==i.y||a.z!==i.z,E=!1,D=!1;x&&(P=2,_>0&&(E=!0,w+=k),v<Math.PI&&(D=!0,w+=k));var M,g,G,O,V=b*P*(A+k),T=new Float64Array(3*V),z=2*(V+w-(k+A)*P),I=d.IndexDatatype.createTypedArray(V,z),L=0,R=new Array(A),N=new Array(A);for(M=0;M<A;M++)O=_+M*(v-_)/(A-1),R[M]=C(O),N[M]=p(O);var q=new Array(b),B=new Array(b);for(M=0;M<b;M++)G=c+M*(h-c)/(b-1),q[M]=C(G),B[M]=p(G);for(M=0;M<A;M++)for(g=0;g<b;g++)T[L++]=i.x*R[M]*B[g],T[L++]=i.y*R[M]*q[g],T[L++]=i.z*N[M];if(x)for(M=0;M<A;M++)for(g=0;g<b;g++)T[L++]=a.x*R[M]*B[g],T[L++]=a.y*R[M]*q[g],T[L++]=a.z*N[M];for(R.length=b,N.length=b,M=0;M<b;M++)O=_+M*(v-_)/(b-1),R[M]=C(O),N[M]=p(O);for(q.length=k,B.length=k,M=0;M<k;M++)G=c+M*(h-c)/(k-1),q[M]=C(G),B[M]=p(G);for(M=0;M<b;M++)for(g=0;g<k;g++)T[L++]=i.x*R[M]*B[g],T[L++]=i.y*R[M]*q[g],T[L++]=i.z*N[M];if(x)for(M=0;M<b;M++)for(g=0;g<k;g++)T[L++]=a.x*R[M]*B[g],T[L++]=a.y*R[M]*q[g],T[L++]=a.z*N[M];for(L=0,M=0;M<A*P;M++){var S=M*b;for(g=0;g<b-1;g++)I[L++]=S+g,I[L++]=S+g+1}var U=A*b*P;for(M=0;M<k;M++)for(g=0;g<b-1;g++)I[L++]=U+M+g*k,I[L++]=U+M+(g+1)*k;if(x)for(U=A*b*P+k*b,M=0;M<k;M++)for(g=0;g<b-1;g++)I[L++]=U+M+g*k,I[L++]=U+M+(g+1)*k;if(x){var F=A*b*P,W=F+b*k;if(E)for(M=0;M<k;M++)I[L++]=F+M,I[L++]=W+M;if(D)for(F+=b*k-k,W+=b*k-k,M=0;M<k;M++)I[L++]=F+M,I[L++]=W+M}var Y=new f.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:T})});if(t.defined(e._offsetAttribute)){var J=T.length,j=new Uint8Array(J/3),H=e._offsetAttribute===l.GeometryOffsetAttribute.NONE?0:1;l.arrayFill(j,H),Y.applyOffset=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:j})}return new u.Geometry({attributes:Y,indices:I,primitiveType:m.PrimitiveType.LINES,boundingSphere:n.BoundingSphere.fromEllipsoid(y),offsetAttribute:e._offsetAttribute})}}},e.EllipsoidOutlineGeometry=h}));
//# sourceMappingURL=EllipsoidOutlineGeometry-ff6acd98.js.map
