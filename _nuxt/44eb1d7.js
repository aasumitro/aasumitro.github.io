(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(t,e,r){"use strict";r.r(e);var o=r(22),n=r(8),c=(r(41),r(12),r(23),r(50),{data:function(){return{loading:!0,story:Object,avgReadTime:"",nextStory:Object,prevStory:Object}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("stories/".concat(t.$route.params.slug)).fetch().finally((function(){t.loading=!1}));case 2:return t.story=e.sent,e.next=5,t.$content("stories").only(["title","slug"]).sortBy("createdAt","desc").where({isArchived:!1,isPublished:!0}).surround(t.$route.params.slug).fetch();case 5:r=e.sent,n=Object(o.a)(r,2),c=n[0],l=n[1],t.avgReadTime=t.story.readingStats.text,t.nextStory=c,t.prevStory=l;case 12:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.story.title," | @aasumitro - Personal Home Pages"),meta:[{hid:"description",name:"description",content:"Story Detail for ".concat(this.story.description," | @aasumitro - Personal Home Pages  (v3.0.3)")},{hid:"og:url",property:"og:url",content:"https://v3.aasumitro.id/stories/".concat(this.story.slug)},{hid:"og:title",property:"og:title",content:this.story.title},{hid:"og:description",property:"og:description",content:this.story.description},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"twitter:site",name:"twitter:site",content:"@v3.aasumitro.id"},{hid:"twitter:creator",name:"twitter:creator",content:"@aasumitro"},{hid:"twitter:url",name:"twitter:url",content:"https://v3.aasumitro.id/stories/".concat(this.story.slug)},{hid:"twitter:title",name:"twitter:title",content:this.story.title},{hid:"twitter:description",name:"twitter:description",content:this.story.description}]}},computed:{theme:function(){var t=this.$store.getters.getTheme;return null===t&&(t=localStorage.theme),"dark"===t?"dark_dimmed":t}}}),l=r(17),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("section",{staticClass:"animate-pulse text-center py-16 text-black dark:text-white",attrs:{id:"loading"}},[t._v("\n  loading content . . .\n")]):r("section",{staticClass:"mt-16 px-16 lg:px-56",attrs:{id:"story"}},[r("div",{staticClass:"text-center",attrs:{id:"title"}},[r("h1",{staticClass:"px-4 xl:px-40 text-3xl dark:text-gray-200"},[t._v("\n      "+t._s(t.story.title)+"\n    ")]),t._v(" "),r("p",{staticClass:"mt-3 text-gray-600 dark:text-gray-400"},[t._v("\n      "+t._s(t.$dayjs(t.story.createdAt).format("D MMMM YYYY")+" - "+t.avgReadTime)+"\n    ")]),t._v(" "),r("ul",{staticClass:"m-0 p-0 mt-3"},[r("li",{staticClass:"inline-block rounded-full m-2 ml-0 bg-red-600 hover:bg-red-700"},[r("a",{staticClass:"fill-current text-white",attrs:{href:"https://facebook.com/sharer.php?u=https://v3.aasumitro.id/stories/"+t.story.slug,target:"_blank"}},[r("svg",{staticClass:"m-1 p-1 md:m-0 h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[r("path",{attrs:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])])]),t._v(" "),r("li",{staticClass:"inline-block rounded-full m-2 bg-red-600 hover:bg-red-700"},[r("a",{staticClass:"fill-current text-white",attrs:{href:"https://twitter.com/intent/tweet?text="+t.story.title+" by @aasumitro&url=https://v3.aasumitro.id/stories/"+t.story.slug+"&original_referer=https://aasumitro.id/stories/"+t.story.slug,target:"_blank"}},[r("svg",{staticClass:"m-1 p-1 md:m-0 h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])])])]),t._v(" "),r("div",{staticClass:"px-4 xl:px-40",attrs:{id:"content"}},[r("nuxt-content",{staticClass:"prose dark:prose-dark prose-lg lg:prose-lg xl:prose-xl max-w-none dark:text-gray-200 mt-10 mb-10",attrs:{document:t.story}})],1),t._v(" "),r("div",{staticClass:"mb-10 px-4 xl:px-40 flex",attrs:{id:"surround"}},[r("div",{staticClass:"flex-1"},[t.prevStory?r("NuxtLink",{staticClass:"px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-semibold dark:text-gray-300",attrs:{to:""+t.prevStory.slug}},[t._v("\n        Previous Story\n      ")]):t._e()],1),t._v(" "),r("div",{staticClass:"flex-1"}),t._v(" "),r("div",{staticClass:"flex-1 text-right"},[t.nextStory?r("NuxtLink",{staticClass:"px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-semibold dark:text-gray-300",attrs:{to:""+t.nextStory.slug}},[t._v("\n        Next Story\n      ")]):t._e()],1)]),t._v(" "),r("div",{staticClass:"mb-10 px-4 xl:px-40",attrs:{id:"comment"}},[r("script",{attrs:{src:"https://giscus.app/client.js","data-repo":"aasumitro/aasumitro.github.io","data-repo-id":"MDEwOlJlcG9zaXRvcnkxNDIxODU3NzE=","data-category":"S&C","data-category-id":"DIC_kwDOCHmVK84CAC4P","data-mapping":"url","data-reactions-enabled":"1","data-emit-metadata":"0","data-theme":t.theme,"data-lang":"en",crossorigin:"anonymous",async:""}})])])}),[],!1,null,null,null);e.default=component.exports}}]);