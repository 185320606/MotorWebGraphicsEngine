define(["exports","./when-7ef6387a","./Check-ed6a1804","./Cartesian3-cb3509e0"],(function(e,n,i,o){"use strict";function h(){this.high=o.Cartesian3.clone(o.Cartesian3.ZERO),this.low=o.Cartesian3.clone(o.Cartesian3.ZERO)}h.encode=function(e,i){var o;return n.defined(i)||(i={high:0,low:0}),e>=0?(o=65536*Math.floor(e/65536),i.high=o,i.low=e-o):(o=65536*Math.floor(-e/65536),i.high=-o,i.low=e+o),i};var a={high:0,low:0};h.fromCartesian=function(e,i){n.defined(i)||(i=new h);var o=i.high,r=i.low;return h.encode(e.x,a),o.x=a.high,r.x=a.low,h.encode(e.y,a),o.y=a.high,r.y=a.low,h.encode(e.z,a),o.z=a.high,r.z=a.low,i};var r=new h;h.writeElements=function(e,n,i){h.fromCartesian(e,r);var o=r.high,a=r.low;n[i]=o.x,n[i+1]=o.y,n[i+2]=o.z,n[i+3]=a.x,n[i+4]=a.y,n[i+5]=a.z},e.EncodedCartesian3=h}));