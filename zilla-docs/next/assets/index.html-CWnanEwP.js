import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as t,o as e}from"./app-CKeM1Wjf.js";const l={};function h(n,i){return e(),a("div",null,i[0]||(i[0]=[t('<h1 id="quickstart" tabindex="-1"><a class="header-anchor" href="#quickstart"><span>quickstart</span></a></h1><p>Follow the <a href="https://docs.aklivity.io/zilla/latest/how-tos/quickstart/" target="_blank" rel="noopener noreferrer">Zilla Quickstart</a> to discover some of what Zilla can do!</p><h2 id="running-locally" tabindex="-1"><a class="header-anchor" href="#running-locally"><span>Running locally</span></a></h2><p>This quickstart runs using Docker compose.</p><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup"><span>Setup</span></a></h3><p>The <code>setup.sh</code> script will:</p><ul><li><p>Configured Zilla instance with REST, SSE, gRPC, MQTT protocols configured</p></li><li><p>Create Kafka topics</p></li><li><p>Start a gRPC Route Guide server</p></li><li><p>Start a MQTT message simulator</p></li><li><p>Setup with a bitnami Kafka cluster</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">./setup.sh</span></span></code></pre></div></li><li><p>Setup with a Redpanda cluster</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">KAFKA_VENDOR_PROFILE</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">redpanda</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> ./setup.sh</span></span></code></pre></div></li><li><p>alternatively with the plain docker compose command respectively</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">docker</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> compose</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --profile</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> kafka</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --profile</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> init-kafka</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> up</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -d</span></span></code></pre></div><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">KAFKA_VENDOR_PROFILE</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">redpanda</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> docker</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> compose</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --profile</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> redpanda</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --profile</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> init-redpanda</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> up</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -d</span></span></code></pre></div></li></ul><h3 id="using-this-quickstart" tabindex="-1"><a class="header-anchor" href="#using-this-quickstart"><span>Using this quickstart</span></a></h3><p>You can interact with this quickstart using our <a href="https://www.postman.com/aklivity-zilla/workspace/aklivity-zilla-quickstart/overview" target="_blank" rel="noopener noreferrer">Postman collection</a></p><h3 id="generating-combined-zilla-yaml" tabindex="-1"><a class="header-anchor" href="#generating-combined-zilla-yaml"><span>Generating combined zilla.yaml</span></a></h3><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">yq</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &#39;.&#39;</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> *</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">-zilla.yaml</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &gt; </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">zilla.yaml</span></span></code></pre></div><h3 id="teardown" tabindex="-1"><a class="header-anchor" href="#teardown"><span>Teardown</span></a></h3><p>The <code>teardown.sh</code> script will remove any resources created.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">./teardown.sh</span></span></code></pre></div>',14)]))}const k=s(l,[["render",h],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/cookbooks/quickstart/","title":"quickstart","lang":"en-US","frontmatter":{"description":"quickstart Follow the Zilla Quickstart to discover some of what Zilla can do! Running locally This quickstart runs using Docker compose. Setup The setup.sh script will: Configur...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/cookbooks/quickstart/"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"quickstart"}],["meta",{"property":"og:description","content":"quickstart Follow the Zilla Quickstart to discover some of what Zilla can do! Running locally This quickstart runs using Docker compose. Setup The setup.sh script will: Configur..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"quickstart\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Running locally","slug":"running-locally","link":"#running-locally","children":[{"level":3,"title":"Setup","slug":"setup","link":"#setup","children":[]},{"level":3,"title":"Using this quickstart","slug":"using-this-quickstart","link":"#using-this-quickstart","children":[]},{"level":3,"title":"Generating combined zilla.yaml","slug":"generating-combined-zilla-yaml","link":"#generating-combined-zilla-yaml","children":[]},{"level":3,"title":"Teardown","slug":"teardown","link":"#teardown","children":[]}]}],"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"cookbooks/quickstart/README.md","autoDesc":true}');export{k as comp,o as data};
