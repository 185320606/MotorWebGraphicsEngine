define(["exports","./when-7ef6387a","./Check-ed6a1804","./Cartesian3-cb3509e0"],(function(e,i,a,t){"use strict";var n=new t.Cartesian3,r=new t.Cartesian3;function o(e,a,o,u,d){var s=e.x,h=e.y,c=e.z,l=a.x,f=a.y,C=a.z,m=s*s*l*l,p=h*h*f*f,g=c*c*C*C,_=m+p+g,S=Math.sqrt(1/_),v=t.Cartesian3.multiplyByScalar(e,S,n);if(_<u)return isFinite(S)?t.Cartesian3.clone(v,d):void 0;var y=o.x,R=o.y,q=o.z,w=r;w.x=v.x*y*2,w.y=v.y*R*2,w.z=v.z*q*2;var O,M,T,z,x,N,b,A=(1-S)*t.Cartesian3.magnitude(e)/(.5*t.Cartesian3.magnitude(w)),E=0;do{E=(O=m*(x=(M=1/(1+(A-=E)*y))*M)+p*(N=(T=1/(1+A*R))*T)+g*(b=(z=1/(1+A*q))*z)-1)/(-2*(m*(x*M)*y+p*(N*T)*R+g*(b*z)*q))}while(Math.abs(O)>t.CesiumMath.EPSILON12);return i.defined(d)?(d.x=s*M,d.y=h*T,d.z=c*z,d):new t.Cartesian3(s*M,h*T,c*z)}function u(e,a,t){this.longitude=i.defaultValue(e,0),this.latitude=i.defaultValue(a,0),this.height=i.defaultValue(t,0)}u.fromRadians=function(e,a,t,n){return t=i.defaultValue(t,0),i.defined(n)?(n.longitude=e,n.latitude=a,n.height=t,n):new u(e,a,t)},u.fromDegrees=function(e,i,a,n){return e=t.CesiumMath.toRadians(e),i=t.CesiumMath.toRadians(i),u.fromRadians(e,i,a,n)};var d=new t.Cartesian3,s=new t.Cartesian3,h=new t.Cartesian3,c=new t.Cartesian3(1/6378137,1/6378137,1/6356752.314245179),l=new t.Cartesian3(1/40680631590769,1/40680631590769,1/40408299984661.445),f=t.CesiumMath.EPSILON1;function C(e,a,n,r){a=i.defaultValue(a,0),n=i.defaultValue(n,0),r=i.defaultValue(r,0),e._radii=new t.Cartesian3(a,n,r),e._radiiSquared=new t.Cartesian3(a*a,n*n,r*r),e._radiiToTheFourth=new t.Cartesian3(a*a*a*a,n*n*n*n,r*r*r*r),e._oneOverRadii=new t.Cartesian3(0===a?0:1/a,0===n?0:1/n,0===r?0:1/r),e._oneOverRadiiSquared=new t.Cartesian3(0===a?0:1/(a*a),0===n?0:1/(n*n),0===r?0:1/(r*r)),e._minimumRadius=Math.min(a,n,r),e._maximumRadius=Math.max(a,n,r),e._centerToleranceSquared=t.CesiumMath.EPSILON1,0!==e._radiiSquared.z&&(e._squaredXOverSquaredZ=e._radiiSquared.x/e._radiiSquared.z)}function m(e,i,a){this._radii=void 0,this._radiiSquared=void 0,this._radiiToTheFourth=void 0,this._oneOverRadii=void 0,this._oneOverRadiiSquared=void 0,this._minimumRadius=void 0,this._maximumRadius=void 0,this._centerToleranceSquared=void 0,this._squaredXOverSquaredZ=void 0,C(this,e,i,a)}u.fromCartesian=function(e,a,n){var r=i.defined(a)?a.oneOverRadii:c,C=i.defined(a)?a.oneOverRadiiSquared:l,m=o(e,r,C,i.defined(a)?a._centerToleranceSquared:f,s);if(i.defined(m)){var p=t.Cartesian3.multiplyComponents(m,C,d);p=t.Cartesian3.normalize(p,p);var g=t.Cartesian3.subtract(e,m,h),_=Math.atan2(p.y,p.x),S=Math.asin(p.z),v=t.CesiumMath.sign(t.Cartesian3.dot(g,e))*t.Cartesian3.magnitude(g);return i.defined(n)?(n.longitude=_,n.latitude=S,n.height=v,n):new u(_,S,v)}},u.toCartesian=function(e,i,a){return t.Cartesian3.fromRadians(e.longitude,e.latitude,e.height,i,a)},u.clone=function(e,a){if(i.defined(e))return i.defined(a)?(a.longitude=e.longitude,a.latitude=e.latitude,a.height=e.height,a):new u(e.longitude,e.latitude,e.height)},u.equals=function(e,a){return e===a||i.defined(e)&&i.defined(a)&&e.longitude===a.longitude&&e.latitude===a.latitude&&e.height===a.height},u.equalsEpsilon=function(e,a,t){return e===a||i.defined(e)&&i.defined(a)&&Math.abs(e.longitude-a.longitude)<=t&&Math.abs(e.latitude-a.latitude)<=t&&Math.abs(e.height-a.height)<=t},u.ZERO=Object.freeze(new u(0,0,0)),u.prototype.clone=function(e){return u.clone(this,e)},u.prototype.equals=function(e){return u.equals(this,e)},u.prototype.equalsEpsilon=function(e,i){return u.equalsEpsilon(this,e,i)},u.prototype.toString=function(){return"("+this.longitude+", "+this.latitude+", "+this.height+")"},Object.defineProperties(m.prototype,{radii:{get:function(){return this._radii}},radiiSquared:{get:function(){return this._radiiSquared}},radiiToTheFourth:{get:function(){return this._radiiToTheFourth}},oneOverRadii:{get:function(){return this._oneOverRadii}},oneOverRadiiSquared:{get:function(){return this._oneOverRadiiSquared}},minimumRadius:{get:function(){return this._minimumRadius}},maximumRadius:{get:function(){return this._maximumRadius}}}),m.clone=function(e,a){if(i.defined(e)){var n=e._radii;return i.defined(a)?(t.Cartesian3.clone(n,a._radii),t.Cartesian3.clone(e._radiiSquared,a._radiiSquared),t.Cartesian3.clone(e._radiiToTheFourth,a._radiiToTheFourth),t.Cartesian3.clone(e._oneOverRadii,a._oneOverRadii),t.Cartesian3.clone(e._oneOverRadiiSquared,a._oneOverRadiiSquared),a._minimumRadius=e._minimumRadius,a._maximumRadius=e._maximumRadius,a._centerToleranceSquared=e._centerToleranceSquared,a):new m(n.x,n.y,n.z)}},m.fromCartesian3=function(e,a){return i.defined(a)||(a=new m),i.defined(e)?(C(a,e.x,e.y,e.z),a):a},m.WGS84=Object.freeze(new m(6378137,6378137,6356752.314245179)),m.UNIT_SPHERE=Object.freeze(new m(1,1,1)),m.MOON=Object.freeze(new m(t.CesiumMath.LUNAR_RADIUS,t.CesiumMath.LUNAR_RADIUS,t.CesiumMath.LUNAR_RADIUS)),m.prototype.clone=function(e){return m.clone(this,e)},m.packedLength=t.Cartesian3.packedLength,m.pack=function(e,a,n){return n=i.defaultValue(n,0),t.Cartesian3.pack(e._radii,a,n),a},m.unpack=function(e,a,n){a=i.defaultValue(a,0);var r=t.Cartesian3.unpack(e,a);return m.fromCartesian3(r,n)},m.prototype.geocentricSurfaceNormal=t.Cartesian3.normalize,m.prototype.geodeticSurfaceNormalCartographic=function(e,a){var n=e.longitude,r=e.latitude,o=Math.cos(r),u=o*Math.cos(n),d=o*Math.sin(n),s=Math.sin(r);return i.defined(a)||(a=new t.Cartesian3),a.x=u,a.y=d,a.z=s,t.Cartesian3.normalize(a,a)},m.prototype.geodeticSurfaceNormal=function(e,a){return i.defined(a)||(a=new t.Cartesian3),a=t.Cartesian3.multiplyComponents(e,this._oneOverRadiiSquared,a),t.Cartesian3.normalize(a,a)};var p=new t.Cartesian3,g=new t.Cartesian3;m.prototype.cartographicToCartesian=function(e,a){var n=p,r=g;this.geodeticSurfaceNormalCartographic(e,n),t.Cartesian3.multiplyComponents(this._radiiSquared,n,r);var o=Math.sqrt(t.Cartesian3.dot(n,r));return t.Cartesian3.divideByScalar(r,o,r),t.Cartesian3.multiplyByScalar(n,e.height,n),i.defined(a)||(a=new t.Cartesian3),t.Cartesian3.add(r,n,a)},m.prototype.cartographicArrayToCartesianArray=function(e,a){var t=e.length;i.defined(a)?a.length=t:a=new Array(t);for(var n=0;n<t;n++)a[n]=this.cartographicToCartesian(e[n],a[n]);return a};var _=new t.Cartesian3,S=new t.Cartesian3,v=new t.Cartesian3;m.prototype.cartesianToCartographic=function(e,a){var n=this.scaleToGeodeticSurface(e,S);if(i.defined(n)){var r=this.geodeticSurfaceNormal(n,_),o=t.Cartesian3.subtract(e,n,v),d=Math.atan2(r.y,r.x),s=Math.asin(r.z),h=t.CesiumMath.sign(t.Cartesian3.dot(o,e))*t.Cartesian3.magnitude(o);return i.defined(a)?(a.longitude=d,a.latitude=s,a.height=h,a):new u(d,s,h)}},m.prototype.cartesianArrayToCartographicArray=function(e,a){var t=e.length;i.defined(a)?a.length=t:a=new Array(t);for(var n=0;n<t;++n)a[n]=this.cartesianToCartographic(e[n],a[n]);return a},m.prototype.scaleToGeodeticSurface=function(e,i){return o(e,this._oneOverRadii,this._oneOverRadiiSquared,this._centerToleranceSquared,i)},m.prototype.scaleToGeocentricSurface=function(e,a){i.defined(a)||(a=new t.Cartesian3);var n=e.x,r=e.y,o=e.z,u=this._oneOverRadiiSquared,d=1/Math.sqrt(n*n*u.x+r*r*u.y+o*o*u.z);return t.Cartesian3.multiplyByScalar(e,d,a)},m.prototype.transformPositionToScaledSpace=function(e,a){return i.defined(a)||(a=new t.Cartesian3),t.Cartesian3.multiplyComponents(e,this._oneOverRadii,a)},m.prototype.transformPositionFromScaledSpace=function(e,a){return i.defined(a)||(a=new t.Cartesian3),t.Cartesian3.multiplyComponents(e,this._radii,a)},m.prototype.equals=function(e){return this===e||i.defined(e)&&t.Cartesian3.equals(this._radii,e._radii)},m.prototype.toString=function(){return this._radii.toString()},m.prototype.getSurfaceNormalIntersectionWithZAxis=function(e,a,n){a=i.defaultValue(a,0);var r=this._squaredXOverSquaredZ;if(i.defined(n)||(n=new t.Cartesian3),n.x=0,n.y=0,n.z=e.z*(1-r),!(Math.abs(n.z)>=this._radii.z-a))return n},e.Cartographic=u,e.Ellipsoid=m}));