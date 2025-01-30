import{aE as G,aF as or,aG as Z,aH as I,aI as ur}from"./mermaid.esm.min-B2AR_BVY.js";import{t as cr}from"./init-f9637058-DHuO7-vr.js";function F(r,n){return r==null||n==null?NaN:r<n?-1:r>n?1:r>=n?0:NaN}function fr(r,n){return r==null||n==null?NaN:n<r?-1:n>r?1:n>=r?0:NaN}function _(r){let n,e,t;r.length!==2?(n=F,e=(u,f)=>F(r(u),f),t=(u,f)=>r(u)-f):(n=r===F||r===fr?r:sr,e=r,t=r);function i(u,f,a=0,g=u.length){if(a<g){if(n(f,f)!==0)return g;do{const s=a+g>>>1;e(u[s],f)<0?a=s+1:g=s}while(a<g)}return a}function c(u,f,a=0,g=u.length){if(a<g){if(n(f,f)!==0)return g;do{const s=a+g>>>1;e(u[s],f)<=0?a=s+1:g=s}while(a<g)}return a}function o(u,f,a=0,g=u.length){const s=i(u,f,a,g-1);return s>a&&t(u[s-1],f)>-t(u[s],f)?s-1:s}return{left:i,center:o,right:c}}function sr(){return 0}function lr(r){return r===null?NaN:+r}const hr=_(F),gr=hr.right;_(lr).center;const pr=gr,vr=Math.sqrt(50),Mr=Math.sqrt(10),dr=Math.sqrt(2);function q(r,n,e){const t=(n-r)/Math.max(0,e),i=Math.floor(Math.log10(t)),c=t/Math.pow(10,i),o=c>=vr?10:c>=Mr?5:c>=dr?2:1;let u,f,a;return i<0?(a=Math.pow(10,-i)/o,u=Math.round(r*a),f=Math.round(n*a),u/a<r&&++u,f/a>n&&--f,a=-a):(a=Math.pow(10,i)*o,u=Math.round(r/a),f=Math.round(n/a),u*a<r&&++u,f*a>n&&--f),f<u&&.5<=e&&e<2?q(r,n,e*2):[u,f,a]}function mr(r,n,e){if(n=+n,r=+r,e=+e,!(e>0))return[];if(r===n)return[r];const t=n<r,[i,c,o]=t?q(n,r,e):q(r,n,e);if(!(c>=i))return[];const u=c-i+1,f=new Array(u);if(t)if(o<0)for(let a=0;a<u;++a)f[a]=(c-a)/-o;else for(let a=0;a<u;++a)f[a]=(c-a)*o;else if(o<0)for(let a=0;a<u;++a)f[a]=(i+a)/-o;else for(let a=0;a<u;++a)f[a]=(i+a)*o;return f}function H(r,n,e){return n=+n,r=+r,e=+e,q(r,n,e)[2]}function yr(r,n,e){n=+n,r=+r,e=+e;const t=n<r,i=t?H(n,r,e):H(r,n,e);return(t?-1:1)*(i<0?1/-i:i)}function br(r,n){n||(n=[]);var e=r?Math.min(n.length,r.length):0,t=n.slice(),i;return function(c){for(i=0;i<e;++i)t[i]=r[i]*(1-c)+n[i]*c;return t}}function wr(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Nr(r,n){var e=n?n.length:0,t=r?Math.min(e,r.length):0,i=new Array(t),c=new Array(e),o;for(o=0;o<t;++o)i[o]=O(r[o],n[o]);for(;o<e;++o)c[o]=n[o];return function(u){for(o=0;o<t;++o)c[o]=i[o](u);return c}}function xr(r,n){var e=new Date;return r=+r,n=+n,function(t){return e.setTime(r*(1-t)+n*t),e}}function kr(r,n){var e={},t={},i;(r===null||typeof r!="object")&&(r={}),(n===null||typeof n!="object")&&(n={});for(i in n)i in r?e[i]=O(r[i],n[i]):t[i]=n[i];return function(c){for(i in e)t[i]=e[i](c);return t}}function O(r,n){var e=typeof n,t;return n==null||e==="boolean"?or(n):(e==="number"?G:e==="string"?(t=Z(n))?(n=t,I):ur:n instanceof Z?I:n instanceof Date?xr:wr(n)?br:Array.isArray(n)?Nr:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?kr:G)(r,n)}function Ar(r,n){return r=+r,n=+n,function(e){return Math.round(r*(1-e)+n*e)}}function Sr(r){return Math.abs(r=Math.round(r))>=1e21?r.toLocaleString("en").replace(/,/g,""):r.toString(10)}function C(r,n){if((e=(r=n?r.toExponential(n-1):r.toExponential()).indexOf("e"))<0)return null;var e,t=r.slice(0,e);return[t.length>1?t[0]+t.slice(2):t,+r.slice(e+1)]}function k(r){return r=C(Math.abs(r)),r?r[1]:NaN}function jr(r,n){return function(e,t){for(var i=e.length,c=[],o=0,u=r[0],f=0;i>0&&u>0&&(f+u+1>t&&(u=Math.max(1,t-f)),c.push(e.substring(i-=u,i+u)),!((f+=u+1)>t));)u=r[o=(o+1)%r.length];return c.reverse().join(n)}}function zr(r){return function(n){return n.replace(/[0-9]/g,function(e){return r[+e]})}}var Er=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function D(r){if(!(n=Er.exec(r)))throw new Error("invalid format: "+r);var n;return new T({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}D.prototype=T.prototype;function T(r){this.fill=r.fill===void 0?" ":r.fill+"",this.align=r.align===void 0?">":r.align+"",this.sign=r.sign===void 0?"-":r.sign+"",this.symbol=r.symbol===void 0?"":r.symbol+"",this.zero=!!r.zero,this.width=r.width===void 0?void 0:+r.width,this.comma=!!r.comma,this.precision=r.precision===void 0?void 0:+r.precision,this.trim=!!r.trim,this.type=r.type===void 0?"":r.type+""}T.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function $r(r){r:for(var n=r.length,e=1,t=-1,i;e<n;++e)switch(r[e]){case".":t=i=e;break;case"0":t===0&&(t=e),i=e;break;default:if(!+r[e])break r;t>0&&(t=0);break}return t>0?r.slice(0,t)+r.slice(i+1):r}var rr;function Fr(r,n){var e=C(r,n);if(!e)return r+"";var t=e[0],i=e[1],c=i-(rr=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=t.length;return c===o?t:c>o?t+new Array(c-o+1).join("0"):c>0?t.slice(0,c)+"."+t.slice(c):"0."+new Array(1-c).join("0")+C(r,Math.max(0,n+c-1))[0]}function P(r,n){var e=C(r,n);if(!e)return r+"";var t=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+t:t.length>i+1?t.slice(0,i+1)+"."+t.slice(i+1):t+new Array(i-t.length+2).join("0")}const Y={"%":(r,n)=>(r*100).toFixed(n),b:r=>Math.round(r).toString(2),c:r=>r+"",d:Sr,e:(r,n)=>r.toExponential(n),f:(r,n)=>r.toFixed(n),g:(r,n)=>r.toPrecision(n),o:r=>Math.round(r).toString(8),p:(r,n)=>P(r*100,n),r:P,s:Fr,X:r=>Math.round(r).toString(16).toUpperCase(),x:r=>Math.round(r).toString(16)};function J(r){return r}var K=Array.prototype.map,Q=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function qr(r){var n=r.grouping===void 0||r.thousands===void 0?J:jr(K.call(r.grouping,Number),r.thousands+""),e=r.currency===void 0?"":r.currency[0]+"",t=r.currency===void 0?"":r.currency[1]+"",i=r.decimal===void 0?".":r.decimal+"",c=r.numerals===void 0?J:zr(K.call(r.numerals,String)),o=r.percent===void 0?"%":r.percent+"",u=r.minus===void 0?"−":r.minus+"",f=r.nan===void 0?"NaN":r.nan+"";function a(s){s=D(s);var h=s.fill,m=s.align,M=s.sign,A=s.symbol,w=s.zero,S=s.width,V=s.comma,y=s.precision,X=s.trim,p=s.type;p==="n"?(V=!0,p="g"):Y[p]||(y===void 0&&(y=12),X=!0,p="g"),(w||h==="0"&&m==="=")&&(w=!0,h="0",m="=");var er=A==="$"?e:A==="#"&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",ir=A==="$"?t:/[%p]/.test(p)?o:"",B=Y[p],ar=/[defgprs%]/.test(p);y=y===void 0?6:/[gprs]/.test(p)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function R(l){var b=er,v=ir,N,U,j;if(p==="c")v=B(l)+v,l="";else{l=+l;var z=l<0||1/l<0;if(l=isNaN(l)?f:B(Math.abs(l),y),X&&(l=$r(l)),z&&+l==0&&M!=="+"&&(z=!1),b=(z?M==="("?M:u:M==="-"||M==="("?"":M)+b,v=(p==="s"?Q[8+rr/3]:"")+v+(z&&M==="("?")":""),ar){for(N=-1,U=l.length;++N<U;)if(j=l.charCodeAt(N),48>j||j>57){v=(j===46?i+l.slice(N+1):l.slice(N))+v,l=l.slice(0,N);break}}}V&&!w&&(l=n(l,1/0));var E=b.length+l.length+v.length,d=E<S?new Array(S-E+1).join(h):"";switch(V&&w&&(l=n(d+l,d.length?S-v.length:1/0),d=""),m){case"<":l=b+l+v+d;break;case"=":l=b+d+l+v;break;case"^":l=d.slice(0,E=d.length>>1)+b+l+v+d.slice(E);break;default:l=d+b+l+v;break}return c(l)}return R.toString=function(){return s+""},R}function g(s,h){var m=a((s=D(s),s.type="f",s)),M=Math.max(-8,Math.min(8,Math.floor(k(h)/3)))*3,A=Math.pow(10,-M),w=Q[8+M/3];return function(S){return m(A*S)+w}}return{format:a,formatPrefix:g}}var $,nr,tr;Cr({thousands:",",grouping:[3],currency:["$",""]});function Cr(r){return $=qr(r),nr=$.format,tr=$.formatPrefix,$}function Dr(r){return Math.max(0,-k(Math.abs(r)))}function Vr(r,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(k(n)/3)))*3-k(Math.abs(r)))}function Gr(r,n){return r=Math.abs(r),n=Math.abs(n)-r,Math.max(0,k(n)-k(r))+1}function Hr(r){return function(){return r}}function Lr(r){return+r}var W=[0,1];function x(r){return r}function L(r,n){return(n-=r=+r)?function(e){return(e-r)/n}:Hr(isNaN(n)?NaN:.5)}function Or(r,n){var e;return r>n&&(e=r,r=n,n=e),function(t){return Math.max(r,Math.min(n,t))}}function Tr(r,n,e){var t=r[0],i=r[1],c=n[0],o=n[1];return i<t?(t=L(i,t),c=e(o,c)):(t=L(t,i),c=e(c,o)),function(u){return c(t(u))}}function Xr(r,n,e){var t=Math.min(r.length,n.length)-1,i=new Array(t),c=new Array(t),o=-1;for(r[t]<r[0]&&(r=r.slice().reverse(),n=n.slice().reverse());++o<t;)i[o]=L(r[o],r[o+1]),c[o]=e(n[o],n[o+1]);return function(u){var f=pr(r,u,1,t)-1;return c[f](i[f](u))}}function Br(r,n){return n.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown())}function Rr(){var r=W,n=W,e=O,t,i,c,o=x,u,f,a;function g(){var h=Math.min(r.length,n.length);return o!==x&&(o=Or(r[0],r[h-1])),u=h>2?Xr:Tr,f=a=null,s}function s(h){return h==null||isNaN(h=+h)?c:(f||(f=u(r.map(t),n,e)))(t(o(h)))}return s.invert=function(h){return o(i((a||(a=u(n,r.map(t),G)))(h)))},s.domain=function(h){return arguments.length?(r=Array.from(h,Lr),g()):r.slice()},s.range=function(h){return arguments.length?(n=Array.from(h),g()):n.slice()},s.rangeRound=function(h){return n=Array.from(h),e=Ar,g()},s.clamp=function(h){return arguments.length?(o=h?!0:x,g()):o!==x},s.interpolate=function(h){return arguments.length?(e=h,g()):e},s.unknown=function(h){return arguments.length?(c=h,s):c},function(h,m){return t=h,i=m,g()}}function Ur(){return Rr()(x,x)}function Zr(r,n,e,t){var i=yr(r,n,e),c;switch(t=D(t??",f"),t.type){case"s":{var o=Math.max(Math.abs(r),Math.abs(n));return t.precision==null&&!isNaN(c=Vr(i,o))&&(t.precision=c),tr(t,o)}case"":case"e":case"g":case"p":case"r":{t.precision==null&&!isNaN(c=Gr(i,Math.max(Math.abs(r),Math.abs(n))))&&(t.precision=c-(t.type==="e"));break}case"f":case"%":{t.precision==null&&!isNaN(c=Dr(i))&&(t.precision=c-(t.type==="%")*2);break}}return nr(t)}function Ir(r){var n=r.domain;return r.ticks=function(e){var t=n();return mr(t[0],t[t.length-1],e??10)},r.tickFormat=function(e,t){var i=n();return Zr(i[0],i[i.length-1],e??10,t)},r.nice=function(e){e==null&&(e=10);var t=n(),i=0,c=t.length-1,o=t[i],u=t[c],f,a,g=10;for(u<o&&(a=o,o=u,u=a,a=i,i=c,c=a);g-- >0;){if(a=H(o,u,e),a===f)return t[i]=o,t[c]=u,n(t);if(a>0)o=Math.floor(o/a)*a,u=Math.ceil(u/a)*a;else if(a<0)o=Math.ceil(o*a)/a,u=Math.floor(u*a)/a;else break;f=a}return r},r}function Pr(){var r=Ur();return r.copy=function(){return Br(r,Pr())},cr.apply(r,arguments),Ir(r)}export{Pr as H,yr as N,Ur as U,Br as V,_};
