import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,f as s,o as t}from"./app-CKeM1Wjf.js";const o={};function l(n,e){return t(),i("div",null,e[0]||(e[0]=[s(`<h1 id="protobuf-model" tabindex="-1"><a class="header-anchor" href="#protobuf-model"><span>protobuf Model</span></a></h1><p>Defines a model to utilize schema from catalog to enforce validation, ensuring adherence to predefined data structures.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">model</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">protobuf</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">view</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">json</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  items-catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">strategy</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">topic</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      version</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">latest</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      record</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">EchoMessage</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">subject</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">items-snapshots</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      version</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">latest</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      record</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">EchoMessage</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">id</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      record</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">EchoMessage</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration-required" tabindex="-1"><a class="header-anchor" href="#configuration-required"><span>Configuration (* required)</span></a></h2><h3 id="model-protobuf" tabindex="-1"><a class="header-anchor" href="#model-protobuf"><span>model: protobuf</span></a></h3><blockquote><p><code>const</code></p></blockquote><p>Specifies the model is a <code>protobuf</code>.</p><h3 id="view" tabindex="-1"><a class="header-anchor" href="#view"><span>view</span></a></h3><blockquote><p><code>enum</code> [ <code>json</code> ]</p></blockquote><p>Transforms the model from this data type to the Protobuf schema on produce and to this data type from the Protobuf schema on consume.</p><h3 id="catalog" tabindex="-1"><a class="header-anchor" href="#catalog"><span>catalog*</span></a></h3><blockquote><p><code>object</code> as map of named <code>array</code></p></blockquote><p>To map defined catalog for schema retrieval based on catalog specific parameters. Any of the possible combination can be configured.</p><blockquote><p><code>id</code><code>record</code></p></blockquote><hr><blockquote><p><code>strategy</code><code>version</code><code>record</code></p></blockquote><hr><blockquote><p><code>subject</code><code>version</code><code>record</code></p></blockquote><h4 id="catalog-id" tabindex="-1"><a class="header-anchor" href="#catalog-id"><span>catalog[].id*</span></a></h4><blockquote><p><code>integer</code></p></blockquote><p>Define specific schema id to refer from catalog.</p><h4 id="catalog-version" tabindex="-1"><a class="header-anchor" href="#catalog-version"><span>catalog[].version</span></a></h4><blockquote><p><code>string</code> | Default: <code>latest</code></p></blockquote><p>Specific iteration or version of a registered schema in the defined catalog.</p><h4 id="catalog-strategy" tabindex="-1"><a class="header-anchor" href="#catalog-strategy"><span>catalog[].strategy*</span></a></h4><blockquote><p><code>enum</code> [ <code>topic</code> ]</p></blockquote><p>To determine the subject based on the specified strategy</p><h4 id="catalog-subject" tabindex="-1"><a class="header-anchor" href="#catalog-subject"><span>catalog[].subject*</span></a></h4><blockquote><p><code>string</code></p></blockquote><p>Unique identifier for schema categorization in the catalog.</p><h4 id="catalog-record" tabindex="-1"><a class="header-anchor" href="#catalog-record"><span>catalog[].record*</span></a></h4><blockquote><p><code>string</code></p></blockquote><p>Define specific record to refer from Protobuf schema.</p>`,33)]))}const d=a(o,[["render",l],["__file","protobuf.html.vue"]]),p=JSON.parse('{"path":"/reference/config/models/protobuf.html","title":"protobuf Model","lang":"en-US","frontmatter":{"redirectFrom":"/reference/config/models/model-protobuf.html","shortTitle":"protobuf","category":["Models"],"tags":["protobuf"],"description":"protobuf Model Defines a model to utilize schema from catalog to enforce validation, ensuring adherence to predefined data structures. Configuration (* required) model: protobuf...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/reference/config/models/protobuf.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"protobuf Model"}],["meta",{"property":"og:description","content":"protobuf Model Defines a model to utilize schema from catalog to enforce validation, ensuring adherence to predefined data structures. Configuration (* required) model: protobuf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"protobuf"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"protobuf Model\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Configuration (* required)","slug":"configuration-required","link":"#configuration-required","children":[{"level":3,"title":"model: protobuf","slug":"model-protobuf","link":"#model-protobuf","children":[]},{"level":3,"title":"view","slug":"view","link":"#view","children":[]},{"level":3,"title":"catalog*","slug":"catalog","link":"#catalog","children":[{"level":4,"title":"catalog[].id*","slug":"catalog-id","link":"#catalog-id","children":[]},{"level":4,"title":"catalog[].version","slug":"catalog-version","link":"#catalog-version","children":[]},{"level":4,"title":"catalog[].strategy*","slug":"catalog-strategy","link":"#catalog-strategy","children":[]},{"level":4,"title":"catalog[].subject*","slug":"catalog-subject","link":"#catalog-subject","children":[]},{"level":4,"title":"catalog[].record*","slug":"catalog-record","link":"#catalog-record","children":[]}]}]}],"readingTime":{"minutes":0.64,"words":191},"filePathRelative":"reference/config/models/protobuf.md","autoDesc":true}');export{d as comp,p as data};
