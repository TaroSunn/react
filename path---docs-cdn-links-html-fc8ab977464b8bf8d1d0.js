webpackJsonp([0xb4357dff7839],{741:function(a,n){a.exports={data:{markdownRemark:{html:'<p>The UMD builds of React and ReactDOM are available over a CDN.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@16/umd/react.development.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react-dom@16/umd/react-dom.development.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The versions above are only meant for development, and are not suitable for production. Minified and optimized production versions of React are available at:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@16/umd/react.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react-dom@16/umd/react-dom.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>To load a specific version of <code>react</code> and <code>react-dom</code>, replace <code>16</code> with the version number.</p>\n<h3 id="why-the-crossorigin-attribute"><a href="#why-the-crossorigin-attribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why the <code>crossorigin</code> Attribute?</h3>\n<p>If you serve React from a CDN, we recommend to keep the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes"><code>crossorigin</code></a> attribute set:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>We also recommend to verify that the CDN you are using sets the <code>Access-Control-Allow-Origin: *</code> HTTP header:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-dd807.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 350px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.57142857142857%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB1ElEQVQoz5VSbY+aQBD2//+QJrW9NJc2/WoVFUVA4BBwFw4ORGB5E3yvRu+R8/qpbdon2WRmd56ZZ2a2tW6QJEkURXEcb7dbxlhVVXVdHw6HLMtWDXCPMLhlWV4ul2uD1mazQajruoQQ27Zhx0n80gBPnuc5juP7fhiGcIMggHs8Hn82aOV5TimdNYBx+R+0cJADuYt3QP9utyvL1aqq1uvNbr+v6zXcfWOsbg3hesPSrPWmXlGU6XSqqiqU67oOeXlRhlFMbacoyizPXe8lXEYJS1maZlmO+SzC5Z08Go2GwyHP88jS6XQmkwk34BhLXc+//hl3crfb5TjONE2k6PV6i3jxPf02EkTU/CcyqoEJ5f1+H3xoAdO0yI/ewPcDYSIZ1lwQZVFWoB+98OPJnTwejyVJQrdYmCzLmqZhchah6M+aUz9YUPs5ThLdMD0/INQ2zDnGcZv2+Xx++yrYJOaM/4Btwz6dTng6vePc4JeNyNueDcOAZlEUUdyyLL4B9OPDXf+Ku2xT+TKTPulS2zMfjelnVfg4Vx/EwYeZ1Cbqw5PYpvrXnJHfk6klGBoXuIpnC+YTZ+p9Fs2INY4XepGSZ3vqOXLK/NuqE7aM4jmhmj57BW5DwxtkN/4BAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Access-Control-Allow-Origin: *"\n        title=""\n        src="/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-dd807.png"\n        srcset="/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-caff8.png 210w,\n/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-dd807.png 350w"\n        sizes="(max-width: 350px) 100vw, 350px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>This enables a better <a href="/blog/2017/07/26/error-handling-in-react-16.html">error handling experience</a> in React 16 and later.</p>',frontmatter:{title:"CDN Links",next:"hello-world.html",prev:"add-react-to-an-existing-app.html"},fields:{path:"docs/cdn-links.md",slug:"docs/cdn-links.html"}}},pathContext:{slug:"docs/cdn-links.html"}}}});
//# sourceMappingURL=path---docs-cdn-links-html-fc8ab977464b8bf8d1d0.js.map