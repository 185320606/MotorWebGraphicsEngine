define(["./when-7ef6387a","./Check-ed6a1804","./Math-85667bf9","./RuntimeError-5b606d78","./WebGLConstants-30fc6f5c","./ComponentDatatype-a863af81","./IndexDatatype-f12d39b5","./createTaskProcessorWorker"],(function(e,r,t,n,a,o,i,u){"use strict";var s;function d(e,r){for(var t=e.num_points(),n=e.num_faces(),a=new s.DracoInt32Array,o=3*n,u=i.IndexDatatype.createTypedArray(t,o),d=0,c=0;c<n;++c)r.GetFaceFromMesh(e,c,a),u[d+0]=a.GetValue(0),u[d+1]=a.GetValue(1),u[d+2]=a.GetValue(2),d+=3;return s.destroy(a),{typedArray:u,numberOfIndices:o}}function c(r,t,n){var a,i=r.num_points(),u=n.num_components(),d=new s.AttributeQuantizationTransform;if(d.InitFromAttribute(n)){for(var c=new Array(u),f=0;f<u;++f)c[f]=d.min_value(f);a={quantizationBits:d.quantization_bits(),minValues:c,range:d.range(),octEncoded:!1}}s.destroy(d),(d=new s.AttributeOctahedronTransform).InitFromAttribute(n)&&(a={quantizationBits:d.quantization_bits(),octEncoded:!0}),s.destroy(d);var y,I=i*u;y=e.defined(a)?function(e,r,t,n,a){var o,i;n.quantizationBits<=8?(i=new s.DracoUInt8Array,o=new Uint8Array(a),r.GetAttributeUInt8ForAllPoints(e,t,i)):(i=new s.DracoUInt16Array,o=new Uint16Array(a),r.GetAttributeUInt16ForAllPoints(e,t,i));for(var u=0;u<a;++u)o[u]=i.GetValue(u);return s.destroy(i),o}(r,t,n,a,I):function(e,r,t,n){var a,o;switch(t.data_type()){case 1:case 11:o=new s.DracoInt8Array,a=new Int8Array(n),r.GetAttributeInt8ForAllPoints(e,t,o);break;case 2:o=new s.DracoUInt8Array,a=new Uint8Array(n),r.GetAttributeUInt8ForAllPoints(e,t,o);break;case 3:o=new s.DracoInt16Array,a=new Int16Array(n),r.GetAttributeInt16ForAllPoints(e,t,o);break;case 4:o=new s.DracoUInt16Array,a=new Uint16Array(n),r.GetAttributeUInt16ForAllPoints(e,t,o);break;case 5:case 7:o=new s.DracoInt32Array,a=new Int32Array(n),r.GetAttributeInt32ForAllPoints(e,t,o);break;case 6:case 8:o=new s.DracoUInt32Array,a=new Uint32Array(n),r.GetAttributeUInt32ForAllPoints(e,t,o);break;case 9:case 10:o=new s.DracoFloat32Array,a=new Float32Array(n),r.GetAttributeFloatForAllPoints(e,t,o)}for(var i=0;i<n;++i)a[i]=o.GetValue(i);return s.destroy(o),a}(r,t,n,I);var A=o.ComponentDatatype.fromTypedArray(y);return{array:y,data:{componentsPerAttribute:u,componentDatatype:A,byteOffset:n.byte_offset(),byteStride:o.ComponentDatatype.getSizeInBytes(A)*u,normalized:n.normalized(),quantization:a}}}function f(r){return e.defined(r.primitive)?function(e){var r=new s.Decoder,t=["POSITION","NORMAL","COLOR","TEX_COORD"];if(e.dequantizeInShader)for(var a=0;a<t.length;++a)r.SkipAttributeTransform(s[t[a]]);var o=e.bufferView,i=new s.DecoderBuffer;if(i.Init(e.array,o.byteLength),r.GetEncodedGeometryType(i)!==s.TRIANGULAR_MESH)throw new n.RuntimeError("Unsupported draco mesh geometry type.");var u=new s.Mesh,f=r.DecodeBufferToMesh(i,u);if(!f.ok()||0===u.ptr)throw new n.RuntimeError("Error decoding draco mesh geometry: "+f.error_msg());s.destroy(i);var y={},I=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],A=[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],m=e.compressedAttributes;for(var b in m)if(m.hasOwnProperty(b)){var l=m[b],w=r.GetAttributeByUniqueId(u,l);if(y[b]=c(u,r,w),"POSITION"===b&&e.projected&&!e.isInstance){var p=e.projectionString,T=e.dCenX,v=e.dCenY,D=e.dCenZ,N=new s.LBDeal;if(N.Init(p,T,v,D)){var h=y[b].array,P=h.length,F=e.matrix,G=h.byteLength,E=s._malloc(G);s.HEAPF32.set(h,E/4);var _=s._malloc(F.byteLength);s.HEAPF64.set(F,_/8),N.ComputeProjToCartesian(E,P,_);for(var O=new Float32Array(h.length),g=0;g<h.length;++g)O[g]=s.HEAPF32[(E>>2)+g],I[g%3]>O[g]&&(I[g%3]=O[g]),A[g%3]<O[g]&&(A[g%3]=O[g]);y[b].array=O,s._free(E),s._free(_)}s.destroy(N)}}var U={indexArray:d(u,r),attributeData:y,min:I,max:A};return s.destroy(u),s.destroy(r),U}(r):function(e){var r=new s.Decoder;e.dequantizeInShader&&(r.SkipAttributeTransform(s.POSITION),r.SkipAttributeTransform(s.NORMAL));var t=new s.DecoderBuffer;if(t.Init(e.buffer,e.buffer.length),r.GetEncodedGeometryType(t)!==s.POINT_CLOUD)throw new n.RuntimeError("Draco geometry type must be POINT_CLOUD.");var a=new s.PointCloud,o=r.DecodeBufferToPointCloud(t,a);if(!o.ok()||0===a.ptr)throw new n.RuntimeError("Error decoding draco point cloud: "+o.error_msg());s.destroy(t);var i={},u=e.properties;for(var d in u)if(u.hasOwnProperty(d)){var f=u[d],y=r.GetAttributeByUniqueId(a,f);i[d]=c(a,r,y)}return s.destroy(a),s.destroy(r),i}(r)}function y(e){s=e,self.onmessage=u(f),self.postMessage(!0)}return function(r){var t=r.data.webAssemblyConfig;if(e.defined(t))return require([t.modulePath],(function(r){e.defined(t.wasmBinaryFile)?(e.defined(r)||(r=self.DracoDecoderModule),r(t).then((function(e){y(e)}))):y(r())}))}}));
//# sourceMappingURL=decodeDraco.js.map
