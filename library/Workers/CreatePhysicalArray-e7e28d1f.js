define(["exports","./when-7ef6387a","./Cartesian3-ca5d3f12","./Matrix4-027dd006","./PrimitiveType-4c1d698a"],(function(e,a,t,r,i){"use strict";class n{}var l=new t.Cartesian3,f=new r.Matrix4,o=new t.Cartesian3;function d(e,t,r,i,n){var l,f=a.defined(r);for(e.SetPtValNum(t.length,f),l=0;l<t.length;++l)e.SetPtValVal(l,t[l]);if(f)for(l=0;l<r.length;++l)e.SetBatchIdVal(l,r[l]);var o=a.defined(n);for(e.SetIndexNum(i.length,o),l=0;l<i.length;++l)e.SetIndexVal(l,i[l]);if(o)for(l=0;l<n.length;++l)e.SetEdgeCheckVal(l,n[l])}n.createPhysicalArrayFromTerrain=function(e,i,n,S,h){n=a.defined(n)?n:t.Cartesian3.ZERO,t.Cartesian3.negate(n,l),r.Matrix4.fromTranslation(l,f);for(var v=new Float32Array(3*S.length),y=0,s=0;s<S.length;++s){var c=S[s];r.Matrix4.multiplyByPoint(f,c,o),v[y++]=o.x,v[y++]=o.y,v[y++]=o.z}var g=new e.LBSpaPrimitive;d(g,v,void 0,h,void 0);var u=i.CreateTriangleSpatial(g),p=new e.LBSpaSerial;p.WriteSpatial(u);for(var P=new Uint8Array(p.GetBufferSize()),B=0;B<P.length;++B)P[B]=p.GetBufferVal(B);return e.destroy(p),e.destroy(u),P},n.createPhysicalArrayFromModel=function(e,t,r,n,l,f,o,S){var h,v=new e.LBSpaPrimitive;i.PrimitiveType.LINES===r?(!function(e,t,r){var i,n=a.defined(r);for(e.SetPtValNum(t.length,n),i=0;i<t.length;++i)e.SetPtValVal(i,t[i]);if(n)for(i=0;i<r.length;++i)e.SetBatchIdVal(i,r[i]);e.InitIndexByPt()}(v,l,f),h=t.CreateStepLineSpatial(v)):(d(v,l,n?void 0:f,o,S),h=t.CreateTriangleSpatial(v));var y=new e.LBSpaSerial;y.WriteSpatial(h);for(var s=new Uint8Array(y.GetBufferSize()),c=0;c<s.length;++c)s[c]=y.GetBufferVal(c);return e.destroy(y),e.destroy(h),s},e.CreatePhysicalArray=n}));
//# sourceMappingURL=CreatePhysicalArray-e7e28d1f.js.map