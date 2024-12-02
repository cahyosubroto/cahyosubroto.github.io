import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as s}from"./app-D8S-5geo.js";const n={};function d(l,i){return s(),a("div",null,i[0]||(i[0]=[e('<h1 id="migration" tabindex="-1"><a class="header-anchor" href="#migration"><span>migration</span></a></h1><p>This command lists all the available sub-commands for managing database migrations in Zillabase.</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> migration</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="sub-commands" tabindex="-1"><a class="header-anchor" href="#sub-commands"><span>Sub Commands</span></a></h2><ul><li><code>add</code> - Create a new migration file locally.</li><li><code>list</code> - List all the local migration files.</li></ul><h2 id="migration-add" tabindex="-1"><a class="header-anchor" href="#migration-add"><span>migration add</span></a></h2><p>This command creates a new database migration file locally.</p><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> migration</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--help}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [--] &lt;name&gt;...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h3><table><thead><tr><th>Option</th><th>Description</th><th>Required</th><th>Default Value</th><th>Example</th></tr></thead><tbody><tr><td><code>--debug</code></td><td>Enables detailed output for debugging.</td><td>No</td><td>-</td><td><code>--debug</code></td></tr><tr><td><code>-h, --help</code></td><td>Display help information.</td><td>No</td><td>-</td><td><code>-h</code></td></tr><tr><td><code>--</code></td><td>Separates command-line options from the list of arguments.</td><td>No</td><td>-</td><td><code>-- argument</code></td></tr><tr><td><code>&lt;name&gt;</code></td><td>The name(s) of the migration(s) to be added.</td><td><strong>Yes</strong></td><td>-</td><td><code>migration_name</code></td></tr></tbody></table><h2 id="migration-list" tabindex="-1"><a class="header-anchor" href="#migration-list"><span>migration list</span></a></h2><p>This command lists all the local migration files.</p><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2"><span>Usage</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> migration</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{-h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--help}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1"><span>Options</span></a></h3><table><thead><tr><th>Option</th><th>Description</th><th>Required</th><th>Default Value</th><th>Example</th></tr></thead><tbody><tr><td><code>--debug</code></td><td>Enables detailed output for debugging.</td><td>No</td><td>-</td><td><code>--debug</code></td></tr><tr><td><code>-h, --help</code></td><td>Display help information.</td><td>No</td><td>-</td><td><code>-h</code></td></tr></tbody></table>',18)]))}const r=t(n,[["render",d],["__file","migration.html.vue"]]),p=JSON.parse('{"path":"/cli/migration.html","title":"migration","lang":"en-US","frontmatter":{"description":"migration This command lists all the available sub-commands for managing database migrations in Zillabase. Usage Sub Commands add - Create a new migration file locally. list - L...","head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/cli/migration.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"migration"}],["meta",{"property":"og:description","content":"migration This command lists all the available sub-commands for managing database migrations in Zillabase. Usage Sub Commands add - Create a new migration file locally. list - L..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-02T05:19:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T05:19:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"migration\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T05:19:40.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Sub Commands","slug":"sub-commands","link":"#sub-commands","children":[]},{"level":2,"title":"migration add","slug":"migration-add","link":"#migration-add","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Options","slug":"options","link":"#options","children":[]}]},{"level":2,"title":"migration list","slug":"migration-list","link":"#migration-list","children":[{"level":3,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]},{"level":3,"title":"Options","slug":"options-1","link":"#options-1","children":[]}]}],"git":{"createdTime":1733116780000,"updatedTime":1733116780000,"contributors":[{"name":"cahyosubroto","email":"cahyosubroto30@gmail.com","commits":1}]},"readingTime":{"minutes":0.47,"words":142},"filePathRelative":"cli/migration.md","localizedDate":"December 2, 2024","autoDesc":true}');export{r as comp,p as data};
