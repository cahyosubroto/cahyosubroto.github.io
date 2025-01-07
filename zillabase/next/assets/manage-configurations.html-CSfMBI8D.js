import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{b as e,k as n,o as t}from"./app-DtoGA-7r.js";const l={};function s(o,i){return t(),e("div",null,i[0]||(i[0]=[n(`<h1 id="zilla-service-configuration" tabindex="-1"><a class="header-anchor" href="#zilla-service-configuration"><span>Zilla Service Configuration</span></a></h1><p>Zillabase provides commands to manage the Zilla service configurations. These commands allow users to update the available config, upload the required artifacts (like certificates), and review the running configuration. When a configuration change occurs, the Zilla service can detect and redeploy the updated configuration.</p><h2 id="managing-zilla-configuration" tabindex="-1"><a class="header-anchor" href="#managing-zilla-configuration"><span>Managing Zilla Configuration</span></a></h2><h3 id="providing-your-own-zilla-yaml-configuration" tabindex="-1"><a class="header-anchor" href="#providing-your-own-zilla-yaml-configuration"><span>Providing Your Own <code>zilla.yaml</code> configuration</span></a></h3><p>You can provide your own <code>zilla.yaml</code> configuration by creating a config file under <code>zillabase/zilla</code> directory. This way, during <code>zillabase start</code> command it won&#39;t automatically generate the Zilla configuration but will use the configuration you provide.</p><h3 id="fetch-zilla-configuration" tabindex="-1"><a class="header-anchor" href="#fetch-zilla-configuration"><span>Fetch Zilla configuration</span></a></h3><p>Run the following command to fetch the existing Zilla configuration. This commands save the existing Zilla configuration file to zilla.yaml file.</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">zillabase</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> config</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> list</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --id</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> zilla.yaml</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &gt; </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">./zilla.yaml</span></span></code></pre></div><h3 id="modifying-zilla-configuration" tabindex="-1"><a class="header-anchor" href="#modifying-zilla-configuration"><span>Modifying Zilla configuration</span></a></h3><p>Run the following command to modify the Zilla configuration generated by Zillabase.</p><ol><li>Open the file and modify the configuration.</li></ol><div class="hint-container info"><p class="hint-container-title">Info</p><p>Refer to <a href="https://docs.aklivity.io/zilla/latest/reference/config/overview.html" target="_blank" rel="noopener noreferrer">this article</a> for a complete Zilla configuration reference.</p></div><ol start="2"><li>After modifying the configuration, upload the configuration file using the following command.</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">zillabase</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> config</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> add</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -c</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> ./zilla.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># output</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># Config Server is populated with ./zilla.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>By default, the command will use the filename as the configuration id. To use an id other than its name, you can provide an additional --id parameter, for example:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">zillabase</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> config</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> add</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -c</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> ./zilla.yaml</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --id</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> zilla.yaml</span></span></code></pre></div></div><ol start="3"><li>The Zillabase admin will detect the configuration changes and redeploy the updated configuration.</li></ol><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>While it&#39;s possible, modifying this configuration is rarely required by the user.</p></div>`,17)]))}const h=a(l,[["render",s],["__file","manage-configurations.html.vue"]]),d=JSON.parse('{"path":"/products/zilla/manage-configurations.html","title":"Zilla Service Configuration","lang":"en-US","frontmatter":{"description":"Zilla Service Configuration Zillabase provides commands to manage the Zilla service configurations. These commands allow users to update the available config, upload the require...","head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zillabase/next/products/zilla/manage-configurations.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"Zilla Service Configuration"}],["meta",{"property":"og:description","content":"Zilla Service Configuration Zillabase provides commands to manage the Zilla service configurations. These commands allow users to update the available config, upload the require..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-07T04:16:20.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T04:16:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Zilla Service Configuration\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-07T04:16:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Managing Zilla Configuration","slug":"managing-zilla-configuration","link":"#managing-zilla-configuration","children":[{"level":3,"title":"Providing Your Own zilla.yaml configuration","slug":"providing-your-own-zilla-yaml-configuration","link":"#providing-your-own-zilla-yaml-configuration","children":[]},{"level":3,"title":"Fetch Zilla configuration","slug":"fetch-zilla-configuration","link":"#fetch-zilla-configuration","children":[]},{"level":3,"title":"Modifying Zilla configuration","slug":"modifying-zilla-configuration","link":"#modifying-zilla-configuration","children":[]}]}],"git":{"createdTime":1732866505000,"updatedTime":1736223380000,"contributors":[{"name":"cahyosubroto","email":"cahyosubroto30@gmail.com","commits":4}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"products/zilla/manage-configurations.md","localizedDate":"November 29, 2024","autoDesc":true,"excerpt":"\\n<p>Zillabase provides commands to manage the Zilla service configurations. These commands allow users to update the available config, upload the required artifacts (like certificates), and review the running configuration. When a configuration change occurs, the Zilla service can detect and redeploy the updated configuration.</p>"}');export{h as comp,d as data};
