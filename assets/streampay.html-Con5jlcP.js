import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,e as a,o as n}from"./app-DwvZGVL-.js";const t={};function l(r,e){return n(),i("div",null,e[0]||(e[0]=[a(`<h1 id="streampay-ai-example" tabindex="-1"><a class="header-anchor" href="#streampay-ai-example"><span>StreamPay AI Example</span></a></h1><p>This example is an implementation of the StreamPay App designed to transfer payments from one user to another.</p><p>Zilla implements the REST endpoints defined in an AsyncAPI 3.x spec and proxies them onto Kafka topics defined in an AsyncAPI 3.x spec based on the operations specified in each spec. Both HTTP AsyncAPI 3.x spec and Kafka AsyncAPI 3.x spec are generated automatically based on the Kafka Cluster metadata information.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><p>Before we start, make sure you fulfill the following requirements:</p><ul><li>Java 20+</li><li>Homebrew package manager</li><li>Docker</li><li>Zillabase CLI</li><li>NodeJS (with npm or yarn)</li><li><a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">OpenAI API Key (Optional)</a></li></ul><h3 id="installing-zillabase-cli" tabindex="-1"><a class="header-anchor" href="#installing-zillabase-cli"><span>Installing Zillabase CLI</span></a></h3><p>If you don&#39;t have Zillabase CLI installed, install it with the following command:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tap</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> aklivity/tap</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zillabase</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>The Homebrew package manager is required. You can install it on MacOS and other Linux distributions. To install it, run the following command:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><h2 id="setting-up-the-project" tabindex="-1"><a class="header-anchor" href="#setting-up-the-project"><span>Setting Up the Project</span></a></h2><ol><li>Clone the Zillabase repository.</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/aklivity/zillabase.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The StreamPay project is stored in the <code>examples/streampay</code> directory.</p><ol start="2"><li>go to the <code>streampay</code> project example directory on the cloned repository directory.</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> examples/streampay</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>To enable the OpenAI fraud detection integration, you must use an <code>OPENAI_API_KEY</code> and add it to the <code>zillabase/config.yaml</code> file.</li></ol><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">udf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">OPENAI_API_KEY=&lt;your OpenAI API key&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Start the Zillabase project and wait for the initialization process to finish.</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>latest: Pulling from aklivity/zillabase</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>seed.sql processed successfully!</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Realm: zillabase created successfully.</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Config Server is populated with zilla.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Next, we&#39;ll set up the StreamPay UI. Install the dependencies with the following command:</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># or</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>Install quasar globally with the following command:</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @quasar/cli</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>You might need to execute <code>rehash</code> to find <code>quasar</code> on the path after installing quasar.</p></div><ol start="7"><li>Start the frontend application in development mode.</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">quasar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="streampay-apis" tabindex="-1"><a class="header-anchor" href="#streampay-apis"><span>StreamPay APIs</span></a></h2><p>The Zillabase Streampay exposes common entity CRUD endpoints, with the entity data stored on Kafka topics if Kafka&#39;s <code>cleanup.policy=compact</code> is set; otherwise, it exposes only Read mode endpoints.</p><p>Zillabase leverages the AsyncAPI schema definitions to define all of the generated streaming APIs. You can export the generated API schema definition by running this Zillabase command:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> asyncapi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http-asyncapi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">asyncapi_REST_APIs.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Once the generated AsyncAPI schema is exported, you can copy it into the <a href="https://studio.asyncapi.com/" target="_blank" rel="noopener noreferrer">AsyncAPI Studio</a> to get a complete picture of all the streaming APIs you have created.</p><p>Some of the endpoints described are:</p><table><thead><tr><th>Method</th><th>Endpoint</th><th>Topic</th><th>Description</th></tr></thead><tbody><tr><td>POST</td><td>/streampay_users</td><td>dev.streampay_users</td><td>Create an user.</td></tr><tr><td>PUT</td><td>/streampay_users/{id}</td><td>dev.streampay_users</td><td>Update user by the key.</td></tr><tr><td>GET</td><td>/streampay_users</td><td>dev.streampay_users</td><td>Fetch all users.</td></tr><tr><td>GET</td><td>/streampay_users/{id}</td><td>dev.streampay_users</td><td>Fetch user by the key.</td></tr><tr><td>GET</td><td>/streampay_balances-stream</td><td>dev.streampay_balances</td><td>Stream latest user&#39;s balance.</td></tr><tr><td>POST</td><td>/streampay_commands</td><td>dev.streampay_commands</td><td>Post command such as payment request or pay.</td></tr><tr><td>GET</td><td>/streampay_payment_requests</td><td>dev.streampay_payment_requests</td><td>Fetch all payment requests.</td></tr><tr><td>GET</td><td>/streampay_payment_requests/{id}</td><td>dev.streampay_payment_requests</td><td>Fetch payment request by key.</td></tr><tr><td>GET</td><td>/streampay_payment_requests-stream</td><td>dev.streampay_payment_requests</td><td>Stream new available payment request.</td></tr><tr><td>GET</td><td>/streampay_activities-stream</td><td>dev.streampay_activities</td><td>Stream all the activities.</td></tr></tbody></table><h2 id="using-the-project" tabindex="-1"><a class="header-anchor" href="#using-the-project"><span>Using the Project</span></a></h2><h3 id="login" tabindex="-1"><a class="header-anchor" href="#login"><span>Login</span></a></h3><p>Login using Keycloak with one of the users pre-created in <code>zillabase/config.yaml</code>.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">keycloak</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  realm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">zillabase</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  users</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">allen</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      email</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">allen.doe@example.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Allen Doe</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Test@123</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can log in from a different browser session to one of the other users to see how money is sent between them.</p><h3 id="send-money" tabindex="-1"><a class="header-anchor" href="#send-money"><span>Send Money</span></a></h3><p>Once logged in, users should have a starting balance of money. You can:</p><ul><li><code>SEND OR REQUEST</code> funds to any of the other users. Ideally, you can send or request to a second User you are logged in as.</li><li><code>Sending</code> money will immediately move money to the other user.</li><li><code>Requesting</code> money will send a transaction request to that user.</li></ul><h3 id="transfer-requests" tabindex="-1"><a class="header-anchor" href="#transfer-requests"><span>Transfer Requests</span></a></h3><p>A user with a transfer request can <code>Approve</code> or <code>Reject</code> the request. You can:</p><ul><li><code>Approve</code> the payment. The money will be transferred to the requesting user.</li><li><code>Reject</code> the payment. The request will be removed from the list and marked as rejected.</li><li>Wait for the OpenAI fraud check to finish to determine the potential fraud risk.</li></ul><h2 id="openai-fraud-risk-with-zillabase" tabindex="-1"><a class="header-anchor" href="#openai-fraud-risk-with-zillabase"><span>OpenAI Fraud Risk with Zillabase</span></a></h2><p>By leveraging the existing CQRS event stream that the Streampay app uses in Zillabase, we can create OpenAI query functions using the Python OpenAI library.</p><div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" data-title="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sequenceDiagram</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    UI-&gt;&gt;Zillabase: User creates a payment request</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Zillabase-&gt;&gt;UI: Both users are notified a request is created with PENDING fraud risk</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Zillabase-&gt;&gt;OpenAI: OpenAI is queried to determine fraud risk</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    OpenAI-&gt;&gt;Zillabase: Capture fraud risk</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Zillabase-&gt;&gt;UI: Show the requested user the fraud risk as LOW/MEDIUM/HIGH risk</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    UI-&gt;&gt;Zillabase: Accept risk and transfer</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Zillabase-&gt;&gt;OpenAI: Record decision as safe and use OpenAI to calculate embeddings</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    UI-&gt;&gt;Zillabase: Reject risk and block</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Zillabase-&gt;&gt;OpenAI: Record decision as risky and use OpenAI to calculate embeddings</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When a new transaction request from Allen to transfer $3400 to Bertollo is created, the OpenAI query will be something similar to the following:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>==== Open AI Query ====</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Use the below collection of safe and risky money transfer requests to answer the subsequent question and your opinion.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Collection:</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>Allen transferring $3200 to Bertollo is risky</span></span>
<span class="line"><span>Allen transferring $3400 to Fred is safe</span></span>
<span class="line"><span>Allen transferring $3900 to Greg is safe</span></span>
<span class="line"><span>Allen transferring $2800 to Candice is safe</span></span>
<span class="line"><span>Elaine transferring $4300 to Bertollo is safe</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Question: Should Allen transfer $3400 to Bertollo?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>==== Open AI Result ====</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;summary&quot;: &quot;Based on the previous data, Allen transferring money to Bertollo has been identified as risky in one instance. Although Allen has made safe transfers to others, the specific transfer to Bertollo raises concerns. Therefore, it is advisable to consider the risk before proceeding.&quot;,</span></span>
<span class="line"><span> &quot;risk&quot;: &quot;MEDIUM&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This system prompt is used:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>You recommend the amount of fraud risk for money transfers between two people and respond only with a JSON object containing your summary and a numeric value of the risk as LOW, MEDIUM, or HIGH. Only return valid JSON string and no other markup.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can find the Python functions used in the <code>zillabase/functions/python/fraud_check.py</code> file.</p><h2 id="stopping-the-project" tabindex="-1"><a class="header-anchor" href="#stopping-the-project"><span>Stopping the Project</span></a></h2><p>Close the Quasar development server (Ctrl+C), then stop the Zillabase project.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zillabase</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,58)]))}const p=s(t,[["render",l],["__file","streampay.html.vue"]]),o=JSON.parse('{"path":"/sample-app/streampay.html","title":"StreamPay AI Example","lang":"en-US","frontmatter":{"description":"StreamPay AI Example This example is an implementation of the StreamPay App designed to transfer payments from one user to another. Zilla implements the REST endpoints defined i...","head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/sample-app/streampay.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"StreamPay AI Example"}],["meta",{"property":"og:description","content":"StreamPay AI Example This example is an implementation of the StreamPay App designed to transfer payments from one user to another. Zilla implements the REST endpoints defined i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-16T04:45:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-16T04:45:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"StreamPay AI Example\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-16T04:45:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[{"level":3,"title":"Installing Zillabase CLI","slug":"installing-zillabase-cli","link":"#installing-zillabase-cli","children":[]}]},{"level":2,"title":"Setting Up the Project","slug":"setting-up-the-project","link":"#setting-up-the-project","children":[]},{"level":2,"title":"StreamPay APIs","slug":"streampay-apis","link":"#streampay-apis","children":[]},{"level":2,"title":"Using the Project","slug":"using-the-project","link":"#using-the-project","children":[{"level":3,"title":"Login","slug":"login","link":"#login","children":[]},{"level":3,"title":"Send Money","slug":"send-money","link":"#send-money","children":[]},{"level":3,"title":"Transfer Requests","slug":"transfer-requests","link":"#transfer-requests","children":[]}]},{"level":2,"title":"OpenAI Fraud Risk with Zillabase","slug":"openai-fraud-risk-with-zillabase","link":"#openai-fraud-risk-with-zillabase","children":[]},{"level":2,"title":"Stopping the Project","slug":"stopping-the-project","link":"#stopping-the-project","children":[]}],"git":{"createdTime":1732866505000,"updatedTime":1734324330000,"contributors":[{"name":"cahyosubroto","email":"cahyosubroto30@gmail.com","commits":2}]},"readingTime":{"minutes":3.4,"words":1019},"filePathRelative":"sample-app/streampay.md","localizedDate":"November 29, 2024","autoDesc":true,"excerpt":"\\n<p>This example is an implementation of the StreamPay App designed to transfer payments from one user to another.</p>\\n<p>Zilla implements the REST endpoints defined in an AsyncAPI 3.x spec and proxies them onto Kafka topics defined in an AsyncAPI 3.x spec based on the operations specified in each spec. Both HTTP AsyncAPI 3.x spec and Kafka AsyncAPI 3.x spec are generated automatically based on the Kafka Cluster metadata information.</p>"}');export{p as comp,o as data};
