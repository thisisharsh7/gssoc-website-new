(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{7983:function(e,t,r){"use strict";r.d(t,{Od:function(){return _},s7:function(){return O},N2:function(){return C}});var n=r(2846),a=r(4592),o=r(7294),i=r(5393);a.jU?o.useLayoutEffect:o.useEffect;a.Ts;a.Ts;function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){return Object.entries(e).sort((function(e,t){return Number.parseInt(e[1],10)>Number.parseInt(t[1],10)?1:-1})).map((function(e,t,r){var n=e[0],a=e[1],o=r[t+1],i=o?o[1]:void 0;return{minWidth:a,maxWidth:i,breakpoint:n,query:function(e,t){if(!(parseInt(e,10)>=0)&&!t)return"";var r="(min-width: "+u(e)+")";if(!t)return r;r&&(r+=" and ");return r+="(max-width: "+u(function(e){return function(e,t){if("number"===typeof e)return""+(e+t);return e.replace(d,(function(e){return""+(parseFloat(e)+t)}))}(e,e.endsWith("px")?-1:-.01)}(t))+")"}(a,i)}}))}var d=/([0-9]+\.?[0-9]*)/;function u(e){return(0,a.hj)(e)?e+"px":e}var f=["query"],m=["query"],x=["query"];function h(e,t){var r=function(e){var t=(0,n.Fg)().breakpoints,r=(0,i.O)(),a=o.useMemo((function(){return l(c({base:"0px"},t))}),[t]),d=o.useState((function(){var t;if(r.window.matchMedia&&(a.forEach((function(e){var n=e.query,a=s(e,f);r.window.matchMedia(n).matches&&(t=a)})),t))return t;if(e){var n=a.find((function(t){return t.breakpoint===e}));if(n)return n.query,s(n,m)}})),u=d[0],h=d[1],p=null==u?void 0:u.breakpoint,v=o.useCallback((function(e,t){e.matches&&p!==t.breakpoint&&h(t)}),[p]);return o.useEffect((function(){var e=new Set;return a.forEach((function(t){var n=t.query,a=s(t,x),o=r.window.matchMedia(n);v(o,a);var i=function(){v(o,a)};return o.addListener(i),e.add({mediaQuery:o,handleChange:i}),function(){o.removeListener(i)}})),function(){e.forEach((function(e){var t=e.mediaQuery,r=e.handleChange;t.removeListener(r)})),e.clear()}}),[a,t,v,r.window]),p}(t),d=(0,n.Fg)();if(r){var u=Object.keys(d.breakpoints);return function(e,t,r){void 0===r&&(r=a.AV);var n=Object.keys(e).indexOf(t);if(-1!==n)return e[t];for(var o=r.indexOf(t);o>=0;){if(null!=e[r[o]]){n=o;break}o-=1}return-1!==n?e[r[n]]:void 0}((0,a.kJ)(e)?(0,a.sq)(Object.entries((0,a.Yq)(e,u)).map((function(e){return[e[0],e[1]]}))):e,r,u)}}var p=r(917),v=r(7375);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var j=["startColor","endColor","isLoaded","fadeDuration","speed","className"],w=["noOfLines","spacing","skeletonHeight","className","startColor","endColor","isLoaded","fadeDuration","speed","children"],y=["size"],k=(0,n.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),N=(0,p.F4)({from:{opacity:0},to:{opacity:1}}),_=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Skeleton",e),i=function(){var e=o.useRef(!0);return o.useEffect((function(){e.current=!1}),[]),e.current}(),s=(0,n.Lr)(e);s.startColor,s.endColor;var c=s.isLoaded,l=s.fadeDuration;s.speed;var d=s.className,u=b(s,j),f=(0,v.D9)(c),m=(0,a.cx)("chakra-skeleton",d);if(c){var x=i||f?"none":N+" "+l+"s";return o.createElement(n.m$.div,g({ref:t,className:m,__css:{animation:x}},u))}return o.createElement(k,g({ref:t,className:m},u,{__css:r}))}));_.defaultProps={fadeDuration:.4,speed:.8},a.Ts&&(_.displayName="Skeleton");var C=function(e){var t=e.noOfLines,r=void 0===t?3:t,i=e.spacing,s=void 0===i?"0.5rem":i,c=e.skeletonHeight,l=void 0===c?"0.5rem":c,d=e.className,u=e.startColor,f=e.endColor,m=e.isLoaded,x=e.fadeDuration,p=e.speed,v=e.children,j=b(e,w),y=h("number"===typeof r?[r]:r)||3,k=Array(y).fill(1).map((function(e,t){return t+1})),N=function(e){return y>1&&e===k.length?"80%":"100%"},C=(0,a.cx)("chakra-skeleton__group",d);return o.createElement(n.m$.div,g({className:C},j),k.map((function(e,t){if(m&&t>0)return null;var r=m?null:{mb:e===k.length?"0":s,width:N(e),height:l};return o.createElement(_,g({key:k.length.toString()+e,startColor:u,endColor:f,isLoaded:m,fadeDuration:x,speed:p},r),0===t?v:void 0)})))};a.Ts&&(C.displayName="SkeletonText");var O=function(e){var t=e.size,r=void 0===t?"2rem":t,n=b(e,y);return o.createElement(_,g({borderRadius:"full",boxSize:r},n))};a.Ts&&(O.displayName="SkeletonCircle")},4320:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return r(2351)}])},2351:function(e,t,r){"use strict";r.r(t);var n=r(4051),a=r.n(n),o=r(5893),i=r(7294),s=r(8527),c=r(7983),l=r(9008);function d(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,a)}t.default=function(){var e=(0,i.useState)([]),t=e[0],r=e[1],n=function(){var e,t=(e=a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opensheet.elk.sh/1lbMJu8ZMBXcx66n0pkZI1eb8-fi8kBDQdwPoiIPPSRY/team"+t);case 2:return n=e.sent,e.t0=r,e.next=6,n.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){d(o,n,a,i,s,"next",e)}function s(e){d(o,n,a,i,s,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e=window.location.href.split("#")[1];n(e||"2022")}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.default,{children:[(0,o.jsx)("title",{children:"Team | GirlScipt Summer of Code 2022 | GirlScript Foundation India"}),(0,o.jsx)("meta",{name:"description",content:"GirlScipt Summer of Code Team"})]}),(0,o.jsx)("div",{className:"items-center justify-center",children:(0,o.jsxs)("p",{className:"font-sans text-center text-2xl font-extrabold text-black-100",children:[(0,o.jsx)("p",{className:"text-primary_orange-0 text-5xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0",children:"Meet The Team"}),(0,o.jsxs)("p",{className:" text-primary_orange-0",children:["Individuals can and do make a difference, ",(0,o.jsx)("br",{}),"but it takes a team to really mess things up"]})]})}),(0,o.jsx)(s.LZ,{mt:10}),(0,o.jsxs)("div",{className:"flex flex-row justify-center flex-wrap items-center gap-5",children:[(0,o.jsx)("a",{children:(0,o.jsx)("button",{className:"bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4 rounded md:text-2xl md:py-6",onClick:function(){return n(2022)},children:"2022"})}),(0,o.jsx)("a",{children:(0,o.jsx)("button",{className:"bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4 rounded md:text-2xl md:py-6",onClick:function(){return n(2021)},children:"2021"})}),(0,o.jsx)("a",{children:(0,o.jsx)("button",{className:"bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4 rounded md:text-2xl md:py-6",onClick:function(){return n(2020)},children:"2020"})}),(0,o.jsx)("a",{children:(0,o.jsx)("button",{className:"bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4 rounded md:text-2xl md:py-6",onClick:function(){return n(2019)},children:"2019"})})]}),(0,o.jsx)(s.LZ,{mt:20}),(0,o.jsx)("div",{className:"flex flex-row justify-center flex-wrap items-center gap-x-40 gap-y-10 w-100",children:t.map((function(e,t){return(0,o.jsx)(o.Fragment,{children:null==e?(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center w-80 h-80 gap-5",children:[(0,o.jsx)(c.s7,{size:"100"}),(0,o.jsx)("br",{}),(0,o.jsx)(c.Od,{children:(0,o.jsx)(s.xu,{className:"text-center px={4}",children:" Cogito ergo Sum "})}),(0,o.jsx)(c.Od,{children:(0,o.jsxs)(s.xu,{className:"text-center px={4}",children:[" ","Connection is power - DedSec"]})})]},t):(0,o.jsx)("div",{className:"flex items-center justify-center w-80",children:(0,o.jsxs)("div",{className:"p-3 shadow bg-primary_orange-0 rounded-xl w-full md:h-fit",children:[(0,o.jsx)("div",{className:"h-max rounded-lg shadow-lg md:h-96 relative bottom-7 hover:-translate-y-4 duration-300",children:(0,o.jsx)("img",{src:e.Image,alt:"Team Member Photo",className:"object-cover object-center w-full h-full"})}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,o.jsx)("div",{className:"font-bold text-black md:text-xl",children:e.Name}),(0,o.jsx)("p",{className:"mb-3 text-lg text-white font-bold md:text-base md:mb-4",children:e.Designation}),(0,o.jsx)("div",{className:"flex",children:(0,o.jsxs)("div",{className:"flex gap-4",children:[""==e.GitHub?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.GitHub,children:(0,o.jsx)("svg",{className:"w-6 h-6 text-black fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),!1===e.hasOwnProperty("Twitter")||""==e.Twitter.trim()?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.Twitter,children:(0,o.jsx)("svg",{className:"w-6 h-6 text-black fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})}),""==e.LinkedIn?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.LinkedIn,children:(0,o.jsx)("svg",{className:"w-6 h-6 text-black fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,o.jsx)("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})})]})})]})]})},t)})}))}),(0,o.jsx)(s.LZ,{mt:20})]})}}},function(e){e.O(0,[527,774,888,179],(function(){return t=4320,e(e.s=t);var t}));var t=e.O();_N_E=t}]);