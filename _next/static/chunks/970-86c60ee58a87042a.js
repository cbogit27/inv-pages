"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{7970:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(306),i=r(9955),o=r(5155),l=i._(r(2115)),a=n._(r(7650)),u=n._(r(6107)),s=r(666),d=r(1159),f=r(3621);r(2363);let c=r(3576),p=n._(r(5514)),g=r(5353),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/inv-pages/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,i,o,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:u,decoding:s,className:d,style:f,fetchPriority:c,placeholder:p,loading:m,unoptimized:b,fill:v,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:S,sizesInput:x,onLoad:P,onError:C,...O}=e,M=(0,l.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&h(e,p,_,w,j,b,x))},[r,p,_,w,j,C,b,x]),E=(0,g.useMergedRef)(t,M);return(0,o.jsx)("img",{...O,...y(c),loading:m,width:u,height:a,decoding:s,"data-nimg":v?"fill":"1",className:d,style:f,sizes:i,srcSet:n,src:r,ref:E,onLoad:e=>{h(e.currentTarget,p,_,w,j,b,x)},onError:e=>{S(!0),"empty"!==p&&j(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(u.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(c.RouterContext),n=(0,l.useContext)(f.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:u}=e,g=(0,l.useRef)(a);(0,l.useEffect)(()=>{g.current=a},[a]);let h=(0,l.useRef)(u);(0,l.useEffect)(()=>{h.current=u},[u]);let[y,_]=(0,l.useState)(!1),[w,j]=(0,l.useState)(!1),{props:S,meta:x}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...S,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),x.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=r(2115);function i(e,t){let r=(0,n.useRef)(()=>{}),i=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),i.current()):(r.current=o(e,n),i.current=o(t,n))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext({})},675:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(2363);let n=r(5859),i=r(1159);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,u,s,{src:d,sizes:f,unoptimized:c=!1,priority:p=!1,loading:g,className:m,quality:h,width:y,height:b,fill:v=!1,style:_,overrideSrc:w,onLoad:j,onLoadingComplete:S,placeholder:x="empty",blurDataURL:P,fetchPriority:C,decoding:O="async",layout:M,objectFit:E,objectPosition:z,lazyBoundary:I,lazyRoot:R,...k}=e,{imgConf:A,showAltText:D,blurComplete:N,defaultLoader:T}=t,U=A||i.imageConfigDefault;if("allSizes"in U)a=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);a={...U,allSizes:e,deviceSizes:t}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=k.loader||T;delete k.loader,delete k.srcSet;let L="__next_img_default"in F;if(L){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(M){"fill"===M&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!f&&(f=t)}let B="",G=l(y),W=l(b);if((r=d)&&"object"==typeof r&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,P=P||e.blurDataURL,B=e.src,!v){if(G||W){if(G&&!W){let t=G/e.width;W=Math.round(e.height*t)}else if(!G&&W){let t=W/e.height;G=Math.round(e.width*t)}}else G=e.width,W=e.height}}let H=!p&&("lazy"===g||void 0===g);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(c=!0,H=!1),a.unoptimized&&(c=!0),L&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(c=!0);let V=l(h),q=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:z}:{},D?{}:{color:"transparent"},_),$=N||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:W,blurWidth:u,blurHeight:s,blurDataURL:P||"",objectFit:q.objectFit})+'")':'url("'+x+'")',J=$?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:a({config:t,src:r,quality:o,width:u[d]})}}({config:a,src:d,unoptimized:c,width:G,quality:V,sizes:f,loader:F});return{props:{...k,loading:H?"lazy":g,fetchPriority:C,width:G,height:W,decoding:O,className:m,style:{...q,...J},sizes:X.sizes,srcSet:X.srcSet,src:w||X.src},meta:{unoptimized:c,priority:p,placeholder:x,fill:v}}}},6107:(e,t,r)=>{var n=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return c}});let i=r(306),o=r(9955),l=r(5155),a=o._(r(2115)),u=i._(r(1172)),s=r(3003),d=r(1147),f=r(675);function c(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let g=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=g.length;e<t;e++){let t=g[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(d.HeadManagerContext);return(0,l.jsx)(u.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,f.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,u=i?40*i:r,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3621:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(306)._(r(2115)),i=r(1159),o=n.default.createContext(i.imageConfigDefault)},1159:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},5514:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},3576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext(null)},1172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(2115),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,l=i?()=>{}:n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),a()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}}]);