define(["exports","./when-7ef6387a","./Check-ed6a1804","./Math-85667bf9","./Cartesian3-2a8ef78e","./Ellipsoid-367a1bb3","./Transforms-2448ecca","./Cartesian2-dcadeea9","./ComponentDatatype-a863af81","./GeometryAttribute-a3332dc3","./PrimitiveType-4c1d698a","./AttributeCompression-f1c650fa","./EncodedCartesian3-368c6a25","./IndexDatatype-f12d39b5","./IntersectionTests-1ea321e8","./Plane-15b63a5b"],(function(e,t,r,i,a,n,o,s,u,p,d,l,v,f,m,y){"use strict";var c=new a.Cartesian3,h=new a.Cartesian3,C=new a.Cartesian3;var b={calculateACMR:function(e){var i=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).indices,a=e.maximumIndex,n=t.defaultValue(e.cacheSize,24);if(!t.defined(i))throw new r.DeveloperError("indices is required.");var o=i.length;if(o<3||o%3!=0)throw new r.DeveloperError("indices length must be a multiple of three.");if(a<=0)throw new r.DeveloperError("maximumIndex must be greater than zero.");if(n<3)throw new r.DeveloperError("cacheSize must be greater than two.");if(!t.defined(a)){a=0;for(var s=0,u=i[s];s<o;)u>a&&(a=u),u=i[++s]}for(var p=[],d=0;d<a+1;d++)p[d]=0;for(var l=n+1,v=0;v<o;++v)l-p[i[v]]>n&&(p[i[v]]=l,++l);return(l-n+1)/(o/3)}};b.tipsify=function(e){var i,a=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).indices,n=e.maximumIndex,o=t.defaultValue(e.cacheSize,24);function s(e,t,r,a,n,o,s){for(var u,p=-1,d=-1,l=0;l<r.length;){var v=r[l];a[v].numLiveTriangles&&(u=0,n-a[v].timeStamp+2*a[v].numLiveTriangles<=t&&(u=n-a[v].timeStamp),(u>d||-1===d)&&(d=u,p=v)),++l}return-1===p?function(e,t,r,a){for(;t.length>=1;){var n=t[t.length-1];if(t.splice(t.length-1,1),e[n].numLiveTriangles>0)return n}for(;i<a;){if(e[i].numLiveTriangles>0)return++i-1;++i}return-1}(a,o,0,s):p}if(!t.defined(a))throw new r.DeveloperError("indices is required.");var u=a.length;if(u<3||u%3!=0)throw new r.DeveloperError("indices length must be a multiple of three.");if(n<=0)throw new r.DeveloperError("maximumIndex must be greater than zero.");if(o<3)throw new r.DeveloperError("cacheSize must be greater than two.");var p=0,d=0,l=a[d],v=u;if(t.defined(n))p=n+1;else{for(;d<v;)l>p&&(p=l),l=a[++d];if(-1===p)return 0;++p}var f,m=[];for(f=0;f<p;f++)m[f]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};d=0;for(var y=0;d<v;)m[a[d]].vertexTriangles.push(y),++m[a[d]].numLiveTriangles,m[a[d+1]].vertexTriangles.push(y),++m[a[d+1]].numLiveTriangles,m[a[d+2]].vertexTriangles.push(y),++m[a[d+2]].numLiveTriangles,++y,d+=3;var c=0,h=o+1;i=1;var C,b,w,g,T=[],A=[],E=0,D=[],P=u/3,x=[];for(f=0;f<P;f++)x[f]=!1;for(;-1!==c;){T=[],g=(b=m[c]).vertexTriangles.length;for(var I=0;I<g;++I)if(!x[y=b.vertexTriangles[I]]){x[y]=!0,d=y+y+y;for(var S=0;S<3;++S)w=a[d],T.push(w),A.push(w),D[E]=w,++E,--(C=m[w]).numLiveTriangles,h-C.timeStamp>o&&(C.timeStamp=h,++h),++d}c=s(0,o,T,m,h,A,p)}return D};var w={};function g(e,t,r,i,a){e[t++]=r,e[t++]=i,e[t++]=i,e[t++]=a,e[t++]=a,e[t]=r}function T(e){var r={};for(var i in e)if(e.hasOwnProperty(i)&&t.defined(e[i])&&t.defined(e[i].values)){var a=e[i];r[i]=new p.GeometryAttribute({componentDatatype:a.componentDatatype,componentsPerAttribute:a.componentsPerAttribute,normalize:a.normalize,values:[]})}return r}function A(e,r,i){for(var a in r)if(r.hasOwnProperty(a)&&t.defined(r[a])&&t.defined(r[a].values))for(var n=r[a],o=0;o<n.componentsPerAttribute;++o)e[a].values.push(n.values[i*n.componentsPerAttribute+o])}w.toWireframe=function(e){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");var i=e.indices;if(t.defined(i)){switch(e.primitiveType){case d.PrimitiveType.TRIANGLES:e.indices=function(e){for(var t=e.length,r=t/3*6,i=f.IndexDatatype.createTypedArray(t,r),a=0,n=0;n<t;n+=3,a+=6)g(i,a,e[n],e[n+1],e[n+2]);return i}(i);break;case d.PrimitiveType.TRIANGLE_STRIP:e.indices=function(e){var t=e.length;if(t>=3){var r=6*(t-2),i=f.IndexDatatype.createTypedArray(t,r);g(i,0,e[0],e[1],e[2]);for(var a=6,n=3;n<t;++n,a+=6)g(i,a,e[n-1],e[n],e[n-2]);return i}return new Uint16Array}(i);break;case d.PrimitiveType.TRIANGLE_FAN:e.indices=function(e){if(e.length>0){for(var t=e.length-1,r=6*(t-1),i=f.IndexDatatype.createTypedArray(t,r),a=e[0],n=0,o=1;o<t;++o,n+=6)g(i,n,a,e[o],e[o+1]);return i}return new Uint16Array}(i);break;default:throw new r.DeveloperError("geometry.primitiveType must be TRIANGLES, TRIANGLE_STRIP, or TRIANGLE_FAN.")}e.primitiveType=d.PrimitiveType.LINES}return e},w.createLineSegmentsForVectors=function(e,i,a){if(i=t.defaultValue(i,"normal"),!t.defined(e))throw new r.DeveloperError("geometry is required.");if(!t.defined(e.attributes.position))throw new r.DeveloperError("geometry.attributes.position is required.");if(!t.defined(e.attributes[i]))throw new r.DeveloperError("geometry.attributes must have an attribute with the same name as the attributeName parameter, "+i+".");a=t.defaultValue(a,1e4);for(var n,s=e.attributes.position.values,l=e.attributes[i].values,v=s.length,f=new Float64Array(2*v),m=0,y=0;y<v;y+=3)f[m++]=s[y],f[m++]=s[y+1],f[m++]=s[y+2],f[m++]=s[y]+l[y]*a,f[m++]=s[y+1]+l[y+1]*a,f[m++]=s[y+2]+l[y+2]*a;var c=e.boundingSphere;return t.defined(c)&&(n=new o.BoundingSphere(c.center,c.radius+a)),new p.Geometry({attributes:{position:new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})},primitiveType:d.PrimitiveType.LINES,boundingSphere:n})},w.createAttributeLocations=function(e){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");var i,a=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],n=e.attributes,o={},s=0,u=a.length;for(i=0;i<u;++i){var p=a[i];t.defined(n[p])&&(o[p]=s++)}for(var d in n)n.hasOwnProperty(d)&&!t.defined(o[d])&&(o[d]=s++);return o},w.reorderForPreVertexCache=function(e){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");var i=p.Geometry.computeNumberOfVertices(e),a=e.indices;if(t.defined(a)){for(var n=new Int32Array(i),o=0;o<i;o++)n[o]=-1;for(var s,d=a,l=d.length,v=f.IndexDatatype.createTypedArray(i,l),m=0,y=0,c=0;m<l;)-1!==(s=n[d[m]])?v[y]=s:(n[s=d[m]]=c,v[y]=c,++c),++m,++y;e.indices=v;var h=e.attributes;for(var C in h)if(h.hasOwnProperty(C)&&t.defined(h[C])&&t.defined(h[C].values)){for(var b=h[C],w=b.values,g=0,T=b.componentsPerAttribute,A=u.ComponentDatatype.createTypedArray(b.componentDatatype,c*T);g<i;){var E=n[g];if(-1!==E)for(var D=0;D<T;D++)A[T*E+D]=w[T*g+D];++g}b.values=A}}return e},w.reorderForPostVertexCache=function(e,i){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");var a=e.indices;if(e.primitiveType===d.PrimitiveType.TRIANGLES&&t.defined(a)){for(var n=a.length,o=0,s=0;s<n;s++)a[s]>o&&(o=a[s]);e.indices=b.tipsify({indices:a,maximumIndex:o,cacheSize:i})}return e},w.fitToUnsignedShortIndices=function(e){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");if(t.defined(e.indices)&&e.primitiveType!==d.PrimitiveType.TRIANGLES&&e.primitiveType!==d.PrimitiveType.LINES&&e.primitiveType!==d.PrimitiveType.POINTS)throw new r.DeveloperError("geometry.primitiveType must equal to PrimitiveType.TRIANGLES, PrimitiveType.LINES, or PrimitiveType.POINTS.");var a=[],n=p.Geometry.computeNumberOfVertices(e);if(t.defined(e.indices)&&n>=i.CesiumMath.SIXTY_FOUR_KILOBYTES){var o,s=[],u=[],l=0,v=T(e.attributes),f=e.indices,m=f.length;e.primitiveType===d.PrimitiveType.TRIANGLES?o=3:e.primitiveType===d.PrimitiveType.LINES?o=2:e.primitiveType===d.PrimitiveType.POINTS&&(o=1);for(var y=0;y<m;y+=o){for(var c=0;c<o;++c){var h=f[y+c],C=s[h];t.defined(C)||(C=l++,s[h]=C,A(v,e.attributes,h)),u.push(C)}l+o>=i.CesiumMath.SIXTY_FOUR_KILOBYTES&&(a.push(new p.Geometry({attributes:v,indices:u,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),s=[],u=[],l=0,v=T(e.attributes))}0!==u.length&&a.push(new p.Geometry({attributes:v,indices:u,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else a.push(e);return a};var E=new a.Cartesian3,D=new n.Cartographic;w.projectTo2D=function(e,i,n,s,d){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");if(!t.defined(i))throw new r.DeveloperError("attributeName is required.");if(!t.defined(n))throw new r.DeveloperError("attributeName3D is required.");if(!t.defined(s))throw new r.DeveloperError("attributeName2D is required.");if(!t.defined(e.attributes[i]))throw new r.DeveloperError("geometry must have attribute matching the attributeName argument: "+i+".");if(e.attributes[i].componentDatatype!==u.ComponentDatatype.DOUBLE)throw new r.DeveloperError("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");for(var l=e.attributes[i],v=(d=t.defined(d)?d:new o.GeographicProjection).ellipsoid,f=l.values,m=new Float64Array(f.length),y=0,c=0;c<f.length;c+=3){var h=a.Cartesian3.fromArray(f,c,E),C=v.cartesianToCartographic(h,D);if(!t.defined(C))throw new r.DeveloperError("Could not project point ("+h.x+", "+h.y+", "+h.z+") to 2D.");var b=d.project(C,E);m[y++]=b.x,m[y++]=b.y,m[y++]=b.z}return e.attributes[n]=l,e.attributes[s]=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m}),delete e.attributes[i],e};var P={high:0,low:0};w.encodeAttribute=function(e,i,a,n){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");if(!t.defined(i))throw new r.DeveloperError("attributeName is required.");if(!t.defined(a))throw new r.DeveloperError("attributeHighName is required.");if(!t.defined(n))throw new r.DeveloperError("attributeLowName is required.");if(!t.defined(e.attributes[i]))throw new r.DeveloperError("geometry must have attribute matching the attributeName argument: "+i+".");if(e.attributes[i].componentDatatype!==u.ComponentDatatype.DOUBLE)throw new r.DeveloperError("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");for(var o=e.attributes[i],s=o.values,d=s.length,l=new Float32Array(d),f=new Float32Array(d),m=0;m<d;++m)v.EncodedCartesian3.encode(s[m],P),l[m]=P.high,f[m]=P.low;var y=o.componentsPerAttribute;return e.attributes[a]=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:y,values:l}),e.attributes[n]=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:y,values:f}),delete e.attributes[i],e};var x=new a.Cartesian3;function I(e,r){if(t.defined(r))for(var i=r.values,n=i.length,s=0;s<n;s+=3)a.Cartesian3.unpack(i,s,x),o.Matrix4.multiplyByPoint(e,x,x),a.Cartesian3.pack(x,i,s)}function S(e,r){if(t.defined(r))for(var i=r.values,n=i.length,s=0;s<n;s+=3)a.Cartesian3.unpack(i,s,x),o.Matrix3.multiplyByVector(e,x,x),x=a.Cartesian3.normalize(x,x),a.Cartesian3.pack(x,i,s)}var N=new o.Matrix4,O=new o.Matrix3;w.transformToWorldCoordinates=function(e){if(!t.defined(e))throw new r.DeveloperError("instance is required.");var i=e.modelMatrix;if(o.Matrix4.equals(i,o.Matrix4.IDENTITY))return e;var a=e.geometry.attributes;I(i,a.position),I(i,a.prevPosition),I(i,a.nextPosition),(t.defined(a.normal)||t.defined(a.tangent)||t.defined(a.bitangent))&&(o.Matrix4.inverse(i,N),o.Matrix4.transpose(N,N),o.Matrix4.getMatrix3(N,O),S(O,a.normal),S(O,a.tangent),S(O,a.bitangent));var n=e.geometry.boundingSphere;return t.defined(n)&&(e.geometry.boundingSphere=o.BoundingSphere.transform(n,i,n)),e.modelMatrix=o.Matrix4.clone(o.Matrix4.IDENTITY),e};var L=new a.Cartesian3;function z(e,i){var n,s,l,v,m=e.length,y=e[0].modelMatrix,c=t.defined(e[0][i].indices),h=e[0][i].primitiveType;for(s=1;s<m;++s){if(!o.Matrix4.equals(e[s].modelMatrix,y))throw new r.DeveloperError("All instances must have the same modelMatrix.");if(t.defined(e[s][i].indices)!==c)throw new r.DeveloperError("All instance geometries must have an indices or not have one.");if(e[s][i].primitiveType!==h)throw new r.DeveloperError("All instance geometries must have the same primitiveType.")}var C,b,w,g,T=function(e,r){var i,a=e.length,n={},o=e[0][r].attributes;for(i in o)if(o.hasOwnProperty(i)&&t.defined(o[i])&&t.defined(o[i].values)){for(var s=o[i],d=s.values.length,l=!0,v=1;v<a;++v){var f=e[v][r].attributes[i];if(!t.defined(f)||s.componentDatatype!==f.componentDatatype||s.componentsPerAttribute!==f.componentsPerAttribute||s.normalize!==f.normalize){l=!1;break}d+=f.values.length}l&&(n[i]=new p.GeometryAttribute({componentDatatype:s.componentDatatype,componentsPerAttribute:s.componentsPerAttribute,normalize:s.normalize,values:u.ComponentDatatype.createTypedArray(s.componentDatatype,d)}))}return n}(e,i);for(n in T)if(T.hasOwnProperty(n))for(C=T[n].values,v=0,s=0;s<m;++s)for(w=(b=e[s][i].attributes[n].values).length,l=0;l<w;++l)C[v++]=b[l];if(c){var A=0;for(s=0;s<m;++s)A+=e[s][i].indices.length;var E=p.Geometry.computeNumberOfVertices(new p.Geometry({attributes:T,primitiveType:d.PrimitiveType.POINTS})),D=f.IndexDatatype.createTypedArray(E,A),P=0,x=0;for(s=0;s<m;++s){var I=e[s][i].indices,S=I.length;for(v=0;v<S;++v)D[P++]=x+I[v];x+=p.Geometry.computeNumberOfVertices(e[s][i])}g=D}var N,O=new a.Cartesian3,z=0;for(s=0;s<m;++s){if(N=e[s][i].boundingSphere,!t.defined(N)){O=void 0;break}a.Cartesian3.add(N.center,O,O)}if(t.defined(O))for(a.Cartesian3.divideByScalar(O,m,O),s=0;s<m;++s){N=e[s][i].boundingSphere;var G=a.Cartesian3.magnitude(a.Cartesian3.subtract(N.center,O,L))+N.radius;G>z&&(z=G)}return new p.Geometry({attributes:T,indices:g,primitiveType:h,boundingSphere:t.defined(O)?new o.BoundingSphere(O,z):void 0})}w.combineInstances=function(e){if(!t.defined(e)||e.length<1)throw new r.DeveloperError("instances is required and must have length greater than zero.");for(var i=[],a=[],n=e.length,o=0;o<n;++o){var s=e[o];t.defined(s.geometry)?i.push(s):t.defined(s.westHemisphereGeometry)&&t.defined(s.eastHemisphereGeometry)&&a.push(s)}var u=[];return i.length>0&&u.push(z(i,"geometry")),a.length>0&&(u.push(z(a,"westHemisphereGeometry")),u.push(z(a,"eastHemisphereGeometry"))),u};var G=new a.Cartesian3,M=new a.Cartesian3,q=new a.Cartesian3,R=new a.Cartesian3;w.computeNormal=function(e){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");if(!t.defined(e.attributes.position)||!t.defined(e.attributes.position.values))throw new r.DeveloperError("geometry.attributes.position.values is required.");if(!t.defined(e.indices))throw new r.DeveloperError("geometry.indices is required.");if(e.indices.length<2||e.indices.length%3!=0)throw new r.DeveloperError("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==d.PrimitiveType.TRIANGLES)throw new r.DeveloperError("geometry.primitiveType must be PrimitiveType.TRIANGLES.");var n,o=e.indices,s=e.attributes,l=s.position.values,v=s.position.values.length/3,f=o.length,m=new Array(v),y=new Array(f/3),c=new Array(f);for(n=0;n<v;n++)m[n]={indexOffset:0,count:0,currentCount:0};var h=0;for(n=0;n<f;n+=3){var C=o[n],b=o[n+1],w=o[n+2],g=3*C,T=3*b,A=3*w;M.x=l[g],M.y=l[g+1],M.z=l[g+2],q.x=l[T],q.y=l[T+1],q.z=l[T+2],R.x=l[A],R.y=l[A+1],R.z=l[A+2],m[C].count++,m[b].count++,m[w].count++,a.Cartesian3.subtract(q,M,q),a.Cartesian3.subtract(R,M,R),y[h]=a.Cartesian3.cross(q,R,new a.Cartesian3),h++}var E,D=0;for(n=0;n<v;n++)m[n].indexOffset+=D,D+=m[n].count;for(h=0,n=0;n<f;n+=3){var P=(E=m[o[n]]).indexOffset+E.currentCount;c[P]=h,E.currentCount++,c[P=(E=m[o[n+1]]).indexOffset+E.currentCount]=h,E.currentCount++,c[P=(E=m[o[n+2]]).indexOffset+E.currentCount]=h,E.currentCount++,h++}var x=new Float32Array(3*v);for(n=0;n<v;n++){var I=3*n;if(E=m[n],a.Cartesian3.clone(a.Cartesian3.ZERO,G),E.count>0){for(h=0;h<E.count;h++)a.Cartesian3.add(G,y[c[E.indexOffset+h]],G);a.Cartesian3.equalsEpsilon(a.Cartesian3.ZERO,G,i.CesiumMath.EPSILON10)&&a.Cartesian3.clone(y[c[E.indexOffset]],G)}a.Cartesian3.equalsEpsilon(a.Cartesian3.ZERO,G,i.CesiumMath.EPSILON10)&&(G.z=1),a.Cartesian3.normalize(G,G),x[I]=G.x,x[I+1]=G.y,x[I+2]=G.z}return e.attributes.normal=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:x}),e};var B=new a.Cartesian3,V=new a.Cartesian3,k=new a.Cartesian3;w.computeTangentAndBitangent=function(e){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");var i=e.attributes,n=e.indices;if(!t.defined(i.position)||!t.defined(i.position.values))throw new r.DeveloperError("geometry.attributes.position.values is required.");if(!t.defined(i.normal)||!t.defined(i.normal.values))throw new r.DeveloperError("geometry.attributes.normal.values is required.");if(!t.defined(i.st)||!t.defined(i.st.values))throw new r.DeveloperError("geometry.attributes.st.values is required.");if(!t.defined(n))throw new r.DeveloperError("geometry.indices is required.");if(n.length<2||n.length%3!=0)throw new r.DeveloperError("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==d.PrimitiveType.TRIANGLES)throw new r.DeveloperError("geometry.primitiveType must be PrimitiveType.TRIANGLES.");var o,s,l,v,f=e.attributes.position.values,m=e.attributes.normal.values,y=e.attributes.st.values,c=e.attributes.position.values.length/3,h=n.length,C=new Array(3*c);for(o=0;o<C.length;o++)C[o]=0;for(o=0;o<h;o+=3){var b=n[o],w=n[o+1],g=n[o+2];l=3*w,v=3*g;var T=2*b,A=2*w,E=2*g,D=f[s=3*b],P=f[s+1],x=f[s+2],I=y[T],S=y[T+1],N=y[A+1]-S,O=y[E+1]-S,L=1/((y[A]-I)*O-(y[E]-I)*N),z=(O*(f[l]-D)-N*(f[v]-D))*L,G=(O*(f[l+1]-P)-N*(f[v+1]-P))*L,M=(O*(f[l+2]-x)-N*(f[v+2]-x))*L;C[s]+=z,C[s+1]+=G,C[s+2]+=M,C[l]+=z,C[l+1]+=G,C[l+2]+=M,C[v]+=z,C[v+1]+=G,C[v+2]+=M}var q=new Float32Array(3*c),R=new Float32Array(3*c);for(o=0;o<c;o++){l=(s=3*o)+1,v=s+2;var F=a.Cartesian3.fromArray(m,s,B),_=a.Cartesian3.fromArray(C,s,k),U=a.Cartesian3.dot(F,_);a.Cartesian3.multiplyByScalar(F,U,V),a.Cartesian3.normalize(a.Cartesian3.subtract(_,V,_),_),q[s]=_.x,q[l]=_.y,q[v]=_.z,a.Cartesian3.normalize(a.Cartesian3.cross(F,_,_),_),R[s]=_.x,R[l]=_.y,R[v]=_.z}return e.attributes.tangent=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:q}),e.attributes.bitangent=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R}),e};var F=new s.Cartesian2,_=new a.Cartesian3,U=new a.Cartesian3,Y=new a.Cartesian3,Z=new s.Cartesian2;function H(e){switch(e.primitiveType){case d.PrimitiveType.TRIANGLE_FAN:return function(e){var t=p.Geometry.computeNumberOfVertices(e);if(t<3)throw new r.DeveloperError("The number of vertices must be at least three.");var i=f.IndexDatatype.createTypedArray(t,3*(t-2));i[0]=1,i[1]=0,i[2]=2;for(var a=3,n=3;n<t;++n)i[a++]=n-1,i[a++]=0,i[a++]=n;return e.indices=i,e.primitiveType=d.PrimitiveType.TRIANGLES,e}(e);case d.PrimitiveType.TRIANGLE_STRIP:return function(e){var t=p.Geometry.computeNumberOfVertices(e);if(t<3)throw new r.DeveloperError("The number of vertices must be at least 3.");var i=f.IndexDatatype.createTypedArray(t,3*(t-2));i[0]=0,i[1]=1,i[2]=2,t>3&&(i[3]=0,i[4]=2,i[5]=3);for(var a=6,n=3;n<t-1;n+=2)i[a++]=n,i[a++]=n-1,i[a++]=n+1,n+2<t&&(i[a++]=n,i[a++]=n+1,i[a++]=n+2);return e.indices=i,e.primitiveType=d.PrimitiveType.TRIANGLES,e}(e);case d.PrimitiveType.TRIANGLES:return function(e){if(t.defined(e.indices))return e;var i=p.Geometry.computeNumberOfVertices(e);if(i<3)throw new r.DeveloperError("The number of vertices must be at least three.");if(i%3!=0)throw new r.DeveloperError("The number of vertices must be a multiple of three.");for(var a=f.IndexDatatype.createTypedArray(i,i),n=0;n<i;++n)a[n]=n;return e.indices=a,e}(e);case d.PrimitiveType.LINE_STRIP:return function(e){var t=p.Geometry.computeNumberOfVertices(e);if(t<2)throw new r.DeveloperError("The number of vertices must be at least two.");var i=f.IndexDatatype.createTypedArray(t,2*(t-1));i[0]=0,i[1]=1;for(var a=2,n=2;n<t;++n)i[a++]=n-1,i[a++]=n;return e.indices=i,e.primitiveType=d.PrimitiveType.LINES,e}(e);case d.PrimitiveType.LINE_LOOP:return function(e){var t=p.Geometry.computeNumberOfVertices(e);if(t<2)throw new r.DeveloperError("The number of vertices must be at least two.");var i=f.IndexDatatype.createTypedArray(t,2*t);i[0]=0,i[1]=1;for(var a=2,n=2;n<t;++n)i[a++]=n-1,i[a++]=n;return i[a++]=t-1,i[a]=0,e.indices=i,e.primitiveType=d.PrimitiveType.LINES,e}(e);case d.PrimitiveType.LINES:return function(e){if(t.defined(e.indices))return e;var i=p.Geometry.computeNumberOfVertices(e);if(i<2)throw new r.DeveloperError("The number of vertices must be at least two.");if(i%2!=0)throw new r.DeveloperError("The number of vertices must be a multiple of 2.");for(var a=f.IndexDatatype.createTypedArray(i,i),n=0;n<i;++n)a[n]=n;return e.indices=a,e}(e)}return e}function W(e,t){Math.abs(e.y)<i.CesiumMath.EPSILON6&&(e.y=t?-i.CesiumMath.EPSILON6:i.CesiumMath.EPSILON6)}w.compressVertices=function(e){if(!t.defined(e))throw new r.DeveloperError("geometry is required.");var i,n,o=e.attributes.extrudeDirection;if(t.defined(o)){var d=o.values;n=d.length/3;var v=new Float32Array(2*n),f=0;for(i=0;i<n;++i)a.Cartesian3.fromArray(d,3*i,_),a.Cartesian3.equals(_,a.Cartesian3.ZERO)?f+=2:(Z=l.AttributeCompression.octEncodeInRange(_,65535,Z),v[f++]=Z.x,v[f++]=Z.y);return e.attributes.compressedAttributes=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:v}),delete e.attributes.extrudeDirection,e}var m=e.attributes.normal,y=e.attributes.st,c=t.defined(m),h=t.defined(y);if(!c&&!h)return e;var C,b,w,g,T=e.attributes.tangent,A=e.attributes.bitangent,E=t.defined(T),D=t.defined(A);c&&(C=m.values),h&&(b=y.values),E&&(w=T.values),D&&(g=A.values);var P=n=(c?C.length:b.length)/(c?3:2),x=h&&c?2:1;x+=E||D?1:0;var I=new Float32Array(P*=x),S=0;for(i=0;i<n;++i){h&&(s.Cartesian2.fromArray(b,2*i,F),I[S++]=l.AttributeCompression.compressTextureCoordinates(F));var N=3*i;c&&t.defined(w)&&t.defined(g)?(a.Cartesian3.fromArray(C,N,_),a.Cartesian3.fromArray(w,N,U),a.Cartesian3.fromArray(g,N,Y),l.AttributeCompression.octPack(_,U,Y,F),I[S++]=F.x,I[S++]=F.y):(c&&(a.Cartesian3.fromArray(C,N,_),I[S++]=l.AttributeCompression.octEncodeFloat(_)),E&&(a.Cartesian3.fromArray(w,N,_),I[S++]=l.AttributeCompression.octEncodeFloat(_)),D&&(a.Cartesian3.fromArray(g,N,_),I[S++]=l.AttributeCompression.octEncodeFloat(_)))}return e.attributes.compressedAttributes=new p.GeometryAttribute({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:x,values:I}),c&&delete e.attributes.normal,h&&delete e.attributes.st,D&&delete e.attributes.bitangent,E&&delete e.attributes.tangent,e};var X=new a.Cartesian3;function j(e,t,r,i){a.Cartesian3.add(e,a.Cartesian3.multiplyByScalar(a.Cartesian3.subtract(t,e,X),e.y/(e.y-t.y),X),r),a.Cartesian3.clone(r,i),W(r,!0),W(i,!1)}var J=new a.Cartesian3,K=new a.Cartesian3,Q=new a.Cartesian3,$=new a.Cartesian3,ee={positions:new Array(7),indices:new Array(9)};function te(e,t,r){if(!(e.x>=0||t.x>=0||r.x>=0)){!function(e,t,r){if(0!==e.y&&0!==t.y&&0!==r.y)return W(e,e.y<0),W(t,t.y<0),void W(r,r.y<0);var a=Math.abs(e.y),n=Math.abs(t.y),o=Math.abs(r.y),s=(a>n?a>o?i.CesiumMath.sign(e.y):i.CesiumMath.sign(r.y):n>o?i.CesiumMath.sign(t.y):i.CesiumMath.sign(r.y))<0;W(e,s),W(t,s),W(r,s)}(e,t,r);var a=e.y<0,n=t.y<0,o=r.y<0,s=0;s+=a?1:0,s+=n?1:0;var u=ee.indices;1===(s+=o?1:0)?(u[1]=3,u[2]=4,u[5]=6,u[7]=6,u[8]=5,a?(j(e,t,J,Q),j(e,r,K,$),u[0]=0,u[3]=1,u[4]=2,u[6]=1):n?(j(t,r,J,Q),j(t,e,K,$),u[0]=1,u[3]=2,u[4]=0,u[6]=2):o&&(j(r,e,J,Q),j(r,t,K,$),u[0]=2,u[3]=0,u[4]=1,u[6]=0)):2===s&&(u[2]=4,u[4]=4,u[5]=3,u[7]=5,u[8]=6,a?n?o||(j(r,e,J,Q),j(r,t,K,$),u[0]=0,u[1]=1,u[3]=0,u[6]=2):(j(t,r,J,Q),j(t,e,K,$),u[0]=2,u[1]=0,u[3]=2,u[6]=1):(j(e,t,J,Q),j(e,r,K,$),u[0]=1,u[1]=2,u[3]=1,u[6]=0));var p=ee.positions;return p[0]=e,p[1]=t,p[2]=r,p.length=3,1!==s&&2!==s||(p[3]=J,p[4]=K,p[5]=Q,p[6]=$,p.length=7),ee}}function re(e,r){var i=e.attributes;if(0!==i.position.values.length){for(var a in i)if(i.hasOwnProperty(a)&&t.defined(i[a])&&t.defined(i[a].values)){var n=i[a];n.values=u.ComponentDatatype.createTypedArray(n.componentDatatype,n.values)}var s=p.Geometry.computeNumberOfVertices(e);return e.indices=f.IndexDatatype.createTypedArray(s,e.indices),r&&(e.boundingSphere=o.BoundingSphere.fromVertices(i.position.values)),e}}function ie(e){var r=e.attributes,i={};for(var a in r)if(r.hasOwnProperty(a)&&t.defined(r[a])&&t.defined(r[a].values)){var n=r[a];i[a]=new p.GeometryAttribute({componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,values:[]})}return new p.Geometry({attributes:i,indices:[],primitiveType:e.primitiveType})}function ae(e,r,i){var a=t.defined(e.geometry.boundingSphere);r=re(r,a),i=re(i,a),t.defined(i)&&!t.defined(r)?e.geometry=i:!t.defined(i)&&t.defined(r)?e.geometry=r:(e.westHemisphereGeometry=r,e.eastHemisphereGeometry=i,e.geometry=void 0)}function ne(e,t){var r=new e,i=new e,a=new e;return function(n,o,s,u,p,d,l,v){var f=e.fromArray(p,n*t,r),m=e.fromArray(p,o*t,i),y=e.fromArray(p,s*t,a);e.multiplyByScalar(f,u.x,f),e.multiplyByScalar(m,u.y,m),e.multiplyByScalar(y,u.z,y);var c=e.add(f,m,f);e.add(c,y,c),v&&e.normalize(c,c),e.pack(c,d,l*t)}}var oe=ne(o.Cartesian4,4),se=ne(a.Cartesian3,3),ue=ne(s.Cartesian2,2),pe=new a.Cartesian3,de=new a.Cartesian3,le=new a.Cartesian3,ve=new a.Cartesian3;function fe(e,n,o,u,p,d,l,v,f,m,y,b,w,g,T,A){if(t.defined(d)||t.defined(l)||t.defined(v)||t.defined(f)||t.defined(m)||0!==g){var E=function(e,n,o,u,p){var d,l,v,f,m,y,b,w;if(r.Check.defined("point",e),r.Check.defined("p0",n),r.Check.defined("p1",o),r.Check.defined("p2",u),t.defined(p)||(p=new a.Cartesian3),t.defined(n.z)){if(a.Cartesian3.equalsEpsilon(e,n,i.CesiumMath.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_X,p);if(a.Cartesian3.equalsEpsilon(e,o,i.CesiumMath.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_Y,p);if(a.Cartesian3.equalsEpsilon(e,u,i.CesiumMath.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_Z,p);d=a.Cartesian3.subtract(o,n,c),l=a.Cartesian3.subtract(u,n,h),v=a.Cartesian3.subtract(e,n,C),f=a.Cartesian3.dot(d,d),m=a.Cartesian3.dot(d,l),y=a.Cartesian3.dot(d,v),b=a.Cartesian3.dot(l,l),w=a.Cartesian3.dot(l,v)}else{if(s.Cartesian2.equalsEpsilon(e,n,i.CesiumMath.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_X,p);if(s.Cartesian2.equalsEpsilon(e,o,i.CesiumMath.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_Y,p);if(s.Cartesian2.equalsEpsilon(e,u,i.CesiumMath.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_Z,p);d=s.Cartesian2.subtract(o,n,c),l=s.Cartesian2.subtract(u,n,h),v=s.Cartesian2.subtract(e,n,C),f=s.Cartesian2.dot(d,d),m=s.Cartesian2.dot(d,l),y=s.Cartesian2.dot(d,v),b=s.Cartesian2.dot(l,l),w=s.Cartesian2.dot(l,v)}p.y=b*y-m*w,p.z=f*w-m*y;var g=f*b-m*m;return 0!==p.y&&(p.y/=g),0!==p.z&&(p.z/=g),p.x=1-p.y-p.z,p}(u,a.Cartesian3.fromArray(p,3*e,pe),a.Cartesian3.fromArray(p,3*n,de),a.Cartesian3.fromArray(p,3*o,le),ve);if(t.defined(d)&&se(e,n,o,E,d,b.normal.values,A,!0),t.defined(m)){var D,P=a.Cartesian3.fromArray(m,3*e,pe),x=a.Cartesian3.fromArray(m,3*n,de),I=a.Cartesian3.fromArray(m,3*o,le);a.Cartesian3.multiplyByScalar(P,E.x,P),a.Cartesian3.multiplyByScalar(x,E.y,x),a.Cartesian3.multiplyByScalar(I,E.z,I),a.Cartesian3.equals(P,a.Cartesian3.ZERO)&&a.Cartesian3.equals(x,a.Cartesian3.ZERO)&&a.Cartesian3.equals(I,a.Cartesian3.ZERO)?((D=pe).x=0,D.y=0,D.z=0):(D=a.Cartesian3.add(P,x,P),a.Cartesian3.add(D,I,D),a.Cartesian3.normalize(D,D)),a.Cartesian3.pack(D,b.extrudeDirection.values,3*A)}if(t.defined(y)&&function(e,t,r,a,n,o,s){var u=n[e]*a.x,p=n[t]*a.y,d=n[r]*a.z;o[s]=u+p+d>i.CesiumMath.EPSILON6?1:0}(e,n,o,E,y,b.applyOffset.values,A),t.defined(l)&&se(e,n,o,E,l,b.tangent.values,A,!0),t.defined(v)&&se(e,n,o,E,v,b.bitangent.values,A,!0),t.defined(f)&&ue(e,n,o,E,f,b.st.values,A),g>0)for(var S=0;S<g;S++){var N=w[S];me(e,n,o,E,A,T[N],b[N])}}}function me(e,t,r,i,a,n,o){var s=n.componentsPerAttribute,u=n.values,p=o.values;switch(s){case 4:oe(e,t,r,i,u,p,a,!1);break;case 3:se(e,t,r,i,u,p,a,!1);break;case 2:ue(e,t,r,i,u,p,a,!1);break;default:p[a]=u[e]*i.x+u[t]*i.y+u[r]*i.z}}function ye(e,t,r,i,a,n){var o=e.position.values.length/3;if(-1!==a){var s=i[a],u=r[s];return-1===u?(r[s]=o,e.position.values.push(n.x,n.y,n.z),t.push(o),o):(t.push(u),u)}return e.position.values.push(n.x,n.y,n.z),t.push(o),o}var ce={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function he(e){var r=e.geometry,i=r.attributes,n=i.position.values,o=t.defined(i.normal)?i.normal.values:void 0,s=t.defined(i.bitangent)?i.bitangent.values:void 0,u=t.defined(i.tangent)?i.tangent.values:void 0,p=t.defined(i.st)?i.st.values:void 0,d=t.defined(i.extrudeDirection)?i.extrudeDirection.values:void 0,l=t.defined(i.applyOffset)?i.applyOffset.values:void 0,v=r.indices,f=[];for(var m in i)i.hasOwnProperty(m)&&!ce[m]&&t.defined(i[m])&&f.push(m);var y,c,h,C,b=f.length,w=ie(r),g=ie(r),T=[];T.length=n.length/3;var A=[];for(A.length=n.length/3,C=0;C<T.length;++C)T[C]=-1,A[C]=-1;var E=v.length;for(C=0;C<E;C+=3){var D=v[C],P=v[C+1],x=v[C+2],I=a.Cartesian3.fromArray(n,3*D),S=a.Cartesian3.fromArray(n,3*P),N=a.Cartesian3.fromArray(n,3*x),O=te(I,S,N);if(t.defined(O)&&O.positions.length>3)for(var L=O.positions,z=O.indices,G=z.length,M=0;M<G;++M){var q=z[M],R=L[q];R.y<0?(y=g.attributes,c=g.indices,h=T):(y=w.attributes,c=w.indices,h=A),fe(D,P,x,R,n,o,u,s,p,d,l,y,f,b,i,ye(y,c,h,v,q<3?C+q:-1,R))}else t.defined(O)&&(I=O.positions[0],S=O.positions[1],N=O.positions[2]),I.y<0?(y=g.attributes,c=g.indices,h=T):(y=w.attributes,c=w.indices,h=A),fe(D,P,x,I,n,o,u,s,p,d,l,y,f,b,i,ye(y,c,h,v,C,I)),fe(D,P,x,S,n,o,u,s,p,d,l,y,f,b,i,ye(y,c,h,v,C+1,S)),fe(D,P,x,N,n,o,u,s,p,d,l,y,f,b,i,ye(y,c,h,v,C+2,N))}ae(e,g,w)}var Ce=y.Plane.fromPointNormal(a.Cartesian3.ZERO,a.Cartesian3.UNIT_Y),be=new a.Cartesian3,we=new a.Cartesian3;function ge(e,r,n,o,s,u,p){if(t.defined(p)){var d=a.Cartesian3.fromArray(o,3*e,pe);a.Cartesian3.equalsEpsilon(d,n,i.CesiumMath.EPSILON10)?u.applyOffset.values[s]=p[e]:u.applyOffset.values[s]=p[r]}}function Te(e){var r,n=e.geometry,o=n.attributes,s=o.position.values,u=t.defined(o.applyOffset)?o.applyOffset.values:void 0,p=n.indices,d=ie(n),l=ie(n),v=p.length,f=[];f.length=s.length/3;var y=[];for(y.length=s.length/3,r=0;r<f.length;++r)f[r]=-1,y[r]=-1;for(r=0;r<v;r+=2){var c=p[r],h=p[r+1],C=a.Cartesian3.fromArray(s,3*c,pe),b=a.Cartesian3.fromArray(s,3*h,de);Math.abs(C.y)<i.CesiumMath.EPSILON6&&(C.y<0?C.y=-i.CesiumMath.EPSILON6:C.y=i.CesiumMath.EPSILON6),Math.abs(b.y)<i.CesiumMath.EPSILON6&&(b.y<0?b.y=-i.CesiumMath.EPSILON6:b.y=i.CesiumMath.EPSILON6);var w=d.attributes,g=d.indices,T=y,A=l.attributes,E=l.indices,D=f,P=m.IntersectionTests.lineSegmentPlane(C,b,Ce,le);if(t.defined(P)){var x=a.Cartesian3.multiplyByScalar(a.Cartesian3.UNIT_Y,5*i.CesiumMath.EPSILON9,be);C.y<0&&(a.Cartesian3.negate(x,x),w=l.attributes,g=l.indices,T=f,A=d.attributes,E=d.indices,D=y);var I=a.Cartesian3.add(P,x,we);ge(c,h,C,s,ye(w,g,T,p,r,C),w,u),ge(c,h,I,s,ye(w,g,T,p,-1,I),w,u),a.Cartesian3.negate(x,x),a.Cartesian3.add(P,x,I),ge(c,h,I,s,ye(A,E,D,p,-1,I),A,u),ge(c,h,b,s,ye(A,E,D,p,r+1,b),A,u)}else{var S,N,O;C.y<0?(S=l.attributes,N=l.indices,O=f):(S=d.attributes,N=d.indices,O=y),ge(c,h,C,s,ye(S,N,O,p,r,C),S,u),ge(c,h,b,s,ye(S,N,O,p,r+1,b),S,u)}}ae(e,l,d)}var Ae=new s.Cartesian2,Ee=new s.Cartesian2,De=new a.Cartesian3,Pe=new a.Cartesian3,xe=new a.Cartesian3,Ie=new a.Cartesian3,Se=new a.Cartesian3,Ne=new a.Cartesian3,Oe=new o.Cartesian4;function Le(e){for(var t=e.attributes,r=t.position.values,i=t.prevPosition.values,n=t.nextPosition.values,o=r.length,s=0;s<o;s+=3){var u=a.Cartesian3.unpack(r,s,De);if(!(u.x>0)){var p=a.Cartesian3.unpack(i,s,Pe);(u.y<0&&p.y>0||u.y>0&&p.y<0)&&(s-3>0?(i[s]=r[s-3],i[s+1]=r[s-2],i[s+2]=r[s-1]):a.Cartesian3.pack(u,i,s));var d=a.Cartesian3.unpack(n,s,xe);(u.y<0&&d.y>0||u.y>0&&d.y<0)&&(s+3<o?(n[s]=r[s+3],n[s+1]=r[s+4],n[s+2]=r[s+5]):a.Cartesian3.pack(u,n,s))}}}var ze=5*i.CesiumMath.EPSILON9,Ge=i.CesiumMath.EPSILON6;w.splitLongitude=function(e){if(!t.defined(e))throw new r.DeveloperError("instance is required.");var n=e.geometry,u=n.boundingSphere;if(t.defined(u)&&(u.center.x-u.radius>0||o.BoundingSphere.intersectPlane(u,y.Plane.ORIGIN_ZX_PLANE)!==o.Intersect.INTERSECTING))return e;if(n.geometryType!==p.GeometryType.NONE)switch(n.geometryType){case p.GeometryType.POLYLINES:!function(e){var r,n,u,p=e.geometry,d=p.attributes,l=d.position.values,v=d.prevPosition.values,f=d.nextPosition.values,y=d.expandAndWidth.values,c=t.defined(d.st)?d.st.values:void 0,h=t.defined(d.color)?d.color.values:void 0,C=ie(p),b=ie(p),w=!1,g=l.length/3;for(r=0;r<g;r+=4){var T=r,A=r+2,E=a.Cartesian3.fromArray(l,3*T,De),D=a.Cartesian3.fromArray(l,3*A,Pe);if(Math.abs(E.y)<Ge)for(E.y=Ge*(D.y<0?-1:1),l[3*r+1]=E.y,l[3*(r+1)+1]=E.y,n=3*T;n<3*T+12;n+=3)v[n]=l[3*r],v[n+1]=l[3*r+1],v[n+2]=l[3*r+2];if(Math.abs(D.y)<Ge)for(D.y=Ge*(E.y<0?-1:1),l[3*(r+2)+1]=D.y,l[3*(r+3)+1]=D.y,n=3*T;n<3*T+12;n+=3)f[n]=l[3*(r+2)],f[n+1]=l[3*(r+2)+1],f[n+2]=l[3*(r+2)+2];var P=C.attributes,x=C.indices,I=b.attributes,S=b.indices,N=m.IntersectionTests.lineSegmentPlane(E,D,Ce,Ie);if(t.defined(N)){w=!0;var O=a.Cartesian3.multiplyByScalar(a.Cartesian3.UNIT_Y,ze,Se);E.y<0&&(a.Cartesian3.negate(O,O),P=b.attributes,x=b.indices,I=C.attributes,S=C.indices);var L=a.Cartesian3.add(N,O,Ne);P.position.values.push(E.x,E.y,E.z,E.x,E.y,E.z),P.position.values.push(L.x,L.y,L.z),P.position.values.push(L.x,L.y,L.z),P.prevPosition.values.push(v[3*T],v[3*T+1],v[3*T+2]),P.prevPosition.values.push(v[3*T+3],v[3*T+4],v[3*T+5]),P.prevPosition.values.push(E.x,E.y,E.z,E.x,E.y,E.z),P.nextPosition.values.push(L.x,L.y,L.z),P.nextPosition.values.push(L.x,L.y,L.z),P.nextPosition.values.push(L.x,L.y,L.z),P.nextPosition.values.push(L.x,L.y,L.z),a.Cartesian3.negate(O,O),a.Cartesian3.add(N,O,L),I.position.values.push(L.x,L.y,L.z),I.position.values.push(L.x,L.y,L.z),I.position.values.push(D.x,D.y,D.z,D.x,D.y,D.z),I.prevPosition.values.push(L.x,L.y,L.z),I.prevPosition.values.push(L.x,L.y,L.z),I.prevPosition.values.push(L.x,L.y,L.z),I.prevPosition.values.push(L.x,L.y,L.z),I.nextPosition.values.push(D.x,D.y,D.z,D.x,D.y,D.z),I.nextPosition.values.push(f[3*A],f[3*A+1],f[3*A+2]),I.nextPosition.values.push(f[3*A+3],f[3*A+4],f[3*A+5]);var z=s.Cartesian2.fromArray(y,2*T,Ae),G=Math.abs(z.y);P.expandAndWidth.values.push(-1,G,1,G),P.expandAndWidth.values.push(-1,-G,1,-G),I.expandAndWidth.values.push(-1,G,1,G),I.expandAndWidth.values.push(-1,-G,1,-G);var M=a.Cartesian3.magnitudeSquared(a.Cartesian3.subtract(N,E,xe));if(M/=a.Cartesian3.magnitudeSquared(a.Cartesian3.subtract(D,E,xe)),t.defined(h)){var q=o.Cartesian4.fromArray(h,4*T,Oe),R=o.Cartesian4.fromArray(h,4*A,Oe),B=i.CesiumMath.lerp(q.x,R.x,M),V=i.CesiumMath.lerp(q.y,R.y,M),k=i.CesiumMath.lerp(q.z,R.z,M),F=i.CesiumMath.lerp(q.w,R.w,M);for(n=4*T;n<4*T+8;++n)P.color.values.push(h[n]);for(P.color.values.push(B,V,k,F),P.color.values.push(B,V,k,F),I.color.values.push(B,V,k,F),I.color.values.push(B,V,k,F),n=4*A;n<4*A+8;++n)I.color.values.push(h[n])}if(t.defined(c)){var _=s.Cartesian2.fromArray(c,2*T,Ae),U=s.Cartesian2.fromArray(c,2*(r+3),Ee),Y=i.CesiumMath.lerp(_.x,U.x,M);for(n=2*T;n<2*T+4;++n)P.st.values.push(c[n]);for(P.st.values.push(Y,_.y),P.st.values.push(Y,U.y),I.st.values.push(Y,_.y),I.st.values.push(Y,U.y),n=2*A;n<2*A+4;++n)I.st.values.push(c[n])}u=P.position.values.length/3-4,x.push(u,u+2,u+1),x.push(u+1,u+2,u+3),u=I.position.values.length/3-4,S.push(u,u+2,u+1),S.push(u+1,u+2,u+3)}else{var Z,H;for(E.y<0?(Z=b.attributes,H=b.indices):(Z=C.attributes,H=C.indices),Z.position.values.push(E.x,E.y,E.z),Z.position.values.push(E.x,E.y,E.z),Z.position.values.push(D.x,D.y,D.z),Z.position.values.push(D.x,D.y,D.z),n=3*r;n<3*r+12;++n)Z.prevPosition.values.push(v[n]),Z.nextPosition.values.push(f[n]);for(n=2*r;n<2*r+8;++n)Z.expandAndWidth.values.push(y[n]),t.defined(c)&&Z.st.values.push(c[n]);if(t.defined(h))for(n=4*r;n<4*r+16;++n)Z.color.values.push(h[n]);u=Z.position.values.length/3-4,H.push(u,u+2,u+1),H.push(u+1,u+2,u+3)}}w&&(Le(b),Le(C)),ae(e,b,C)}(e);break;case p.GeometryType.TRIANGLES:he(e);break;case p.GeometryType.LINES:Te(e)}else H(n),n.primitiveType===d.PrimitiveType.TRIANGLES?he(e):n.primitiveType===d.PrimitiveType.LINES&&Te(e);return e},e.GeometryPipeline=w}));
//# sourceMappingURL=GeometryPipeline-b6bb8671.js.map
