import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,f as n,o as e}from"./app-CKeM1Wjf.js";const l={};function p(t,s){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="autoscale-zilla-pods-with-prometheus-metrics" tabindex="-1"><a class="header-anchor" href="#autoscale-zilla-pods-with-prometheus-metrics"><span>Autoscale Zilla pods with Prometheus metrics</span></a></h1><p>In this guide, run zilla in kubernetes and autoscale the number of pods based on prometheus metrics. The Kubernetes horizontal pod autoscaler is set up to enable the zilla deployment to scale from 1 to 5 pods with the goal of an average load of 10 active connections per pod.</p><h2 id="tl-dr" tabindex="-1"><a class="header-anchor" href="#tl-dr"><span>Tl;Dr</span></a></h2><p>Download and run the Zilla <code>kubernetes.prometheus.autoscale</code> cookbook using this install script. It will start Zilla and everything you need for this guide.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">wget</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -qO-</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> https://raw.githubusercontent.com/aklivity/zilla-examples/main/startup.sh</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> | </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sh</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -s</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> kubernetes.prometheus.autoscale</span></span></code></pre></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>Alternatively, download <a href="https://github.com/aklivity/zilla-docs/releases/latest/download/kubernetes.prometheus.autoscale.tar.gz" target="_blank" rel="noopener noreferrer">kubernetes.prometheus.autoscale</a> and follow the <code>README</code> yourself.</p></div><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3><ul><li>Install <a href="https://jqlang.github.io/jq/" target="_blank" rel="noopener noreferrer">jq</a> and <a href="https://netcat.sourceforge.net/" target="_blank" rel="noopener noreferrer">netcat</a></li><li><a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer">Kubernetes</a> (e.g. Docker Desktop with Kubernetes enabled)</li><li>Install <a href="https://kubernetes.io/docs/reference/kubectl/" target="_blank" rel="noopener noreferrer">kubectl</a></li><li>Install <a href="https://helm.sh/docs/intro/install/#helm" target="_blank" rel="noopener noreferrer">helm</a> 3.0+</li></ul><h2 id="autoscaling-zilla" tabindex="-1"><a class="header-anchor" href="#autoscaling-zilla"><span>Autoscaling Zilla</span></a></h2><p>Run the commands from this guide from a shell in the <code>kubernetes.prometheus.autoscale</code> directory that you downloaded.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">curl</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -d</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &quot;Hello, world&quot;</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -X</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &quot;POST&quot;</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> http://localhost:7114</span></span></code></pre></div><p>output:</p><div class="language-text" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>Hello, world</span></span></code></pre></div><p>The initial status is:</p><ul><li>no open connections</li><li>the value of the <code>stream_active_received</code> metric should be 0</li><li>there should be 1 zilla pod in the deployment</li></ul><blockquote><p>If the kubernetes custom metrics API response does not appear correctly please wait a few seconds and try again before proceeding further.</p></blockquote><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">./check_metric.sh</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>The value of stream_active_received metric</span></span>
<span class="line"><span>------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Prometheus API:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>        &quot;metric&quot;: {</span></span>
<span class="line"><span>          &quot;__name__&quot;: &quot;stream_active_received&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;value&quot;: [</span></span>
<span class="line"><span>          1683013504.619, # timestamp</span></span>
<span class="line"><span>          &quot;0&quot; # value</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Kubernetes custom metrics API:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>      &quot;metricName&quot;: &quot;stream_active_received&quot;,</span></span>
<span class="line"><span>      &quot;value&quot;: &quot;0&quot;,</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The zilla deployment should consist of 1 pod.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">./check_hpa.sh</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>The status of horizontal pod autoscaling</span></span>
<span class="line"><span>----------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HorizontalPodAutoscaler:</span></span>
<span class="line"><span>NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE</span></span>
<span class="line"><span>zilla   Deployment/zilla   0/10      1         5         1          4m24s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Deployment:</span></span>
<span class="line"><span>NAME    READY   UP-TO-DATE   AVAILABLE   AGE</span></span>
<span class="line"><span>zilla   1/1     1            1           4m25s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pods:</span></span>
<span class="line"><span>NAME                     READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>zilla-6db8d879f5-2wxgw   1/1     Running   0          4m25s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Open 21 connections to zilla as instances of netcat in the background.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">for</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> i</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;"> in</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> \`</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">seq</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;"> 1</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;"> 21</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">\`</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">; </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">do</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> nc</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> localhost</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;"> 7114</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &amp;; </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">done</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>[42] 88886</span></span>
<span class="line"><span>[43] 88887</span></span>
<span class="line"><span>[44] 88888</span></span>
<span class="line"><span>...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There should be 21 open connections in the background now.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">ps</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> auxw</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> | </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">grep</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &quot;nc localhost 7114&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> | </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">grep</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -v</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> grep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> | </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">wc</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -l</span></span></code></pre></div><p>output:</p><div class="language-text" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>21</span></span></code></pre></div><p>Wait for a few seconds so the metrics get updated. The value of stream_active_received metric should be 21 for one of the pods.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">./check_metric.sh</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>The value of stream_active_received metric</span></span>
<span class="line"><span>------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Prometheus API:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>        &quot;metric&quot;: {</span></span>
<span class="line"><span>          &quot;__name__&quot;: &quot;stream_active_received&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;value&quot;: [</span></span>
<span class="line"><span>          1683013504.619, # timestamp</span></span>
<span class="line"><span>          &quot;21&quot; # value</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Kubernetes custom metrics API:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>      &quot;metricName&quot;: &quot;stream_active_received&quot;,</span></span>
<span class="line"><span>      &quot;value&quot;: &quot;21&quot;,</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Wait for a minute so the autoscaler can catch up. The zilla deployment should be soon scaled up to 3 pods.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">./check_hpa.sh</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>The status of horizontal pod autoscaling</span></span>
<span class="line"><span>----------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HorizontalPodAutoscaler:</span></span>
<span class="line"><span>NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE</span></span>
<span class="line"><span>zilla   Deployment/zilla   7/10      1         5         3          7m14s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Deployment:</span></span>
<span class="line"><span>NAME    READY   UP-TO-DATE   AVAILABLE   AGE</span></span>
<span class="line"><span>zilla   3/3     3            3           7m15s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pods:</span></span>
<span class="line"><span>NAME                     READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>zilla-6db8d879f5-2wxgw   1/1     Running   0          7m15s</span></span>
<span class="line"><span>zilla-6db8d879f5-9bnkh   1/1     Running   0          75s</span></span>
<span class="line"><span>zilla-6db8d879f5-fmgqx   1/1     Running   0          75s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Open 21 connections to zilla as instances of netcat in the background.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">for</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> i</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;"> in</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> \`</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">seq</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;"> 1</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;"> 21</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">\`</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">; </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">do</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> nc</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> localhost</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;"> 7114</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &amp;; </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">done</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>[77] 77775</span></span>
<span class="line"><span>[78] 77776</span></span>
<span class="line"><span>[79] 77777</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>There should be 42 open connections in the background now.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>ps auxw | grep &quot;nc localhost 7114&quot; | grep -v grep | wc -l</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>output:</p><div class="language-text" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>42</span></span></code></pre></div><p>Wait for a few seconds so the metrics get updated. The value of stream_active_received metric should be 42 for one of the pods.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">./check_metric.sh</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>The value of stream_active_received metric</span></span>
<span class="line"><span>------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Prometheus API:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>        &quot;metric&quot;: {</span></span>
<span class="line"><span>          &quot;__name__&quot;: &quot;stream_active_received&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;value&quot;: [</span></span>
<span class="line"><span>          1683013504.619, # timestamp</span></span>
<span class="line"><span>          &quot;42&quot; # value</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Kubernetes custom metrics API:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>      &quot;metricName&quot;: &quot;stream_active_received&quot;,</span></span>
<span class="line"><span>      &quot;value&quot;: &quot;42&quot;,</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Wait for a minute so the autoscaler can catch up. The zilla deployment should be soon scaled up to 5 pods.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">./check_hpa.sh</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>The status of horizontal pod autoscaling</span></span>
<span class="line"><span>----------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HorizontalPodAutoscaler:</span></span>
<span class="line"><span>NAME    REFERENCE          TARGETS    MINPODS   MAXPODS   REPLICAS   AGE</span></span>
<span class="line"><span>zilla   Deployment/zilla   8400m/10   1         5         5          12m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Deployment:</span></span>
<span class="line"><span>NAME    READY   UP-TO-DATE   AVAILABLE   AGE</span></span>
<span class="line"><span>zilla   5/5     5            5           12m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pods:</span></span>
<span class="line"><span>NAME                     READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>zilla-6db8d879f5-2wxgw   1/1     Running   0          12m</span></span>
<span class="line"><span>zilla-6db8d879f5-9bnkh   1/1     Running   0          6m3s</span></span>
<span class="line"><span>zilla-6db8d879f5-fmgqx   1/1     Running   0          6m3s</span></span>
<span class="line"><span>zilla-6db8d879f5-g74hl   1/1     Running   0          63s</span></span>
<span class="line"><span>zilla-6db8d879f5-q5fmm   1/1     Running   0          63s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shut down all running netcat instances.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">ps</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> auxw</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> | </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">grep</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &quot;nc localhost 7114&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> | </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">grep</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -v</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> grep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> | </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">awk</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &#39;{print $2}&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> | </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">xargs</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> kill</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>[23]  + 55555 terminated  nc localhost 7114</span></span>
<span class="line"><span>[22]  + 55554 terminated  nc localhost 7114</span></span>
<span class="line"><span>[21]  + 55553 terminated  nc localhost 7114</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>There should be no open connections in the background now.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>ps auxw | grep &quot;nc localhost 7114&quot; | grep -v grep | wc -l</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>output:</p><div class="language-text" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>0</span></span></code></pre></div><p>Wait for a few seconds so the metrics get updated. The value of stream_active_received metric should be 0 for all pods.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">./check_metric.sh</span></span></code></pre></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>The value of stream_active_received metric</span></span>
<span class="line"><span>------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Prometheus API:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>        &quot;metric&quot;: {</span></span>
<span class="line"><span>          &quot;__name__&quot;: &quot;stream_active_received&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;value&quot;: [</span></span>
<span class="line"><span>          1683013504.619, # timestamp</span></span>
<span class="line"><span>          &quot;0&quot; # value</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Kubernetes custom metrics API:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>      &quot;metricName&quot;: &quot;stream_active_received&quot;,</span></span>
<span class="line"><span>      &quot;value&quot;: &quot;0&quot;,</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Wait for a a minute so the autoscaler can catch up. The zilla deployment should be soon scaled down to 1 pod.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>./check_hpa.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>The status of horizontal pod autoscaling</span></span>
<span class="line"><span>----------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HorizontalPodAutoscaler:</span></span>
<span class="line"><span>NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE</span></span>
<span class="line"><span>zilla   Deployment/zilla   0/10      1         5         1          14m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Deployment:</span></span>
<span class="line"><span>NAME    READY   UP-TO-DATE   AVAILABLE   AGE</span></span>
<span class="line"><span>zilla   1/1     1            1           14m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pods:</span></span>
<span class="line"><span>NAME                     READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>zilla-6db8d879f5-2wxgw   1/1     Running   0          14m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="remove-the-running-namespace" tabindex="-1"><a class="header-anchor" href="#remove-the-running-namespace"><span>Remove the running namespace</span></a></h2><p>Find the path to the <code>teardown.sh</code> script(s) in the <code>use the teardown script(s) to clean up</code> section of the example output and run it.</p>`,67)]))}const r=a(l,[["render",p],["__file","autoscale-k8s.html.vue"]]),c=JSON.parse('{"path":"/how-tos/deploy-operate/autoscale-k8s.html","title":"Autoscale Zilla pods with Prometheus metrics","lang":"en-US","frontmatter":{"description":"In this guide, run zilla in kubernetes and autoscale the number of pods based on prometheus metrics.","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/how-tos/deploy-operate/autoscale-k8s.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"Autoscale Zilla pods with Prometheus metrics"}],["meta",{"property":"og:description","content":"In this guide, run zilla in kubernetes and autoscale the number of pods based on prometheus metrics."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Autoscale Zilla pods with Prometheus metrics\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Tl;Dr","slug":"tl-dr","link":"#tl-dr","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]}]},{"level":2,"title":"Autoscaling Zilla","slug":"autoscaling-zilla","link":"#autoscaling-zilla","children":[]},{"level":2,"title":"Remove the running namespace","slug":"remove-the-running-namespace","link":"#remove-the-running-namespace","children":[]}],"readingTime":{"minutes":3.16,"words":948},"filePathRelative":"how-tos/deploy-operate/autoscale-k8s.md"}');export{r as comp,c as data};
