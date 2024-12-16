import{M as C,a9 as x,D as y,_ as D,af as M}from"./LocalPlatformApiReference-CxeCMPKu.js";import{o as s,c as n,a9 as _,f as h,k as B,b as g,L as r,a as c,d,ao as k,ac as w,ab as N,a2 as $,g as S,r as z,ad as E,ag as V,a6 as L}from"./app-DwvZGVL-.js";import{w as A}from"./SidebarButton.vue-DKtZcQ0A.js";const F={},I={class:"flex flex-col px-3 pt-2.5 pb-[75px]"};function K(b,u){return s(),n("ul",I,[_(b.$slots,"default")])}const O=C(F,[["render",K]]),R={class:"absolute flex right-1 opacity-0 group-hover:opacity-100"},T=h({__name:"SidebarListElementActions",props:{variable:{},warningMessage:{},isCopyable:{type:Boolean},isDeletable:{type:Boolean}},emits:["delete"],setup(b,{emit:u}){const p=u,o=B({action:"None",name:""}),i=x(),{copyToClipboard:m}=M();function v(a){o.value={action:a,name:b.variable.name},i.show()}function e(){i.hide(),o.value={action:"None",name:""}}function t(a){p("delete",a),e()}return(a,l)=>(s(),n($,null,[g("div",R,[a.isCopyable?(s(),n("button",{key:0,class:"text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-[5px]",type:"button",onClick:l[0]||(l[0]=f=>r(m)(a.variable.name))},[c(r(y),{class:"h-3 w-3",icon:"Clipboard"})])):d("",!0),!a.variable.isDefault&&a.isDeletable?(s(),n("button",{key:1,class:"text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-1",type:"button",onClick:l[1]||(l[1]=k(f=>v("Delete"),["prevent"]))},[c(r(y),{class:"h-3.5 w-3.5",icon:"Close"})])):d("",!0)]),c(r(D),{size:"sm",state:r(i),title:`${o.value.action} ${o.value.name}`},{default:w(()=>[o.value.action==="Delete"?(s(),N(A,{key:0,variableName:o.value.name,warningMessage:a.warningMessage,onClose:e,onDelete:l[2]||(l[2]=f=>t(a.variable.uid))},null,8,["variableName","warningMessage"])):d("",!0)]),_:1},8,["state","title"])],64))}}),j={class:"empty-variable-name"},q=h({__name:"SidebarListElement",props:{variable:{},warningMessage:{},isDeletable:{type:Boolean,default:!0},isCopyable:{type:Boolean,default:!0}},emits:["delete","colorModal"],setup(b,{emit:u}){const p=u,o=S(),i=(e,t)=>{e.metaKey?window.open(t,"_blank"):o.push(t)},m=e=>{p("delete",e)},v=e=>{p("colorModal",e)};return(e,t)=>{const a=z("router-link");return s(),n("li",null,[c(a,{class:L(["h-8 text-c-2 hover:bg-b-2 group relative block flex items-center gap-1 rounded py-1 pr-2 font-medium no-underline",[e.variable.color?"pl-1":"pl-2"]]),exactActiveClass:"active-link",to:`${e.variable.uid}`,onClick:t[1]||(t[1]=k(l=>i(l,e.variable.uid),["prevent"]))},{default:w(()=>[e.variable.color?(s(),n("button",{key:0,class:"hover:bg-b-3 rounded p-1.5",type:"button",onClick:t[0]||(t[0]=l=>v(e.variable.uid))},[g("div",{class:"h-2.5 w-2.5 rounded-xl",style:E({backgroundColor:e.variable.color})},null,4)])):d("",!0),g("span",j,V(e.variable.name),1),c(T,{isCopyable:e.isCopyable,isDeletable:e.isDeletable,variable:{...e.variable,isDefault:e.variable.isDefault??!1},warningMessage:e.warningMessage,onDelete:m},null,8,["isCopyable","isDeletable","variable","warningMessage"])]),_:1},8,["class","to"])])}}}),P=C(q,[["__scopeId","data-v-146f5335"]]);export{O as a,P as b};
