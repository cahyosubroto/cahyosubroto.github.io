import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{b as a,k as n,o as e}from"./app-DtoGA-7r.js";const t={};function l(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h1 id="external-udf-in-python" tabindex="-1"><a class="header-anchor" href="#external-udf-in-python"><span>External UDF in Python</span></a></h1><p>To declare the function in Python, we&#39;ll use the <a href="https://pypi.org/project/arrow-udf/" target="_blank" rel="noopener noreferrer"><code>arrow-udf</code></a> package. You&#39;ll need to annotate the function that you want to expose, and then define the input and return types. On the other hand, you can also provide <code>requirements.txt</code> file in the <code>zillabase/functions/python</code> path in case you want to install additional Python packages. After that, you need to declare the function in a migration file.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>Any external UDFs written in Python must be stored in <code>zillabase/functions/python</code> directory in order to be auto-picked by the Python UDF server.</p></div><h2 id="adding-environment-variables" tabindex="-1"><a class="header-anchor" href="#adding-environment-variables"><span>Adding Environment Variables</span></a></h2><p>You can add environment variables during UDF execution by modifying the <code>config.yaml</code> file. For example:</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">udf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  python</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    env</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">      - </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">MY_VAR=value</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>These steps will walk you through the UDF example in Python.</p><ol><li>Create an empty folder.</li></ol><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">mkdir</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> udf-python</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> # create a new folder</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">cd</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> udf-python</span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> # change the current directory</span></span></code></pre></div><ol start="2"><li>Initialize an empty Zillabase project.</li></ol><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">zillabase</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> init</span></span></code></pre></div><ol start="3"><li>Create a <code>requirements.txt</code> file in <code>zillabase/functions/python</code> and add the following packages.</li></ol><div class="language-text" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>numpy==2.1.3</span></span></code></pre></div><ol start="4"><li>Create <code>udf.py</code> in <code>zillabase/functions/python</code> and copy the following function definition.</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">from</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> arrow_udf </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> udf</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> numpy </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">as</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> np</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># udf example with int result</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">@udf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">input_types</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">=[</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;INT&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;INT&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">result_type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;INT&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">def</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> gcd</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">x</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">y</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">):</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    while</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> y != </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        (x, y) = (y, x % y)</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    return</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> x</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># udf example with struct (object) result type</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">@udf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">input_types</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">=[</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;VARCHAR&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">result_type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;STRUCT&lt;key: VARCHAR, value: VARCHAR&gt;&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">def</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> key_value</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">pair</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">str</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">):</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    key, value = pair.split(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;=&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    return</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;key&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: key, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;value&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: value}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># udf example that call external library</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">@udf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">input_types</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">=[</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;real[]&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;real[]&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">result_type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;real&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">def</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> dot_vect</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">):</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    return</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> np.dot(a, b)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Create a new migration file.</li></ol><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">zillabase</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> migration</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> add</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> create_function</span></span></code></pre></div><ol start="6"><li>Declare the function in the migration file.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">CREATE</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> FUNCTION</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> gcd</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">int</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">int</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">RETURNS</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> int</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">LANGUAGE</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> python </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">AS</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> gcd;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">CREATE</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> FUNCTION</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> key_value</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">varchar</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">RETURNS</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> struct&lt;</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">key</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> varchar</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">value</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> varchar</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">LANGUAGE</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> python </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">AS</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> key_value;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">CREATE</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> FUNCTION</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> dot_vect</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">real</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[], </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">real</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[]) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">RETURNS</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> real</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">LANGUAGE</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> python </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">AS</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> dot_vect;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>Run the project.</li></ol><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">zillabase</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> start</span></span></code></pre></div><ol start="8"><li>Connect to the database with PSQL.</li></ol><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">psql</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -U</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> root</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -d</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> dev</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -h</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> localhost</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -p</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;"> 4567</span></span></code></pre></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>If you don&#39;t have psql installed, install it with the following commands:</p><p>Debian:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> apt-get</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -y</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> postgresql-client</span></span></code></pre></div><p>MacOS:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">brew</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> install</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> libpq</span></span></code></pre></div></div><ol start="9"><li>Run a query.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">select</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> gcd(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">12</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">4</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">select</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> key_value(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;KEY=VALUE&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">select</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> dot_vect(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;{1.0, 2.0}&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;{3.0, 4.0}&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>Stop the project.</li></ol><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">zillabase</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> stop</span></span></code></pre></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>Refer to <a href="https://github.com/aklivity/zillabase/tree/develop/examples/udf.python" target="_blank" rel="noopener noreferrer">this repository</a> for a more complete UDF Python example.</p></div>`,30)]))}const d=s(t,[["render",l],["__file","external-udf-python.html.vue"]]),r=JSON.parse(`{"path":"/products/function/external-udf-python.html","title":"External UDF in Python","lang":"en-US","frontmatter":{"description":"External UDF in Python To declare the function in Python, we'll use the arrow-udf package. You'll need to annotate the function that you want to expose, and then define the inpu...","head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zillabase/next/products/function/external-udf-python.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"External UDF in Python"}],["meta",{"property":"og:description","content":"External UDF in Python To declare the function in Python, we'll use the arrow-udf package. You'll need to annotate the function that you want to expose, and then define the inpu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-07T04:16:20.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T04:16:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"External UDF in Python\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-07T04:16:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Adding Environment Variables","slug":"adding-environment-variables","link":"#adding-environment-variables","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"createdTime":1733912729000,"updatedTime":1736223380000,"contributors":[{"name":"cahyosubroto","email":"cahyosubroto30@gmail.com","commits":4}]},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"products/function/external-udf-python.md","localizedDate":"December 11, 2024","autoDesc":true,"excerpt":"\\n<p>To declare the function in Python, we'll use the <a href=\\"https://pypi.org/project/arrow-udf/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>arrow-udf</code></a> package. You'll need to annotate the function that you want to expose, and then define the input and return types. On the other hand, you can also provide <code>requirements.txt</code> file in the <code>zillabase/functions/python</code> path in case you want to install additional Python packages. After that, you need to declare the function in a migration file.</p>"}`);export{d as comp,r as data};
