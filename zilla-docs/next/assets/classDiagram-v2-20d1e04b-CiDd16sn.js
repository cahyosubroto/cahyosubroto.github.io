import{z,K as D,Y as R}from"./styles-f32eefb3-B--21Ria.js";import{L as c,J as d,T as x,n as $,F as B,M as N,v as M,z as A,b as C}from"./mermaid.esm.min-B2AR_BVY.js";import{Z as j}from"./graph-e9862b7e-DNNXElhU.js";import{b as F}from"./index-5e3196ce-mtbQJZAH.js";import"./app-CKeM1Wjf.js";import"./layout-2e6f21ea-s0pgp7qB.js";import"./clone-06085faa-Bi4DGB9P.js";import"./edges-16a2be2d-ClHNsh7v.js";import"./createText-323577ec-C302oa26.js";import"./line-552be4bc-BWOPM3z8.js";import"./array-2ff2c7a6-C3YJfAyO.js";import"./path-428ebac9-B0oSrkCJ.js";const k=i=>C.sanitizeText(i,d());let T={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const J=function(i,t,p,n){const e=Object.keys(i);c.info("keys:",e),c.info(i),e.forEach(function(s){var l,r;const a=i[s],o={shape:"rect",id:a.id,domId:a.domId,labelText:k(a.id),labelStyle:"",style:"fill: none; stroke: black",padding:((l=d().flowchart)==null?void 0:l.padding)??((r=d().class)==null?void 0:r.padding)};t.setNode(a.id,o),I(a.classes,t,p,n,a.id),c.info("setNode",o)})},I=function(i,t,p,n,e){const s=Object.keys(i);c.info("keys:",s),c.info(i),s.filter(l=>i[l].parent==e).forEach(function(l){var r,a;const o=i[l],g=o.cssClasses.join(" "),b=N(o.styles),h=o.label??o.id,y=0,u="class_box",f={labelStyle:b.labelStyle,shape:u,labelText:k(h),classData:o,rx:y,ry:y,class:g,style:b.style,id:o.id,domId:o.domId,tooltip:n.db.getTooltip(o.id,e)||"",haveCallback:o.haveCallback,link:o.link,width:o.type==="group"?500:void 0,type:o.type,padding:((r=d().flowchart)==null?void 0:r.padding)??((a=d().class)==null?void 0:a.padding)};t.setNode(o.id,f),e&&t.setParent(o.id,e),c.info("setNode",f)})},P=function(i,t,p,n){c.info(i),i.forEach(function(e,s){var l,r;const a=e,o="",g={labelStyle:"",style:""},b=a.text,h=0,y="note",u={labelStyle:g.labelStyle,shape:y,labelText:k(b),noteData:a,rx:h,ry:h,class:o,style:g.style,id:a.id,domId:a.id,tooltip:"",type:"note",padding:((l=d().flowchart)==null?void 0:l.padding)??((r=d().class)==null?void 0:r.padding)};if(t.setNode(a.id,u),c.info("setNode",u),!a.class||!(a.class in n))return;const f=p+s,v={id:`edgeNote${f}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:M(T.curve,A)};t.setEdge(a.id,a.class,v,f)})},H=function(i,t){const p=d().flowchart;let n=0;i.forEach(function(e){var s;n++;const l={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:`id_${e.id1}_${e.id2}_${n}`,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:E(e.relation.type1),arrowTypeEnd:E(e.relation.type2),style:"fill:none",labelStyle:"",curve:M(p==null?void 0:p.curve,A)};if(c.info(l,e),e.style!==void 0){const r=N(e.style);l.style=r.style,l.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((s=d().flowchart)==null?void 0:s.htmlLabels)??d().htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+e.text+"</span>"):(l.labelType="text",l.label=e.text.replace(C.lineBreakRegex,`
`),e.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,l,n)})},K=function(i){T={...T,...i}},O=async function(i,t,p,n){c.info("Drawing class - ",t);const e=d().flowchart??d().class,s=d().securityLevel;c.info("config:",e);const l=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,a=new j({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:l,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),o=n.db.getNamespaces(),g=n.db.getClasses(),b=n.db.getRelations(),h=n.db.getNotes();c.info(b),J(o,a,t,n),I(g,a,t,n),H(b,a),P(h,a,b.length+1,g);let y;s==="sandbox"&&(y=x("#i"+t));const u=s==="sandbox"?x(y.nodes()[0].contentDocument.body):x("body"),f=u.select(`[id="${t}"]`),v=u.select("#"+t+" g");if(await F(v,a,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),$.insertTitle(f,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,n.db.getDiagramTitle()),B(a,f,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const S=s==="sandbox"?y.nodes()[0].contentDocument:document,_=S.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const w of _){const L=w.getBBox(),m=S.createElementNS("http://www.w3.org/2000/svg","rect");m.setAttribute("rx",0),m.setAttribute("ry",0),m.setAttribute("width",L.width),m.setAttribute("height",L.height),w.insertBefore(m,w.firstChild)}}};function E(i){let t;switch(i){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const W={setConf:K,draw:O},ie={parser:z,db:D,renderer:W,styles:R,init:i=>{i.class||(i.class={}),i.class.arrowMarkerAbsolute=i.arrowMarkerAbsolute,D.clear()}};export{ie as diagram};
