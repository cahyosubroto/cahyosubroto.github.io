import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,f as a,a as i,d as e,e as l,r as k,o as d,b as t}from"./app-CKeM1Wjf.js";const r={};function c(D,s){const n=k("RouteLink");return d(),h("div",null,[s[3]||(s[3]=a('<h1 id="asyncapi-binding" tabindex="-1"><a class="header-anchor" href="#asyncapi-binding"><span>asyncapi Binding</span></a></h1><p>Defines a binding with <code>asyncapi</code> spec, with <code>server</code> or <code>proxy</code> or <code>client</code> behavior.</p><h2 id="client" tabindex="-1"><a class="header-anchor" href="#client"><span>client</span></a></h2>',3)),i("blockquote",null,[i("p",null,[e(n,{to:"/reference/config/bindings/asyncapi/client.html"},{default:l(()=>s[0]||(s[0]=[t("Full config")])),_:1})])]),s[4]||(s[4]=a(`<p>The <code>client</code> kind <code>asyncapi</code> binding creates composite of <code>kafka</code> or <code>mqtt</code> or <code>http</code>, and <code>tls</code>, <code>tcp</code> bindings with client kind and adapts AsyncAPI streams to Kafka/MQTT/HTTP streams.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">asyncapi_client</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">asyncapi</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  kind</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">client</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    specs</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      my-kafka-api-spec</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          my_catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            subject</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">petstore</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            version</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">latest</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    tcp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      host</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">localhost</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      port</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        - </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">9092</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy"><span>proxy</span></a></h2>`,3)),i("blockquote",null,[i("p",null,[e(n,{to:"/reference/config/bindings/asyncapi/proxy.html"},{default:l(()=>s[1]||(s[1]=[t("Full config")])),_:1})])]),s[5]||(s[5]=a(`<p>The <code>proxy</code> kind <code>asyncapi</code> binding creates composite of <code>mqtt-kafka</code> binding with proxy kind mapping MQTT streams to Kafka streams.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">asyncapi_proxy</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">asyncapi</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  kind</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">proxy</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    specs</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      my-mqtt-api-spec</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          my_catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            subject</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">mqtt-streetlights</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            version</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">latest</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      my-kafka-api-spec</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          my_catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            subject</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">kafka-streetlights</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            version</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">latest</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    mqtt-kafka</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      channels</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        sessions</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">mqttSessions</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        retained</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">mqttRetained</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        messages</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">mqttMessages</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  routes</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">when</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">api-id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">my-mqtt-api-spec</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          operation-id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">sendEvents</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      exit</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">asyncapi_client</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      with</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        api-id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">my-kafka-api-spec</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        operation-id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">toSensorData</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">when</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">api-id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">my-mqtt-api-spec</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          operation-id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">receiveEvents</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      exit</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">asyncapi_client</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      with</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        api-id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">my-kafka-api-spec</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        operation-id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">onSensorData</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server" tabindex="-1"><a class="header-anchor" href="#server"><span>server</span></a></h2>`,3)),i("blockquote",null,[i("p",null,[e(n,{to:"/reference/config/bindings/asyncapi/server.html"},{default:l(()=>s[2]||(s[2]=[t("Full config")])),_:1})])]),s[6]||(s[6]=a(`<p>The <code>server</code> kind <code>asyncapi</code> binding creates composite of <code>tcp</code>, <code>tls</code>, and <code>mqtt</code> or <code>http</code> bindings with server kind and adapts MQTT/HTTP streams to AsyncAPI streams.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">mqtt_asyncapi_server</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">asyncapi</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  kind</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">server</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    specs</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      my-mqtt-api-spec</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          my_catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            subject</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">mqtt-streetlights</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">            version</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">latest</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  exit</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">south_kafka_proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const o=p(r,[["render",c],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/reference/config/bindings/asyncapi/","title":"asyncapi Binding","lang":"en-US","frontmatter":{"redirectFrom":"/reference/config/bindings/binding-asyncapi.html","dir":{"collapsible":false,"link":true},"shortTitle":"asyncapi","category":["Binding"],"tag":["asyncapi","client","proxy","server"],"description":"asyncapi Binding Defines a binding with asyncapi spec, with server or proxy or client behavior. client The client kind asyncapi binding creates composite of kafka or mqtt or htt...","gitInclude":[".partials/client.yaml",".partials/proxy.yaml",".partials/server.yaml"],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/reference/config/bindings/asyncapi/"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"asyncapi Binding"}],["meta",{"property":"og:description","content":"asyncapi Binding Defines a binding with asyncapi spec, with server or proxy or client behavior. client The client kind asyncapi binding creates composite of kafka or mqtt or htt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"asyncapi"}],["meta",{"property":"article:tag","content":"client"}],["meta",{"property":"article:tag","content":"proxy"}],["meta",{"property":"article:tag","content":"server"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"asyncapi Binding\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"client","slug":"client","link":"#client","children":[]},{"level":2,"title":"proxy","slug":"proxy","link":"#proxy","children":[]},{"level":2,"title":"server","slug":"server","link":"#server","children":[]}],"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"reference/config/bindings/asyncapi/README.md","autoDesc":true}');export{o as comp,v as data};
