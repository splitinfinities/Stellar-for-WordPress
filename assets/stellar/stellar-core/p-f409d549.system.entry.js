System.register(["./p-090ab129.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.r;n=e.g}],execute:function(){var i=e("stellar_intersection",function(){function e(e){t(this,e);this.in=function(){};this.out=function(){};this.margin="0%"}e.prototype.componentWillLoad=function(){if(!this.element){this.element=this.el}this.addIntersectionObserver()};e.prototype.componentDidUnload=function(){this.removeIntersectionObserver()};e.prototype.addIntersectionObserver=function(){var e=this;try{if("IntersectionObserver"in window){this.io=new IntersectionObserver((function(t){if(!e.multiple){if(t[0].isIntersecting){e.in();e.removeIntersectionObserver()}}else{if(t[0].isIntersecting){e.in()}else{e.out()}}}),{rootMargin:this.margin,threshold:[0]});if(typeof this.element==="string"&&this.element.constructor.name==="String"){this.io.observe(document.querySelector(this.element))}else{this.io.observe(this.element)}}}catch(t){}};e.prototype.removeIntersectionObserver=function(){if(this.io){this.io.disconnect();this.io=null}};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return e}())}}}));