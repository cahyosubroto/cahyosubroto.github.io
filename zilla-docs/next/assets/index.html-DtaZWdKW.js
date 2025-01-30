import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as i,d as e,e as k,f as t,r as p,o as h,b as r}from"./app-CKeM1Wjf.js";const d={};function c(g,s){const a=p("RouteLink");return h(),l("div",null,[s[1]||(s[1]=i("h1",{id:"grpc-kafka-binding",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#grpc-kafka-binding"},[i("span",null,"grpc-kafka Binding")])],-1)),s[2]||(s[2]=i("p",null,"Zilla runtime grpc-kafka binding.",-1)),s[3]||(s[3]=i("h2",{id:"proxy",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#proxy"},[i("span",null,"proxy")])],-1)),i("blockquote",null,[i("p",null,[e(a,{to:"/reference/config/bindings/grpc-kafka/proxy.html"},{default:k(()=>s[0]||(s[0]=[r("Full Config")])),_:1})])]),s[4]||(s[4]=t(`<p>Behave as an <code>grpc-kafka</code> <code>proxy</code>.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">grpc_kafka_proxy</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">grpc-kafka</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  kind</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">proxy</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    idempotency</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      metadata</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">idempotency-key</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    reliability</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      field</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">32767</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      metadata</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">last-message-id</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    correlation</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      headers</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        service</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla:service</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        method</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla:method</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        correlation-id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla:correlation-id</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        reply-to</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla:reply-to</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  routes</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">when</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">method</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">example.FanoutService/*</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          metadata</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            custom-text</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">custom value</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            custom-binary</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">              base64</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">Y3VzdG9tIHZhbHVl</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      exit</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">kafka_cache_client</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      with</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        capability</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">fetch</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        topic</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">messages</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        filters</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          key</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">custom-key</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          headers</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            custom-text</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">custom-value</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">when</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">method</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">example.EchoService/*</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          metadata</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            custom-text</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">custom value</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            custom-binary</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">              base64</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">Y3VzdG9tIHZhbHVl</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      exit</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">kafka_cache_client</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      with</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        capability</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">produce</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        topic</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">requests</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        acks</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">leader_only</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        key</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">custom-key</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        overrides</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          custom-text</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">custom-value</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        reply-to</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">responses</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const o=n(d,[["render",c],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/reference/config/bindings/grpc-kafka/","title":"grpc-kafka Binding","lang":"en-US","frontmatter":{"redirectFrom":"/reference/config/bindings/binding-grpc-kafka.html","dir":{"collapsible":false,"link":true},"shortTitle":"grpc-kafka","category":["Binding"],"tag":["grpc-kafka","proxy"],"description":"grpc-kafka Binding Zilla runtime grpc-kafka binding. proxy Behave as an grpc-kafka proxy.","gitInclude":[".partials/proxy.yaml"],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/reference/config/bindings/grpc-kafka/"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"grpc-kafka Binding"}],["meta",{"property":"og:description","content":"grpc-kafka Binding Zilla runtime grpc-kafka binding. proxy Behave as an grpc-kafka proxy."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"grpc-kafka"}],["meta",{"property":"article:tag","content":"proxy"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"grpc-kafka Binding\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"proxy","slug":"proxy","link":"#proxy","children":[]}],"readingTime":{"minutes":0.14,"words":41},"filePathRelative":"reference/config/bindings/grpc-kafka/README.md","autoDesc":true}');export{o as comp,m as data};
