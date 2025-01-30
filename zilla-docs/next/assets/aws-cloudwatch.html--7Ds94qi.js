import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as i,b as n,d as l,f as r,o,r as p}from"./app-CKeM1Wjf.js";const h={},c={class:"zilla-plus-badge hint-container info"},d={href:"https://www.aklivity.io/products/zilla-plus",target:"_blank",rel:"noopener noreferrer"};function k(g,s){const e=p("ZillaPlus");return o(),t("div",null,[s[1]||(s[1]=i("h1",{id:"aws-cloudwatch-exporter",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#aws-cloudwatch-exporter"},[i("span",null,"aws-cloudwatch Exporter")])],-1)),s[2]||(s[2]=i("p",null,"Specifies an exporter for transmitting Custom Metrics and Log Events to AWS CloudWatch.",-1)),i("p",c,[i("a",d,[s[0]||(s[0]=n("Available in ")),l(e)])]),s[3]||(s[3]=r(`<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">exporters</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  aws_cloudwatch</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">aws-cloudwatch</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      metrics</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        namespace</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla-metrics</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        interval</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">20</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      logs</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        group</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla-log-group</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">        stream</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla-log-stream</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration-required" tabindex="-1"><a class="header-anchor" href="#configuration-required"><span>Configuration (* required)</span></a></h2><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options</span></a></h3><blockquote><p><code>object</code></p></blockquote><p>The <code>aws</code> specific options.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  metrics</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    namespace</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla-metrics</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    interval</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">20</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  logs</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    group</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla-log-group</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    stream</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">zilla-log-stream</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="options-metrics" tabindex="-1"><a class="header-anchor" href="#options-metrics"><span>options.metrics</span></a></h4><blockquote><p><code>object</code></p></blockquote><p>Configuration for transmitting custom metric data points to Amazon CloudWatch.</p><h4 id="metrics-namespace" tabindex="-1"><a class="header-anchor" href="#metrics-namespace"><span>metrics.namespace*</span></a></h4><blockquote><p><code>string</code></p></blockquote><p>The namespace for the metric data.</p><p>To avoid conflicts with Amazon Web Services service namespaces, you should not specify a namespace that begins with <code>AWS/</code>.</p><h4 id="metrics-interval" tabindex="-1"><a class="header-anchor" href="#metrics-interval"><span>metrics.interval</span></a></h4><blockquote><p><code>integer</code> | Default: <code>30</code></p></blockquote><p>Interval in seconds to push data to the Amazon CloudWatch.</p><h4 id="options-logs" tabindex="-1"><a class="header-anchor" href="#options-logs"><span>options.logs</span></a></h4><blockquote><p><code>object</code></p></blockquote><p>Configuration for transmitting log events to Amazon CloudWatch.</p><h4 id="logs-group" tabindex="-1"><a class="header-anchor" href="#logs-group"><span>logs.group*</span></a></h4><blockquote><p><code>string</code></p></blockquote><p>The name of the log group.</p><h4 id="logs-stream" tabindex="-1"><a class="header-anchor" href="#logs-stream"><span>logs.stream*</span></a></h4><blockquote><p><code>string</code></p></blockquote><p>The name of the log stream.</p>`,25))])}const v=a(h,[["render",k],["__file","aws-cloudwatch.html.vue"]]),D=JSON.parse('{"path":"/reference/config/telemetry/exporters/aws-cloudwatch.html","title":"aws-cloudwatch Exporter","lang":"en-US","frontmatter":{"redirectFrom":"/reference/config/telemetry/exporters/exporter-aws-cloudwatch.html","shortTitle":"aws-cloudwatch","icon":"aky-zilla-plus","category":["Telemetry","Exporters"],"tag":["aws-cloudwatch"],"description":"aws-cloudwatch Exporter Specifies an exporter for transmitting Custom Metrics and Log Events to AWS CloudWatch. Available in Configuration (* required) options object The aws sp...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/reference/config/telemetry/exporters/aws-cloudwatch.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"aws-cloudwatch Exporter"}],["meta",{"property":"og:description","content":"aws-cloudwatch Exporter Specifies an exporter for transmitting Custom Metrics and Log Events to AWS CloudWatch. Available in Configuration (* required) options object The aws sp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"aws-cloudwatch"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"aws-cloudwatch Exporter\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Configuration (* required)","slug":"configuration-required","link":"#configuration-required","children":[{"level":3,"title":"options","slug":"options","link":"#options","children":[{"level":4,"title":"options.metrics","slug":"options-metrics","link":"#options-metrics","children":[]},{"level":4,"title":"metrics.namespace*","slug":"metrics-namespace","link":"#metrics-namespace","children":[]},{"level":4,"title":"metrics.interval","slug":"metrics-interval","link":"#metrics-interval","children":[]},{"level":4,"title":"options.logs","slug":"options-logs","link":"#options-logs","children":[]},{"level":4,"title":"logs.group*","slug":"logs-group","link":"#logs-group","children":[]},{"level":4,"title":"logs.stream*","slug":"logs-stream","link":"#logs-stream","children":[]}]}]}],"readingTime":{"minutes":0.58,"words":173},"filePathRelative":"reference/config/telemetry/exporters/aws-cloudwatch.md","autoDesc":true}');export{v as comp,D as data};
