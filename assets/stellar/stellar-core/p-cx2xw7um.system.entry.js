System.register(["./p-afdfa3ab.system.js"],function(t){"use strict";var n,e;return{setters:[function(t){n=t.c,e=t.d}],execute:function(){var o=function(){function t(t){n(this,t),this.content=""}return t.prototype.componentWillLoad=function(){if(null!=this.documentLocation)return this.fetchNewContent(this.documentLocation)},t.prototype.fetchNewContent=function(t){var n=this;return fetch(t).then(function(t){return t.text()}).then(function(t){n.content=t})},t.prototype.render=function(){return e("div",{innerHTML:this.content})},Object.defineProperty(t,"watchers",{get:function(){return{documentLocation:["fetchNewContent"]}},enumerable:!0,configurable:!0}),t}();t("stencil_async_content",o)}}});