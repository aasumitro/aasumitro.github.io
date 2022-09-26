import{_ as f}from"./NavigationTitle.vue_vue_type_script_setup_true_lang.a7f87835.js";import{_ as v}from"./NavigationMenu.vue_vue_type_script_setup_true_lang.b79cd890.js";import{f as k,a as z,B as b,v as y,w as M,o as s,x as c,L as i,u as l,Y as r,c as _,J as w,a2 as C}from"./entry.0dd8dd20.js";const B={class:"h-screen overflow-y-auto dark:bg-gray-900"},x={class:"p-2 rounded focus:outline-none absolute right-0 top-0 px-5 py-5","aria-label":"Toggle theme"},A=i("path",{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"},null,-1),S=[A],E=i("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},null,-1),$=[E],V=k({__name:"custom",setup(L){const n=z(),m="theme",a=b("theme",()=>!1),o=e=>{localStorage.setItem(m,e),a.value=e==="dark"},d=()=>n.path==="/",u=()=>!n.path;return y(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem(m);o(t||(e?"dark":"light"))}),M(a,e=>{o(e?"dark":"light")}),(e,t)=>{const h=f,p=v;return s(),c("main",{class:C({dark:l(a)})},[i("section",B,[i("button",x,[l(a)?(s(),c("svg",{key:0,onClick:t[0]||(t[0]=g=>o("light")),class:"w-5 h-5 fill-current text-yellow-300","aria-label":"Apply light theme",role:"img",fill:"currentColor",viewBox:"0 0 20 20"},S)):r("",!0),l(a)?r("",!0):(s(),c("svg",{key:1,onClick:t[1]||(t[1]=g=>o("dark")),class:"w-5 h-5","aria-label":"Apply dark theme",role:"img",fill:"currentColor",viewBox:"0 0 20 20"},$))]),!d()&&!u()?(s(),_(h,{key:0,title:l(n).name==="posts-slug"?"post detail":l(n).name,class:"invisible lg:visible"},null,8,["title"])):r("",!0),!d()&&!u()?(s(),_(p,{key:1,class:"invisible lg:visible"})):r("",!0),w(e.$slots,"default")])],2)}}});export{V as default};
