import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as i,b as n,d as l,e as r,f as p,r as d,o as h}from"./app-CKeM1Wjf.js";const o={};function k(c,s){const e=d("RouteLink");return h(),t("div",null,[s[9]||(s[9]=i("h1",{id:"guards",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#guards"},[i("span",null,"Guards")])],-1)),i("p",null,[s[1]||(s[1]=n("Each configured ")),l(e,{to:"/reference/config/overview.html#guards"},{default:r(()=>s[0]||(s[0]=[i("code",null,"guard",-1)])),_:1}),s[2]||(s[2]=n(" represents a security checkpoint for one or more bindings based on a specific implementation ")),s[3]||(s[3]=i("code",null,"type",-1)),s[4]||(s[4]=n(". Guards can be used by specific protocol bindings to enforce authorization requirements. Associated roles can be enforced during routing by only following routes ")),s[5]||(s[5]=i("code",null,"guarded",-1)),s[6]||(s[6]=n(" by specific role requirements when authorized. This implicitly supports falling through to lower privilege routes when ")),s[7]||(s[7]=i("code",null,"guarded",-1)),s[8]||(s[8]=n(" higher privilege routes are not authorized."))]),s[10]||(s[10]=p(`<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">---</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla-namespace</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">guards</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  authn_jwt</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">jwt</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      issuer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">https://auth.example.com</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      audience</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">https://api.example.com</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      keys</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">kty</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">RSA</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">          n</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">...</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          e</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">...</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          alg</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">RS256</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          kid</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">example</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=a(o,[["render",k],["__file","guards.html.vue"]]),y=JSON.parse('{"path":"/concepts/guards.html","title":"Guards","lang":"en-US","frontmatter":{"description":"Guards Each configured represents a security checkpoint for one or more bindings based on a specific implementation type. Guards can be used by specific protocol bindings to enf...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/concepts/guards.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"Guards"}],["meta",{"property":"og:description","content":"Guards Each configured represents a security checkpoint for one or more bindings based on a specific implementation type. Guards can be used by specific protocol bindings to enf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Guards\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.32,"words":95},"filePathRelative":"concepts/guards.md","autoDesc":true}');export{m as comp,y as data};
