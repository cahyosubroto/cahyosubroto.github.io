import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,e,o as a}from"./app-DwvZGVL-.js";const d={};function n(l,i){return a(),t("div",null,i[0]||(i[0]=[e('<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h1><p>This command lists all the available sub-commands for managing the Zillabase’s configurations.</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="sub-commands" tabindex="-1"><a class="header-anchor" href="#sub-commands"><span>Sub Commands</span></a></h2><ul><li><code>add</code> - Add a new Zillabase configuration.</li><li><code>list</code> - List all the Zillabase configurations.</li><li><code>remove</code> - Delete a Zillabase configuration.</li></ul><h2 id="config-add" tabindex="-1"><a class="header-anchor" href="#config-add"><span>config add</span></a></h2><p>This command adds a new Zillabase configuration.</p><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {-c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--config}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">confi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">g&gt; [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--help}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--verbose}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h3><table><thead><tr><th>Option</th><th>Description</th><th>Required</th><th>Default Value</th><th>Example</th></tr></thead><tbody><tr><td><code>-c &lt;config&gt;, --config &lt;config&gt;</code></td><td>Config location</td><td><strong>Yes</strong></td><td>-</td><td><code>-c ./config.yaml</code></td></tr><tr><td><code>--debug</code></td><td>Enables detailed output for debugging.</td><td>No</td><td>-</td><td><code>--debug</code></td></tr><tr><td><code>-h, --help</code></td><td>Display help information.</td><td>No</td><td>-</td><td><code>-h</code></td></tr><tr><td><code>--id &lt;id&gt;</code></td><td>Config identifier.</td><td>No</td><td>-</td><td><code>--id 123</code></td></tr><tr><td><code>-v, --verbose</code></td><td>Show verbose output.</td><td>No</td><td>-</td><td><code>-v</code></td></tr></tbody></table><h2 id="config-list" tabindex="-1"><a class="header-anchor" href="#config-list"><span>config list</span></a></h2><p>This command lists all the available Zillabase configurations in the project.</p><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--help}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt; [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--verbose}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1"><span>Options</span></a></h3><table><thead><tr><th>Option</th><th>Description</th><th>Required</th><th>Default Value</th><th>Example</th></tr></thead><tbody><tr><td><code>--debug</code></td><td>Enables detailed output for debugging.</td><td>No</td><td>-</td><td><code>--debug</code></td></tr><tr><td><code>-h, --help</code></td><td>Display help information.</td><td>No</td><td>-</td><td><code>-h</code></td></tr><tr><td><code>--id &lt;id&gt;</code></td><td>Config identifier.</td><td><strong>Yes</strong></td><td>-</td><td><code>--id 123</code></td></tr><tr><td><code>-v, --verbose</code></td><td>Show verbose output.</td><td>No</td><td>-</td><td><code>-v</code></td></tr></tbody></table><h2 id="config-remove" tabindex="-1"><a class="header-anchor" href="#config-remove"><span>config remove</span></a></h2><p>This command removes a Zillabase configuration from the project.</p><h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--help}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt; [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--verbose}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="options-2" tabindex="-1"><a class="header-anchor" href="#options-2"><span>Options</span></a></h3><table><thead><tr><th>Option</th><th>Description</th><th>Required</th><th>Default Value</th><th>Example</th></tr></thead><tbody><tr><td><code>--debug</code></td><td>Enables detailed output for debugging.</td><td>No</td><td>-</td><td><code>--debug</code></td></tr><tr><td><code>-h, --help</code></td><td>Display help information.</td><td>No</td><td>-</td><td><code>-h</code></td></tr><tr><td><code>--id &lt;id&gt;</code></td><td>Config identifier.</td><td><strong>Yes</strong></td><td>-</td><td><code>--id 123</code></td></tr><tr><td><code>-v, --verbose</code></td><td>Show verbose output.</td><td>No</td><td>-</td><td><code>-v</code></td></tr></tbody></table>',24)]))}const r=s(d,[["render",n],["__file","config.html.vue"]]),p=JSON.parse('{"path":"/cli/config.html","title":"config","lang":"en-US","frontmatter":{"description":"config This command lists all the available sub-commands for managing the Zillabase’s configurations. Usage Sub Commands add - Add a new Zillabase configuration. list - List all...","head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/cli/config.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"config"}],["meta",{"property":"og:description","content":"config This command lists all the available sub-commands for managing the Zillabase’s configurations. Usage Sub Commands add - Add a new Zillabase configuration. list - List all..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-02T05:19:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T05:19:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T05:19:40.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Sub Commands","slug":"sub-commands","link":"#sub-commands","children":[]},{"level":2,"title":"config add","slug":"config-add","link":"#config-add","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Options","slug":"options","link":"#options","children":[]}]},{"level":2,"title":"config list","slug":"config-list","link":"#config-list","children":[{"level":3,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]},{"level":3,"title":"Options","slug":"options-1","link":"#options-1","children":[]}]},{"level":2,"title":"config remove","slug":"config-remove","link":"#config-remove","children":[{"level":3,"title":"Usage","slug":"usage-3","link":"#usage-3","children":[]},{"level":3,"title":"Options","slug":"options-2","link":"#options-2","children":[]}]}],"git":{"createdTime":1733116780000,"updatedTime":1733116780000,"contributors":[{"name":"cahyosubroto","email":"cahyosubroto30@gmail.com","commits":1}]},"readingTime":{"minutes":0.76,"words":227},"filePathRelative":"cli/config.md","localizedDate":"December 2, 2024","autoDesc":true,"excerpt":"\\n<p>This command lists all the available sub-commands for managing the Zillabase’s configurations.</p>\\n<h3>Usage</h3>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">zillabase</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,p as data};
