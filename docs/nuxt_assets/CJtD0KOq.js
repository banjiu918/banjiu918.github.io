import{_ as g}from"./1wjo1BNG.js";import y from"./BlzYbQCi.js";import{f as b}from"./B6-xrCaP.js";import{f as v,o as e,C as i,w as o,a as t,c,G as _,H as m,F as w,b as d,t as n,s as k,d as p,D as C}from"./Bjvb5_rR.js";const N=t("p",null,"No posts found.",-1),D={class:"space-y-8"},L={class:"grid grid-cols-3 gap-4"},V={class:"text-3xl font-bold mb-2"},B={class:"text-gray-700 mb-4"},$={class:"mb-3"},j={class:"text-sm text-gray-500"},z={class:"text-sm text-gray-500"},F={class:"flex flex-wrap gap-2"},T={key:0,class:"col-span-1 p-4 flex justify-center items-center"},q=["src","alt"],E=t("hr",null,null,-1),G={class:"flex items-center justify-center mt-10"},I=v({__name:"MistralLimitedListOfPosts",setup(H){const f={path:"",where:[{hidden:{$ne:!0},listed:{$ne:!1}}],limit:10,sort:[{date:-1}]};function u(a){return a.description.slice(0,200)+"..."||a.body.slice(0,200)+"..."}return(a,M)=>{const l=g,h=y;return e(),i(h,{query:f},{"not-found":o(()=>[N]),default:o(({list:x})=>[t("div",D,[(e(!0),c(_,null,m(x,s=>(e(),c("div",{key:s._path,class:"flex flex-col"},[t("div",L,[t("div",{class:w(["col-span-2 p-4",s.cover?"col-span-2":"col-span-3"])},[d(l,{to:s._path},{default:o(()=>[t("h2",V,n(s.title),1),t("p",B,n(u(s)),1),t("div",$,[t("span",j,n(("formatDate"in a?a.formatDate:k(b))(s.date))+" ∙ ",1),t("span",z,n(s.readingTime.text),1)])]),_:2},1032,["to"]),t("div",F,[(e(!0),c(_,null,m(s.tags,r=>(e(),i(l,{key:r,class:"bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700",to:`/tags/${r}`},{default:o(()=>[p(n(r),1)]),_:2},1032,["to"]))),128))])],2),s.cover?(e(),c("div",T,[d(l,{to:s._path,class:"w-full"},{default:o(()=>[t("img",{src:"/images/"+s.cover,alt:s.title,class:"w-full object-cover",sizes:"233px sm:400px md:400px",format:"webp",loading:"lazy"},null,8,q)]),_:2},1032,["to"])])):C("",!0)]),E]))),128)),t("div",G,[d(l,{to:"/archives",class:"mt-2 bg-black hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded"},{default:o(()=>[p(" View all posts ")]),_:1})])])]),_:1})}}});export{I as _};
