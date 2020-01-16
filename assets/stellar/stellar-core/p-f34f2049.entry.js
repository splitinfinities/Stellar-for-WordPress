import{r as s,h as t,H as i}from"./p-378b4685.js";import{c as a}from"./p-5c97c18e.js";import"./p-c428ff15.js";import"./p-c93f133f.js";import"./p-22e0cac7.js";import"./p-3a3a4911.js";const e=class{constructor(t){s(this,t),this._colors=a,this.hexStyle=s=>`fw6 ttu tc ${"base"===s?"black":"base"} aspect-ratio--object flex items-center justify-center`}componentWillLoad(){"string"==typeof this.colors&&"String"===this.colors.constructor.name&&(this._colors=JSON.parse(this.colors))}renderColorPallette(s){return[t("stellar-grid",{cols:"6",class:"pa4"},this._colors[s].map((i,a)=>t("stellar-card",{padding:"tiny",class:`theme-${s} s-${this.shape}`,style:{"--background":`var(--theme-base${a})`,"--border":"none"}},t("section",{class:"aspect-ratio aspect-ratio--1x1"},t("h6",{class:this.hexStyle(`theme-base${a}`)},i)))))]}render(){return t(i,null,t("stellar-grid",{class:"pa4"},this._colors.base&&t("stellar-card",{padding:"tiny",class:`s-${this.shape}`,style:{"--background":"var(--base)","--border":"none"}},t("section",{class:"aspect-ratio aspect-ratio--1x1"},t("h6",{class:this.hexStyle("base")},this._colors.base))),this._colors.white&&t("stellar-card",{padding:"tiny",class:`s-${this.shape}`,style:{"--background":"var(--white)","--border":"none"}},t("section",{class:"aspect-ratio aspect-ratio--1x1 flex items-center"},t("h6",{class:this.hexStyle("white")},this._colors.white))),this._colors.black&&t("stellar-card",{padding:"tiny",class:`s-${this.shape}`,style:{"--background":"var(--black)","--border":"none"}},t("section",{class:"aspect-ratio aspect-ratio--1x1 flex items-center"},t("h6",{class:this.hexStyle("black")},this._colors.black))),this._colors["black-alt"]&&t("stellar-card",{padding:"tiny",class:`s-${this.shape}`,style:{"--background":"var(--black-alt)","--border":"none"}},t("section",{class:"aspect-ratio aspect-ratio--1x1 flex items-center"},t("h6",{class:this.hexStyle("black-alt")},this._colors["black-alt"])))),this._colors.gray&&this.renderColorPallette("gray"),this._colors.red&&this.renderColorPallette("red"),this._colors.orange&&this.renderColorPallette("orange"),this._colors.yellow&&this.renderColorPallette("yellow"),this._colors.lime&&this.renderColorPallette("lime"),this._colors.green&&this.renderColorPallette("green"),this._colors.teal&&this.renderColorPallette("teal"),this._colors.cyan&&this.renderColorPallette("cyan"),this._colors.blue&&this.renderColorPallette("blue"),this._colors.indigo&&this.renderColorPallette("indigo"),this._colors.violet&&this.renderColorPallette("violet"),this._colors.fuschia&&this.renderColorPallette("fuschia"),this._colors.pink&&this.renderColorPallette("pink"))}static get style(){return"stellar-color-library{contain:content}"}};export{e as stellar_color_library};