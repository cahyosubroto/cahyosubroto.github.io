import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as t,e,o as d}from"./app-CfYLOMgF.js";const n={};function h(l,i){return d(),a("div",null,[t("StartFragment"),i[0]||(i[0]=e('<h1 id="asyncapi" tabindex="-1"><a class="header-anchor" href="#asyncapi"><span>asyncapi</span></a></h1><p>This command lists all the available sub-commands for Zillabase’s asyncapi feature.</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> asyncapi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="sub-commands" tabindex="-1"><a class="header-anchor" href="#sub-commands"><span>Sub Commands</span></a></h2><ul><li><code>add</code> - Add a new AsyncAPI specification.</li><li><code>list</code> - Lists all the available AsyncAPI specifications.</li><li><code>remove</code> - Delete an AsyncAPI specification.</li><li><code>show</code> - Show an AsyncAPI specification details.</li></ul><h2 id="asyncapi-add" tabindex="-1"><a class="header-anchor" href="#asyncapi-add"><span>asyncapi add</span></a></h2><p>This command adds a new AsyncAPI specification.</p><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> asyncapi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--help}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  {-s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--spec}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">spe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">c&gt; [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--verbose}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h3><table><thead><tr><th>Option</th><th>Description</th><th>Required</th><th>Default Value</th><th>Example</th></tr></thead><tbody><tr><td><code>--debug</code></td><td>Enables detailed output for debugging.</td><td>No</td><td>-</td><td><code>--debug</code></td></tr><tr><td><code>-h, --help</code></td><td>Display help information.</td><td>No</td><td>-</td><td><code>-h</code></td></tr><tr><td><code>--id &lt;id&gt;</code></td><td>AsyncAPI specification identifier.</td><td>No</td><td>-</td><td><code>--id 123</code></td></tr><tr><td><code>-s &lt;spec&gt;, --spec &lt;spec&gt;</code></td><td>AsyncAPI specification location.</td><td><strong>Yes</strong></td><td>-</td><td><code>-s ./spec.yaml</code></td></tr><tr><td><code>-v, --verbose</code></td><td>Show verbose output.</td><td>No</td><td>-</td><td><code>-v</code></td></tr></tbody></table><h2 id="asyncapi-list" tabindex="-1"><a class="header-anchor" href="#asyncapi-list"><span>asyncapi list</span></a></h2><p>This command lists all the available AsyncAPI specifications in the project.</p><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> asyncapi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--help}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--verbose}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1"><span>Options</span></a></h3><table><thead><tr><th>Option</th><th>Description</th><th>Required</th><th>Default Value</th><th>Example</th></tr></thead><tbody><tr><td><code>--debug</code></td><td>Enables detailed output for debugging.</td><td>No</td><td>-</td><td><code>--debug</code></td></tr><tr><td><code>-h, --help</code></td><td>Display help information.</td><td>No</td><td>-</td><td><code>-h</code></td></tr><tr><td><code>-v, --verbose</code></td><td>Show verbose output.</td><td>No</td><td>-</td><td><code>-v</code></td></tr></tbody></table><h2 id="asyncapi-remove" tabindex="-1"><a class="header-anchor" href="#asyncapi-remove"><span>asyncapi remove</span></a></h2><p>This command removes an AsyncAPI specification from the project.</p><h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> asyncapi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--help}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt;  [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--verbose}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="options-2" tabindex="-1"><a class="header-anchor" href="#options-2"><span>Options</span></a></h3><table><thead><tr><th>Option</th><th>Description</th><th>Required</th><th>Default Value</th><th>Example</th></tr></thead><tbody><tr><td><code>--debug</code></td><td>Enables detailed output for debugging.</td><td>No</td><td>-</td><td><code>--debug</code></td></tr><tr><td><code>-h, --help</code></td><td>Display help information.</td><td>No</td><td>-</td><td><code>-h</code></td></tr><tr><td><code>--id &lt;id&gt;</code></td><td>AsyncAPI specification identifier.</td><td>No</td><td>-</td><td><code>--id 123</code></td></tr><tr><td><code>-v, --verbose</code></td><td>Show verbose output.</td><td>No</td><td>-</td><td><code>-v</code></td></tr></tbody></table><h2 id="asyncapi-show" tabindex="-1"><a class="header-anchor" href="#asyncapi-show"><span>asyncapi show</span></a></h2><p>This command shows an AsyncAPI specification.</p><h3 id="usage-4" tabindex="-1"><a class="header-anchor" href="#usage-4"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> asyncapi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--help}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--verbose}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [--] &lt;id&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="options-3" tabindex="-1"><a class="header-anchor" href="#options-3"><span>Options</span></a></h3><table><thead><tr><th>Option</th><th>Description</th><th>Required</th><th>Default Value</th><th>Example</th></tr></thead><tbody><tr><td><code>--debug</code></td><td>Enables detailed output for debugging.</td><td>No</td><td>-</td><td><code>--debug</code></td></tr><tr><td><code>-h, --help</code></td><td>Display help information.</td><td>No</td><td>-</td><td><code>-h</code></td></tr><tr><td><code>-v, --verbose</code></td><td>Show verbose output.</td><td>No</td><td>-</td><td><code>-v</code></td></tr><tr><td><code>--</code></td><td>Used to separate command-line options from arguments to avoid confusion.</td><td>No</td><td>-</td><td><code>-- argument</code></td></tr><tr><td><code>&lt;id&gt;</code></td><td>AsyncAPI specification identifier.</td><td>Yes</td><td>-</td><td><code>123</code></td></tr></tbody></table>',30))])}const o=s(n,[["render",h],["__file","asyncapi.html.vue"]]),c=JSON.parse('{"path":"/cli/asyncapi.html","title":"asyncapi","lang":"en-US","frontmatter":{"description":"asyncapi This command lists all the available sub-commands for Zillabase’s asyncapi feature. Usage Sub Commands add - Add a new AsyncAPI specification. list - Lists all the avai...","head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/cli/asyncapi.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"asyncapi"}],["meta",{"property":"og:description","content":"asyncapi This command lists all the available sub-commands for Zillabase’s asyncapi feature. Usage Sub Commands add - Add a new AsyncAPI specification. list - Lists all the avai..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-02T05:19:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T05:19:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"asyncapi\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T05:19:40.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Sub Commands","slug":"sub-commands","link":"#sub-commands","children":[]},{"level":2,"title":"asyncapi add","slug":"asyncapi-add","link":"#asyncapi-add","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Options","slug":"options","link":"#options","children":[]}]},{"level":2,"title":"asyncapi list","slug":"asyncapi-list","link":"#asyncapi-list","children":[{"level":3,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]},{"level":3,"title":"Options","slug":"options-1","link":"#options-1","children":[]}]},{"level":2,"title":"asyncapi remove","slug":"asyncapi-remove","link":"#asyncapi-remove","children":[{"level":3,"title":"Usage","slug":"usage-3","link":"#usage-3","children":[]},{"level":3,"title":"Options","slug":"options-2","link":"#options-2","children":[]}]},{"level":2,"title":"asyncapi show","slug":"asyncapi-show","link":"#asyncapi-show","children":[{"level":3,"title":"Usage","slug":"usage-4","link":"#usage-4","children":[]},{"level":3,"title":"Options","slug":"options-3","link":"#options-3","children":[]}]}],"git":{"createdTime":1733116780000,"updatedTime":1733116780000,"contributors":[{"name":"cahyosubroto","email":"cahyosubroto30@gmail.com","commits":1}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"cli/asyncapi.md","localizedDate":"December 2, 2024","autoDesc":true,"excerpt":"<!--StartFragment-->\\n<h1>asyncapi</h1>\\n<p>This command lists all the available sub-commands for Zillabase’s asyncapi feature.</p>\\n<h3>Usage</h3>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">zillabase</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> asyncapi</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,c as data};
