System.register(["./p-6f2a0351.system.js","./p-b5b60e59.system.js"],function(e,t){"use strict";var n,i,s;return{setters:[function(e){n=e.d;i=e.g},function(e){s=e.a}],execute:function(){var t=function(){function e(e){n(this,e);this.when=true;this.message=""}e.prototype.enable=function(e){if(this.unblock){this.unblock()}if(this.history){this.unblock=this.history.block(e)}};e.prototype.disable=function(){if(this.unblock){this.unblock();this.unblock=undefined}};e.prototype.componentWillLoad=function(){if(this.when){this.enable(this.message)}};e.prototype.updateMessage=function(e,t){if(this.when){if(!this.when||t!==e){this.enable(this.message)}}else{this.disable()}};e.prototype.componentDidUnload=function(){this.disable()};e.prototype.render=function(){return null};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{message:["updateMessage"],when:["updateMessage"]}},enumerable:true,configurable:true});return e}();e("stencil_router_prompt",t);s.injectProps(t,["history"])}}});