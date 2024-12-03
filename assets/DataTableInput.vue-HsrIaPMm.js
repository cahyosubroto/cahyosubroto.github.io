import{f as y,o as a,c as o,e as w,a9 as d,b as c,a6 as f,ad as $,ab as m,ac as x,ae as C,k as p,l as h,a2 as _,a8 as v,L as B}from"./app-huav7LLB.js";import{M as V,aa as O}from"./LocalPlatformApiReference-CtcPkllk.js";import{O as q,_ as A}from"./SidebarButton.vue-CXJBeWAq.js";const F={key:0,class:"sr-only"},R=y({__name:"DataTable",props:{columns:{},scroll:{type:Boolean}},setup(i){return(l,s)=>(a(),o("div",{class:f(["border-1/2 rounded bg-b-1",l.scroll?"overflow-x-auto custom-scroll":"overflow-visible"])},[w("table",{class:f(["grid auto-rows-auto min-h-8 mb-0",{"min-w-full w-max":l.scroll}]),style:$({gridTemplateColumns:l.columns.map(r=>r||"1fr").join(" ")})},[l.$slots.caption?(a(),o("caption",F,[d(l.$slots,"caption")])):c("",!0),d(l.$slots,"default")],6)],2))}}),I=y({__name:"DataTableCell",props:{is:{default:"td"}},setup(i){return(l,s)=>(a(),m(C(l.is),{class:"min-h-8 min-w-8 border-l-0 border-t-0 border-b-1/2 border-r-1/2 flex text-sm last:border-r-0 group-last:border-b-transparent p-0 m-0 relative",role:"cell"},{default:x(()=>[d(l.$slots,"default")]),_:3}))}}),S={},T={class:"group contents w-fit min-w-full"};function D(i,l){return a(),o("tr",T,[d(i.$slots,"default")])}const G=V(S,[["render",D]]),E={key:0,class:"text-c-1 flex min-w-[94px] items-center pl-2 pr-0"},P={class:"row-1 overflow-x-auto"},U=["id","readOnly","type","value"],z={key:2,class:"absolute centered-y right-2 pt-px text-xxs text-c-3 bg-b-1 shadow-[-8px_0_4px_var(--scalar-background-1)] opacity-100 duration-150 transition-opacity peer-has-[:focus-visible]:opacity-0"},H={key:1,class:"absolute centered-y right-7 text-orange text-xs"},N=y({inheritAttrs:!1,__name:"DataTableInput",props:{id:{},type:{},containerClass:{},required:{type:Boolean,default:!1},modelValue:{},canAddCustomEnumValue:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},enum:{},min:{},max:{}},emits:["update:modelValue","inputFocus","inputBlur","selectVariable"],setup(i,{emit:l}){const s=i,r=l,u=p(!0);p("");const k=p(!1),g=()=>{k.value||r("inputBlur")},b=h(()=>s.type==="password"?u.value?"password":"text":s.type??"text");return(e,t)=>(a(),m(I,{class:f(["relative row",e.containerClass])},{default:x(()=>[e.$slots.default?(a(),o("div",E,[d(e.$slots,"default",{},void 0,!0)])):c("",!0),w("div",P,[s.enum&&s.enum.length?(a(),m(q,{key:0,canAddCustomValue:e.canAddCustomEnumValue,modelValue:s.modelValue,value:s.enum,"onUpdate:modelValue":t[0]||(t[0]=n=>r("update:modelValue",n))},null,8,["canAddCustomValue","modelValue","value"])):(a(),o(_,{key:1},[u.value&&e.type==="password"?(a(),o("input",v({key:0},e.$attrs,{id:e.id,autocomplete:"off",class:"border-none text-c-1 disabled:text-c-2 min-w-0 w-full peer px-2 py-1.25 -outline-offset-2","data-1p-ignore":"",readOnly:e.readOnly,spellcheck:"false",type:b.value,value:e.modelValue,onInput:t[1]||(t[1]=n=>r("update:modelValue",n.target.value??""))}),null,16,U)):(a(),m(A,v({key:1},e.$attrs,{id:e.id,class:"border-none text-c-1 disabled:text-c-2 min-w-0 w-full peer",disableCloseBrackets:"",disableTabIndent:"",max:e.max,min:e.min,modelValue:e.modelValue??"",readOnly:e.readOnly,required:e.required,spellcheck:"false",type:b.value,onBlur:g,onFocus:t[2]||(t[2]=n=>r("inputFocus")),"onUpdate:modelValue":t[3]||(t[3]=n=>r("update:modelValue",n))}),null,16,["id","max","min","modelValue","readOnly","required","type"])),e.required?(a(),o("div",z," Required ")):c("",!0)],64))]),e.$slots.warning?(a(),o("div",H,[d(e.$slots,"warning",{},void 0,!0)])):c("",!0),d(e.$slots,"icon",{},void 0,!0),e.type==="password"?(a(),m(B(O),{key:2,class:"-ml-.5 mr-1 h-6 w-6 self-center p-1.5",icon:u.value?"Show":"Hide",label:u.value?"Show Password":"Hide Password",onClick:t[4]||(t[4]=n=>u.value=!u.value)},null,8,["icon","label"])):c("",!0)]),_:3},8,["class"]))}}),J=V(N,[["__scopeId","data-v-8574d822"]]);export{J as a,R as f,G as i,I as m};
