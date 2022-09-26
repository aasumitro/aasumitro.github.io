import{f as F,a as G,U as I,e as J,o as Q,x as Z,L as i,S as n,K,V as a,u as e,D as tt,W as L,X as et,j as it}from"./entry.0dd8dd20.js";import rt from"./PostPrevNext.ec705395.js";const st={class:"mt-16 px-16 xl:px-56"},ot={class:"mb-8"},nt={id:"heading",class:"text-center mb-5"},at={class:"px-4 xl:px-40 text-3xl dark:text-gray-200"},ct={class:"mt-2 text-lg dark:text-gray-200"},lt={class:"mt-3 text-gray-600 dark:text-gray-400"},dt={class:"m-0 p-0 mt-3"},ht={class:"inline-block rounded-full m-2 ml-0 bg-red-600 hover:bg-red-700"},ut=["href"],mt=i("svg",{class:"m-1 p-1 md:m-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[i("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})],-1),pt=[mt],_t={class:"inline-block rounded-full m-2 bg-red-600 hover:bg-red-700"},vt=["href"],wt=i("svg",{class:"m-1 p-1 md:m-0 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})],-1),xt=[wt],gt=i("p",null,"No content found.",-1),$t=F({__name:"PostDetail",async setup(ft){var l,d,h,u,m,p,_,v,w,x,g,f,y;let s,c;const{path:r}=G(),{data:t}=([s,c]=I(async()=>tt(`content-${r}`,async()=>{let o=L().where({_path:r}).findOne(),b=L().only(["_path","title","description","tags","timestamp","published","archived","readingTime"]).where({published:!0,archived:!1}).sort({timestamp:1}).findSurround(r);return{article:await o,surround:await b}})),s=await s,c(),s),[O,U]=(l=t==null?void 0:t.value)==null?void 0:l.surround;return J({title:`${(h=(d=t==null?void 0:t.value)==null?void 0:d.article)==null?void 0:h.title} | @aasumitro - Personal Home Pages`,meta:[{name:"description",content:(m=(u=t==null?void 0:t.value)==null?void 0:u.article)==null?void 0:m.description},{hid:"og:url",property:"og:url",content:`https://v3.aasumitro.id${r}`},{hid:"og:title",property:"og:title",content:(_=(p=t==null?void 0:t.value)==null?void 0:p.article)==null?void 0:_.title},{hid:"og:description",property:"og:description",content:(w=(v=t==null?void 0:t.value)==null?void 0:v.article)==null?void 0:w.description},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"twitter:site",name:"twitter:site",content:"@v3.aasumitro.id"},{hid:"twitter:creator",name:"twitter:creator",content:"@aasumitro"},{hid:"twitter:url",name:"twitter:url",content:`https://v3.aasumitro.id${r}`},{hid:"twitter:title",name:"twitter:title",content:(g=(x=t==null?void 0:t.value)==null?void 0:x.article)==null?void 0:g.title},{hid:"twitter:description",name:"twitter:description",content:(y=(f=t==null?void 0:t.value)==null?void 0:f.article)==null?void 0:y.description}]}),(o,b)=>{var $;const W=et,X=it;return Q(),Z("div",st,[i("article",ot,[n(X,{value:($=e(t))==null?void 0:$.article},{empty:K(()=>[gt]),default:K(()=>{var k,M,C,V,B,D,P,N,S,Y,H,R,j,q,z,A,T,E;return[i("div",nt,[i("h1",at,a((M=(k=e(t))==null?void 0:k.article)==null?void 0:M.title),1),i("h5",ct,a((V=(C=e(t))==null?void 0:C.article)==null?void 0:V.description),1),i("p",lt,a(`${o.$dayjs.unix((D=(B=e(t))==null?void 0:B.article)==null?void 0:D.timestamp).format("D MMMM YYYY")} \u2014 ${(S=(N=(P=e(t))==null?void 0:P.article)==null?void 0:N.readingTime)==null?void 0:S.text}`),1),i("ul",dt,[i("li",ht,[i("a",{href:`https://facebook.com/sharer.php?quote=${(H=(Y=e(t))==null?void 0:Y.article)==null?void 0:H.title} \u2014 ${(j=(R=e(t))==null?void 0:R.article)==null?void 0:j.description} by @aasumitro.id&u=https://v3.aasumitro.id${e(r)}`,target:"_blank",class:"fill-current text-white"},pt,8,ut)]),i("li",_t,[i("a",{href:`https://twitter.com/intent/tweet?text=${(z=(q=e(t))==null?void 0:q.article)==null?void 0:z.title} \u2014 ${(T=(A=e(t))==null?void 0:A.article)==null?void 0:T.description} by @aasumitro&url=https://v3.aasumitro.id${e(r)}&original_referer=https://aasumitro.id${e(r)}`,target:"_blank",class:"fill-current text-white"},xt,8,vt)])])]),n(W,{class:"prose dark:prose-invert max-w-none",value:(E=e(t))==null?void 0:E.article},null,8,["value"])]}),_:1},8,["value"])]),n(rt,{prev:e(O),next:e(U),class:"mb-8"},null,8,["prev","next"])])}}});export{$t as _};
