System.register(["./p-43f53497.system.js","./p-407c359e.system.js"],(function(t){"use strict";var e,i,s,n;return{setters:[function(t){e=t.r;i=t.h;s=t.d},function(t){n=t.I}],execute:function(){var r=t("stellar_360_image",function(){function t(t){e(this,t);this.nolazyload=false;this.width=1280;this.height=720;this.ready=false}t.prototype.componentDidLoad=function(){this.image=this.element.querySelector(".image");if(this.nolazyload){this.in()}};t.prototype.in=function(){if(!this.viewer){this.viewer=new n({source:this.src,container:this.image,width:this.width,height:this.height})}this.viewer.render();this.ready=true};t.prototype.out=function(){this.viewer.destroy();this.ready=false};t.prototype.render=function(){return i("div",null,i("div",{class:"image"}),i("div",{class:"overlay"}),!this.nolazyload&&i("stellar-intersection",{element:this.element,multiple:true,in:this.in.bind(this),out:this.out.bind(this),margin:"50%"}),!this.ready&&i("skeleton-img",{width:this.width,height:this.height}))};Object.defineProperty(t.prototype,"element",{get:function(){return s(this)},enumerable:true,configurable:true});return t}())}}}));