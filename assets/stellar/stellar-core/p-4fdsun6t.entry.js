import{c as e,d as t,f as n}from"./p-9ed7c17e.js";import{a,d as r}from"./p-c16f1b5d.js";import{a as s}from"./p-9ca97b6b.js";var i=a(function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,s,i=a.util.type(t);switch(n=n||{},i){case"Object":if(s=a.util.objId(t),n[s])return n[s];for(var o in n[s]=r={},t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return s=a.util.objId(t),n[s]?n[s]:(n[s]=r=[],t.forEach(function(t,a){r[a]=e(t,n)}),r);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var s=(r=r||a.languages)[e],i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=s[o])}var c=r[e];return r[e]=i,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=i)}),i},DFS:function e(t,n,r,s){s=s||{};var i=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],c=a.util.type(l);"Object"!==c||s[i(l)]?"Array"!==c||s[i(l)]||(s[i(l)]=!0,e(l,n,o,s)):(s[i(l)]=!0,e(l,n,null,s))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var s,i=r.elements||e.querySelectorAll(r.selector),o=0;s=i[o++];)a.highlightElement(s,!0===t,r.callback)},highlightElement:function(n,r,s){for(var i,o,l=n;l&&!t.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(t)||[,""])[1].toLowerCase(),o=a.languages[i]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i,n.parentNode&&/pre/i.test((l=n.parentNode).nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var c={element:n,language:i,grammar:o,code:n.textContent},u=function(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),s&&s.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(e,t,n){var s={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",s),s.tokens=a.tokenize(s.code,s.grammar),a.hooks.run("after-tokenize",s),r.stringify(a.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,n,s,i,o,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==l)return;var u=n[c];u="Array"===a.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var p=u[d],g=p.inside,m=!!p.lookbehind,h=!!p.greedy,f=0,b=p.alias;if(h&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var v=s,w=i;v<t.length;w+=t[v].length,++v){var k=t[v];if(t.length>e.length)return;if(!(k instanceof r)){if(h&&v!=t.length-1){if(p.lastIndex=w,!(C=p.exec(e)))break;for(var x=C.index+(m?C[1].length:0),F=C.index+C[0].length,A=v,S=w,$=t.length;A<$&&(S<F||!t[A].type&&!t[A-1].greedy);++A)x>=(S+=t[A].length)&&(++v,w=S);if(t[v]instanceof r)continue;N=A-v,k=e.slice(w,S),C.index-=w}else{p.lastIndex=0;var C=p.exec(k),N=1}if(C){m&&(f=C[1]?C[1].length:0),F=(x=C.index+f)+(C=C[0].slice(f)).length;var j=k.slice(0,x),P=k.slice(F),E=[v,N];j&&(++v,w+=j.length,E.push(j));var T=new r(c,g?a.tokenize(C,g):C,b,C,h);if(E.push(T),P&&E.push(P),Array.prototype.splice.apply(t,E),1!=N&&a.matchGrammar(e,t,n,v,w,!0,c),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,s=0;r=n[s++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}if(e.Prism=a,r.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var s={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,i)}a.hooks.run("wrap",s);var o=Object.keys(s.attributes).map(function(e){return e+'="'+(s.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+(o?" "+o:"")+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),r=n.language,s=n.immediateClose;e.postMessage(a.highlight(n.code,a.languages[r],r)),s&&e.close()},!1),a):a;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(a.filename=s.src,a.manual||s.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==r&&(r.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},t.languages.insertBefore("markup","cdata",s)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,r=e.getAttribute("data-src"),s=e,i=/\blang(?:uage)?-([\w-]+)\b/i;s&&!i.test(s.className);)s=s.parentNode;if(s&&(a=(e.className.match(i)||[,""])[1]),!a){var o=(r.match(/\.(\w+)$/)||[,""])[1];a=n[o]||o}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,t.highlightElement(l),e.setAttribute("data-src-loaded","")):l.textContent=c.status>=400?"✖ Error "+c.status+" while fetching file: "+c.statusText:"✖ Error: File does not exist or is empty")},c.send(null)}}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))});!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=/\n(?!$)/g,t=function(t){var a=n(t)["white-space"];if("pre-wrap"===a||"pre-line"===a){var r=t.querySelector("code"),s=t.querySelector(".line-numbers-rows"),i=t.querySelector(".line-numbers-sizer"),o=r.textContent.split(e);i||((i=document.createElement("span")).className="line-numbers-sizer",r.appendChild(i)),i.style.display="block",o.forEach(function(e,t){i.textContent=e||"\n";var n=i.getBoundingClientRect().height;s.children[t].style.height=n+"px"}),i.textContent="",i.style.display="none"}},n=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"),t)}),Prism.hooks.add("complete",function(n){if(n.code){var a=n.element,r=a.parentNode;if(r&&/pre/i.test(r.nodeName)&&!a.querySelector(".line-numbers-rows")){for(var s=!1,i=/(?:^|\s)line-numbers(?:\s|$)/,o=a;o;o=o.parentNode)if(i.test(o.className)){s=!0;break}if(s){a.className=a.className.replace(i," "),i.test(r.className)||(r.className+=" line-numbers");var l,c=n.code.match(e),u=new Array((c?c.length+1:1)+1).join("<span></span>");(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=u,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),n.element.appendChild(l),t(r),Prism.hooks.run("line-numbers",n)}}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains("line-numbers")){var n=e.querySelector(".line-numbers-rows"),a=parseInt(e.getAttribute("data-start"),10)||1,r=a+(n.children.length-1);return t<a&&(t=a),t>r&&(t=r),n.children[t-a]}}}}}(),a(function(e){!function(){var t=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};function n(e){this.defaults=t({},e)}function a(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}n.prototype={setDefaults:function(e){this.defaults=t(this.defaults,e)},normalize:function(e,n){for(var a in n=t(this.defaults,n)){var r=a.replace(/-(\w)/g,function(e,t){return t.toUpperCase()});"normalize"!==a&&"setDefaults"!==r&&n[a]&&this[r]&&(e=this[r].call(this,e,n[a]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort(function(e,t){return e.length-t.length}),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var n=e.split("\n"),r=0;r<n.length;++r)if(!(a(n[r])<=t)){for(var s=n[r].split(/(\s+)/g),i=0,o=0;o<s.length;++o){var l=a(s[o]);(i+=l)>t&&(s[o]="\n"+s[o],i=l)}n[r]=s.join("")}return n.join("\n")}},e.exports&&(e.exports=n),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var t=Prism.plugins.NormalizeWhitespace;if(!e.settings||!1!==e.settings["whitespace-normalization"])if(e.element&&e.element.parentNode||!e.code){var n=e.element.parentNode,a=/(?:^|\s)no-whitespace-normalization(?:\s|$)/;if(e.code&&n&&"pre"===n.nodeName.toLowerCase()&&!a.test(n.className)&&!a.test(e.element.className)){for(var r=n.childNodes,s="",i="",o=!1,l=0;l<r.length;++l){var c=r[l];c==e.element?o=!0:"#text"===c.nodeName&&(o?i+=c.nodeValue:s+=c.nodeValue,n.removeChild(c),--l)}e.element.children.length&&Prism.plugins.KeepMarkup?(e.element.innerHTML=t.normalize(s+e.element.innerHTML+i,e.settings),e.code=e.element.textContent):(e.code=s+e.code+i,e.code=t.normalize(e.code,e.settings))}}else e.code=t.normalize(e.code,e.settings)}))}()}),Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),Prism.languages.ts=Prism.languages.typescript,function(e){var t={variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[\w#?*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,greedy:!0,inside:t}],variable:t.variable,function:{pattern:/(^|[\s;|&])(?:add|alias|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|hash|head|help|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logout|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tail|tar|tee|test|time|timeout|times|top|touch|tr|traceroute|trap|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zip|zypper)(?=$|[\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,lookbehind:!0},boolean:{pattern:/(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var n=t.variable[1].inside;n.string=e.languages.bash.string,n.function=e.languages.bash.function,n.keyword=e.languages.bash.keyword,n.boolean=e.languages.bash.boolean,n.operator=e.languages.bash.operator,n.punctuation=e.languages.bash.punctuation,e.languages.shell=e.languages.bash}(Prism);class o{constructor(t){e(this,t),this.language="html",this.simple=!1,this.copy=!0,this.copied=!1,this.expanded=!1,this.expandable=!1,this.randomName=Math.round(1e4*Math.random()),this.preview=!0,this.feature=!1}componentWillLoad(){this.getCode()}componentDidLoad(){this.highlight(),new MutationObserver(e=>{e.forEach(()=>{this.getCode()})}).observe(this.element,{characterData:!0,subtree:!0})}componentWillUpdate(){this.getCode()}componentDidUpdate(){this.highlight()}replaceAll(e,t,n){return e.replace(new RegExp(t,"g"),n)}async highlight(){var e=this.element.shadowRoot.querySelector("code");i.highlightElement(e,!1)}async result(){return e=this.code,(new DOMParser).parseFromString(e,"text/html").documentElement.textContent;var e}async clipboard(){const e=await this.result();s.copyPlain(e)}async setCode(e){this.code=e}getCode(){if(this.codeString)this.code=this.codeString.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;");else{let e=this.element.querySelector("template");if(e){const t=Array.from(e.classList).filter(e=>e.includes("language-"));1===t.length&&(this.language=t[0].substr(9)),e=e.innerHTML?e.innerHTML:Array.from(e.children).map(e=>e.outerHTML).join(),this.raw=e,this.code=e.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}}}renderPreview(){return t("section",{class:"preview flush"},t("div",{class:"result",innerHTML:this.raw}))}renderCode(){return t("pre",{"aria-label":`The ${this.language} code`,tabindex:0},t("code",{class:`language-${this.language}`,innerHTML:this.code}),t("div",{class:"hidden"},t("slot",null,t("template",null,t("p",null,"There's no code here!")))))}render(){return this.simple?this.renderCode():t("stellar-card",{shadow:"light",padding:"small"},this.feature&&t("header",null,t("slot",{name:"feature"}),t("slot",{name:"property"})),this.preview&&this.renderPreview(),t("footer",{class:"code"},this.renderCode()))}get element(){return n(this)}static get style(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host ::-webkit-scrollbar{-webkit-appearance:none;cursor:pointer;width:6px;height:6px}:host ::-webkit-scrollbar-track{background:transparent;mix-blend-mode:hard-light;background:var(--theme-base0,var(--gray0))}:host ::-webkit-scrollbar-thumb{cursor:pointer;display:block;background:var(--theme-base7,var(--gray7))}:host ::-webkit-scrollbar-thumb:window-inactive{background:transparent}:host ::-webkit-scrollbar-thumb:hover{cursor:pointer;background:var(--theme-base5,var(--gray5))}:host{display:block;width:100%;overflow:auto;background:var(--gray0);letter-spacing:0}:host stellar-card{--background:var(--white)}:host([simple]){padding:1rem}:host header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host footer{width:100%;overflow:auto;background:var(--gray0)}:host .hidden{display:none}:host pre{margin:0;padding:0;line-height:2;-moz-tab-size:4;-o-tab-size:4;tab-size:4;word-break:break-word;white-space:pre-wrap;color:var(--gray1);font-size:1rem;font-weight:400}:host code[class*=language-],:host pre[class*=language-]{background:none;text-align:left;text-shadow:0 1px var(--gray1);line-height:1.5rem;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;word-break:normal;word-wrap:normal;word-spacing:normal;white-space:pre;color:var(--gray9);font-family:Hack,monospace;font-size:1rem;width:0}:host code{display:block}:host span{font-size:1rem}:host pre>.token{display:inline-block}:host pre .token{line-height:1.5rem!important;font-family:Hack,monospace;font-size:1rem!important}:host pre .token.cdata,:host pre .token.comment,:host pre .token.doctype,:host pre .token.prolog,:host pre .token.punctuation{color:var(--gray7)}:host pre .namespace{opacity:.7}:host pre .token.boolean,:host pre .token.constant,:host pre .token.deleted,:host pre .token.number,:host pre .token.property,:host pre .token.symbol,:host pre .token.tag{color:var(--cyan5)}:host pre .token.attr-name,:host pre .token.builtin,:host pre .token.char,:host pre .token.inserted,:host pre .token.selector,:host pre .token.string{color:var(--green5)}:host pre.language-css .token.string,:host pre.style .token.string,:host pre .token.entity,:host pre .token.operator,:host pre .token.url{color:var(--yellow5);font-family:Hack,monospace}:host pre .token.atrule,:host pre .token.attr-value,:host pre .token.keyword{color:var(--cyan5)}:host pre .token.function{color:var(--blue5)}:host pre .token.important,:host pre .token.regex,:host pre .token.variable{color:var(--red5)}:host pre .token.bold,:host pre .token.important{font-weight:700}:host pre .token.italic{font-style:italic}:host pre .token.entity{cursor:help}:host pre.show-line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}:host pre.show-line-numbers>code{position:relative;white-space:inherit}:host pre.show-line-numbers .line-numbers-rows{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;top:.125em;left:-3.8em;border-right:1px solid var(--gray8);width:3em;line-height:1.5rem;letter-spacing:-1px;font-size:1rem}:host pre.show-line-numbers .line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber;line-height:1.5rem;font-size:1rem}:host pre.show-line-numbers .line-numbers-rows>span:before{content:counter(linenumber);display:block;padding-right:.8em;text-align:right;line-height:1.5rem;color:var(--gray8);font-size:1rem}:host .token.cr,:host .token.lf,:host .token.space,:host .token.tab:not(:empty){display:inline;position:relative}:host .token.cr:before,:host .token.lf:before,:host .token.space:before,:host .token.tab:not(:empty):before{position:absolute;color:var(--gray8)}:host pre.show-invisibles .token.tab:not(:empty):before{content:\"────\"}:host pre.show-invisibles .token.cr:before{content:\"␍\"}:host pre.show-invisibles .token.crlf:before{content:\"␍␊\"}:host pre.show-invisibles .token.lf:before{content:\"␊\"}:host pre.show-invisibles .token.space:before{content:\"·\"}:host-context(.dark-mode),:host-context(.dark-mode) footer{background:var(--gray9)}:host-context(.dark-mode) stellar-card{--background:var(--black)}:host-context(.dark-mode) code[class*=language-],:host-context(.dark-mode) pre[class*=language-]{color:var(--gray1);text-shadow:0 1px var(--gray9)}:host-context(.dark-mode) pre .token.cdata,:host-context(.dark-mode) pre .token.comment,:host-context(.dark-mode) pre .token.doctype,:host-context(.dark-mode) pre .token.prolog,:host pre .token.punctuation{color:var(--gray5)}:host-context(.dark-mode) pre .token.boolean,:host-context(.dark-mode) pre .token.constant,:host-context(.dark-mode) pre .token.deleted,:host-context(.dark-mode) pre .token.number,:host-context(.dark-mode) pre .token.property,:host-context(.dark-mode) pre .token.symbol,:host-context(.dark-mode) pre .token.tag{color:var(--cyan5)}:host-context(.dark-mode) pre .token.attr-name,:host-context(.dark-mode) pre .token.builtin,:host-context(.dark-mode) pre .token.char,:host-context(.dark-mode) pre .token.inserted,:host-context(.dark-mode) pre .token.selector,:host-context(.dark-mode) pre .token.string{color:var(--green5)}:host-context(.dark-mode) pre.language-css .token.string,:host-context(.dark-mode) pre.style .token.string,:host-context(.dark-mode) pre .token.entity,:host-context(.dark-mode) pre .token.operator,:host-context(.dark-mode) pre .token.url{color:var(--yellow5);font-family:Hack,monospace}:host-context(.dark-mode) pre .token.atrule,:host-context(.dark-mode) pre .token.attr-value,:host-context(.dark-mode) pre .token.keyword{color:var(--cyan5)}:host-context(.dark-mode) pre .token.function{color:var(--blue5)}:host-context(.dark-mode) pre .token.important,:host-context(.dark-mode) pre .token.regex,:host-context(.dark-mode) pre .token.variable{color:var(--red5)}:host-context(.dark-mode) .token.cr:before,:host-context(.dark-mode) .token.lf:before,:host-context(.dark-mode) .token.space:before,:host-context(.dark-mode) .token.tab:not(:empty):before,:host-context(.dark-mode) pre.show-line-numbers .line-numbers-rows,:host-context(.dark-mode) pre.show-line-numbers .line-numbers-rows>span:before{color:var(--gray2)}"}}export{o as stellar_code};