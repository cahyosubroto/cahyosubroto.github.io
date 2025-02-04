import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,f as a,o as t}from"./app-2pbKPq8C.js";const n={};function l(r,e){return t(),i("div",null,e[0]||(e[0]=[a(`<h1 id="kafka-cache-server" tabindex="-1"><a class="header-anchor" href="#kafka-cache-server"><span>kafka cache_server</span></a></h1><p>The kafka cache_server binding supports proactive <code>fetch</code> of messages to keep the cache fresh in preparation for new consumers. This is enabled by configuring a list of <code>bootstrap</code> topics for the binding.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">kafka_cache_server</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">kafka</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  kind</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">cache_server</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    bootstrap</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">      - </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">items-responses</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  exit</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">kafka_client</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration-required" tabindex="-1"><a class="header-anchor" href="#configuration-required"><span>Configuration (* required)</span></a></h2><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options</span></a></h3><blockquote><p><code>object</code></p></blockquote><p>The <code>cache_server</code> specific options.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  bootstrap</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">items-requests</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">items-responses</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  topics</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">items-requests</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      defaultOffset</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">live</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="options-bootstrap" tabindex="-1"><a class="header-anchor" href="#options-bootstrap"><span>options.bootstrap</span></a></h4><blockquote><p><code>array</code> of <code>string</code></p></blockquote><p>Topics to bootstrap in cache server even when no clients.</p><h4 id="options-topics" tabindex="-1"><a class="header-anchor" href="#options-topics"><span>options.topics</span></a></h4><blockquote><p><code>array</code> of <code>object</code></p></blockquote><p>Topic configuration.</p><p>File not found</p><h4 id="topics-defaultoffset" tabindex="-1"><a class="header-anchor" href="#topics-defaultoffset"><span>topics[].defaultOffset</span></a></h4><blockquote><p><code>enum</code> [ <code>live</code>, <code>historical</code> ]</p></blockquote><p>Fetch offset to use for new consumers</p><p>File not found</p><h3 id="routes" tabindex="-1"><a class="header-anchor" href="#routes"><span>routes*</span></a></h3><blockquote><p><code>array</code> of <code>object</code></p></blockquote><p>Conditional <code>kafka</code> specific routes.</p><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>routes[].guarded</td><td><code>object</code> as map of named <code>array</code> of <code>string</code></td><td>List of roles required by each named guard to authorize this route.</td></tr><tr><td>routes[].when</td><td><code>array</code> of <code>object</code></td><td>List of conditions (any match) to match this route. Read more: <a href="/concepts/protocol.html#when-a-route-matches" target="_blank" rel="noopener noreferrer">When a route matches</a></td></tr><tr><td>routes[].when[].topic</td><td><code>string</code></td><td>Topic name pattern.</td></tr><tr><td>routes[].exit</td><td><code>string</code></td><td>Next binding when following this route.</td></tr></tbody></table><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">routes</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">exit</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">echo_server</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    guarded</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      my_guard</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        - </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">read:items</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exit" tabindex="-1"><a class="header-anchor" href="#exit"><span>exit</span></a></h3><blockquote><p><code>string</code></p></blockquote><p>Default exit binding when no conditional routes are viable.</p><div class="language-yaml" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">exit</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">echo_server</span></span></code></pre></div><h3 id="telemetry" tabindex="-1"><a class="header-anchor" href="#telemetry"><span>telemetry</span></a></h3><blockquote><p><code>object</code></p></blockquote><p>Defines the desired telemetry for the binding.</p><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>metrics</td><td><code>string[]</code></td><td>Telemetry metrics to track.</td></tr></tbody></table><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">telemetry</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  metrics</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">stream.*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35)]))}const p=s(n,[["render",l],["__file","cache_server.html.vue"]]),d=JSON.parse('{"path":"/concepts/protocol/kafka/cache_server.html","title":"kafka cache_server","lang":"en-US","frontmatter":{"shortTitle":"cache_server","description":"kafka cache_server The kafka cache_server binding supports proactive fetch of messages to keep the cache fresh in preparation for new consumers. This is enabled by configuring a...","gitInclude":[".partials/cache_server.yaml","../.partials/options-kafka-topics.md","../.partials/options-kafka-topics-transforms.md",".partials/routes.md","../.partials/exit.md","../.partials/telemetry.md"],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/concepts/protocol/kafka/cache_server.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"kafka cache_server"}],["meta",{"property":"og:description","content":"kafka cache_server The kafka cache_server binding supports proactive fetch of messages to keep the cache fresh in preparation for new consumers. This is enabled by configuring a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kafka cache_server\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Configuration (* required)","slug":"configuration-required","link":"#configuration-required","children":[{"level":3,"title":"options","slug":"options","link":"#options","children":[{"level":4,"title":"options.bootstrap","slug":"options-bootstrap","link":"#options-bootstrap","children":[]},{"level":4,"title":"options.topics","slug":"options-topics","link":"#options-topics","children":[]},{"level":4,"title":"topics[].defaultOffset","slug":"topics-defaultoffset","link":"#topics-defaultoffset","children":[]}]},{"level":3,"title":"routes*","slug":"routes","link":"#routes","children":[{"level":4,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":3,"title":"exit","slug":"exit","link":"#exit","children":[]},{"level":3,"title":"telemetry","slug":"telemetry","link":"#telemetry","children":[{"level":4,"title":"Example","slug":"example-1","link":"#example-1","children":[]}]}]}],"readingTime":{"minutes":0.36,"words":108},"filePathRelative":"concepts/protocol/kafka/cache_server.md","autoDesc":true}');export{p as comp,d as data};
