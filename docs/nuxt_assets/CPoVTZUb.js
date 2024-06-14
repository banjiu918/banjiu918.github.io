import{a4 as I,af as P,a0 as O,a1 as q,ai as $,aj as E,I as L,n as j,j as y,f as R,r as W,u as B,B as H,q as U}from"./2ZB93TRO.js";async function D(e,t){return await C(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function C(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const s={width:i.width,height:i.height,ratio:i.width/i.height};t(s)},i.onerror=s=>r(s),i.src=e})}function g(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function F(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function T(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function J(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function G(e){const t={options:e},r=(s,o={})=>k(t,s,o),i=(s,o={},n={})=>r(s,{...n,modifiers:$(o,n.modifiers||{})}).url;for(const s in e.presets)i[s]=(o,n,d)=>i(o,n,{...e.presets[s],...d});return i.options=e,i.getImage=r,i.getMeta=(s,o)=>Q(t,s,o),i.getSizes=(s,o)=>K(t,s,o),t.$img=i,i}async function Q(e,t,r){const i=k(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await D(e,i.url)}function k(e,t,r){var c,h;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:s}=X(e,r.provider||e.options.provider),o=Z(e,r.preset);if(t=I(t)?t:P(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=O(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&I(t)){const m=q(t).host;if(!e.options.domains.find(p=>p===m))return{url:t}}const n=$(r,o,s);n.modifiers={...n.modifiers};const d=n.modifiers.format;(c=n.modifiers)!=null&&c.width&&(n.modifiers.width=g(n.modifiers.width)),(h=n.modifiers)!=null&&h.height&&(n.modifiers.height=g(n.modifiers.height));const l=i.getImage(t,n,e);return l.format=l.format||d||"",l}function X(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function Z(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function K(e,t,r){var f,S,b,_,z;const i=g((f=r.modifiers)==null?void 0:f.width),s=g((S=r.modifiers)==null?void 0:S.height),o=J(r.sizes),n=(b=r.densities)!=null&&b.trim()?F(r.densities.trim()):e.options.densities;T(n);const d=i&&s?s/i:0,l=[],c=[];if(Object.keys(o).length>=1){for(const u in o){const v=M(u,String(o[u]),s,d,e);if(v!==void 0){l.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const w of n)c.push({width:v._cWidth*w,src:x(e,t,r,v,w)})}}V(l)}else for(const u of n){const v=Object.keys(o)[0];let w=M(v,String(o[v]),s,d,e);w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(_=r.modifiers)==null?void 0:_.width,_cHeight:(z=r.modifiers)==null?void 0:z.height}),c.push({width:u,src:x(e,t,r,w,u)})}Y(c);const h=c[c.length-1],m=l.length?l.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,p=m?"w":"x",a=c.map(u=>`${u.src} ${u.width}${p}`).join(", ");return{sizes:m,srcset:a,src:h==null?void 0:h.src}}function M(e,t,r,i,s){const o=s.options.screens&&s.options.screens[e]||Number.parseInt(e),n=t.endsWith("vw");if(!n&&/^\d+$/.test(t)&&(t=t+"px"),!n&&!t.endsWith("px"))return;let d=Number.parseInt(t);if(!o||!d)return;n&&(d=Math.round(d/100*o));const l=i?Math.round(d*i):r;return{size:t,screenMaxWidth:o,_cWidth:d,_cHeight:l}}function x(e,t,r,i,s){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*s:void 0,height:i._cHeight?i._cHeight*s:void 0},r)}function V(e){var r;e.sort((i,s)=>i.screenMaxWidth-s.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const s=e[i];s.media===t&&e.splice(i,1),t=s.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function Y(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const ee=(e,{modifiers:t,baseURL:r="/_vercel/image"}={},i)=>{const s=Object.values(i.options.screens||{}).sort((d,l)=>d-l),o=s[s.length-1];let n=Number((t==null?void 0:t.width)||0);return n?s.includes(n)||(n=s.find(d=>d>n)||o):n=o,{url:r+"?"+E({url:e,w:String(n),q:String((t==null?void 0:t.quality)||"100")})}},te=!0,ie=Object.freeze(Object.defineProperty({__proto__:null,getImage:ee,validateDomains:te},Symbol.toStringTag,{value:"Module"})),N={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"vercel",domains:["banjiu918-github-io.vercel.app"],alias:{},densities:[1,2],format:["webp","webp"]};N.providers={vercel:{provider:ie,defaults:{}}};const A=()=>{const e=L(),t=j();return t.$img||t._img||(t._img=G({...N,nuxt:{baseURL:e.app.baseURL}}))};function re(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const se={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ne=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),r=y(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=A(),s=y(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:s}},oe={...se,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},de=R({name:"NuxtImg",props:oe,emits:["load","error"],setup:(e,t)=>{const r=A(),i=ne(e),s=W(!1),o=W(),n=y(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:g(e.width),height:g(e.height)}})),d=y(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||s.value)&&(a.sizes=n.value.sizes,a.srcset=n.value.srcset),a}),l=y(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||s.value)return!1;if(typeof a=="string")return a;const f=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},i.options.value)}),c=y(()=>e.sizes?n.value.src:r(e.src,i.modifiers.value,i.options.value)),h=y(()=>l.value?l.value:c.value);if(e.preload){const a=Object.values(n.value).every(f=>f);B({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:h.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const p=j().isHydrating;return H(()=>{if(l.value){const a=new Image;a.src=c.value,e.sizes&&(a.sizes=n.value.sizes||"",a.srcset=n.value.srcset),a.onload=f=>{s.value=!0,t.emit("load",f)},re("nuxt-image");return}o.value&&(o.value.complete&&p&&(o.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),o.value.onload=a=>{t.emit("load",a)},o.value.onerror=a=>{t.emit("error",a)})}),()=>U("img",{ref:o,...d.value,...t.attrs,class:e.placeholder&&!s.value?[e.placeholderClass]:void 0,src:h.value})}});export{de as _};