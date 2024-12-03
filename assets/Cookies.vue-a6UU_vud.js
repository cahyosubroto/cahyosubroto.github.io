import{f as S,l as T,o as n,ab as x,ac as c,e as u,L as r,b as A,g as I,aQ as K,A as L,O as U,a as p,c as v,a2 as w,aa as O,a6 as D,af as N,ag as E,aw as z,ax as B}from"./app-huav7LLB.js";import{_ as Q,p as H,e as P,g as X}from"./SidebarButton.vue-CXJBeWAq.js";import{a as Y,b as Z}from"./SidebarListElement.vue-BGXeLeY4.js";import{x as q,a as G}from"./ViewLayoutContent.vue-D6iJj_zr.js";import{Q as $,R as F,D as M,b_ as J}from"./LocalPlatformApiReference-CtcPkllk.js";import{E as W}from"./Form.vue-B78pPcgl.js";import{a as ee}from"./useSidebar-Cyq5bwdO.js";import"./plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableInput.vue-HsrIaPMm.js";const oe={class:"flex items-center pointer-events-none"},ae=["value"],te=S({__name:"CookieForm",setup(R){const{activeCookieId:t}=$(),{cookies:d,cookieMutators:b}=F(),l=[{label:"Key",key:"key",placeholder:"Username"},{label:"Value",key:"value",placeholder:"123"},{label:"Domain",key:"domain",placeholder:"scalar.com"},{label:"Path",key:"path",placeholder:"/"},{label:"Expires",key:"expires",placeholder:"Tomorrow"},{label:"Secure",key:"secure",placeholder:"True/False"},{label:"HttpOnly",key:"httpOnly",placeholder:"True/False"}],f=T(()=>d[t.value]||{}),m=(y,i)=>{t.value&&b.edit(t.value,y,i)};return(y,i)=>(n(),x(W,{data:f.value,onUpdate:m,options:l},{title:c(()=>[u("div",oe,[i[1]||(i[1]=u("label",{class:"absolute w-full h-full top-0 left-0 pointer-events-auto opacity-0 cursor-text",for:"cookiename"},null,-1)),u("input",{id:"cookiename",class:"md:pl-1 outline-none border-0 text-c-2 rounded pointer-events-auto relative w-full",placeholder:"Cookie Name",value:f.value.name,onInput:i[0]||(i[0]=g=>m("name",g.target.value))},null,40,ae)])]),_:1},8,["data"]))}}),le=S({__name:"CookieRaw",setup(R){const{activeCookieId:t}=$(),{cookies:d}=F();return(b,l)=>(n(),x(H,null,{title:c(()=>l[0]||(l[0]=[u("span",null,"Raw Cookie String",-1)])),default:c(()=>[r(t)&&r(d)[r(t)]?(n(),x(Q,{key:0,class:"pl-px pr-2 md:px-2 py-2.5",lineNumbers:"",modelValue:""})):A("",!0)]),_:1}))}}),se={class:"flex-1"},ne=["onClick"],re={class:"before:bg-border before:pointer-events-none before:z-1 before:absolute before:left-[calc(1rem_-_1.5px)] before:top-0 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative"},ie=["onClick"],ce={class:"before:bg-border before:pointer-events-none before:z-1 before:absolute before:left-[calc(1.75rem_-_1.5px)] before:top-0 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative"},ye=S({__name:"Cookies",setup(R){const{cookies:t,cookieMutators:d,events:b}=F(),{collapsedSidebarFolders:l,toggleSidebarFolder:f}=ee(),m=I(),y=K(),i=()=>{const o=Object.keys(t).length,e=J.parse({name:`Cookie ${o}`,value:"",domain:"example.com",path:"/",secure:!1,httpOnly:!1,sameSite:"None"});d.add(e),m.push(e.uid)},g=o=>{d.delete(o);const e=Object.values(t).filter(a=>a.uid!==o);if(e.length>1){const a=e[e.length-1];m.push(a.uid)}else e.length===1&&e[0].uid==="default"&&m.push("default")},C=T(()=>{const o={};return Object.values(t).forEach(e=>{e.domain&&e.path&&(o[e.domain]||(o[e.domain]={}),o[e.domain][e.path]||(o[e.domain][e.path]=[]),o[e.domain][e.path].push(e))}),o}),V=o=>l[o],j=o=>{o!=null&&o.createNew&&y.name==="cookies"&&i()};return L(()=>{const o=Object.keys(C.value),e=Object.entries(C.value).flatMap(([a,s])=>Object.keys(s).map(_=>a+_));o.forEach(a=>{l[a]=!0}),e.forEach(a=>{l[a]=!0}),b.hotKeys.on(j)}),U(()=>b.hotKeys.off(j)),(o,e)=>(n(),x(G,null,{default:c(()=>[p(r(P),{title:"Cookies"},{content:c(()=>[u("div",se,[p(Y,null,{default:c(()=>[(n(!0),v(w,null,O(C.value,(a,s)=>(n(),v("div",{key:s},[u("button",{class:"flex font-medium gap-1.5 items-center px-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",type:"button",onClick:_=>r(f)(s)},[p(r(M),{class:D(["text-c-3",{"rotate-90":r(l)[s]}]),icon:"ChevronRight",size:"sm",thickness:"2.5"},null,8,["class"]),N(" "+E(s),1)],8,ne),z(u("div",re,[(n(!0),v(w,null,O(a,(_,h)=>(n(),v("div",{key:h},[u("button",{class:"flex font-medium gap-1.5 items-center pl-5 pr-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",type:"button",onClick:k=>r(f)(s+h)},[p(r(M),{class:D(["text-c-3",{"rotate-90":r(l)[s+h]}]),icon:"ChevronRight",size:"sm",thickness:"2.5"},null,8,["class"]),N(" "+E(h),1)],8,ie),z(u("div",ce,[(n(!0),v(w,null,O(_,k=>(n(),x(Z,{key:k.uid,class:"cookie text-xs",variable:{name:k.name,uid:k.uid},warningMessage:"Are you sure you want to delete this cookie?",onDelete:ue=>g(k.uid)},null,8,["variable","onDelete"]))),128))],512),[[B,V(s+h)]])]))),128))],512),[[B,V(s)]])]))),128))]),_:1})])]),button:c(()=>[p(X,{click:i,hotkey:"N"},{title:c(()=>e[0]||(e[0]=[N("Add Cookie")])),_:1})]),_:1}),p(q,{class:"flex-1"},{default:c(()=>[p(te),p(le)]),_:1})]),_:1}))}});export{ye as default};
