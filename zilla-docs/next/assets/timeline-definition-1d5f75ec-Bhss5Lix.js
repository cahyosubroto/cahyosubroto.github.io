import{b4 as yt,g as gt,J as ft,L as w,T as V,F as mt,b5 as xt,b6 as bt,b7 as _t}from"./mermaid.esm.min-B2AR_BVY.js";import{v as J}from"./arc-93b112c4-DNIlS5Bj.js";import"./app-CKeM1Wjf.js";import"./path-428ebac9-B0oSrkCJ.js";var X=function(){var n=function(m,i,a,l){for(a=a||{},l=m.length;l--;a[m[l]]=i);return a},t=[6,8,10,11,12,14,16,17,20,21],e=[1,9],s=[1,10],r=[1,11],h=[1,12],c=[1,13],u=[1,16],y=[1,17],g={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:function(m,i,a,l,d,o,x){var b=o.length-1;switch(d){case 1:return o[b-1];case 2:this.$=[];break;case 3:o[b-1].push(o[b]),this.$=o[b-1];break;case 4:case 5:this.$=o[b];break;case 6:case 7:this.$=[];break;case 8:l.getCommonDb().setDiagramTitle(o[b].substr(6)),this.$=o[b].substr(6);break;case 9:this.$=o[b].trim(),l.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=o[b].trim(),l.getCommonDb().setAccDescription(this.$);break;case 12:l.addSection(o[b].substr(8)),this.$=o[b].substr(8);break;case 15:l.addTask(o[b],0,""),this.$=o[b];break;case 16:l.addEvent(o[b].substr(2)),this.$=o[b];break}},table:[{3:1,4:[1,2]},{1:[3]},n(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:e,12:s,14:r,16:h,17:c,18:14,19:15,20:u,21:y},n(t,[2,7],{1:[2,1]}),n(t,[2,3]),{9:18,11:e,12:s,14:r,16:h,17:c,18:14,19:15,20:u,21:y},n(t,[2,5]),n(t,[2,6]),n(t,[2,8]),{13:[1,19]},{15:[1,20]},n(t,[2,11]),n(t,[2,12]),n(t,[2,13]),n(t,[2,14]),n(t,[2,15]),n(t,[2,16]),n(t,[2,4]),n(t,[2,9]),n(t,[2,10])],defaultActions:{},parseError:function(m,i){if(i.recoverable)this.trace(m);else{var a=new Error(m);throw a.hash=i,a}},parse:function(m){var i=this,a=[0],l=[],d=[null],o=[],x=this.table,b="",S=0,F=0,H=2,A=1,R=o.slice.call(arguments,1),f=Object.create(this.lexer),_={yy:{}};for(var I in this.yy)Object.prototype.hasOwnProperty.call(this.yy,I)&&(_.yy[I]=this.yy[I]);f.setInput(m,_.yy),_.yy.lexer=f,_.yy.parser=this,typeof f.yylloc>"u"&&(f.yylloc={});var M=f.yylloc;o.push(M);var O=f.options&&f.options.ranges;typeof _.yy.parseError=="function"?this.parseError=_.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function C(){var E;return E=l.pop()||f.lex()||A,typeof E!="number"&&(E instanceof Array&&(l=E,E=l.pop()),E=i.symbols_[E]||E),E}for(var v,N,$,q,L={},W,T,Y,z;;){if(N=a[a.length-1],this.defaultActions[N]?$=this.defaultActions[N]:((v===null||typeof v>"u")&&(v=C()),$=x[N]&&x[N][v]),typeof $>"u"||!$.length||!$[0]){var G="";z=[];for(W in x[N])this.terminals_[W]&&W>H&&z.push("'"+this.terminals_[W]+"'");f.showPosition?G="Parse error on line "+(S+1)+`:
`+f.showPosition()+`
Expecting `+z.join(", ")+", got '"+(this.terminals_[v]||v)+"'":G="Parse error on line "+(S+1)+": Unexpected "+(v==A?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(G,{text:f.match,token:this.terminals_[v]||v,line:f.yylineno,loc:M,expected:z})}if($[0]instanceof Array&&$.length>1)throw new Error("Parse Error: multiple actions possible at state: "+N+", token: "+v);switch($[0]){case 1:a.push(v),d.push(f.yytext),o.push(f.yylloc),a.push($[1]),v=null,F=f.yyleng,b=f.yytext,S=f.yylineno,M=f.yylloc;break;case 2:if(T=this.productions_[$[1]][1],L.$=d[d.length-T],L._$={first_line:o[o.length-(T||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(T||1)].first_column,last_column:o[o.length-1].last_column},O&&(L._$.range=[o[o.length-(T||1)].range[0],o[o.length-1].range[1]]),q=this.performAction.apply(L,[b,F,S,_.yy,$[1],d,o].concat(R)),typeof q<"u")return q;T&&(a=a.slice(0,-1*T*2),d=d.slice(0,-1*T),o=o.slice(0,-1*T)),a.push(this.productions_[$[1]][0]),d.push(L.$),o.push(L._$),Y=x[a[a.length-2]][a[a.length-1]],a.push(Y);break;case 3:return!0}}return!0}},p=function(){var m={EOF:1,parseError:function(i,a){if(this.yy.parser)this.yy.parser.parseError(i,a);else throw new Error(i)},setInput:function(i,a){return this.yy=a||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var a=i.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var a=i.length,l=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===d.length?this.yylloc.first_column:0)+d[d.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),a=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+a+"^"},test_match:function(i,a){var l,d,o;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(o.yylloc.range=this.yylloc.range.slice(0))),d=i[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],l=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var x in o)this[x]=o[x];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,a,l,d;this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),x=0;x<o.length;x++)if(l=this._input.match(this.rules[o[x]]),l&&(!a||l[0].length>a[0].length)){if(a=l,d=x,this.options.backtrack_lexer){if(i=this.test_match(l,o[x]),i!==!1)return i;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(i=this.test_match(a,o[d]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,a,l,d){switch(l){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}};return m}();g.lexer=p;function k(){this.yy={}}return k.prototype=g,g.Parser=k,new k}();X.parser=X;const kt=X;let j="",nt=0;const K=[],B=[],D=[],it=()=>yt,rt=function(){K.length=0,B.length=0,j="",D.length=0,gt()},st=function(n){j=n,K.push(n)},at=function(){return K},ot=function(){let n=Z();const t=100;let e=0;for(;!n&&e<t;)n=Z(),e++;return B.push(...D),B},ct=function(n,t,e){const s={id:nt++,section:j,type:j,task:n,score:t||0,events:e?[e]:[]};D.push(s)},lt=function(n){D.find(t=>t.id===nt-1).events.push(n)},ht=function(n){const t={section:j,type:j,description:n,task:n,classes:[]};B.push(t)},Z=function(){const n=function(e){return D[e].processed};let t=!0;for(const[e,s]of D.entries())n(e),t=t&&s.processed;return t},vt={clear:rt,getCommonDb:it,addSection:st,getSections:at,getTasks:ot,addTask:ct,addTaskOrg:ht,addEvent:lt},wt=Object.freeze(Object.defineProperty({__proto__:null,addEvent:lt,addSection:st,addTask:ct,addTaskOrg:ht,clear:rt,default:vt,getCommonDb:it,getSections:at,getTasks:ot},Symbol.toStringTag,{value:"Module"})),St=12,U=function(n,t){const e=n.append("rect");return e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),e.attr("rx",t.rx),e.attr("ry",t.ry),t.class!==void 0&&e.attr("class",t.class),e},$t=function(n,t){const e=n.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),s=n.append("g");s.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),s.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function r(u){const y=J().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);u.append("path").attr("class","mouth").attr("d",y).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function h(u){const y=J().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);u.append("path").attr("class","mouth").attr("d",y).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function c(u){u.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return t.score>3?r(s):t.score<3?h(s):c(s),e},It=function(n,t){const e=n.append("circle");return e.attr("cx",t.cx),e.attr("cy",t.cy),e.attr("class","actor-"+t.pos),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("r",t.r),e.class!==void 0&&e.attr("class",e.class),t.title!==void 0&&e.append("title").text(t.title),e},dt=function(n,t){const e=t.text.replace(/<br\s*\/?>/gi," "),s=n.append("text");s.attr("x",t.x),s.attr("y",t.y),s.attr("class","legend"),s.style("text-anchor",t.anchor),t.class!==void 0&&s.attr("class",t.class);const r=s.append("tspan");return r.attr("x",t.x+t.textMargin*2),r.text(e),s},Mt=function(n,t){function e(r,h,c,u,y){return r+","+h+" "+(r+c)+","+h+" "+(r+c)+","+(h+u-y)+" "+(r+c-y*1.2)+","+(h+u)+" "+r+","+(h+u)}const s=n.append("polygon");s.attr("points",e(t.x,t.y,50,20,7)),s.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,dt(n,t)},Tt=function(n,t,e){const s=n.append("g"),r=Q();r.x=t.x,r.y=t.y,r.fill=t.fill,r.width=e.width,r.height=e.height,r.class="journey-section section-type-"+t.num,r.rx=3,r.ry=3,U(s,r),ut(e)(t.text,s,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+t.num},e,t.colour)};let tt=-1;const Et=function(n,t,e){const s=t.x+e.width/2,r=n.append("g");tt++;const h=300+5*30;r.append("line").attr("id","task"+tt).attr("x1",s).attr("y1",t.y).attr("x2",s).attr("y2",h).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),$t(r,{cx:s,cy:300+(5-t.score)*30,score:t.score});const c=Q();c.x=t.x,c.y=t.y,c.fill=t.fill,c.width=e.width,c.height=e.height,c.class="task task-type-"+t.num,c.rx=3,c.ry=3,U(r,c),t.x+14,ut(e)(t.task,r,c.x,c.y,c.width,c.height,{class:"task"},e,t.colour)},At=function(n,t){U(n,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},Ct=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},Q=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},ut=function(){function n(r,h,c,u,y,g,p,k){const m=h.append("text").attr("x",c+y/2).attr("y",u+g/2+5).style("font-color",k).style("text-anchor","middle").text(r);s(m,p)}function t(r,h,c,u,y,g,p,k,m){const{taskFontSize:i,taskFontFamily:a}=k,l=r.split(/<br\s*\/?>/gi);for(let d=0;d<l.length;d++){const o=d*i-i*(l.length-1)/2,x=h.append("text").attr("x",c+y/2).attr("y",u).attr("fill",m).style("text-anchor","middle").style("font-size",i).style("font-family",a);x.append("tspan").attr("x",c+y/2).attr("dy",o).text(l[d]),x.attr("y",u+g/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),s(x,p)}}function e(r,h,c,u,y,g,p,k){const m=h.append("switch"),i=m.append("foreignObject").attr("x",c).attr("y",u).attr("width",y).attr("height",g).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");i.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(r),t(r,m,c,u,y,g,p,k),s(i,p)}function s(r,h){for(const c in h)c in h&&r.attr(c,h[c])}return function(r){return r.textPlacement==="fo"?e:r.textPlacement==="old"?n:t}}(),Nt=function(n){n.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")};function pt(n,t){n.each(function(){var e=V(this),s=e.text().split(/(\s+|<br>)/).reverse(),r,h=[],c=1.1,u=e.attr("y"),y=parseFloat(e.attr("dy")),g=e.text(null).append("tspan").attr("x",0).attr("y",u).attr("dy",y+"em");for(let p=0;p<s.length;p++)r=s[s.length-1-p],h.push(r),g.text(h.join(" ").trim()),(g.node().getComputedTextLength()>t||r==="<br>")&&(h.pop(),g.text(h.join(" ").trim()),r==="<br>"?h=[""]:h=[r],g=e.append("tspan").attr("x",0).attr("y",u).attr("dy",c+"em").text(r))})}const Pt=function(n,t,e,s){const r=e%St-1,h=n.append("g");t.section=r,h.attr("class",(t.class?t.class+" ":"")+"timeline-node "+("section-"+r));const c=h.append("g"),u=h.append("g"),y=u.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(pt,t.width).node().getBBox(),g=s.fontSize&&s.fontSize.replace?s.fontSize.replace("px",""):s.fontSize;return t.height=y.height+g*1.1*.5+t.padding,t.height=Math.max(t.height,t.maxHeight),t.width=t.width+2*t.padding,u.attr("transform","translate("+t.width/2+", "+t.padding/2+")"),Ot(c,t,r),t},Ht=function(n,t,e){const s=n.append("g"),r=s.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(pt,t.width).node().getBBox(),h=e.fontSize&&e.fontSize.replace?e.fontSize.replace("px",""):e.fontSize;return s.remove(),r.height+h*1.1*.5+t.padding},Ot=function(n,t,e){n.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),n.append("line").attr("class","node-line-"+e).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},P={drawRect:U,drawCircle:It,drawSection:Tt,drawText:dt,drawLabel:Mt,drawTask:Et,drawBackgroundRect:At,getTextObj:Ct,getNoteRect:Q,initGraphics:Nt,drawNode:Pt,getVirtualNodeHeight:Ht},Lt=function(n,t,e,s){var r,h;const c=ft(),u=c.leftMargin??50;w.debug("timeline",s.db);const y=c.securityLevel;let g;y==="sandbox"&&(g=V("#i"+t));const p=(y==="sandbox"?V(g.nodes()[0].contentDocument.body):V("body")).select("#"+t);p.append("g");const k=s.db.getTasks(),m=s.db.getCommonDb().getDiagramTitle();w.debug("task",k),P.initGraphics(p);const i=s.db.getSections();w.debug("sections",i);let a=0,l=0,d=0,o=0,x=50+u,b=50;o=50;let S=0,F=!0;i.forEach(function(f){const _={number:S,descr:f,section:S,width:150,padding:20,maxHeight:a},I=P.getVirtualNodeHeight(p,_,c);w.debug("sectionHeight before draw",I),a=Math.max(a,I+20)});let H=0,A=0;w.debug("tasks.length",k.length);for(const[f,_]of k.entries()){const I={number:f,descr:_,section:_.section,width:150,padding:20,maxHeight:l},M=P.getVirtualNodeHeight(p,I,c);w.debug("taskHeight before draw",M),l=Math.max(l,M+20),H=Math.max(H,_.events.length);let O=0;for(let C=0;C<_.events.length;C++){const v={descr:_.events[C],section:_.section,number:_.section,width:150,padding:20,maxHeight:50};O+=P.getVirtualNodeHeight(p,v,c)}A=Math.max(A,O)}w.debug("maxSectionHeight before draw",a),w.debug("maxTaskHeight before draw",l),i&&i.length>0?i.forEach(f=>{const _=k.filter(C=>C.section===f),I={number:S,descr:f,section:S,width:200*Math.max(_.length,1)-50,padding:20,maxHeight:a};w.debug("sectionNode",I);const M=p.append("g"),O=P.drawNode(M,I,S,c);w.debug("sectionNode output",O),M.attr("transform",`translate(${x}, ${o})`),b+=a+50,_.length>0&&et(p,_,S,x,b,l,c,H,A,a,!1),x+=200*Math.max(_.length,1),b=o,S++}):(F=!1,et(p,k,S,x,b,l,c,H,A,a,!0));const R=p.node().getBBox();w.debug("bounds",R),m&&p.append("text").text(m).attr("x",R.width/2-u).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),d=F?a+l+150:l+100,p.append("g").attr("class","lineWrapper").append("line").attr("x1",u).attr("y1",d).attr("x2",R.width+3*u).attr("y2",d).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),mt(void 0,p,((r=c.timeline)==null?void 0:r.padding)??50,((h=c.timeline)==null?void 0:h.useMaxWidth)??!1)},et=function(n,t,e,s,r,h,c,u,y,g,p){var k;for(const m of t){const i={descr:m.task,section:e,number:e,width:150,padding:20,maxHeight:h};w.debug("taskNode",i);const a=n.append("g").attr("class","taskWrapper"),l=P.drawNode(a,i,e,c).height;if(w.debug("taskHeight after draw",l),a.attr("transform",`translate(${s}, ${r})`),h=Math.max(h,l),m.events){const d=n.append("g").attr("class","lineWrapper");let o=h;r+=100,o=o+jt(n,m.events,e,s,r,c),r-=100,d.append("line").attr("x1",s+190/2).attr("y1",r+h).attr("x2",s+190/2).attr("y2",r+h+(p?h:g)+y+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s=s+200,p&&!((k=c.timeline)!=null&&k.disableMulticolor)&&e++}r=r-10},jt=function(n,t,e,s,r,h){let c=0;const u=r;r=r+100;for(const y of t){const g={descr:y,section:e,number:e,width:150,padding:20,maxHeight:50};w.debug("eventNode",g);const p=n.append("g").attr("class","eventWrapper"),k=P.drawNode(p,g,e,h).height;c=c+k,p.attr("transform",`translate(${s}, ${r})`),r=r+10+k}return r=u,c},Dt={setConf:()=>{},draw:Lt},Ft=n=>{let t="";for(let e=0;e<n.THEME_COLOR_LIMIT;e++)n["lineColor"+e]=n["lineColor"+e]||n["cScaleInv"+e],xt(n["lineColor"+e])?n["lineColor"+e]=bt(n["lineColor"+e],20):n["lineColor"+e]=_t(n["lineColor"+e],20);for(let e=0;e<n.THEME_COLOR_LIMIT;e++){const s=""+(17-3*e);t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${n["cScale"+e]};
    }
    .section-${e-1} text {
     fill: ${n["cScaleLabel"+e]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${n["cScaleLabel"+e]};
    }
    .section-edge-${e-1}{
      stroke: ${n["cScale"+e]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${s};
    }
    .section-${e-1} line {
      stroke: ${n["cScaleInv"+e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel"+e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},Rt=n=>`
  .edge {
    stroke-width: 3;
  }
  ${Ft(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`,Wt=Rt,qt={db:wt,renderer:Dt,parser:kt,styles:Wt};export{qt as diagram};
