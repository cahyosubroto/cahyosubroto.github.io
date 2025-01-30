import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as e,b as s,d as l,e as r,f as h,r as p,o as d}from"./app-CKeM1Wjf.js";const c={};function k(o,i){const a=p("RouteLink");return d(),n("div",null,[i[3]||(i[3]=e("h1",{id:"create-server-certificate-letsencrypt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-server-certificate-letsencrypt"},[e("span",null,"Create Server Certificate (LetsEncrypt)")])],-1)),i[4]||(i[4]=e("div",{class:"hint-container note"},[e("p",{class:"hint-container-title"},"Check your selected region"),e("p",null,[s("Make sure you have selected the desired region, ex: "),e("code",null,"US East (N. Virginia) us-east-1"),s(".")])],-1)),e("p",null,[i[1]||(i[1]=s("Follow the ")),l(a,{to:"/solutions/how-tos/aws-services/launch-ec2-instance.html"},{default:r(()=>i[0]||(i[0]=[s("Launch EC2 Instance")])),_:1}),i[2]||(i[2]=s(" guide to launch an Amazon 2 Linux instance in a VPC with attached Internet Gateway."))]),i[5]||(i[5]=h(`<p>After logging into the launched EC2 instance via SSH, install <code>certbot</code> to interact with <a href="https://letsencrypt.org/" target="_blank" rel="noopener noreferrer">LetsEncrypt</a>.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> amazon-linux-extras</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -y</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> epel</span></span></code></pre></div><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> yum</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> install</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -y</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> certbot</span></span></code></pre></div><p>Then issue the wildcard certificate such as <code>*.example.aklivity.io</code>.</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> certbot</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -d</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> *</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">.example.aklivity.io</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --manual</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --preferred-challenges</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> dns</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --key-type</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> rsa</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> certonly</span></span></code></pre></div><p>This will require you to respond to the challenge by adding a custom DNS record proving ownership of the wildcard domain, such as <code>*.example.aklivity.io</code>.</p><p>When <code>certbot</code> completes, the relevant files for the certificate chain and private key have been generated, called <code>fullchain.pem and</code> <code>privkey.pem</code>.</p><div class="language-output" data-highlighter="shiki" data-ext="output" data-title="output" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span> - Congratulations! Your certificate and chain have been saved at:</span></span>
<span class="line"><span>   /etc/letsencrypt/live/example.aklivity.io/fullchain.pem</span></span>
<span class="line"><span>   Your key file has been saved at:</span></span>
<span class="line"><span>   /etc/letsencrypt/live/example.aklivity.io/privkey.pem</span></span></code></pre></div><p>Now we need to prepare the secret value by combining these together:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">touch</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> wildcard.example.aklivity.io.pem</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> cat</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> /etc/letsencrypt/live/example.aklivity.io/privkey.pem</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &gt;&gt; </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">wildcard.example.aklivity.io.pem</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> cat</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> /etc/letsencrypt/live/example.aklivity.io/fullchain.pem</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &gt;&gt; </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">wildcard.example.aklivity.io.pem</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then we can create the secret, for example:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">aws</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> secretsmanager</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> create-secret</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;"> \\</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">--region </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">us-east-1</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;"> \\</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">--name </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">wildcard.example.aklivity.io</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;"> \\</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">--secret-string </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">file://wildcard.example.aklivity.io.pem</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>Note the returned secret ARN as it will be needed later.</p></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>LetsEncrypt certificates are <a href="https://letsencrypt.org/docs/faq/#what-is-the-lifetime-for-let-s-encrypt-certificates-for-how-long-are-they-valid" target="_blank" rel="noopener noreferrer">valid for 90 days</a>, so you will need to renew the certificate and the <code>secret-string</code> value accordingly before expiration. The latest secret value is obtained automatically upon restarting the Zilla proxy instance.</p></div>`,14))])}const u=t(c,[["render",k],["__file","create-server-certificate-letsencrypt.html.vue"]]),v=JSON.parse('{"path":"/solutions/how-tos/aws-services/create-server-certificate-letsencrypt.html","title":"Create Server Certificate (LetsEncrypt)","lang":"en-US","frontmatter":{"description":"Create a server certificate signed by a public certificate authority using LetsEncrypt.","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/solutions/how-tos/aws-services/create-server-certificate-letsencrypt.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"Create Server Certificate (LetsEncrypt)"}],["meta",{"property":"og:description","content":"Create a server certificate signed by a public certificate authority using LetsEncrypt."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Create Server Certificate (LetsEncrypt)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.99,"words":296},"filePathRelative":"solutions/how-tos/aws-services/create-server-certificate-letsencrypt.md"}');export{u as comp,v as data};
