define(["exports","./when-7ef6387a","./Check-ed6a1804","./Cartesian3-cb3509e0","./Ellipsoid-fc93f17d"],(function(e,r,t,n,o){"use strict";var l,s,i,f,u,a,c,C,d,g,m,b,E,F,A,O,S,p,h={requestFullscreen:void 0,exitFullscreen:void 0,fullscreenEnabled:void 0,fullscreenElement:void 0,fullscreenchange:void 0,fullscreenerror:void 0},z={};function L(e){for(var r=e.split("."),t=0,n=r.length;t<n;++t)r[t]=parseInt(r[t],10);return r}function j(){if(!r.defined(i)&&(i=!1,!I())){var e=/ Chrome\/([\.0-9]+)/.exec(s.userAgent);null!==e&&(i=!0,f=L(e[1]))}return i}function D(){if(!r.defined(u)&&(u=!1,!j()&&!I()&&/ Safari\/[\.0-9]+/.test(s.userAgent))){var e=/ Version\/([\.0-9]+)/.exec(s.userAgent);null!==e&&(u=!0,a=L(e[1]))}return u}function R(){if(!r.defined(c)){c=!1;var e=/ AppleWebKit\/([\.0-9]+)(\+?)/.exec(s.userAgent);null!==e&&(c=!0,(C=L(e[1])).isNightly=!!e[2])}return c}function B(){var e;r.defined(d)||(d=!1,"Microsoft Internet Explorer"===s.appName?null!==(e=/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(s.userAgent))&&(d=!0,g=L(e[1])):"Netscape"===s.appName&&null!==(e=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(s.userAgent))&&(d=!0,g=L(e[1])));return d}function I(){if(!r.defined(m)){m=!1;var e=/ Edge\/([\.0-9]+)/.exec(s.userAgent);null!==e&&(m=!0,b=L(e[1]))}return m}function y(){if(!r.defined(E)){E=!1;var e=/Firefox\/([\.0-9]+)/.exec(s.userAgent);null!==e&&(E=!0,F=L(e[1]))}return E}function M(){if(!r.defined(p)){var e=document.createElement("canvas");e.setAttribute("style","image-rendering: -moz-crisp-edges;image-rendering: pixelated;");var t=e.style.imageRendering;(p=r.defined(t)&&""!==t)&&(S=t)}return p}function T(){return T._result}Object.defineProperties(z,{element:{get:function(){if(z.supportsFullscreen())return document[h.fullscreenElement]}},changeEventName:{get:function(){if(z.supportsFullscreen())return h.fullscreenchange}},errorEventName:{get:function(){if(z.supportsFullscreen())return h.fullscreenerror}},enabled:{get:function(){if(z.supportsFullscreen())return document[h.fullscreenEnabled]}},fullscreen:{get:function(){if(z.supportsFullscreen())return null!==z.element}}}),z.supportsFullscreen=function(){if(r.defined(l))return l;l=!1;var e=document.body;if("function"==typeof e.requestFullscreen)return h.requestFullscreen="requestFullscreen",h.exitFullscreen="exitFullscreen",h.fullscreenEnabled="fullscreenEnabled",h.fullscreenElement="fullscreenElement",h.fullscreenchange="fullscreenchange",h.fullscreenerror="fullscreenerror",l=!0;for(var t,n=["webkit","moz","o","ms","khtml"],o=0,s=n.length;o<s;++o){var i=n[o];("function"==typeof e[t=i+"RequestFullscreen"]||"function"==typeof e[t=i+"RequestFullScreen"])&&(h.requestFullscreen=t,l=!0),t=i+"ExitFullscreen","function"==typeof document[t]?h.exitFullscreen=t:(t=i+"CancelFullScreen","function"==typeof document[t]&&(h.exitFullscreen=t)),t=i+"FullscreenEnabled",void 0!==document[t]?h.fullscreenEnabled=t:(t=i+"FullScreenEnabled",void 0!==document[t]&&(h.fullscreenEnabled=t)),t=i+"FullscreenElement",void 0!==document[t]?h.fullscreenElement=t:(t=i+"FullScreenElement",void 0!==document[t]&&(h.fullscreenElement=t)),t=i+"fullscreenchange",void 0!==document["on"+t]&&("ms"===i&&(t="MSFullscreenChange"),h.fullscreenchange=t),t=i+"fullscreenerror",void 0!==document["on"+t]&&("ms"===i&&(t="MSFullscreenError"),h.fullscreenerror=t)}return l},z.requestFullscreen=function(e,r){z.supportsFullscreen()&&e[h.requestFullscreen]({vrDisplay:r})},z.exitFullscreen=function(){z.supportsFullscreen()&&document[h.exitFullscreen]()},z._names=h,s="undefined"!=typeof navigator?navigator:{},T._promise=void 0,T._result=void 0,T.initialize=function(){if(r.defined(T._promise))return T._promise;var e=r.when.defer();if(T._promise=e.promise,I())return T._result=!1,e.resolve(T._result),e.promise;var t=new Image;return t.onload=function(){T._result=t.width>0&&t.height>0,e.resolve(T._result)},t.onerror=function(){T._result=!1,e.resolve(T._result)},t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.promise},Object.defineProperties(T,{initialized:{get:function(){return r.defined(T._result)}}});var N=[];"undefined"!=typeof ArrayBuffer&&(N.push(Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array),"undefined"!=typeof Uint8ClampedArray&&N.push(Uint8ClampedArray),"undefined"!=typeof CanvasPixelArray&&N.push(CanvasPixelArray));var v,_,G,U={isChrome:j,chromeVersion:function(){return j()&&f},isSafari:D,safariVersion:function(){return D()&&a},isWebkit:R,webkitVersion:function(){return R()&&C},isInternetExplorer:B,internetExplorerVersion:function(){return B()&&g},isEdge:I,edgeVersion:function(){return I()&&b},isFirefox:y,firefoxVersion:function(){return y()&&F},isWindows:function(){return r.defined(A)||(A=/Windows/i.test(s.appVersion)),A},hardwareConcurrency:r.defaultValue(s.hardwareConcurrency,3),supportsPointerEvents:function(){return r.defined(O)||(O=!y()&&"undefined"!=typeof PointerEvent&&(!r.defined(s.pointerEnabled)||s.pointerEnabled)),O},supportsImageRenderingPixelated:M,supportsWebP:T,imageRenderingValue:function(){return M()?S:void 0},typedArrayTypes:N};function V(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),6*t<1?e+6*(r-e)*t:2*t<1?r:3*t<2?e+(r-e)*(2/3-t)*6:e}function x(e,t,n,o){this.red=r.defaultValue(e,1),this.green=r.defaultValue(t,1),this.blue=r.defaultValue(n,1),this.alpha=r.defaultValue(o,1)}U.supportsFullscreen=function(){return z.supportsFullscreen()},U.supportsTypedArrays=function(){return"undefined"!=typeof ArrayBuffer},U.supportsWebWorkers=function(){return"undefined"!=typeof Worker},U.supportsWebAssembly=function(){return"undefined"!=typeof WebAssembly&&!U.isEdge()},x.fromCartesian4=function(e,t){return r.defined(t)?(t.red=e.x,t.green=e.y,t.blue=e.z,t.alpha=e.w,t):new x(e.x,e.y,e.z,e.w)},x.fromBytes=function(e,t,n,o,l){return e=x.byteToFloat(r.defaultValue(e,255)),t=x.byteToFloat(r.defaultValue(t,255)),n=x.byteToFloat(r.defaultValue(n,255)),o=x.byteToFloat(r.defaultValue(o,255)),r.defined(l)?(l.red=e,l.green=t,l.blue=n,l.alpha=o,l):new x(e,t,n,o)},x.fromAlpha=function(e,t,n){return r.defined(n)?(n.red=e.red,n.green=e.green,n.blue=e.blue,n.alpha=t,n):new x(e.red,e.green,e.blue,t)},U.supportsTypedArrays()&&(v=new ArrayBuffer(4),_=new Uint32Array(v),G=new Uint8Array(v)),x.fromRgba=function(e,r){return _[0]=e,x.fromBytes(G[0],G[1],G[2],G[3],r)},x.fromHsl=function(e,t,n,o,l){e=r.defaultValue(e,0)%1,t=r.defaultValue(t,0),n=r.defaultValue(n,0),o=r.defaultValue(o,1);var s=n,i=n,f=n;if(0!==t){var u,a=2*n-(u=n<.5?n*(1+t):n+t-n*t);s=V(a,u,e+1/3),i=V(a,u,e),f=V(a,u,e-1/3)}return r.defined(l)?(l.red=s,l.green=i,l.blue=f,l.alpha=o,l):new x(s,i,f,o)},x.fromRandom=function(e,t){var o=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).red;if(!r.defined(o)){var l=r.defaultValue(e.minimumRed,0),s=r.defaultValue(e.maximumRed,1);o=l+n.CesiumMath.nextRandomNumber()*(s-l)}var i=e.green;if(!r.defined(i)){var f=r.defaultValue(e.minimumGreen,0),u=r.defaultValue(e.maximumGreen,1);i=f+n.CesiumMath.nextRandomNumber()*(u-f)}var a=e.blue;if(!r.defined(a)){var c=r.defaultValue(e.minimumBlue,0),C=r.defaultValue(e.maximumBlue,1);a=c+n.CesiumMath.nextRandomNumber()*(C-c)}var d=e.alpha;if(!r.defined(d)){var g=r.defaultValue(e.minimumAlpha,0),m=r.defaultValue(e.maximumAlpha,1);d=g+n.CesiumMath.nextRandomNumber()*(m-g)}return r.defined(t)?(t.red=o,t.green=i,t.blue=a,t.alpha=d,t):new x(o,i,a,d)};var H=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i,w=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,P=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,Y=/^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;x.fromCssColorString=function(e,t){r.defined(t)||(t=new x);var n=x[e.toUpperCase()];if(r.defined(n))return x.clone(n,t),t;var o=H.exec(e);return null!==o?(t.red=parseInt(o[1],16)/15,t.green=parseInt(o[2],16)/15,t.blue=parseInt(o[3],16)/15,t.alpha=1,t):null!==(o=w.exec(e))?(t.red=parseInt(o[1],16)/255,t.green=parseInt(o[2],16)/255,t.blue=parseInt(o[3],16)/255,t.alpha=1,t):null!==(o=P.exec(e))?(t.red=parseFloat(o[1])/("%"===o[1].substr(-1)?100:255),t.green=parseFloat(o[2])/("%"===o[2].substr(-1)?100:255),t.blue=parseFloat(o[3])/("%"===o[3].substr(-1)?100:255),t.alpha=parseFloat(r.defaultValue(o[4],"1.0")),t):null!==(o=Y.exec(e))?x.fromHsl(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,parseFloat(r.defaultValue(o[4],"1.0")),t):t=void 0},x.packedLength=4,x.pack=function(e,t,n){return n=r.defaultValue(n,0),t[n++]=e.red,t[n++]=e.green,t[n++]=e.blue,t[n]=e.alpha,t},x.unpack=function(e,t,n){return t=r.defaultValue(t,0),r.defined(n)||(n=new x),n.red=e[t++],n.green=e[t++],n.blue=e[t++],n.alpha=e[t],n},x.byteToFloat=function(e){return e/255},x.floatToByte=function(e){return 1===e?255:256*e|0},x.clone=function(e,t){if(r.defined(e))return r.defined(t)?(t.red=e.red,t.green=e.green,t.blue=e.blue,t.alpha=e.alpha,t):new x(e.red,e.green,e.blue,e.alpha)},x.equals=function(e,t){return e===t||r.defined(e)&&r.defined(t)&&e.red===t.red&&e.green===t.green&&e.blue===t.blue&&e.alpha===t.alpha},x.equalsArray=function(e,r,t){return e.red===r[t]&&e.green===r[t+1]&&e.blue===r[t+2]&&e.alpha===r[t+3]},x.prototype.clone=function(e){return x.clone(this,e)},x.prototype.equals=function(e){return x.equals(this,e)},x.prototype.equalsEpsilon=function(e,t){return this===e||r.defined(e)&&Math.abs(this.red-e.red)<=t&&Math.abs(this.green-e.green)<=t&&Math.abs(this.blue-e.blue)<=t&&Math.abs(this.alpha-e.alpha)<=t},x.prototype.toString=function(){return"("+this.red+", "+this.green+", "+this.blue+", "+this.alpha+")"},x.prototype.toCssColorString=function(){var e=x.floatToByte(this.red),r=x.floatToByte(this.green),t=x.floatToByte(this.blue);return 1===this.alpha?"rgb("+e+","+r+","+t+")":"rgba("+e+","+r+","+t+","+this.alpha+")"},x.prototype.toBytes=function(e){var t=x.floatToByte(this.red),n=x.floatToByte(this.green),o=x.floatToByte(this.blue),l=x.floatToByte(this.alpha);return r.defined(e)?(e[0]=t,e[1]=n,e[2]=o,e[3]=l,e):[t,n,o,l]},x.prototype.toRgba=function(){return G[0]=x.floatToByte(this.red),G[1]=x.floatToByte(this.green),G[2]=x.floatToByte(this.blue),G[3]=x.floatToByte(this.alpha),_[0]},x.prototype.brighten=function(e,r){return e=1-e,r.red=1-(1-this.red)*e,r.green=1-(1-this.green)*e,r.blue=1-(1-this.blue)*e,r.alpha=this.alpha,r},x.prototype.darken=function(e,r){return e=1-e,r.red=this.red*e,r.green=this.green*e,r.blue=this.blue*e,r.alpha=this.alpha,r},x.prototype.withAlpha=function(e,r){return x.fromAlpha(this,e,r)},x.add=function(e,r,t){return t.red=e.red+r.red,t.green=e.green+r.green,t.blue=e.blue+r.blue,t.alpha=e.alpha+r.alpha,t},x.subtract=function(e,r,t){return t.red=e.red-r.red,t.green=e.green-r.green,t.blue=e.blue-r.blue,t.alpha=e.alpha-r.alpha,t},x.multiply=function(e,r,t){return t.red=e.red*r.red,t.green=e.green*r.green,t.blue=e.blue*r.blue,t.alpha=e.alpha*r.alpha,t},x.divide=function(e,r,t){return t.red=e.red/r.red,t.green=e.green/r.green,t.blue=e.blue/r.blue,t.alpha=e.alpha/r.alpha,t},x.mod=function(e,r,t){return t.red=e.red%r.red,t.green=e.green%r.green,t.blue=e.blue%r.blue,t.alpha=e.alpha%r.alpha,t},x.lerp=function(e,r,t,o){return o.red=n.CesiumMath.lerp(e.red,r.red,t),o.green=n.CesiumMath.lerp(e.green,r.green,t),o.blue=n.CesiumMath.lerp(e.blue,r.blue,t),o.alpha=n.CesiumMath.lerp(e.alpha,r.alpha,t),o},x.multiplyByScalar=function(e,r,t){return t.red=e.red*r,t.green=e.green*r,t.blue=e.blue*r,t.alpha=e.alpha*r,t},x.divideByScalar=function(e,r,t){return t.red=e.red/r,t.green=e.green/r,t.blue=e.blue/r,t.alpha=e.alpha/r,t},x.ALICEBLUE=Object.freeze(x.fromCssColorString("#F0F8FF")),x.ANTIQUEWHITE=Object.freeze(x.fromCssColorString("#FAEBD7")),x.AQUA=Object.freeze(x.fromCssColorString("#00FFFF")),x.AQUAMARINE=Object.freeze(x.fromCssColorString("#7FFFD4")),x.AZURE=Object.freeze(x.fromCssColorString("#F0FFFF")),x.BEIGE=Object.freeze(x.fromCssColorString("#F5F5DC")),x.BISQUE=Object.freeze(x.fromCssColorString("#FFE4C4")),x.BLACK=Object.freeze(x.fromCssColorString("#000000")),x.BLANCHEDALMOND=Object.freeze(x.fromCssColorString("#FFEBCD")),x.BLUE=Object.freeze(x.fromCssColorString("#0000FF")),x.BLUEVIOLET=Object.freeze(x.fromCssColorString("#8A2BE2")),x.BROWN=Object.freeze(x.fromCssColorString("#A52A2A")),x.BURLYWOOD=Object.freeze(x.fromCssColorString("#DEB887")),x.CADETBLUE=Object.freeze(x.fromCssColorString("#5F9EA0")),x.CHARTREUSE=Object.freeze(x.fromCssColorString("#7FFF00")),x.CHOCOLATE=Object.freeze(x.fromCssColorString("#D2691E")),x.CORAL=Object.freeze(x.fromCssColorString("#FF7F50")),x.CORNFLOWERBLUE=Object.freeze(x.fromCssColorString("#6495ED")),x.CORNSILK=Object.freeze(x.fromCssColorString("#FFF8DC")),x.CRIMSON=Object.freeze(x.fromCssColorString("#DC143C")),x.CYAN=Object.freeze(x.fromCssColorString("#00FFFF")),x.DARKBLUE=Object.freeze(x.fromCssColorString("#00008B")),x.DARKCYAN=Object.freeze(x.fromCssColorString("#008B8B")),x.DARKGOLDENROD=Object.freeze(x.fromCssColorString("#B8860B")),x.DARKGRAY=Object.freeze(x.fromCssColorString("#A9A9A9")),x.DARKGREEN=Object.freeze(x.fromCssColorString("#006400")),x.DARKGREY=x.DARKGRAY,x.DARKKHAKI=Object.freeze(x.fromCssColorString("#BDB76B")),x.DARKMAGENTA=Object.freeze(x.fromCssColorString("#8B008B")),x.DARKOLIVEGREEN=Object.freeze(x.fromCssColorString("#556B2F")),x.DARKORANGE=Object.freeze(x.fromCssColorString("#FF8C00")),x.DARKORCHID=Object.freeze(x.fromCssColorString("#9932CC")),x.DARKRED=Object.freeze(x.fromCssColorString("#8B0000")),x.DARKSALMON=Object.freeze(x.fromCssColorString("#E9967A")),x.DARKSEAGREEN=Object.freeze(x.fromCssColorString("#8FBC8F")),x.DARKSLATEBLUE=Object.freeze(x.fromCssColorString("#483D8B")),x.DARKSLATEGRAY=Object.freeze(x.fromCssColorString("#2F4F4F")),x.DARKSLATEGREY=x.DARKSLATEGRAY,x.DARKTURQUOISE=Object.freeze(x.fromCssColorString("#00CED1")),x.DARKVIOLET=Object.freeze(x.fromCssColorString("#9400D3")),x.DEEPPINK=Object.freeze(x.fromCssColorString("#FF1493")),x.DEEPSKYBLUE=Object.freeze(x.fromCssColorString("#00BFFF")),x.DIMGRAY=Object.freeze(x.fromCssColorString("#696969")),x.DIMGREY=x.DIMGRAY,x.DODGERBLUE=Object.freeze(x.fromCssColorString("#1E90FF")),x.FIREBRICK=Object.freeze(x.fromCssColorString("#B22222")),x.FLORALWHITE=Object.freeze(x.fromCssColorString("#FFFAF0")),x.FORESTGREEN=Object.freeze(x.fromCssColorString("#228B22")),x.FUCHSIA=Object.freeze(x.fromCssColorString("#FF00FF")),x.GAINSBORO=Object.freeze(x.fromCssColorString("#DCDCDC")),x.GHOSTWHITE=Object.freeze(x.fromCssColorString("#F8F8FF")),x.GOLD=Object.freeze(x.fromCssColorString("#FFD700")),x.GOLDENROD=Object.freeze(x.fromCssColorString("#DAA520")),x.GRAY=Object.freeze(x.fromCssColorString("#808080")),x.GREEN=Object.freeze(x.fromCssColorString("#008000")),x.GREENYELLOW=Object.freeze(x.fromCssColorString("#ADFF2F")),x.GREY=x.GRAY,x.HONEYDEW=Object.freeze(x.fromCssColorString("#F0FFF0")),x.HOTPINK=Object.freeze(x.fromCssColorString("#FF69B4")),x.INDIANRED=Object.freeze(x.fromCssColorString("#CD5C5C")),x.INDIGO=Object.freeze(x.fromCssColorString("#4B0082")),x.IVORY=Object.freeze(x.fromCssColorString("#FFFFF0")),x.KHAKI=Object.freeze(x.fromCssColorString("#F0E68C")),x.LAVENDER=Object.freeze(x.fromCssColorString("#E6E6FA")),x.LAVENDAR_BLUSH=Object.freeze(x.fromCssColorString("#FFF0F5")),x.LAWNGREEN=Object.freeze(x.fromCssColorString("#7CFC00")),x.LEMONCHIFFON=Object.freeze(x.fromCssColorString("#FFFACD")),x.LIGHTBLUE=Object.freeze(x.fromCssColorString("#ADD8E6")),x.LIGHTCORAL=Object.freeze(x.fromCssColorString("#F08080")),x.LIGHTCYAN=Object.freeze(x.fromCssColorString("#E0FFFF")),x.LIGHTGOLDENRODYELLOW=Object.freeze(x.fromCssColorString("#FAFAD2")),x.LIGHTGRAY=Object.freeze(x.fromCssColorString("#D3D3D3")),x.LIGHTGREEN=Object.freeze(x.fromCssColorString("#90EE90")),x.LIGHTGREY=x.LIGHTGRAY,x.LIGHTPINK=Object.freeze(x.fromCssColorString("#FFB6C1")),x.LIGHTSEAGREEN=Object.freeze(x.fromCssColorString("#20B2AA")),x.LIGHTSKYBLUE=Object.freeze(x.fromCssColorString("#87CEFA")),x.LIGHTSLATEGRAY=Object.freeze(x.fromCssColorString("#778899")),x.LIGHTSLATEGREY=x.LIGHTSLATEGRAY,x.LIGHTSTEELBLUE=Object.freeze(x.fromCssColorString("#B0C4DE")),x.LIGHTYELLOW=Object.freeze(x.fromCssColorString("#FFFFE0")),x.LIME=Object.freeze(x.fromCssColorString("#00FF00")),x.LIMEGREEN=Object.freeze(x.fromCssColorString("#32CD32")),x.LINEN=Object.freeze(x.fromCssColorString("#FAF0E6")),x.MAGENTA=Object.freeze(x.fromCssColorString("#FF00FF")),x.MAROON=Object.freeze(x.fromCssColorString("#800000")),x.MEDIUMAQUAMARINE=Object.freeze(x.fromCssColorString("#66CDAA")),x.MEDIUMBLUE=Object.freeze(x.fromCssColorString("#0000CD")),x.MEDIUMORCHID=Object.freeze(x.fromCssColorString("#BA55D3")),x.MEDIUMPURPLE=Object.freeze(x.fromCssColorString("#9370DB")),x.MEDIUMSEAGREEN=Object.freeze(x.fromCssColorString("#3CB371")),x.MEDIUMSLATEBLUE=Object.freeze(x.fromCssColorString("#7B68EE")),x.MEDIUMSPRINGGREEN=Object.freeze(x.fromCssColorString("#00FA9A")),x.MEDIUMTURQUOISE=Object.freeze(x.fromCssColorString("#48D1CC")),x.MEDIUMVIOLETRED=Object.freeze(x.fromCssColorString("#C71585")),x.MIDNIGHTBLUE=Object.freeze(x.fromCssColorString("#191970")),x.MINTCREAM=Object.freeze(x.fromCssColorString("#F5FFFA")),x.MISTYROSE=Object.freeze(x.fromCssColorString("#FFE4E1")),x.MOCCASIN=Object.freeze(x.fromCssColorString("#FFE4B5")),x.NAVAJOWHITE=Object.freeze(x.fromCssColorString("#FFDEAD")),x.NAVY=Object.freeze(x.fromCssColorString("#000080")),x.OLDLACE=Object.freeze(x.fromCssColorString("#FDF5E6")),x.OLIVE=Object.freeze(x.fromCssColorString("#808000")),x.OLIVEDRAB=Object.freeze(x.fromCssColorString("#6B8E23")),x.ORANGE=Object.freeze(x.fromCssColorString("#FFA500")),x.ORANGERED=Object.freeze(x.fromCssColorString("#FF4500")),x.ORCHID=Object.freeze(x.fromCssColorString("#DA70D6")),x.PALEGOLDENROD=Object.freeze(x.fromCssColorString("#EEE8AA")),x.PALEGREEN=Object.freeze(x.fromCssColorString("#98FB98")),x.PALETURQUOISE=Object.freeze(x.fromCssColorString("#AFEEEE")),x.PALEVIOLETRED=Object.freeze(x.fromCssColorString("#DB7093")),x.PAPAYAWHIP=Object.freeze(x.fromCssColorString("#FFEFD5")),x.PEACHPUFF=Object.freeze(x.fromCssColorString("#FFDAB9")),x.PERU=Object.freeze(x.fromCssColorString("#CD853F")),x.PINK=Object.freeze(x.fromCssColorString("#FFC0CB")),x.PLUM=Object.freeze(x.fromCssColorString("#DDA0DD")),x.POWDERBLUE=Object.freeze(x.fromCssColorString("#B0E0E6")),x.PURPLE=Object.freeze(x.fromCssColorString("#800080")),x.RED=Object.freeze(x.fromCssColorString("#FF0000")),x.ROSYBROWN=Object.freeze(x.fromCssColorString("#BC8F8F")),x.ROYALBLUE=Object.freeze(x.fromCssColorString("#4169E1")),x.SADDLEBROWN=Object.freeze(x.fromCssColorString("#8B4513")),x.SALMON=Object.freeze(x.fromCssColorString("#FA8072")),x.SANDYBROWN=Object.freeze(x.fromCssColorString("#F4A460")),x.SEAGREEN=Object.freeze(x.fromCssColorString("#2E8B57")),x.SEASHELL=Object.freeze(x.fromCssColorString("#FFF5EE")),x.SIENNA=Object.freeze(x.fromCssColorString("#A0522D")),x.SILVER=Object.freeze(x.fromCssColorString("#C0C0C0")),x.SKYBLUE=Object.freeze(x.fromCssColorString("#87CEEB")),x.SLATEBLUE=Object.freeze(x.fromCssColorString("#6A5ACD")),x.SLATEGRAY=Object.freeze(x.fromCssColorString("#708090")),x.SLATEGREY=x.SLATEGRAY,x.SNOW=Object.freeze(x.fromCssColorString("#FFFAFA")),x.SPRINGGREEN=Object.freeze(x.fromCssColorString("#00FF7F")),x.STEELBLUE=Object.freeze(x.fromCssColorString("#4682B4")),x.TAN=Object.freeze(x.fromCssColorString("#D2B48C")),x.TEAL=Object.freeze(x.fromCssColorString("#008080")),x.THISTLE=Object.freeze(x.fromCssColorString("#D8BFD8")),x.TOMATO=Object.freeze(x.fromCssColorString("#FF6347")),x.TURQUOISE=Object.freeze(x.fromCssColorString("#40E0D0")),x.VIOLET=Object.freeze(x.fromCssColorString("#EE82EE")),x.WHEAT=Object.freeze(x.fromCssColorString("#F5DEB3")),x.WHITE=Object.freeze(x.fromCssColorString("#FFFFFF")),x.WHITESMOKE=Object.freeze(x.fromCssColorString("#F5F5F5")),x.YELLOW=Object.freeze(x.fromCssColorString("#FFFF00")),x.YELLOWGREEN=Object.freeze(x.fromCssColorString("#9ACD32")),x.TRANSPARENT=Object.freeze(new x(0,0,0,0)),x.SUNLIGHT=Object.freeze(new x(1,.972549,.929412,1));var W=Object.freeze({CIM:0,BIM:1,PLANE:2}),K={_enableTAA:!1,_jitterOffset:[0,0],_currentFrameTaaEnabled:!1,_historicalInvalid:!1,_ultimatePerformance:!0,_ambientLight:new n.Cartesian3(.2,.2,.2),_lightScaleFactor:1,_vignetteMode:!1,_isWebgl2:!1,_multipleSamples:4,_ellipsoidType:o.Ellipsoid.WGS84,_isFlashlight:!1,_enableSMAA:!1,_outLineColor:new x(0,0,0,0),_enableOutLine:!0,_materemModule:void 0,_lBSpaMgr:void 0,_enableLazyLoad:!1,_lazyLoadMaxByteLength:1e7,_lazyLoadByteLength:0,_viewerMode:W.CIM,_debugMode:!1};Object.defineProperties(K,{enableTAA:{get:function(){return K._enableTAA},set:function(e){K._enableTAA=e,e&&(K.historicalInvalid=e)}},jitterOffset:{get:function(){return K._jitterOffset},set:function(e){K._jitterOffset=e}},historicalInvalid:{get:function(){return K._historicalInvalid},set:function(e){K._historicalInvalid=e}},currentFrameTaaEnabled:{get:function(){return K._currentFrameTaaEnabled},set:function(e){K._currentFrameTaaEnabled=e}},ultimatePerformance:{get:function(){return K._ultimatePerformance},set:function(e){K._ultimatePerformance=e}},ambientLight:{get:function(){return K._ambientLight},set:function(e){if(!r.defined(e))throw new t.DeveloperError("ambientLight must be defined");if(!(e instanceof n.Cartesian3))throw new t.DeveloperError("ambientLight must be an instance of Cartesian3");K._ambientLight=e}},lightScaleFactor:{get:function(){return K._lightScaleFactor},set:function(e){if(!r.defined(e||e<0))throw new t.DeveloperError("lightScaleFactor must be greater than or equal to 0.0.");K._lightScaleFactor=e}},vignetteMode:{get:function(){return K._vignetteMode},set:function(e){K._vignetteMode=e}},isWebgl2:{get:function(){return K._isWebgl2},set:function(e){K._isWebgl2=e}},multipleSamples:{get:function(){return K._multipleSamples},set:function(e){K._multipleSamples=e}},isBIMMode:{get:function(){return K._viewerMode===W.BIM}},ellipsoidType:{get:function(){return K._ellipsoidType},set:function(e){K._ellipsoidType=e}},isFlashlight:{get:function(){return K._isFlashlight},set:function(e){K._isFlashlight=e}},enableSMAA:{get:function(){return K._enableSMAA},set:function(e){K._enableSMAA=e}},outLineColor:{get:function(){return K._outLineColor},set:function(e){K._outLineColor=e}},enableOutLine:{get:function(){return K._enableOutLine},set:function(e){K._enableOutLine=e}},materemModule:{get:function(){return K._materemModule},set:function(e){K._materemModule=e}},lBSpaMgr:{get:function(){return K._lBSpaMgr},set:function(e){K._lBSpaMgr=e}},isPlaneMode:{get:function(){return K._viewerMode===W.PLANE}},enableLazyLoad:{get:function(){return K._enableLazyLoad},set:function(e){K._enableLazyLoad=e}},lazyLoadMaxByteLength:{get:function(){return K._lazyLoadMaxByteLength},set:function(e){if(e<0)throw new t.DeveloperError("lazyLoadMaxNum must be greater than or equal to 0.0");K._lazyLoadMaxByteLength=e}},lazyLoadByteLength:{get:function(){return K._lazyLoadByteLength},set:function(e){e=e<0?0:e,K._lazyLoadByteLength=e}},viewerMode:{get:function(){return K._viewerMode},set:function(e){K._viewerMode=e}},debugMode:{get:function(){return K._debugMode},set:function(e){K._debugMode=e}}}),K.checkLoading=function(e){return!K.enableLazyLoad||K.lazyLoadByteLength<K.lazyLoadMaxByteLength&&(K.lazyLoadByteLength+=e,!0)},K.getShaderDefines=function(e){return K.isBIMMode&&e.push("BIM_MODE"),K.isPlaneMode&&e.push("PLANE_MODE"),K.isWebgl2&&e.push("WEBGL2"),e},e.Color=x,e.EnvironmentVariables=K,e.FeatureDetection=U}));