import{r as t,d as s}from"./p-ea8e8140.js";const i=class{constructor(s){t(this,s),this.count=12,this.speed=.5,this.threedee=!1,this.dots=[],this.mouse={x:0,y:0}}componentWillLoad(){const t=this.element.querySelector("*:first-of-type");for(var s=0;s<this.count;s++){var i=new e(t,this.threedee,this.count,s);this.dots.push(i)}}componentDidLoad(){this.animate()}draw(){let t=this.mouse.x,s=this.mouse.y;this.dots.forEach((i,e,h)=>{var o=h[e+1]||h[0];i.x=t,i.y=s,i.draw(),t+=(o.x-i.x)*this.speed,s+=(o.y-i.y)*this.speed})}animate(){this.draw(),requestAnimationFrame(this.animate.bind(this))}handleMouseMove(t){this.mouse.x=t.clientX,this.mouse.y=t.clientY}get element(){return s(this)}static get style(){return".stellar-mouse-trail-element{contain:content;position:fixed;left:0;top:0;pointer-events:none}stellar-mouse-trail{display:none}"}};class e{constructor(t,s,i,e){this.x=0,this.y=0,this.z=0,this.draw=function(){this.node.style.transform=`translate3d(calc(${this.x}px - 50%), calc(${this.y}px - 50%), ${this.z}px)`};var h=t.cloneNode();h.className="stellar-mouse-trail-element",s?this.z=i-e:h.style.zIndex=i-e,document.body.appendChild(h),this.node=h}}export{i as stellar_mouse_trail};