(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2730:function(t,n,e){"use strict";var r=e(7294);function i(t){return Array.prototype.slice.call(t)}function a(t,n){var e=Math.floor(t);return e===n||e+1===n?t:n}function o(){return Date.now()}function s(t,n,e){if(n="data-keen-slider-"+n,null===e)return t.removeAttribute(n);t.setAttribute(n,e||"")}function c(t,n){return n=n||document,"function"==typeof t&&(t=t(n)),Array.isArray(t)?t:"string"==typeof t?i(n.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?i(t):[]}function u(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function l(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function d(){var t=[];return{add:function(n,e,r,i){n.addListener?n.addListener(r):n.addEventListener(e,r,i),t.push([n,e,r,i])},input:function(t,n,e,r){this.add(t,n,function(t){return function(n){n.nativeEvent&&(n=n.nativeEvent);var e=n.changedTouches||[],r=n.targetTouches||[],i=n.detail&&n.detail.x?n.detail:null;return t({id:i?i.identifier?i.identifier:"i":r[0]?r[0]?r[0].identifier:"e":"d",idChanged:i?i.identifier?i.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",raw:n,x:i&&i.x?i.x:r[0]?r[0].screenX:i?i.x:n.pageX,y:i&&i.y?i.y:r[0]?r[0].screenY:i?i.y:n.pageY})}}(e),r)},purge:function(){t.forEach((function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])})),t=[]}}}function f(t,n,e){return Math.min(Math.max(t,n),e)}function m(t){return(t>0?1:0)-(t<0?1:0)||+t}function p(t){var n=t.getBoundingClientRect();return{height:a(n.height,t.offsetHeight),width:a(n.width,t.offsetWidth)}}function h(t,n,e,r){var i=t&&t[n];return null==i?e:r&&"function"==typeof i?i():i}function v(t){return Math.round(1e6*t)/1e6}function g(t,n){if(t===n)return!0;var e=typeof t;if(e!==typeof n)return!1;if("object"!==e||null===t||null===n)return"function"===e&&t.toString()===n.toString();if(t.length!==n.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(n).length)return!1;for(var r in t)if(!g(t[r],n[r]))return!1;return!0}function x(t,n){return g(t.current,n)||(t.current=n),t.current}var b=function(){return b=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},b.apply(this,arguments)};function y(t,n,e){if(e||2===arguments.length)for(var r,i=0,a=n.length;i<a;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return t.concat(r||Array.prototype.slice.call(n))}function w(t){var n,e,r,i,a,s,c,u,l,d,p,g,x,b,w=1/0,k=[],j=null,N=0;function M(t){F(N+t)}function T(t){var n=C(N+t).abs;return E(n)?n:null}function C(t){var n=Math.floor(Math.abs(v(t/e))),r=v((t%e+e)%e);r===e&&(r=0);var i=m(t),a=c.indexOf(y([],c,!0).reduce((function(t,n){return Math.abs(n-r)<Math.abs(t-r)?n:t}))),o=a;return i<0&&n++,a===s&&(o=0,n+=i>0?1:-1),{abs:o+n*s*i,origin:a,rel:o}}function S(t,n,e){var r;if(n||!A())return _(t,e);if(!E(t))return null;var i=C(null!=e?e:N),a=i.abs,o=t-i.rel,c=a+o;r=_(c);var u=_(c-s*m(o));return(null!==u&&Math.abs(u)<Math.abs(r)||null===r)&&(r=u),v(r)}function _(t,n){if(null==n&&(n=v(N)),!E(t)||null===t)return null;t=Math.round(t);var r=C(n),i=r.abs,a=r.rel,o=r.origin,u=P(t),l=(n%e+e)%e,d=c[o],f=Math.floor((t-(i-a))/s)*e;return v(d-l-d+c[u]+f+(o===s?e:0))}function E(t){return I(t)===t}function I(t){return f(t,l,d)}function A(){return i.loop}function P(t){return(t%s+s)%s}function F(n){var e;e=n-N,k.push({distance:e,timestamp:o()}),k.length>6&&(k=k.slice(-6)),N=v(n);var r=O().abs;if(r!==j){var i=null!==j;j=r,i&&t.emit("slideChanged")}}function O(o){var c=o?null:function(){if(s){var t=A(),n=t?(N%e+e)%e:N,o=(t?N%e:N)-a[0][2],c=0-(o<0&&t?e-Math.abs(o):o),u=0,f=C(N),h=f.abs,v=f.rel,y=a[v][2],w=a.map((function(n,r){var a=c+u;(a<0-n[0]||a>1)&&(a+=(Math.abs(a)>e-1&&t?e:0)*m(-a));var o=r-v,l=m(o),d=o+h;t&&(-1===l&&a>y&&(d+=s),1===l&&a<y&&(d-=s),null!==p&&d<p&&(a+=e),null!==g&&d>g&&(a-=e));var f=a+n[0]+n[1],x=Math.max(a>=0&&f<=1?1:f<0||a>1?0:a<0?Math.min(1,(n[0]+a)/n[0]):(1-a)/n[0],0);return u+=n[0]+n[1],{abs:d,distance:i.rtl?-1*a+1-n[0]:a,portion:x,size:n[0]}}));return h=I(h),v=P(h),{abs:I(h),length:r,max:b,maxIdx:d,min:x,minIdx:l,position:N,progress:t?n/e:N/r,rel:v,slides:w,slidesLength:e}}}();return n.details=c,t.emit("detailsChanged"),c}return n={absToRel:P,add:M,details:null,distToIdx:T,idxToDist:S,init:function(n){if(function(){if(i=t.options,a=(i.trackConfig||[]).map((function(t){return[h(t,"size",1),h(t,"spacing",0),h(t,"origin",0)]})),s=a.length){e=v(a.reduce((function(t,n){return t+n[0]+n[1]}),0));var n,o=s-1;r=v(e+a[0][2]-a[o][0]-a[o][2]-a[o][1]),c=a.reduce((function(t,e){if(!t)return[0];var r=a[t.length-1],i=t[t.length-1]+(r[0]+r[2])+r[1];return i-=e[2],t[t.length-1]>i&&(i=t[t.length-1]),i=v(i),t.push(i),(!n||n<i)&&(u=t.length-1),n=i,t}),null),0===r&&(u=0),c.push(v(e))}}(),!s)return O(!0);var o;!function(){var n=t.options.range,e=t.options.loop;p=l=e?h(e,"min",-1/0):0,g=d=e?h(e,"max",w):u;var r=h(n,"min",null),i=h(n,"max",null);r&&(l=r),i&&(d=i),x=l===-1/0?l:t.track.idxToDist(l||0,!0,0),b=d===w?d:S(d,!0,0),null===i&&(g=d),h(n,"align",!1)&&d!==w&&0===a[P(d)][2]&&(b-=1-a[P(d)][0],d=T(b-N)),x=v(x),b=v(b)}(),o=n,Number(o)===o?M(_(I(n))):O()},to:F,velocity:function(){var t=o(),n=k.reduce((function(n,e){var r=e.distance,i=e.timestamp;return t-i>200||(m(r)!==m(n.distance)&&n.distance&&(n={distance:0,lastTimestamp:0,time:0}),n.time&&(n.distance+=r),n.lastTimestamp&&(n.time+=i-n.lastTimestamp),n.lastTimestamp=i),n}),{distance:0,lastTimestamp:0,time:0});return n.distance/n.time||0}}}function k(t){var n,e,r,i,a,o,s;function c(t){return 2*t}function u(t){return f(t,o,s)}function l(t){return 1-Math.pow(1-t,3)}function d(){v();var n="free-snap"===t.options.mode,e=t.track,o=e.velocity();r=m(o);var s=t.track.details,d=[];if(o||!n){var f=p(o),h=f.dist,g=f.dur;if(g=c(g),h*=r,n){var x=e.idxToDist(e.distToIdx(h),!0);x&&(h=x)}d.push({distance:h,duration:g,easing:l});var b=s.position,y=b+h;if(y<i||y>a){var w=y<i?i-b:a-b,k=0,j=o;if(m(w)===r){var N=Math.min(Math.abs(w)/Math.abs(h),1),M=function(t){return 1-Math.pow(1-t,1/3)}(N)*g;d[0].earlyExit=M,j=o*(1-N)}else d[0].earlyExit=0,k+=w;var T=p(j,100),C=T.dist*r;t.options.rubberband&&(d.push({distance:C,duration:c(T.dur),easing:l}),d.push({distance:-C+k,duration:500,easing:l}))}t.animator.start(d)}else t.moveToIdx(u(s.abs),!0,{duration:500,easing:function(t){return 1+--t*t*t*t*t}})}function p(t,n){void 0===n&&(n=1e3);var e=147e-9+(t=Math.abs(t))/n;return{dist:Math.pow(t,2)/e,dur:t/e}}function h(){var n=t.track.details;n&&(i=n.min,a=n.max,o=n.minIdx,s=n.maxIdx)}function v(){t.animator.stop()}t.on("updated",h),t.on("optionsChanged",h),t.on("created",h),t.on("dragStarted",(function(){v(),n=e=t.track.details.abs})),t.on("dragEnded",(function(){var r=t.options.mode;"snap"===r&&function(){var r=t.track,o=t.track.details,s=o.position,c=m(r.velocity());(s>a||s<i)&&(c=0);var l=n+c;0===o.slides[r.absToRel(l)].portion&&(l-=c),n!==e&&(l=e),m(r.idxToDist(l,!0))!==c&&(l+=c),l=u(l);var d=r.idxToDist(l,!0);t.animator.start([{distance:d,duration:500,easing:function(t){return 1+--t*t*t*t*t}}])}(),"free"!==r&&"free-snap"!==r||d()})),t.on("dragged",(function(){e=t.track.details.abs}))}function j(t){var n,e,r,i,a,o,p,h,v,g,x,b,y,w,k,j,N,M,T=d();function C(c){if(o&&h===c.id){var d=I(c);if(v){if(!E(c))return _(c);g=d,v=!1,t.emit("dragChecked")}if(j)return g=d;u(c);var y=function(n){if(N===-1/0&&M===1/0)return n;var r=t.track.details,o=r.length,s=r.position,c=f(n,N-s,M-s);if(0===o)return 0;if(!t.options.rubberband)return c;if(s<=M&&s>=N)return n;if(s<N&&e>0||s>M&&e<0)return n;var u=(s<N?s-N:s-M)/o,l=i*o,d=Math.abs(u*l),m=Math.max(0,1-d/a*2);return m*m*n}(p(g-d)/i*r);e=m(y);var w=t.track.details.position;(w>N&&w<M||w===N&&e>0||w===M&&e<0)&&l(c),x+=y,!b&&Math.abs(x*i)>5&&(b=!0,s(n,"moves","")),t.track.add(y),g=d,t.emit("dragged")}}function S(n){!o&&t.track.details&&t.track.details.length&&(b=!1,x=0,o=!0,v=!0,h=n.id,E(n),g=I(n),t.emit("dragStarted"))}function _(e){o&&h===e.idChanged&&(s(n,"moves",null),o=!1,t.emit("dragEnded"))}function E(t){var n=A(),e=n?t.y:t.x,r=n?t.x:t.y,i=void 0!==y&&void 0!==w&&Math.abs(w-r)<=Math.abs(y-e);return y=e,w=r,i}function I(t){return A()?t.y:t.x}function A(){return t.options.vertical}function P(){i=t.size,a=A()?window.innerHeight:window.innerWidth;var n=t.track.details;n&&(N=n.min,M=n.max)}function F(){if(T.purge(),t.options.drag&&!t.options.disabled){var e;e=t.options.dragSpeed||1,p="function"==typeof e?e:function(t){return t*e},r=t.options.rtl?-1:1,P(),n=t.container,function(){var t="data-keen-slider-clickable";c("[".concat(t,"]:not([").concat(t,"=false])"),n).map((function(t){T.add(t,"mousedown",l),T.add(t,"touchstart",l)}))}(),T.add(n,"dragstart",(function(t){u(t)})),T.input(n,"ksDragStart",S),T.input(n,"ksDrag",C),T.input(n,"ksDragEnd",_),T.input(n,"mousedown",S),T.input(n,"mousemove",C),T.input(n,"mouseleave",_),T.input(n,"mouseup",_),T.input(n,"touchstart",S,{passive:!0}),T.input(n,"touchmove",C,{passive:!1}),T.input(n,"touchend",_),T.input(n,"touchcancel",_),T.add(window,"wheel",(function(t){o&&u(t)}));var i="data-keen-slider-scrollable";c("[".concat(i,"]:not([").concat(i,"=false])"),t.container).map((function(t){return function(t){var n;T.input(t,"touchstart",(function(t){n=I(t),j=!0,k=!0}),{passive:!0}),T.input(t,"touchmove",(function(e){var r=A(),i=r?t.scrollHeight-t.clientHeight:t.scrollWidth-t.clientWidth,a=n-I(e),o=r?t.scrollTop:t.scrollLeft,s=r&&"scroll"===t.style.overflowY||!r&&"scroll"===t.style.overflowX;if(n=I(e),(a<0&&o>0||a>0&&o<i)&&k&&s)return j=!0;k=!1,u(e),j=!1})),T.input(t,"touchend",(function(){j=!1}))}(t)}))}}t.on("updated",P),t.on("optionsChanged",F),t.on("created",F),t.on("destroyed",T.purge)}function N(t){var n,e,r=null;function i(n,e,r){t.animator.active?o(n,e,r):requestAnimationFrame((function(){return o(n,e,r)}))}function a(){i(!1,!1,e)}function o(e,i,a){var o=0,s=t.size,l=t.track.details;if(l&&n){var d=l.slides;n.forEach((function(t,n){if(e)!r&&i&&c(t,null,a),u(t,null,a);else{if(!d[n])return;var l=d[n].size*s;!r&&i&&c(t,l,a),u(t,d[n].distance*s-o,a),o+=l}}))}}function s(n){return"performance"===t.options.renderMode?Math.round(n):n}function c(t,n,e){var r=e?"height":"width";null!==n&&(n=s(n)+"px"),t.style["min-"+r]=n,t.style["max-"+r]=n}function u(t,n,e){if(null!==n){n=s(n);var r=e?n:0;n="translate3d(".concat(e?0:n,"px, ").concat(r,"px, 0)")}t.style.transform=n,t.style["-webkit-transform"]=n}function l(){n&&(o(!0,!0,e),n=null),t.on("detailsChanged",a,!0)}function d(){i(!1,!0,e)}function f(){l(),e=t.options.vertical,t.options.disabled||"custom"===t.options.renderMode||(r="auto"===h(t.options.slides,"perView",null),t.on("detailsChanged",a),(n=t.slides).length&&d())}t.on("created",f),t.on("optionsChanged",f),t.on("beforeOptionsChanged",(function(){l()})),t.on("updated",d),t.on("destroyed",l)}function M(t,n){return function(e){var r,i,a,o,u,l=d();function f(t){var n;s(e.container,"reverse","rtl"!==(n=e.container,window.getComputedStyle(n,null).getPropertyValue("direction"))||t?null:""),s(e.container,"v",e.options.vertical&&!t?"":null),s(e.container,"disabled",e.options.disabled&&!t?"":null)}function m(){v()&&k()}function v(){var t=null;if(o.forEach((function(n){n.matches&&(t=n.__media)})),t===r)return!1;r||e.emit("beforeOptionsChanged"),r=t;var n=t?a.breakpoints[t]:a;return e.options=b(b({},a),n),f(),C(),S(),N(),!0}function g(t){var n=p(t);return(e.options.vertical?n.height:n.width)/e.size||1}function x(){return e.options.trackConfig.length}function y(t){for(var s in r=!1,a=b(b({},n),t),l.purge(),i=e.size,o=[],a.breakpoints||[]){var c=window.matchMedia(s);c.__media=s,o.push(c),l.add(c,"change",m)}l.add(window,"orientationchange",T),l.add(window,"resize",M),v()}function w(t){e.animator.stop();var n=e.track.details;e.track.init(null!=t?t:n?n.abs:0)}function k(t){w(t),e.emit("optionsChanged")}function j(t,n){if(t)return y(t),void k(n);C(),S();var r=x();N(),x()!==r?k(n):w(n),e.emit("updated")}function N(){var t=e.options.slides;if("function"==typeof t)return e.options.trackConfig=t(e.size,e.slides);for(var n=e.slides,r=n.length,i="number"==typeof t?t:h(t,"number",r,!0),a=[],o=h(t,"perView",1,!0),s=h(t,"spacing",0,!0)/e.size||0,c="auto"===o?s:s/o,u=h(t,"origin","auto"),l=0,d=0;d<i;d++){var f="auto"===o?g(n[d]):1/o-s+c,m="center"===u?.5-f/2:"auto"===u?0:u;a.push({origin:m,size:f,spacing:s}),l+=f}if(l+=s*(i-1),"auto"===u&&!e.options.loop&&1!==o){var p=0;a.map((function(t){var n=l-p;return p+=t.size+s,n>=1||(t.origin=1-n-(l>1?0:1-l)),t}))}e.options.trackConfig=a}function M(){C();var t=e.size;e.options.disabled||t===i||(i=t,j())}function T(){M(),setTimeout(M,500),setTimeout(M,2e3)}function C(){var t=p(e.container);e.size=(e.options.vertical?t.height:t.width)||1}function S(){e.slides=c(e.options.selector,e.container)}e.container=(u=c(t,document)).length?u[0]:null,e.destroy=function(){l.purge(),e.emit("destroyed"),f(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=j,y(e.options)}}var T=function(t,n,e){try{return function(t,n){var e,r={};return e={emit:function(t){r[t]&&r[t].forEach((function(t){t(e)}));var n=e.options&&e.options[t];n&&n(e)},moveToIdx:function(t,n,r){var i=e.track.idxToDist(t,n);if(i){var a=e.options.defaultAnimation;e.animator.start([{distance:i,duration:h(r||a,"duration",500),easing:h(r||a,"easing",(function(t){return 1+--t*t*t*t*t}))}])}},on:function(t,n,e){void 0===e&&(e=!1),r[t]||(r[t]=[]);var i=r[t].indexOf(n);i>-1?e&&delete r[t][i]:e||r[t].push(n)},options:t},function(){if(e.track=w(e),e.animator=function(t){var n,e,r,i,a,o;function s(n){o||(o=n),c(!0);var a=n-o;a>r&&(a=r);var d=i[e];if(d[3]<a)return e++,s(n);var f=d[2],m=d[4],p=d[0],h=d[1]*(0,d[5])(0===m?1:(a-f)/m);if(h&&t.track.to(p+h),a<r)return l();o=null,c(!1),u(null),t.emit("animationEnded")}function c(t){n.active=t}function u(t){n.targetIdx=t}function l(){var t;t=s,a=window.requestAnimationFrame(t)}function d(){var n;n=a,window.cancelAnimationFrame(n),c(!1),u(null),o&&t.emit("animationStopped"),o=null}return n={active:!1,start:function(n){if(d(),t.track.details){var a=0,o=t.track.details.position;e=0,r=0,i=n.map((function(t){var n,e=o,i=null!==(n=t.earlyExit)&&void 0!==n?n:t.duration,s=t.easing,c=t.distance*s(i/t.duration)||0;o+=c;var u=r;return r+=i,a+=c,[e,t.distance,u,r,t.duration,s]})),u(t.track.distToIdx(a)),l(),t.emit("animationStarted")}},stop:d,targetIdx:null}}(e),n)for(var t=0,r=n;t<r.length;t++)(0,r[t])(e);e.track.init(e.options.initial||0),e.emit("created")}(),e}(n,y([M(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),N,j,k],e||[],!0))}catch(t){console.error(t)}};n.E=function(t,n){var e=r.useRef(null),i=r.useRef(!1),a=r.useRef(t),o=r.useCallback((function(r){r?(a.current=t,e.current=new T(r,t,n),i.current=!1):(e.current&&e.current.destroy&&e.current.destroy(),e.current=null)}),[]);return r.useEffect((function(){i.current?e.current&&e.current.update(a.current):i.current=!0}),[x(a,t)]),[o,e]}},3899:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e(8248)}])},8248:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return x}});var r=e(7568),i=e(4051),a=e.n(i),o=e(5893),s=e(7294),c=e(8527),u=e(9008),l=e.n(u),d=e(1664),f=e.n(d),m=e(7375),p=(e(2814),e(603)),h=e(2730);e(9409);function v(t){var n=t.disabled?" arrow--disabled":"";return(0,o.jsxs)("svg",{onClick:t.onClick,className:"arrow ".concat(t.left?"arrow--left":"arrow--right"," ").concat(n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[t.left&&(0,o.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"}),!t.left&&(0,o.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})]})}var g=function(){var t=(0,s.useState)(0),n=t[0],e=t[1],r=(0,s.useState)(!1),i=r[0],a=r[1],c=(0,p.Z)((0,h.E)({initial:0,slideChanged:function(t){e(t.track.details.rel)},created:function(){a(!0)},loop:!0,slides:{perView:1,spacing:15}},[function(t){var n,e=function(){clearTimeout(n)},r=function(){clearTimeout(n),i||(n=setTimeout((function(){t.next()}),2e3))},i=!1;t.on("created",(function(){t.container.addEventListener("mouseover",(function(){i=!0,e()})),t.container.addEventListener("mouseout",(function(){i=!1,r()})),r()})),t.on("dragStarted",e),t.on("animationEnded",r),t.on("updated",r)}]),2),u=c[0],l=c[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"navigation-wrapper relative",children:[(0,o.jsx)("div",{ref:u,className:"keen-slider cursor-grab rounded-xl h-96",children:(0,o.jsx)("div",{id:"IPFSCon",className:"keen-slider__slide number-slide1 flex flex-col items-center justify-center p-10",children:(0,o.jsxs)("div",{className:"flex justify-between items-center text-white text-md",children:[(0,o.jsxs)("div",{className:"left__container md:mr-10",children:[(0,o.jsx)("div",{className:"text-md md:text-xl lg:text-3xl mb-5 text-primary_orange-0 font-sans font-semibold",children:"Deep Dive on Filecoin & IPFS use cases in the Solana ecosystem"}),(0,o.jsxs)("div",{className:"text-sm md:text-md lg:text-xl mb-5 text-white",children:[(0,o.jsx)("em",{className:"font-bold",children:'What are Filecoin and IPFS, and what problems it"s solving in the blockchain ecosystem?'}),(0,o.jsxs)("ol",{className:"hidden md:block",children:[(0,o.jsx)("li",{children:"\u2022 Using IPFS to store NFTs and metadata of Candy Machine V2"}),(0,o.jsx)("li",{children:"\u2022 Using the various IPFS libraries for storage in your dapps"}),(0,o.jsx)("li",{children:"\u2022 Deploying and hosting dapps on IPFS"})]}),(0,o.jsxs)("div",{className:"hidden md:block",children:[(0,o.jsx)("em",{className:"font-bold",children:"Awesome Developer Tools:"}),"\xa0\xa0 \u2022 Pinata \xa0\xa0 \u2022 Fleek \xa0\xa0 \u2022 Web3.Storage \xa0\xa0 \u2022 NFT.Storage"]})]}),(0,o.jsx)("a",{className:"text-primary_orange-0 hover:text-white text-lg font-bold",href:"https://9yearoldtechkid.medium.com/deep-dive-on-filecoin-ipfs-use-cases-in-the-solana-ecosystem-decff70c60af",children:"Read More here >>"})]}),(0,o.jsx)("div",{className:"right__container hidden md:block relative md:left-20",children:(0,o.jsx)("img",{className:"w-1/2 h-auto",src:"https://user-images.githubusercontent.com/63473496/176965873-5c457a6b-cfae-4107-87ea-823c25ceea66.png",alt:"top3"})})]})})}),i&&l.current&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{left:!0,onClick:function(t){var n;return t.stopPropagation()||(null===(n=l.current)||void 0===n?void 0:n.prev())},disabled:0===n}),(0,o.jsx)(v,{onClick:function(t){var n;return t.stopPropagation()||(null===(n=l.current)||void 0===n?void 0:n.next())},disabled:n===l.current.track.details.slides.length-1})]})]})})},x=function(){var t=(0,s.useState)([]),n=t[0],e=t[1],i=s.useRef(),u=(0,m.qY)(),d=(u.isOpen,u.onOpen),p=(u.onClose,function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://opensheet.elk.sh/1yAcu1TICHh2BHOTk82WjD68oukbPwAQPWJCKdNxlAss/Blogs2022");case 2:return n=t.sent,t.t0=e,t.next=6,n.json();case 6:t.t1=t.sent,(0,t.t0)(t.t1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());return(0,s.useEffect)((function(){p()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:"Blog | GirlScript Summer of Code 2022 | GirlScript Foundation India"}),(0,o.jsx)("meta",{name:"description",content:"GirlScript Summer of Code Team"})]}),(0,o.jsx)("div",{className:"items-center justify-center",children:(0,o.jsx)("div",{className:"font-sans text-center text-2xl font-extrabold text-black-100",children:(0,o.jsx)("p",{className:"text-black text-5xl text center font-extrabold mb-10 dark:text-white",children:"Blogs"})})}),(0,o.jsx)(c.LZ,{mt:20}),(0,o.jsx)("div",{className:"items-center justify-center px-20",children:(0,o.jsx)(g,{})}),(0,o.jsx)(c.LZ,{mt:20}),(0,o.jsx)("div",{className:"flex flex-row justify-center flex-wrap items-center gap-x-32 gap-y-10 w-100",children:n.map((function(t,n){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"flex items-center justify-center w-60",children:(0,o.jsxs)("div",{className:"justify-center shadow dark:bg-black text-black dark:text-white rounded-xl w-full overflow-y-clip rounded-lg h-fit md:h-60 shadow-xl dark:shadow-none shadow-slate-400",children:[(0,o.jsx)("div",{className:"flex items-center justify-center mb-4 font-semibold px-1 pt-2",children:(0,o.jsx)("div",{className:"flex justify-center bg-orange-100 dark:bg-gradient-to-b dark:from-primary_orange-0 to-orange-600 text-md rounded-lg m-2 h-28",children:(0,o.jsx)("div",{className:"text-primary_orange-0 dark:text-black text-md m-2",children:t.title})})}),(0,o.jsx)("div",{className:"flex flex-col items-center justify-center pb-3.5 px-3",children:(0,o.jsx)("div",{className:"flex flex-col items-center justify-center font-bold text-center dark:text-white md:text-lg light:bg-orange-50 border-orange-500 border my-1 w-full rounded-lg",children:t.author})}),(0,o.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,o.jsx)("div",{className:"font-bold text-center text-black md:text-xl w-full",children:(0,o.jsx)(f(),{href:t.link,children:(0,o.jsx)("button",{ref:i,onClick:d,className:" bottom-0 bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium rounded-b-md py-1 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 w-full",children:"Read Blog"})})})})]})},n)})}))}),(0,o.jsx)(c.LZ,{mt:20})]})}},9409:function(){},7568:function(t,n,e){"use strict";function r(t,n,e,r,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void e(u)}s.done?n(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var o=t.apply(n,e);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)}))}}e.d(n,{Z:function(){return i}})},603:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,{Z:function(){return i}})}},function(t){t.O(0,[895,814,774,888,179],(function(){return n=3899,t(t.s=n);var n}));var n=t.O();_N_E=n}]);