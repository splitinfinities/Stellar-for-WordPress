System.register(["./p-afdfa3ab.system.js"],function(t){"use strict";var e,n;return{setters:[function(t){e=t.c,n=t.f}],execute:function(){var r=function(){function t(t){e(this,t),this.context={},this.renderer=function(){return null}}return t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=function(){null!=t.subscribe&&t.subscribe(t.el,"context")}},t.prototype.componentDidUnload=function(){null!=this.unsubscribe&&this.unsubscribe()},t.prototype.render=function(){return this.renderer(Object.assign({},this.context))},Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:!0,configurable:!0}),t}();t("context_consumer",r)}}});