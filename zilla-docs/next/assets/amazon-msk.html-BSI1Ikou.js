import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,f as l,a as i,b as e,d as a,e as t,r,o as k}from"./app-CKeM1Wjf.js";const u="/zilla-docs/next/assets/pca-ca-cert.png",g="/zilla-docs/next/assets/bootstrap-server-names.png",y={},m={class:"hint-container warning"};function D(C,s){const n=r("RouteLink"),h=r("CodeTabs");return k(),c("div",null,[s[22]||(s[22]=l('<h1 id="amazon-msk" tabindex="-1"><a class="header-anchor" href="#amazon-msk"><span>Amazon MSK</span></a></h1><p>Unlike other hosted Kafka services, Amazon MSK is not readily reachable over the internet. As a result, unless Zilla is deployed in the same VPC in which MSK is running, you will first need to make your cluster publicly accessible.</p><h2 id="enable-msk-public-access" tabindex="-1"><a class="header-anchor" href="#enable-msk-public-access"><span>Enable MSK Public Access</span></a></h2><p>&quot;Public Access&quot; can be turned on for MSK clusters running Apache Kafka 2.6.0 or later. Follow the MSK <a href="https://docs.aws.amazon.com/msk/latest/developerguide/public-access.html" target="_blank" rel="noopener noreferrer">Public Access Guide</a>to do so.</p>',4)),i("div",m,[s[5]||(s[5]=i("p",{class:"hint-container-title"},"Warning",-1)),i("p",null,[s[1]||(s[1]=e("MSK's “Public Access” feature directly exposes your brokers to the internet, which may present additional security concerns. An alternative and more flexible solution is the ")),a(n,{to:"/solutions/concepts/kafka-proxies/secure-public-access.html"},{default:t(()=>s[0]||(s[0]=[e("Secure Public Access")])),_:1}),s[2]||(s[2]=e(" solution using ")),s[3]||(s[3]=i("a",{href:"https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44",target:"_blank",rel:"noopener noreferrer"},"Zilla Plus for Amazon MSK",-1)),s[4]||(s[4]=e(". The solution acts as intermediary that securely routes connectivity between external clients and MSK brokers without having to modify the brokers."))])]),s[23]||(s[23]=l('<h2 id="set-up-mtls-authentication-between-msk-and-zilla" tabindex="-1"><a class="header-anchor" href="#set-up-mtls-authentication-between-msk-and-zilla"><span>Set up mTLS Authentication between MSK and Zilla</span></a></h2><p>Once your MSK cluster is reachable over the internet, it will rely on <code>mTLS</code> to authenticate external clients. Setting up <code>mTLS</code> between MSK and Zilla is done in three steps:</p><ol><li>Create a trusted Client Certificate in Amazon Certificate Manager.</li><li>Export the Client Certificate as well as the Certificate Authority (CA) Certificate.</li><li>Create a PKCS12 KeyStore containing the exported certificates that will be referenced by Zilla to complete the <code>mTLS</code> handshake with your MSK cluster.</li></ol><div class="hint-container info"><p class="hint-container-title">NOTE</p><p>If you deployed the Zilla Plus for Amazon MSK, then you should already have a Client Certificate that Zilla can use and you can go straight to the second step.</p></div><h3 id="create-a-client-certificate" tabindex="-1"><a class="header-anchor" href="#create-a-client-certificate"><span>Create a Client Certificate</span></a></h3>',5)),i("p",null,[s[7]||(s[7]=e("Follow the ")),a(n,{to:"/solutions/how-tos/aws-services/create-client-certificate-acm.html#issue-the-signed-certificate"},{default:t(()=>s[6]||(s[6]=[e("Create Client Certificate guide")])),_:1}),s[8]||(s[8]=e(". Upon completion you will have created a client certificate inside ACM and should have a local ")),s[9]||(s[9]=i("code",null,"client-1.key.pem",-1)),s[10]||(s[10]=e(" file containing the client certificate's RSA key as well as the ")),s[11]||(s[11]=i("code",null,"ARN",-1)),s[12]||(s[12]=e(" of the certificate."))]),s[24]||(s[24]=i("h3",{id:"export-client-and-ca-certificates",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#export-client-and-ca-certificates"},[i("span",null,"Export Client and CA Certificates")])],-1)),i("p",null,[s[14]||(s[14]=e("First, you will export the Client Certificate to a local file called ")),s[15]||(s[15]=i("code",null,"client.cert",-1)),s[16]||(s[16]=e(". To do this you will need the ")),s[17]||(s[17]=i("code",null,"ARN",-1)),s[18]||(s[18]=e(" of the client certificate as well as of the ")),a(n,{to:"/solutions/how-tos/aws-services/create-certificate-authority-acm.html"},{default:t(()=>s[13]||(s[13]=[e("certificate authority")])),_:1}),s[19]||(s[19]=e(" used to issue the certificate, and run the following command:"))]),s[25]||(s[25]=l(`<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">aws</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> acm-pca</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> get-certificate</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --certificate-authority-arn</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> CERTIFICATE_AUTHORITY_ARN</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;"> \\</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">--certificate-arn </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">CERTIFICATE_ARN</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> --output</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> text</span></span></code></pre></div><h4 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span>output</span></a></h4><div class="language-output" data-highlighter="shiki" data-ext="output" data-title="output" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>----BEGIN CERTIFICATE-----</span></span>
<span class="line"><span>MIIEdzCCA1+gAwIBAgIQDLtFK9uDUb6VpObjhusyhTANBgkqhkiG9w0BAQsFADAS</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>-----END CERTIFICATE-----</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-----BEGIN CERTIFICATE-----</span></span>
<span class="line"><span>MIIC8TCCAdmgAwIBAgIRAIxnMlRU8x8CasAlsfpjghQwDQYJKoZIhvcNAQELBQAw</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>-----END CERTIFICATE-----</span></span></code></pre></div><p>Copy first certificate and save it as <code>client.cert</code></p><h4 id="client-cert" tabindex="-1"><a class="header-anchor" href="#client-cert"><span>client.cert</span></a></h4><div class="language-output" data-highlighter="shiki" data-ext="output" data-title="output" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>----BEGIN CERTIFICATE-----</span></span>
<span class="line"><span>MIIEdzCCA1+gAwIBAgIQDLtFK9uDUb6VpObjhusyhTANBgkqhkiG9w0BAQsFADAS</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>-----END CERTIFICATE-----</span></span></code></pre></div><p>Next, you will export the CA Certificate.</p><p>Log into your AWS Certificate Manager Private Certificate Authority and under &quot;Additional Information&quot; export the certificate body to a file called <code>ca.pem</code></p><figure><img src="`+u+'" alt="Export the CA Certificate" tabindex="0" loading="lazy"><figcaption>Export the CA Certificate</figcaption></figure><h3 id="create-a-pkcs12-keystore" tabindex="-1"><a class="header-anchor" href="#create-a-pkcs12-keystore"><span>Create a PKCS12 KeyStore</span></a></h3><p>To create the KeyStore you will need a signed client certificate alias. It is best to use one of your MSK cluster&#39;s <code>bootstrap server names</code>.</p><figure><img src="'+g+`" alt="chose one of the bootstrap server names such as b-1.xxx.xxx.kafka-use-east.amazonaws.com:9094" tabindex="0" loading="lazy"><figcaption>chose one of the bootstrap server names such as b-1.xxx.xxx.kafka-use-east.amazonaws.com:9094</figcaption></figure><p>With the <code>bootstrap server name</code> in hand, run the following command to create the <code>keystore.p12</code> file:</p><h4 id="keystore-p12" tabindex="-1"><a class="header-anchor" href="#keystore-p12"><span>keystore.p12</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">openssl</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> pkcs12</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -export</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -in</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> client.cert</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -inkey</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> client-1.key.pem</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;"> \\</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">-out </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">keystore.p12</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> -name</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> SIGNED_CLIENT_CERT_ALIES</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;"> \\</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">-CAfile </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">ca.pem</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure-zilla" tabindex="-1"><a class="header-anchor" href="#configure-zilla"><span>Configure Zilla</span></a></h2><p>The examples use the below Environment variables.</p><table><thead><tr><th>Environment variable</th><th>Description</th></tr></thead><tbody><tr><td><code>KEYSTORE_PATH</code></td><td>The path to the local <code>keystore.p12</code> file that was generated above.</td></tr><tr><td><code>TRUSTORE_TYPE</code></td><td>Keystore types such as <code>pkcs12</code>, <code>jceks</code>, and etc</td></tr><tr><td><code>KEYSTORE_PASSWORD</code></td><td>Keystore password to <code>keystore.p12</code> file that was generated above.</td></tr><tr><td><code>SIGNED_CLIENT_CERT_ALIAS</code></td><td>A unique string that identifies the key cert entry chain in the <code>keystore.p12</code>. For example, use the MSK bootstrap server name.</td></tr><tr><td><code>BOOTSTRAP_SERVER_HOSTNAME</code></td><td>Target MSK hostname. For example: <code>b-2-public.myTestCluster.v4ni96.c2.kafka.us-east-1.amazonaws.com</code></td></tr><tr><td><code>BOOTSTRAP_SERVER_PORT</code></td><td>Target MSK port number. For example <code>9094</code></td></tr></tbody></table><p>Inside <code>zilla.yaml</code> create a <code>client_vault</code> that references your newly created <code>keystore</code>. After this, reference the vault in the <code>south_tls_client</code> binding. Your <code>zilla.yaml</code> should appear as follows:</p>`,19)),a(h,{id:"165",data:[{id:"zilla.yaml"}],"tab-id":"yaml"},{title0:t(({value:o,isActive:p})=>s[20]||(s[20]=[e("zilla.yaml")])),tab0:t(({value:o,isActive:p})=>s[21]||(s[21]=[i("div",{class:"language-yaml line-numbers-mode","data-highlighter":"shiki","data-ext":"yaml","data-title":"yaml",style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4","--shiki-light-bg":"#FFFFFF","--shiki-dark-bg":"#1E1E1E"}},[i("pre",{class:"shiki shiki-themes light-plus dark-plus vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"vaults"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"  client_vault"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    type"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"filesystem")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    options"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"      trust"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"        store"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"${{env.TRUSTORE_PATH}}")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"        type"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"${{env.TRUSTORE_TYPE}}")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"        password"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"${{env.TRUSTORE_PASSWORD}}")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"bindings"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},"...")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"  south_kafka_client"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    type"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"kafka")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    kind"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"client")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    options"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"      servers"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},"        - "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"${{env.KAFKA_BOOTSTRAP_SERVER}}")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    exit"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"south_tls_client")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"  south_tls_client"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    type"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"tls")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    kind"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"client")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    vault"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"client_vault")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    options"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"      trust"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},"        - "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"${{env.CA_CERT_ALIAS}}")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    exit"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"south_tcp_client")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"  south_tcp_client"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},":")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    type"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"tcp")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#800000","--shiki-dark":"#569CD6"}},"    kind"),i("span",{style:{"--shiki-light":"#000000","--shiki-dark":"#D4D4D4"}},": "),i("span",{style:{"--shiki-light":"#0000FF","--shiki-dark":"#CE9178"}},"client")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),s[26]||(s[26]=i("div",{class:"hint-container info"},[i("p",{class:"hint-container-title"},"NOTE"),i("p",null,"SNI adds the domain name to the TLS handshake process so that the Zilla process reaches the right domain name and receives the correct SSL certificate.")],-1)),s[27]||(s[27]=i("p",null,[e("To test the above config you can use it to add or replace the necessary bindings in the "),i("a",{href:"https://github.com/aklivity/zilla-docs/releases/latest/download/http.kafka.sasl.scram.tar.gz",target:"_blank",rel:"noopener noreferrer"},"http.kafka.sasl.scram"),e(" cookbook.")],-1))])}const v=d(y,[["render",D],["__file","amazon-msk.html.vue"]]),E=JSON.parse('{"path":"/how-tos/connecting-to-kafka/amazon-msk.html","title":"Amazon MSK","lang":"en-US","frontmatter":{"description":"How to connect to your own Amazon MSK from Zilla.","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/how-tos/connecting-to-kafka/amazon-msk.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"Amazon MSK"}],["meta",{"property":"og:description","content":"How to connect to your own Amazon MSK from Zilla."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://docs.aklivity.io/zilla-docs/next/assets/pca-ca-cert.png"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Amazon MSK\\",\\"image\\":[\\"https://docs.aklivity.io/zilla-docs/next/assets/pca-ca-cert.png\\",\\"https://docs.aklivity.io/zilla-docs/next/assets/bootstrap-server-names.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Enable MSK Public Access","slug":"enable-msk-public-access","link":"#enable-msk-public-access","children":[]},{"level":2,"title":"Set up mTLS Authentication between MSK and Zilla","slug":"set-up-mtls-authentication-between-msk-and-zilla","link":"#set-up-mtls-authentication-between-msk-and-zilla","children":[{"level":3,"title":"Create a Client Certificate","slug":"create-a-client-certificate","link":"#create-a-client-certificate","children":[]},{"level":3,"title":"Export Client and CA Certificates","slug":"export-client-and-ca-certificates","link":"#export-client-and-ca-certificates","children":[{"level":4,"title":"output","slug":"output","link":"#output","children":[]},{"level":4,"title":"client.cert","slug":"client-cert","link":"#client-cert","children":[]}]},{"level":3,"title":"Create a PKCS12 KeyStore","slug":"create-a-pkcs12-keystore","link":"#create-a-pkcs12-keystore","children":[{"level":4,"title":"keystore.p12","slug":"keystore-p12","link":"#keystore-p12","children":[]}]}]},{"level":2,"title":"Configure Zilla","slug":"configure-zilla","link":"#configure-zilla","children":[]}],"readingTime":{"minutes":2.52,"words":755},"filePathRelative":"how-tos/connecting-to-kafka/amazon-msk.md"}');export{v as comp,E as data};
