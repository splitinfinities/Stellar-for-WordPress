StellarCore.loadBundle("k0ekogit",["exports"],function(e){var t=window.StellarCore.h,r=function(){function e(){this.align="center"}return e.prototype.render=function(){return t("div",{class:"wrap"},t("div",{class:"after"}),t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"stellar-tooltip"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{align:{type:String,attr:"align",reflectToAttr:!0},element:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:absolute;width:100%;height:100%;top:0;z-index:2;font-size:1rem}:host .wrap{pointer-events:none;white-space:nowrap;top:-16px;left:50%;-webkit-transform:scale(.7) translateY(-80%) translateX(-50%) translateZ(0);transform:scale(.7) translateY(-80%) translateX(-50%) translateZ(0);-webkit-transform-origin:0 10px;transform-origin:0 10px;-webkit-transition:all .25s var(--ease) 50ms;transition:all .25s var(--ease) 50ms;opacity:0;padding:.65em .65em;width:auto;line-height:1.2;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:left;color:#fff}:host .wrap,:host .wrap .after{position:absolute;margin:0 auto;background:var(--theme-complement9)}:host .wrap .after{right:0;bottom:-.475em;left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:1em;height:1em;z-index:-1}:host(:hover) .wrap,:host([hover]) .wrap{-webkit-transform:scale(1) translateY(-100%) translateX(-50%) translateZ(0);transform:scale(1) translateY(-100%) translateX(-50%) translateZ(0);opacity:1}:host([align=left]) .wrap,:host([align=top-left]) .wrap{-webkit-transform:scale(.7) translateY(-100%) translateX(0) translateZ(0);transform:scale(.7) translateY(-100%) translateX(0) translateZ(0);left:0;-webkit-transform-origin:22px 22px;transform-origin:22px 22px}:host([align=left]) .wrap .after,:host([align=top-left]) .wrap .after{right:auto;left:1rem}:host([align=left]:hover) .wrap,:host([align=left][hover]) .wrap,:host([align=top-left]:hover) .wrap,:host([align=top-left][hover]) .wrap{-webkit-transform:scale(1) translateY(-100%) translateX(0) translateZ(0);transform:scale(1) translateY(-100%) translateX(0) translateZ(0)}:host([align=right]) .wrap,:host([align=top-right]) .wrap{-webkit-transform:scale(.7) translateY(-100%) translateX(-100%) translateZ(0);transform:scale(.7) translateY(-100%) translateX(-100%) translateZ(0);left:100%;-webkit-transform-origin:-22px 22px;transform-origin:-22px 22px}:host([align=right]) .wrap .after,:host([align=top-right]) .wrap .after{right:1rem;left:auto}:host([align=right]:hover) .wrap,:host([align=right][hover]) .wrap,:host([align=top-right]:hover) .wrap,:host([align=top-right][hover]) .wrap{-webkit-transform:scale(1) translateY(-100%) translateX(-100%) translateZ(0);transform:scale(1) translateY(-100%) translateX(-100%) translateZ(0)}:host([align=middle-left]) .wrap{-webkit-transform:scale(.7) translateY(-50%) translateX(-100%) translateZ(0);transform:scale(.7) translateY(-50%) translateX(-100%) translateZ(0);top:50%;left:0;-webkit-transform-origin:-30px 0;transform-origin:-30px 0}:host([align=middle-left]) .wrap .after{right:auto;left:calc(100% - 8px);top:calc(50% - 8px)}:host([align=middle-left]:hover) .wrap,:host([align=middle-left][hover]) .wrap{-webkit-transform:scale(1) translateY(-50%) translateX(calc(-100% - 22px)) translateZ(0);transform:scale(1) translateY(-50%) translateX(calc(-100% - 22px)) translateZ(0)}:host([align=middle-right]) .wrap{-webkit-transform:scale(.7) translateY(-50%) translateX(100%) translateZ(0);transform:scale(.7) translateY(-50%) translateX(100%) translateZ(0);top:50%;right:0;left:auto;-webkit-transform-origin:30px 0;transform-origin:30px 0}:host([align=middle-right]) .wrap .after{left:auto;right:calc(100% - 8px);top:calc(50% - 8px)}:host([align=middle-right]:hover) .wrap,:host([align=middle-right][hover]) .wrap{-webkit-transform:scale(1) translateY(-50%) translateX(calc(100% + 22px)) translateZ(0);transform:scale(1) translateY(-50%) translateX(calc(100% + 22px)) translateZ(0)}:host([align=bottom-left]) .wrap{-webkit-transform:scale(.7) translateY(100%) translateX(0) translateZ(0);transform:scale(.7) translateY(100%) translateX(0) translateZ(0);top:auto;bottom:-1.2rem;left:0;-webkit-transform-origin:22px 22px;transform-origin:22px 22px}:host([align=bottom-left]) .wrap .after{right:auto;left:16px;top:-.475em;bottom:auto}:host([align=bottom-left]:hover) .wrap,:host([align=bottom-left][hover]) .wrap{-webkit-transform:scale(1) translateY(100%) translateX(0) translateZ(0);transform:scale(1) translateY(100%) translateX(0) translateZ(0)}:host([align=bottom-center]) .wrap{-webkit-transform:scale(.7) translateY(100%) translateX(-50%) translateZ(0);transform:scale(.7) translateY(100%) translateX(-50%) translateZ(0);top:auto;bottom:-1.2rem}:host([align=bottom-center]) .wrap .after{right:auto;left:calc(50% - 8px);top:-.475em;bottom:auto}:host([align=bottom-center]:hover) .wrap,:host([align=bottom-center][hover]) .wrap{-webkit-transform:scale(1) translateY(100%) translateX(-50%) translateZ(0);transform:scale(1) translateY(100%) translateX(-50%) translateZ(0)}:host([align=bottom-right]) .wrap{-webkit-transform:scale(.7) translateY(100%) translateX(-100%) translateZ(0);transform:scale(.7) translateY(100%) translateX(-100%) translateZ(0);top:auto;bottom:-1.2rem;left:100%;-webkit-transform-origin:-22px 22px;transform-origin:-22px 22px}:host([align=bottom-right]) .wrap .after{left:auto;right:16px;top:-.475em;bottom:auto}:host([align=bottom-right]:hover) .wrap,:host([align=bottom-right][hover]) .wrap{-webkit-transform:scale(1) translateY(100%) translateX(-100%) translateZ(0);transform:scale(1) translateY(100%) translateX(-100%) translateZ(0)}:host-context(.dark-mode):host .wrap,:host-context(.dark-mode):host .wrap .after{background:var(--theme-complement7)}"},enumerable:!0,configurable:!0}),e}();e.StellarTooltip=r,Object.defineProperty(e,"__esModule",{value:!0})});