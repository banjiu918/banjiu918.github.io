import{_ as b}from"./DyEMY5IU.js";import N from"./SOMd54Ud.js";import{f as w,o as e,c as s,a as o,b as m,w as l,G as i,H as f,t as d,D as x,d as h,C}from"./2ZB93TRO.js";const Y={class:"mx-auto max-w-[1330px] md:p-4"},v=o("p",null,"No posts found.",-1),B={key:0,class:"mb-4"},D={class:"text-4xl font-bold"},L={key:1},E=w({__name:"MistralFullListOfPosts",setup(V){const g={path:"",where:[{hidden:{$ne:!0},listed:{$ne:!1}}],sort:[{date:-1}]};function u(a){return new Date(a).getFullYear()}function y(a,p,n){const _=u(p),r=n>0?u(a[n-1].date):null;return _!==r}return(a,p)=>{const n=b,_=N;return e(),s("main",null,[o("div",Y,[m(_,{query:g},{"not-found":l(()=>[v]),default:l(({list:r})=>[(e(!0),s(i,null,f(r,(t,k)=>(e(),s("div",{key:t._path,class:"mb-2 ml-4 lg:ml-0"},[y(r,t.date,k)?(e(),s("div",B,[o("span",D,d(u(t.date)),1)])):x("",!0),m(n,{to:t._path,class:"text-gray-700 underline decoration-dashed underline-offset-4"},{default:l(()=>[o("span",null,d(t.date),1),h(" · "),o("span",null,d(t.title),1)]),_:2},1032,["to"]),t.tags&&t.tags.length>0?(e(),s("span",L,"  ·")):x("",!0),(e(!0),s(i,null,f(t.tags,c=>(e(),C(n,{key:c,to:`/tags/${c}`,class:"bg-gray-200 rounded-full px-1.5 py-1 text-xs font-semibold text-gray-700 mx-1.5"},{default:l(()=>[h(d(c),1)]),_:2},1032,["to"]))),128))]))),128))]),_:1})])])}}});export{E as _};