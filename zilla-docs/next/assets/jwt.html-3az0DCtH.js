import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as e,o as n}from"./app-CKeM1Wjf.js";const t={};function l(p,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="jwt-guard" tabindex="-1"><a class="header-anchor" href="#jwt-guard"><span>jwt Guard</span></a></h1><p>Defines a guard with <code>JSON Web Token (JWT)</code> support.</p><p>The <code>jwt</code> guard uses public keys to verify the integrity of <code>JWT</code> access tokens when identifying authorized subjects and their associated roles scope. The token issuer and audience can also be constrained to prevent access tokens from other applications from being reused inappropriately.</p><p>Each verified JWT access token has an expiration time, and an optional challenge window prior to the expiration time that can be used by specific protocol bindings to send a challenge to renew the access token before it expires.</p><p>If using an Identity Provider that exposes a <code>.well-known/jwks.json</code> file, simply provide the <code>issuer</code> and <code>audience</code>. The JWKS will be fetched, remotely.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">guards</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  my_jwt_guard</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">jwt</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      issuer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">https://auth.example.com</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      audience</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">https://api.example.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Manual configuration is also supported.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">guards</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line highlighted"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  my_jwt_guard</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    type</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">jwt</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">    options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      issuer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">https://auth.example.com</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      audience</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">https://api.example.com</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      keys</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">kty</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">EC</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          crv</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">P-256</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          x</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">MKBCTNIcKUSDii11ySs3526iDZ8AiTo7Tu6KPAqv7D4</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">          y</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">4Etl6SRW2YiLUrN5vfvVHuhp7x8PxltmWWlbbM4IFyM</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          use</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">enc</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          kid</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">kty</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">RSA</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">          n</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx4cbbfAAtVT86zwu1RK7aPFFxuhDR1L6tSoc_BJECPebWKRXjBZCiFV4n3oknjhMstn64tZ_2W-5JsGY4Hc5n9yBXArwl93lqt7_RN5w6Cf0h4QyQ5v-65YGjQR0_FDW2QvzqY368QQMicAtaSqzs8KJZgnYb9c7d0zgdAZHzu6qMQvRL5hajrn1n91CbOpbISD08qNLyrdkt-bFTWhAI4vMQFh6WeZu0fM4lFd2NcRwr3XPksINHaQ-G_xBniIqbw0Ls1jF44-csFCur-kEgU8awapJzKnqDKgw</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          e</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">AQAB</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          alg</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">RS256</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">          kid</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;2011-04-29&quot;</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      challenge</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">30</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration-required" tabindex="-1"><a class="header-anchor" href="#configuration-required"><span>Configuration (* required)</span></a></h2><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options*</span></a></h3><blockquote><p><code>object</code></p></blockquote><p>The <code>jwt</code> specific options.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">options</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  issuer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">https://auth.example.com</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  audience</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">https://api.example.com</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  challenge</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">30</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">  keys</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">kty</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">EC</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      crv</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">P-256</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      x</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">MKBCTNIcKUSDii11ySs3526iDZ8AiTo7Tu6KPAqv7D4</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">      y</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">4Etl6SRW2YiLUrN5vfvVHuhp7x8PxltmWWlbbM4IFyM</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      use</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">enc</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      kid</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    - </span><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">kty</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">RSA</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">      n</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx4cbbfAAtVT86zwu1RK7aPFFxuhDR1L6tSoc_BJECPebWKRXjBZCiFV4n3oknjhMstn64tZ_2W-5JsGY4Hc5n9yBXArwl93lqt7_RN5w6Cf0h4QyQ5v-65YGjQR0_FDW2QvzqY368QQMicAtaSqzs8KJZgnYb9c7d0zgdAZHzu6qMQvRL5hajrn1n91CbOpbISD08qNLyrdkt-bFTWhAI4vMQFh6WeZu0fM4lFd2NcRwr3XPksINHaQ-G_xBniIqbw0Ls1jF44-csFCur-kEgU8awapJzKnqDKgw</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      e</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">AQAB</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      alg</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#0000FF;--shiki-dark:#CE9178;">RS256</span></span>
<span class="line"><span style="--shiki-light:#800000;--shiki-dark:#569CD6;">      kid</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;2011-04-29&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="options-issuer" tabindex="-1"><a class="header-anchor" href="#options-issuer"><span>options.issuer</span></a></h4><blockquote><p><code>string</code></p></blockquote><p>Issuer claim.</p><h4 id="options-audience" tabindex="-1"><a class="header-anchor" href="#options-audience"><span>options.audience</span></a></h4><blockquote><p><code>string</code></p></blockquote><p>Audience claim.</p><h4 id="options-challenge" tabindex="-1"><a class="header-anchor" href="#options-challenge"><span>options.challenge</span></a></h4><blockquote><p><code>integer</code></p></blockquote><p>Challenge period (seconds).</p><h4 id="options-keys" tabindex="-1"><a class="header-anchor" href="#options-keys"><span>options.keys</span></a></h4><blockquote><p><code>string</code>, <code>array</code> of <code>object</code></p></blockquote><p>If not provided, the <code>jwt</code> vault relies on the issuer to infer the location of a remote <code>.well-known/jwks.json</code> file.</p><p>If a <code>string</code> is provided, the value is expected to be a URI.</p><p>If an <code>array</code> of objects is provided, the value is expected to be a list of object with the supported keys and their values.</p><div class="hint-container note"><p class="hint-container-title">Supported keys</p><p><strong>kty</strong>: <code>string</code></p><blockquote><p>Key type, e.g. &quot;RSA&quot; , &quot;EC&quot;.</p></blockquote><p><strong>kid</strong>: <code>string</code></p><blockquote><p>Key ID.</p></blockquote><p><strong>n</strong>: <code>string</code></p><blockquote><p>&quot;RSA&quot; modulus.</p></blockquote><p><strong>e</strong>: <code>string</code></p><blockquote><p>&quot;RSA&quot; exponent.</p></blockquote><p><strong>alg</strong>: <code>string</code></p><blockquote><p>&quot;RSA&quot; algorithm, e.g. &quot;RS256&quot;.</p></blockquote><p><strong>crv</strong>: <code>string</code></p><blockquote><p>&quot;EC&quot; curve name.</p></blockquote><p><strong>x</strong>: <code>string</code></p><blockquote><p>&quot;EC&quot; point X coordinate.</p></blockquote><p><strong>y</strong>: <code>string</code></p><blockquote><p>&quot;EC&quot; point Y coordinate.</p></blockquote></div>`,28)]))}const d=i(t,[["render",l],["__file","jwt.html.vue"]]),r=JSON.parse('{"path":"/reference/config/guards/jwt.html","title":"jwt Guard","lang":"en-US","frontmatter":{"redirectFrom":"/reference/config/guards/guard-jwt.html","shortTitle":"jwt","category":["Guard"],"tag":["jwt"],"description":"jwt Guard Defines a guard with JSON Web Token (JWT) support. The jwt guard uses public keys to verify the integrity of JWT access tokens when identifying authorized subjects and...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://docs.aklivity.io/zilla-docs/next/reference/config/guards/jwt.html"}],["meta",{"property":"og:site_name","content":"Documentation"}],["meta",{"property":"og:title","content":"jwt Guard"}],["meta",{"property":"og:description","content":"jwt Guard Defines a guard with JSON Web Token (JWT) support. The jwt guard uses public keys to verify the integrity of JWT access tokens when identifying authorized subjects and..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"jwt"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jwt Guard\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Configuration (* required)","slug":"configuration-required","link":"#configuration-required","children":[{"level":3,"title":"options*","slug":"options","link":"#options","children":[{"level":4,"title":"options.issuer","slug":"options-issuer","link":"#options-issuer","children":[]},{"level":4,"title":"options.audience","slug":"options-audience","link":"#options-audience","children":[]},{"level":4,"title":"options.challenge","slug":"options-challenge","link":"#options-challenge","children":[]},{"level":4,"title":"options.keys","slug":"options-keys","link":"#options-keys","children":[]}]}]}],"readingTime":{"minutes":1.21,"words":364},"filePathRelative":"reference/config/guards/jwt.md","autoDesc":true}');export{d as comp,r as data};
