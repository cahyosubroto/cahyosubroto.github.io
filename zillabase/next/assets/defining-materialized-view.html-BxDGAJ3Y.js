import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{b as a,k as e,o as t}from"./app-DtoGA-7r.js";const n={};function l(r,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="defining-materialized-view" tabindex="-1"><a class="header-anchor" href="#defining-materialized-view"><span>Defining Materialized View</span></a></h1><p>Zillabase makes managing database migrations straightforward, including defining materialized views. The CLI allows users to generate a migration file that can be modified to include PostgreSQL-like syntax. A materialized view can consume streams, perform some transformation, and materialize it. The materialized view is always updated when new data is inserted into the stream.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>You can refer to <a href="https://docs.risingwave.com/sql/overview" target="_blank" rel="noopener noreferrer">this article</a> for a complete supported SQL reference.</p></div><ol><li>Create the migration file with the following command:</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># command format</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># zillabase migration add &lt;migration-name&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># example</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">zillabase</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> migration</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> add</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> create_mv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># output</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># Created migration 000001__create_mv.sql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the command succeeds, it prints the new migration file, which you can modify to define your data models. To modify the migration files, open the <code>zillabase/migrations</code> folder and edit the corresponding migration file.</p><ol start="2"><li>Edit the migration file with the following content.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">CREATE</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> MATERIALIZED VIEW </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">IF</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> NOT</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> EXISTS</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> streampay_replies </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">AS</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    SELECT</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &#39;400&#39;</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> AS</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> status</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, encode(zilla_correlation_id, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;escape&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">AS</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> correlation_id </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">from</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> streampay_commands </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">where</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> type</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> NOT</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> IN</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;SendPayment&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;RequestPayment&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;RejectRequest&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    UNION</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    SELECT</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &#39;200&#39;</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> AS</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> status</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">,  encode(zilla_correlation_id, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;escape&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">AS</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> correlation_id </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">from</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> streampay_commands </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">where</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> type</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> IN</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;SendPayment&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;RequestPayment&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;RejectRequest&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const p=s(n,[["render",l],["__file","defining-materialized-view.html.vue"]]),k=JSON.parse('{"path":"/products/view/defining-materialized-view.html","title":"Defining Materialized View","lang":"en-US","frontmatter":{"description":"Defining Materialized View Zillabase makes managing database migrations straightforward, including defining materialized views. The CLI allows users to generate a migration file...","head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zillabase/next/products/view/defining-materialized-view.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"Defining Materialized View"}],["meta",{"property":"og:description","content":"Defining Materialized View Zillabase makes managing database migrations straightforward, including defining materialized views. The CLI allows users to generate a migration file..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-07T04:16:20.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T04:16:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Defining Materialized View\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-07T04:16:20.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1733912729000,"updatedTime":1736223380000,"contributors":[{"name":"cahyosubroto","email":"cahyosubroto30@gmail.com","commits":5}]},"readingTime":{"minutes":0.62,"words":186},"filePathRelative":"products/view/defining-materialized-view.md","localizedDate":"December 11, 2024","autoDesc":true,"excerpt":"\\n<p>Zillabase makes managing database migrations straightforward, including defining materialized views. The CLI allows users to generate a migration file that can be modified to include PostgreSQL-like syntax. A materialized view can consume streams, perform some transformation, and materialize it. The materialized view is always updated when new data is inserted into the stream.</p>"}');export{p as comp,k as data};
