import{l as D,m as E,p as R,q as V,f,r as p,s as T,t as c,v as P,x as O,i as d,F as h,y,z as L,d as r,_ as a,A as b,B as $,C as S,D as j,h as k,E as C}from"./entry.0dd8dd20.js";import"./ContentDoc.892192b6.js";import"./ContentSlot.3b764778.js";import"./DocumentDrivenEmpty.39e47edc.js";import"./DocumentDrivenNotFound.3d9ce9d8.js";import"./Markdown.aca62c41.js";import"./ProseCode.2a23c5a6.js";const x=t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=D(e?`/navigation/${E(e)}.json`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:R(e||{}),previewToken:V("previewToken").value}})};const N=f({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const u=p(null),i=T();return c(_=>{if(!i.isHydrating)return o("error",_),u.value=_,!1}),()=>{var _,n;return u.value?(_=e.error)==null?void 0:_.call(e,{error:u}):(n=e.default)==null?void 0:n.call(e)}}}),w=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),z=f({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=p(!1);return P(()=>{o.value=!0}),u=>{var l;if(o.value)return(l=e.default)==null?void 0:l.call(e);const i=e.fallback||e.placeholder;if(i)return i();const _=u.fallback||u.placeholder||"",n=u.fallbackTag||u.placeholderTag||"span";return O(n,null,_)}}}),s=new WeakMap;function M(t){if(s.has(t))return s.get(t);const e={...t};return e.render?e.render=(o,...u)=>{var i,_;return o.mounted$?d(h,(i=o.$attrs)!=null?i:o._.attrs,t.render(o,...u)):d("div",(_=o.$attrs)!=null?_:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,u)=>{var _;const i=p(!1);return P(()=>{i.value=!0}),Promise.resolve(((_=t.setup)==null?void 0:_.call(t,o,u))||{}).then(n=>typeof n!="function"?{...n,mounted$:i}:(...l)=>i.value?d(h,u.attrs,n(...l)):d("div",u.attrs))},s.set(t,e),e}const B=Object.freeze(Object.defineProperty({__proto__:null,default:z,createClientOnly:M},Symbol.toStringTag,{value:"Module"})),q=f({name:"ServerPlaceholder",render(){return O("div")}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),G=f({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const e=H({duration:t.duration,throttle:t.throttle}),o=T();return o.hook("page:start",e.start),o.hook("page:finish",e.finish),y(()=>e.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function H(t){const e=p(0),o=p(!1),u=L(()=>1e4/t.duration);let i=null,_=null;function n(){m(),e.value=0,o.value=!0,t.throttle?_=setTimeout(v,t.throttle):v()}function l(){e.value=100,g()}function m(){clearInterval(i),clearTimeout(_),i=null,_=null}function I(A){e.value=Math.min(100,e.value+A)}function g(){m(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function v(){i=setInterval(()=>{I(u.value)},100)}return{progress:e,isLoading:o,start:n,finish:l,clear:m}}const U=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));r(()=>a(()=>import("./AppLogo.6142b9db.js"),["AppLogo.6142b9db.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./NavigationMenu.3a0a69c7.js"),["NavigationMenu.3a0a69c7.js","NavigationMenu.vue_vue_type_script_setup_true_lang.b79cd890.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./NavigationTitle.aebb4b55.js"),["NavigationTitle.aebb4b55.js","NavigationTitle.vue_vue_type_script_setup_true_lang.a7f87835.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./PageHeading.a88564fc.js"),["PageHeading.a88564fc.js","AppLogo.6142b9db.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./PostDetail.fabfd128.js"),["PostDetail.fabfd128.js","PostDetail.vue_vue_type_script_setup_true_lang.8f9de400.js","entry.0dd8dd20.js","entry.bb466c40.css","PostPrevNext.ec705395.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./PostItems.3ccecfeb.js"),["PostItems.3ccecfeb.js","PostItems.vue_vue_type_script_setup_true_lang.d57cf986.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./PostPrevNext.ec705395.js"),["PostPrevNext.ec705395.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./SocialMedia.a817dbbf.js"),["SocialMedia.a817dbbf.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentDoc.892192b6.js"),["ContentDoc.892192b6.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.0dd8dd20.js").then(t=>t.a7),["entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.0dd8dd20.js").then(t=>t.a6),["entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.0dd8dd20.js").then(t=>t.a5),["entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.0dd8dd20.js").then(t=>t.a4),["entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentSlot.3b764778.js"),["ContentSlot.3b764778.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenEmpty.39e47edc.js"),["DocumentDrivenEmpty.39e47edc.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenNotFound.3d9ce9d8.js"),["DocumentDrivenNotFound.3d9ce9d8.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./Markdown.aca62c41.js"),["Markdown.aca62c41.js","ContentSlot.3b764778.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseA.c4fd3321.js"),["ProseA.c4fd3321.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseBlockquote.0db896ed.js"),["ProseBlockquote.0db896ed.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCode.2a23c5a6.js"),["ProseCode.2a23c5a6.js","ProseCode.e63e49c6.css","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCodeInline.cc7affc1.js"),["ProseCodeInline.cc7affc1.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseEm.7dc7c427.js"),["ProseEm.7dc7c427.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH1.79753e4f.js"),["ProseH1.79753e4f.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH2.08b1c516.js"),["ProseH2.08b1c516.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH3.3ca4db0b.js"),["ProseH3.3ca4db0b.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH4.8d50de7f.js"),["ProseH4.8d50de7f.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH5.c2c2cb47.js"),["ProseH5.c2c2cb47.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH6.b98c2984.js"),["ProseH6.b98c2984.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseHr.d9e30131.js"),["ProseHr.d9e30131.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseImg.6546f595.js"),["ProseImg.6546f595.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseLi.939e3dde.js"),["ProseLi.939e3dde.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseOl.b13f837a.js"),["ProseOl.b13f837a.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseP.6cdce20c.js"),["ProseP.6cdce20c.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseStrong.51047a69.js"),["ProseStrong.51047a69.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTable.5cbef720.js"),["ProseTable.5cbef720.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTbody.9e784ecb.js"),["ProseTbody.9e784ecb.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTd.e6752cd3.js"),["ProseTd.e6752cd3.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTh.78b5c91e.js"),["ProseTh.78b5c91e.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseThead.aa8ba532.js"),["ProseThead.aa8ba532.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTr.257fa534.js"),["ProseTr.257fa534.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseUl.0192323a.js"),["ProseUl.0192323a.js","entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./welcome.ee9c3245.js"),["welcome.ee9c3245.js","entry.0dd8dd20.js","entry.bb466c40.css","ContentDoc.892192b6.js","ContentSlot.3b764778.js","DocumentDrivenEmpty.39e47edc.js","DocumentDrivenNotFound.3d9ce9d8.js","Markdown.aca62c41.js","ProseCode.2a23c5a6.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.0dd8dd20.js").then(t=>t.a8),["entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>w),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>B),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.0dd8dd20.js").then(t=>t.a3),["entry.0dd8dd20.js","entry.bb466c40.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));const W=f({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=b(t),o=L(()=>{var i;return typeof((i=e.value)==null?void 0:i.params)=="function"?e.value.params():e.value});if(!o.value&&$("dd-navigation").value){const{navigation:i}=S();return{navigation:i}}const{data:u}=await j(`content-navigation-${E(o.value)}`,()=>x(o.value));return{navigation:u}},render(t){const e=k(),{navigation:o}=t,u=n=>d(C,{to:n._path},()=>n.title),i=(n,l)=>d("ul",l?{"data-level":l}:null,n.map(m=>m.children?d("li",null,[u(m),i(m.children,l+1)]):d("li",null,u(m)))),_=n=>i(n,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):_(o)}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as default};
