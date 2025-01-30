import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,b as s,d as o,f as l,o as r,r as p}from"./app-CKeM1Wjf.js";const c={},h={class:"zilla-plus-badge hint-container info"},d={href:"https://www.aklivity.io/products/zilla-plus",target:"_blank",rel:"noopener noreferrer"};function g(u,e){const i=p("ZillaPlus");return r(),n("div",null,[e[1]||(e[1]=a("h1",{id:"aws-glue-catalog",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#aws-glue-catalog"},[a("span",null,"aws-glue Catalog")])],-1)),e[2]||(e[2]=a("p",null,[s("Zilla runtime aws-glue catalog supports the official "),a("a",{href:"https://aws.amazon.com/glue/",target:"_blank",rel:"noopener noreferrer"},"AWS Glue"),s(" registry. It defines a catalog that can fetch schemas "),a("a",{href:"https://aws.amazon.com/glue/",target:"_blank",rel:"noopener noreferrer"},"AWS Glue"),s(" to enforce validation.")],-1)),a("p",h,[a("a",d,[e[0]||(e[0]=s("Available in ")),o(i)])]),e[3]||(e[3]=l(`<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">catalog</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">aws-glue</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    registry</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    max-age</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">30</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    compression</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zlib</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration-required" tabindex="-1"><a class="header-anchor" href="#configuration-required"><span>Configuration (* required)</span></a></h2><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options</span></a></h3><blockquote><p><code>object</code></p></blockquote><p>The <code>aws-glue</code> specific options.</p><h4 id="options-registry" tabindex="-1"><a class="header-anchor" href="#options-registry"><span>options.registry*</span></a></h4><blockquote><p><code>string</code></p></blockquote><p>The AWS Glue Registry name to access schemas.</p><h4 id="options-max-age" tabindex="-1"><a class="header-anchor" href="#options-max-age"><span>options.max-age</span></a></h4><blockquote><p><code>integer</code> | Default: <code>300</code></p></blockquote><p>Configures the time to live in <code>seconds</code> for the schema information retrieved against the latest version. The default is 300 seconds or 5 minutes.</p><h4 id="options-compression" tabindex="-1"><a class="header-anchor" href="#options-compression"><span>options.compression</span></a></h4><blockquote><p><code>enum</code> [ <code>none</code>, <code>zlib</code> ] | Default: <code>none</code></p></blockquote><p>Configures the compression level for the message payloads that are serialized by the models configured in this catalog.</p>`,14))])}const f=t(c,[["render",g],["__file","aws-glue.html.vue"]]),y=JSON.parse('{"path":"/reference/config/catalogs/aws-glue.html","title":"aws-glue Catalog","lang":"en-US","frontmatter":{"redirectFrom":"/reference/config/catalogs/catalog-aws-glue.html","shortTitle":"aws-glue","icon":"aky-zilla-plus","category":["Catalog"],"tags":["aws-glue"],"description":"aws-glue Catalog Zilla runtime aws-glue catalog supports the official AWS Glue registry. It defines a catalog that can fetch schemas AWS Glue to enforce validation. Available in...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/reference/config/catalogs/aws-glue.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"aws-glue Catalog"}],["meta",{"property":"og:description","content":"aws-glue Catalog Zilla runtime aws-glue catalog supports the official AWS Glue registry. It defines a catalog that can fetch schemas AWS Glue to enforce validation. Available in..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"aws-glue"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"aws-glue Catalog\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Configuration (* required)","slug":"configuration-required","link":"#configuration-required","children":[{"level":3,"title":"options","slug":"options","link":"#options","children":[{"level":4,"title":"options.registry*","slug":"options-registry","link":"#options-registry","children":[]},{"level":4,"title":"options.max-age","slug":"options-max-age","link":"#options-max-age","children":[]},{"level":4,"title":"options.compression","slug":"options-compression","link":"#options-compression","children":[]}]}]}],"readingTime":{"minutes":0.48,"words":145},"filePathRelative":"reference/config/catalogs/aws-glue.md","autoDesc":true}');export{f as comp,y as data};
