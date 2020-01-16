import{r as t,h as a,g as r}from"./p-378b4685.js";import"./p-20de5b5b.js";import{T as e}from"./p-2fea32e1.js";const s=class{constructor(a){t(this,a),this.align="center",this.dark=!1,this.focused=!1}render(){return a("div",{class:"wrap"},a("div",{class:"after"}),a("slot",null))}get element(){return r(this)}static get style(){return':host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;position:absolute;width:100%;height:100%;top:0;z-index:2;font-size:1rem}:host .wrap{pointer-events:none;white-space:nowrap;position:absolute;top:-16px;left:50%;-webkit-transform:scale(0.7) translateY(-80%) translateX(-50%) translateZ(0);transform:scale(0.7) translateY(-80%) translateX(-50%) translateZ(0);-webkit-transform-origin:0 10px;transform-origin:0 10px;-webkit-transition:all 250ms var(--ease) 50ms;transition:all 250ms var(--ease) 50ms;opacity:0;margin:0 auto;background:var(--theme-complement9);padding:.65em .65em;width:auto;line-height:1.2;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:left;color:white}:host .wrap .after{position:absolute;right:0;bottom:-0.475em;left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin:0 auto;background:var(--theme-complement9);width:1em;height:1em;z-index:-1}:host(:hover) .wrap,:host([hover]) .wrap,:host(:focus) .wrap,:host([focus]) .wrap{-webkit-transform:scale(1) translateY(-100%) translateX(-50%) translateZ(0);transform:scale(1) translateY(-100%) translateX(-50%) translateZ(0);opacity:1}:host([align="left"]) .wrap,:host([align="top-left"]) .wrap{-webkit-transform:scale(0.7) translateY(-100%) translateX(0) translateZ(0);transform:scale(0.7) translateY(-100%) translateX(0) translateZ(0);left:0;-webkit-transform-origin:22px 22px;transform-origin:22px 22px}:host([align="left"]) .wrap .after,:host([align="top-left"]) .wrap .after{right:auto;left:1rem}:host([align="left"]:hover) .wrap,:host([align="left"][hover]) .wrap,:host([align="top-left"]:hover) .wrap,:host([align="top-left"][hover]) .wrap,:host([align="top-left"]:focus) .wrap,:host([align="top-left"][focus]) .wrap,:host([align="left"]:focus) .wrap,:host([align="left"][focus]) .wrap{-webkit-transform:scale(1) translateY(-100%) translateX(0) translateZ(0);transform:scale(1) translateY(-100%) translateX(0) translateZ(0)}:host([align="right"]) .wrap,:host([align="top-right"]) .wrap{-webkit-transform:scale(0.7) translateY(-100%) translateX(-100%) translateZ(0);transform:scale(0.7) translateY(-100%) translateX(-100%) translateZ(0);left:100%;-webkit-transform-origin:-22px 22px;transform-origin:-22px 22px}:host([align="right"]) .wrap .after,:host([align="top-right"]) .wrap .after{right:1rem;left:auto}:host([align="right"]:hover) .wrap,:host([align="top-right"]:hover) .wrap,:host([align="right"][hover]) .wrap,:host([align="top-right"][hover]) .wrap,:host([align="top-right"]:focus) .wrap,:host([align="top-right"][focus]) .wrap,:host([align="right"]:focus) .wrap,:host([align="right"][focus]) .wrap{-webkit-transform:scale(1) translateY(-100%) translateX(-100%) translateZ(0);transform:scale(1) translateY(-100%) translateX(-100%) translateZ(0)}:host([align="middle-left"]) .wrap{-webkit-transform:scale(0.7) translateY(-50%) translateX(-100%) translateZ(0);transform:scale(0.7) translateY(-50%) translateX(-100%) translateZ(0);top:50%;left:0;-webkit-transform-origin:-30px 0;transform-origin:-30px 0}:host([align="middle-left"]) .wrap .after{right:auto;left:calc(100% - 8px);top:calc(50% - 8px)}:host([align="middle-left"]:hover) .wrap,:host([align="middle-left"][hover]) .wrap,:host([align="middle-left"]:focus) .wrap,:host([align="middle-left"][focus]) .wrap{-webkit-transform:scale(1) translateY(-50%) translateX(calc(-100% - 22px)) translateZ(0);transform:scale(1) translateY(-50%) translateX(calc(-100% - 22px)) translateZ(0)}:host([align="middle-right"]) .wrap{-webkit-transform:scale(0.7) translateY(-50%) translateX(100%) translateZ(0);transform:scale(0.7) translateY(-50%) translateX(100%) translateZ(0);top:50%;right:0;left:auto;-webkit-transform-origin:30px 0;transform-origin:30px 0}:host([align="middle-right"]) .wrap .after{left:auto;right:calc(100% - 8px);top:calc(50% - 8px)}:host([align="middle-right"]:hover) .wrap,:host([align="middle-right"][hover]) .wrap,:host([align="middle-right"]:focus) .wrap,:host([align="middle-right"][focus]) .wrap{-webkit-transform:scale(1) translateY(-50%) translateX(calc(100% + 22px)) translateZ(0);transform:scale(1) translateY(-50%) translateX(calc(100% + 22px)) translateZ(0)}:host([align="bottom-left"]) .wrap{-webkit-transform:scale(0.7) translateY(100%) translateX(0) translateZ(0);transform:scale(0.7) translateY(100%) translateX(0) translateZ(0);top:auto;bottom:-1.2rem;left:0;-webkit-transform-origin:22px 22px;transform-origin:22px 22px}:host([align="bottom-left"]) .wrap .after{right:auto;left:16px;top:-0.475em;bottom:auto}:host([align="bottom-left"]:hover) .wrap,:host([align="bottom-left"][hover]) .wrap,:host([align="bottom-left"]:focus) .wrap,:host([align="bottom-left"][focus]) .wrap{-webkit-transform:scale(1) translateY(100%) translateX(0) translateZ(0);transform:scale(1) translateY(100%) translateX(0) translateZ(0)}:host([align="bottom-center"]) .wrap{-webkit-transform:scale(0.7) translateY(100%) translateX(-50%) translateZ(0);transform:scale(0.7) translateY(100%) translateX(-50%) translateZ(0);top:auto;bottom:-1.2rem}:host([align="bottom-center"]) .wrap .after{right:auto;left:calc(50% - 8px);top:-0.475em;bottom:auto}:host([align="bottom-center"]:hover) .wrap,:host([align="bottom-center"][hover]) .wrap,:host([align="bottom-center"]:focus) .wrap,:host([align="bottom-center"][focus]) .wrap{-webkit-transform:scale(1) translateY(100%) translateX(-50%) translateZ(0);transform:scale(1) translateY(100%) translateX(-50%) translateZ(0)}:host([align="bottom-right"]) .wrap{-webkit-transform:scale(0.7) translateY(100%) translateX(-100%) translateZ(0);transform:scale(0.7) translateY(100%) translateX(-100%) translateZ(0);top:auto;bottom:-1.2rem;left:100%;-webkit-transform-origin:-22px 22px;transform-origin:-22px 22px}:host([align="bottom-right"]) .wrap .after{left:auto;right:16px;top:-0.475em;bottom:auto}:host([align="bottom-right"]:hover) .wrap,:host([align="bottom-right"][hover]) .wrap,:host([align="bottom-right"]:focus) .wrap,:host([align="bottom-right"][focus]) .wrap{-webkit-transform:scale(1) translateY(100%) translateX(-100%) translateZ(0);transform:scale(1) translateY(100%) translateX(-100%) translateZ(0)}:host([dark]) .wrap{background:var(--theme-complement7)}:host([dark]) .wrap .after{background:var(--theme-complement7)}'}};e.injectProps(s,["dark"]);export{s as stellar_tooltip};