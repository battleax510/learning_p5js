parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sRV2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.soundPaths=void 0;var e=exports.soundPaths={sound_one:"sounds_effect/pvz.super.brainz.voice.clips.IGE-Ht-rLJk.wav-037.wav",sound_two:"sounds_effect/pvz.super.brainz.voice.clips.IGE-Ht-rLJk.wav-004.wav",sound_three:"sounds_effect/pvz.super.brainz.voice.clips.IGE-Ht-rLJk.wav-028.wav",sound_four:"sounds_effect/pvz.super.brainz.voice.clips.IGE-Ht-rLJk.wav-081.wav",sound_five:"sounds_effect/pvz.super.brainz.voice.clips.IGE-Ht-rLJk.wav-018.wav"};
},{}],"mpVp":[function(require,module,exports) {
"use strict";var e,t,n=require("./core/core.sounds"),o=3,r=.5,i=document.querySelector(".bird"),s=document.getElementById("bird-1"),d=new Audio("sounds_effect/point.mp3"),a=new Audio("sounds_effect/die.mp3"),l=i.getBoundingClientRect(),u=document.querySelector(".background").getBoundingClientRect(),c=document.querySelector(".score_val"),m=document.querySelector(".message"),p=document.querySelector(".score_title"),y=new Audio(n.soundPaths.sound_one),f=new Audio(n.soundPaths.sound_two),g=new Audio(n.soundPaths.sound_three),v=new Audio(n.soundPaths.sound_four),h=new Audio(n.soundPaths.sound_five),w=[y,f,g,v,h];function A(e){return Math.floor(Math.random()*e.length)}var _="Start";function q(){requestAnimationFrame(function e(){"Play"==_&&(document.querySelectorAll(".pipe_sprite").forEach(function(e){var n=e.getBoundingClientRect();if(l=i.getBoundingClientRect(),n.right<=0)e.remove();else{if(l.left<n.left+n.width&&l.left+l.width>n.left&&l.top<n.top+n.height&&l.top+l.height>n.top)return _="End",m.innerHTML="Game Over".fontcolor("red")+"<br>Press Enter To Restart",m.classList.add("messageStyle"),s.style.display="none",void a.play();if(n.right<l.left&&n.right+o>=l.left&&"1"==e.increase_score){c.innerHTML=+c.innerHTML+1;var r=A(w);t=w[r],console.log(t),t.play()}e.style.left=n.left-o+"px"}}),requestAnimationFrame(e))});var e=0;requestAnimationFrame(function t(){if("Play"==_){if(e+=r,document.addEventListener("keydown",function(t){"ArrowUp"!=t.key&&" "!=t.key||(s.src="images/superHero-2.png",e=-7.6)}),document.addEventListener("keyup",function(e){"ArrowUp"!=e.key&&" "!=e.key||(s.src="images/superHero-1.png")}),l.top<=0||l.bottom>=u.bottom)return _="End",m.style.left="28vw",window.location.reload(),void m.classList.remove("messageStyle");i.style.top=l.top+e+"px",l=i.getBoundingClientRect(),requestAnimationFrame(t)}});var n=0,d=35;requestAnimationFrame(function e(){if("Play"==_){if(n>115){n=0;var t=Math.floor(43*Math.random())+8,o=document.createElement("div");o.className="pipe_sprite",o.style.top=t-70+"vh",o.style.left="100vw",document.body.appendChild(o);var r=document.createElement("div");r.className="pipe_sprite",r.style.top=t+d+"vh",r.style.left="100vw",r.increase_score="1",document.body.appendChild(r)}n++,requestAnimationFrame(e)}})}s.style.display="none",m.classList.add("messageStyle"),document.addEventListener("keydown",function(e){"Enter"==e.key&&"Play"!=_&&(document.querySelectorAll(".pipe_sprite").forEach(function(e){e.remove()}),s.style.display="block",i.style.top="40vh",_="Play",m.innerHTML="",p.innerHTML="Score : ",c.innerHTML="0",m.classList.remove("messageStyle"),q())});
},{"./core/core.sounds":"sRV2"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.js.map