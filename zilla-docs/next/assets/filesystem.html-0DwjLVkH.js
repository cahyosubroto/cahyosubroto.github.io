import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,f as d,d as h,e as l,r as p,o as c,b as s,a as e}from"./app-CpLUooG5.js";const u={};function m(k,i){const a=p("Tabs");return c(),o("div",null,[i[4]||(i[4]=d(`<h1 id="filesystem" tabindex="-1"><a class="header-anchor" href="#filesystem"><span>Filesystem</span></a></h1><h2 id="server-binding" tabindex="-1"><a class="header-anchor" href="#server-binding"><span>Server Binding</span></a></h2><p>The filesystem <code>server</code> binding provides access to files and directories on the local filesystem, optionally following symbolic links. It behaves as a web server when combined with <code>tcp,</code> <code>tls</code>, <code>http</code> and <code>http-filesystem</code> bindings.</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">filesystem_server</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">filesystem</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  kind</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">server</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    location</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">web/</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    simlinks</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">follow</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuration-required" tabindex="-1"><a class="header-anchor" href="#configuration-required"><span>Configuration (* required)</span></a></h3>`,6)),h(a,{id:"16",data:[{id:"options"},{id:"telemetry"}]},{title0:l(({value:t,isActive:n})=>i[0]||(i[0]=[s("options")])),title1:l(({value:t,isActive:n})=>i[1]||(i[1]=[s("telemetry")])),tab0:l(({value:t,isActive:n})=>i[2]||(i[2]=[e("h3",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options"},[e("span",null,"options")])],-1),e("blockquote",null,[e("p",null,[e("code",null,"object")])],-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Property"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default Value")])]),e("tbody",null,[e("tr",null,[e("td",null,"location"),e("td",null,[e("code",null,"string")]),e("td",null,"File system URI or directory name with trailing slash."),e("td")]),e("tr",null,[e("td",null,"symlinks"),e("td",null,[e("code",null,"enum"),s(" [ "),e("code",null,"follow"),s(", "),e("code",null,"ignore"),s(" ]")]),e("td",null,"How to treat symbolic links."),e("td",null,[e("code",null,"ignore")])])])],-1)])),tab1:l(({value:t,isActive:n})=>i[3]||(i[3]=[e("h3",{id:"telemetry",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#telemetry"},[e("span",null,"telemetry")])],-1),e("blockquote",null,[e("p",null,[e("code",null,"object")])],-1),e("p",null,"Defines the desired telemetry for the binding.",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Property"),e("th",null,"Type"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"metrics"),e("td",null,[e("code",null,"string[]")]),e("td",null,"Telemetry metrics to track.")])])],-1),e("h4",{id:"example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example"},[e("span",null,"Example")])],-1),e("div",{class:"language-yaml line-numbers-mode","data-highlighter":"shiki","data-ext":"yaml","data-title":"yaml",style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4","--shiki-light-bg":"#FFFFFF","--shiki-dark-bg":"#1E1E1E"}},[e("pre",{class:"shiki shiki-themes light-plus dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"telemetry"),e("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"  metrics"),e("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},"    - "),e("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"stream.*")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1})])}const v=r(u,[["render",m],["__file","filesystem.html.vue"]]),b=JSON.parse('{"path":"/concepts/protocol/filesystem/filesystem.html","title":"Filesystem","lang":"en-US","frontmatter":{"description":"Filesystem Server Binding The filesystem server binding provides access to files and directories on the local filesystem, optionally following symbolic links. It behaves as a we...","gitInclude":[".partials/server.yaml",".partials/options.md","../.partials/telemetry.md"],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/concepts/protocol/filesystem/filesystem.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"Filesystem"}],["meta",{"property":"og:description","content":"Filesystem Server Binding The filesystem server binding provides access to files and directories on the local filesystem, optionally following symbolic links. It behaves as a we..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Filesystem\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Server Binding","slug":"server-binding","link":"#server-binding","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Configuration (* required)","slug":"configuration-required","link":"#configuration-required","children":[]}]}],"readingTime":{"minutes":0.18,"words":53},"filePathRelative":"concepts/protocol/filesystem/filesystem.md","autoDesc":true}');export{v as comp,b as data};
