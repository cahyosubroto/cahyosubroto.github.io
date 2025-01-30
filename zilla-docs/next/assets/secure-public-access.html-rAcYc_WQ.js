import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,a as t,g as p,b as o,d as l,f as r,e as i,r as n,o as d}from"./app-CKeM1Wjf.js";const m={},h={class:"zilla-plus-badge hint-container info"},f={href:"https://www.aklivity.io/products/zilla-plus",target:"_blank",rel:"noopener noreferrer"};function y(b,e){const s=n("ZillaPlus"),a=n("RouteLink");return d(),c("div",null,[e[26]||(e[26]=t("h1",{id:"secure-public-access",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#secure-public-access"},[t("span",null,"Secure Public Access")])],-1)),p(" markdownlint-disable MD024 "),t("p",h,[t("a",f,[e[0]||(e[0]=o("Available in ")),l(s)])]),e[27]||(e[27]=t("p",null,[o("The "),t("a",{href:"https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44",target:"_blank",rel:"noopener noreferrer"},"Zilla Plus for Amazon MSK"),o(" Secure Public Access Proxy lets authorized Kafka clients connect, publish messages and subscribe to topics in your Amazon MSK cluster via the internet.")],-1)),e[28]||(e[28]=t("p",null,"By automating the configuration of an internet-facing network load balancer and auto-scaling group of stateless Secure Public Access proxies to expose your MSK cluster via the public internet, Kafka clients can connect, publish messages and subscribe to topics in your Amazon MSK cluster from outside AWS.",-1)),t("p",null,[e[1]||(e[1]=o("You will need to choose a wildcard DNS pattern to use for public internet access to the brokers in your Kafka cluster. These wildcard DNS names must resolve to the public IP address(es) where the ")),l(s),e[2]||(e[2]=o(" proxy is deployed. The ")),l(s),e[3]||(e[3]=o(" proxy must also be configured with a TLS server certificate representing the same wildcard DNS pattern."))]),t("p",null,[e[4]||(e[4]=o("The ")),l(s),e[5]||(e[5]=o(" proxy can securely expose any Kafka cluster with these deployment options."))]),e[29]||(e[29]=r('<h2 id="amazon-msk" tabindex="-1"><a class="header-anchor" href="#amazon-msk"><span>Amazon MSK</span></a></h2><p>The <a href="https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44" target="_blank" rel="noopener noreferrer">Zilla Plus for Amazon MSK</a> Secure Public Access proxy lets authorized Kafka clients connect, publish messages and subscribe to topics in your Amazon MSK cluster via the internet.</p><h3 id="deploy-with-terraform" tabindex="-1"><a class="header-anchor" href="#deploy-with-terraform"><span>Deploy with Terraform</span></a></h3><p>Follow the <a href="https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdktf/secure-public-access" target="_blank" rel="noopener noreferrer">Secure Public Access with Terraform</a> guide to generated or deploy a custom Terraform template using <a href="https://developer.hashicorp.com/terraform/cdktf" target="_blank" rel="noopener noreferrer">CDKTF</a>. This Terraform script can be configured to deploy <code>SASL/SCRAM authentication</code>, <code>Mutual TLS (mTLS) authentication</code> or <code>Unauthorized access</code> to setup connectivity to your MSK cluster with a wildcard DNS pattern.</p><h3 id="deploy-with-cloudformation" tabindex="-1"><a class="header-anchor" href="#deploy-with-cloudformation"><span>Deploy with CloudFormation</span></a></h3><h4 id="sasl-scram-authentication" tabindex="-1"><a class="header-anchor" href="#sasl-scram-authentication"><span>SASL/SCRAM authentication</span></a></h4>',6)),t("p",null,[e[7]||(e[7]=o("Follow the ")),l(a,{to:"/solutions/how-tos/amazon-msk/secure-public-access/production.html"},{default:i(()=>e[6]||(e[6]=[o("Secure Public Access via SASL/SCRAM authentication")])),_:1}),e[8]||(e[8]=o(" guide to setup connectivity to your MSK cluster using a globally trusted TLS server certificate with a wildcard DNS pattern ")),e[9]||(e[9]=t("code",null,"*.example.aklivity.io",-1)),e[10]||(e[10]=o(" to illustrate the steps."))]),e[30]||(e[30]=t("h4",{id:"mutual-tls-mtls-authentication",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mutual-tls-mtls-authentication"},[t("span",null,"Mutual TLS (mTLS) authentication")])],-1)),t("p",null,[e[12]||(e[12]=o("Follow the ")),l(a,{to:"/solutions/how-tos/amazon-msk/secure-public-access/production-mutual-tls.html"},{default:i(()=>e[11]||(e[11]=[o("Secure Public Access via mTLS")])),_:1}),e[13]||(e[13]=o(" guide to setup connectivity to your MSK cluster using a globally trusted TLS server certificate with a wildcard DNS pattern ")),e[14]||(e[14]=t("code",null,"*.example.aklivity.io",-1)),e[15]||(e[15]=o(" to illustrate the steps."))]),e[31]||(e[31]=t("h4",{id:"unauthorized-access",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#unauthorized-access"},[t("span",null,"Unauthorized access")])],-1)),t("p",null,[e[17]||(e[17]=o("Follow the ")),l(a,{to:"/solutions/how-tos/amazon-msk/secure-public-access/development.html"},{default:i(()=>e[16]||(e[16]=[o("Secure Public Access via Unauthorized access")])),_:1}),e[18]||(e[18]=o(" guide to setup connectivity to your MSK cluster using a locally trusted TLS server certificate with the example wildcard DNS pattern ")),e[19]||(e[19]=t("code",null,"*.aklivity.example.com",-1)),e[20]||(e[20]=o("."))]),e[32]||(e[32]=r('<h2 id="confluent-cloud" tabindex="-1"><a class="header-anchor" href="#confluent-cloud"><span>Confluent Cloud</span></a></h2><p>The <a href="https://aws.amazon.com/marketplace/pp/prodview-eblxkinsqbaks" target="_blank" rel="noopener noreferrer">Zilla Plus for Confluent Cloud</a> Secure Public Access proxy lets authorized Kafka clients connect, publish messages and subscribe to topics in your Confluent Cloud cluster via the internet.</p><h3 id="deploy-with-cloudformation-1" tabindex="-1"><a class="header-anchor" href="#deploy-with-cloudformation-1"><span>Deploy with CloudFormation</span></a></h3>',3)),t("p",null,[e[22]||(e[22]=o("Follow the ")),l(a,{to:"/solutions/how-tos/confluent-cloud/secure-public-access.html"},{default:i(()=>e[21]||(e[21]=[o("Secure Public Access via SASL/SCRAM authentication")])),_:1}),e[23]||(e[23]=o(" guide to setup connectivity to your MSK cluster using a globally trusted TLS server certificate with a wildcard DNS pattern ")),e[24]||(e[24]=t("code",null,"*.example.aklivity.io",-1)),e[25]||(e[25]=o(" to illustrate the steps."))])])}const k=u(m,[["render",y],["__file","secure-public-access.html.vue"]]),g=JSON.parse('{"path":"/solutions/concepts/kafka-proxies/secure-public-access.html","title":"Secure Public Access","lang":"en-US","frontmatter":{"redirectFrom":"/solutions/how-tos/amazon-msk/secure-public-access/overview.html","icon":"aky-zilla-plus","description":"Securely access your Kafka cluster via the internet.","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/solutions/concepts/kafka-proxies/secure-public-access.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"Secure Public Access"}],["meta",{"property":"og:description","content":"Securely access your Kafka cluster via the internet."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Secure Public Access\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Amazon MSK","slug":"amazon-msk","link":"#amazon-msk","children":[{"level":3,"title":"Deploy with Terraform","slug":"deploy-with-terraform","link":"#deploy-with-terraform","children":[]},{"level":3,"title":"Deploy with CloudFormation","slug":"deploy-with-cloudformation","link":"#deploy-with-cloudformation","children":[{"level":4,"title":"SASL/SCRAM authentication","slug":"sasl-scram-authentication","link":"#sasl-scram-authentication","children":[]},{"level":4,"title":"Mutual TLS (mTLS) authentication","slug":"mutual-tls-mtls-authentication","link":"#mutual-tls-mtls-authentication","children":[]},{"level":4,"title":"Unauthorized access","slug":"unauthorized-access","link":"#unauthorized-access","children":[]}]}]},{"level":2,"title":"Confluent Cloud","slug":"confluent-cloud","link":"#confluent-cloud","children":[{"level":3,"title":"Deploy with CloudFormation","slug":"deploy-with-cloudformation-1","link":"#deploy-with-cloudformation-1","children":[]}]}],"readingTime":{"minutes":1.61,"words":482},"filePathRelative":"solutions/concepts/kafka-proxies/secure-public-access.md"}');export{k as comp,g as data};
