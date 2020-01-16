import{r as t}from"./p-fd27e385.js";const s=class{constructor(s){t(this,s),this.name="web_audio_sequencer",this.autoplay=!1,this.taps=4,this.context=async()=>await document.querySelector("web-audio").get_context(),this.noteTime=0,this.currentTap=0,this.totalPlayTime=0,this.custom=async()=>{}}componentDidLoad(){this.autoplay&&this.play()}async schedule(){var t=(await this.context()).currentTime;for(t-=this.startTime;this.noteTime<t+.005;)try{await this.custom(),this.totalPlayTime=this.noteTime+this.startTime,0===this.currentTap&&this.iterations++,this.advance()}catch(s){console.error(s)}this.timer=setTimeout(async()=>{await this.schedule()},0)}advance(){var t=60/this.tempo;this.currentTap++,this.currentTap==this.taps&&(this.currentTap=0),this.noteTime+=.25*t}async play(){await this.context()||await document.querySelector("web-audio").connect_the_world(),this.iterations=0,this.startTime=(await this.context()).currentTime+.005||.005,await this.schedule()}async stop(){this.iterations=0,this.totalPlayTime=0,this.startTime=null,this.currentTap=0,this.noteTime=0,clearTimeout(this.timer)}};export{s as web_audio_sequencer};