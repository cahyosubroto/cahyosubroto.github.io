import{M as C,a9 as k,D as y,_ as D,af as M}from"./LocalPlatformApiReference-Ce_7VYqR.js";import{o as s,c as n,P as _,J as h,f as B,b as f,u as r,a as c,e as d,a3 as w,S as x,R as N,I as $,at as S,r as z,U as E,X as V,M as A}from"./app-D8S-5geo.js";import{w as I}from"./SidebarButton.vue-D4CVjskN.js";const L={},R={class:"flex flex-col px-3 pt-2.5 pb-[75px]"};function F(b,u){return s(),n("ul",R,[_(b.$slots,"default")])}const q=C(L,[["render",F]]),J={class:"absolute flex right-1 opacity-0 group-hover:opacity-100"},K=h({__name:"SidebarListElementActions",props:{variable:{},warningMessage:{},isCopyable:{type:Boolean},isDeletable:{type:Boolean}},emits:["delete"],setup(b,{emit:u}){const p=u,o=B({action:"None",name:""}),i=k(),{copyToClipboard:m}=M();function v(a){o.value={action:a,name:b.variable.name},i.show()}function e(){i.hide(),o.value={action:"None",name:""}}function t(a){p("delete",a),e()}return(a,l)=>(s(),n($,null,[f("div",J,[a.isCopyable?(s(),n("button",{key:0,class:"text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-[5px]",type:"button",onClick:l[0]||(l[0]=g=>r(m)(a.variable.name))},[c(r(y),{class:"h-3 w-3",icon:"Clipboard"})])):d("",!0),!a.variable.isDefault&&a.isDeletable?(s(),n("button",{key:1,class:"text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-1",type:"button",onClick:l[1]||(l[1]=w(g=>v("Delete"),["prevent"]))},[c(r(y),{class:"h-3.5 w-3.5",icon:"Close"})])):d("",!0)]),c(r(D),{size:"sm",state:r(i),title:`${o.value.action} ${o.value.name}`},{default:x(()=>[o.value.action==="Delete"?(s(),N(I,{key:0,variableName:o.value.name,warningMessage:a.warningMessage,onClose:e,onDelete:l[2]||(l[2]=g=>t(a.variable.uid))},null,8,["variableName","warningMessage"])):d("",!0)]),_:1},8,["state","title"])],64))}}),P={class:"empty-variable-name"},T=h({__name:"SidebarListElement",props:{variable:{},warningMessage:{},isDeletable:{type:Boolean,default:!0},isCopyable:{type:Boolean,default:!0}},emits:["delete","colorModal"],setup(b,{emit:u}){const p=u,o=S(),i=(e,t)=>{e.metaKey?window.open(t,"_blank"):o.push(t)},m=e=>{p("delete",e)},v=e=>{p("colorModal",e)};return(e,t)=>{const a=z("router-link");return s(),n("li",null,[c(a,{class:A(["h-8 text-c-2 hover:bg-b-2 group relative block flex items-center gap-1 rounded py-1 pr-2 font-medium no-underline",[e.variable.color?"pl-1":"pl-2"]]),exactActiveClass:"active-link",to:`${e.variable.uid}`,onClick:t[1]||(t[1]=w(l=>i(l,e.variable.uid),["prevent"]))},{default:x(()=>[e.variable.color?(s(),n("button",{key:0,class:"hover:bg-b-3 rounded p-1.5",type:"button",onClick:t[0]||(t[0]=l=>v(e.variable.uid))},[f("div",{class:"h-2.5 w-2.5 rounded-xl",style:E({backgroundColor:e.variable.color})},null,4)])):d("",!0),f("span",P,V(e.variable.name),1),c(K,{isCopyable:e.isCopyable,isDeletable:e.isDeletable,variable:{...e.variable,isDefault:e.variable.isDefault??!1},warningMessage:e.warningMessage,onDelete:m},null,8,["isCopyable","isDeletable","variable","warningMessage"])]),_:1},8,["class","to"])])}}}),G=C(T,[["__scopeId","data-v-146f5335"]]);export{q as a,G as b};
