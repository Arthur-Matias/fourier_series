var h=Object.defineProperty;var a=(n,e,i)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var d=(n,e,i)=>(a(n,typeof e!="symbol"?e+"":e,i),i);import{p as u}from"./vendor.js";const c=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}};c();class f{constructor(e){d(this,"time",0);d(this,"renderer");d(this,"slider");d(this,"wave",[]);d(this,"sliderValue");this.renderer=e,this.renderer.setup=this.setup.bind(this),this.renderer.draw=this.draw.bind(this),this.sliderValue=document.getElementById("slider-value")}setup(){this.renderer.createCanvas(this.renderer.windowWidth,this.renderer.windowHeight),this.slider=this.renderer.createSlider(1,25,1,1)}handleSliderDrag(){this.sliderValue.innerText=String(this.slider.value())}draw(){this.renderer.background(0),this.renderer.translate(200,this.renderer.height/2);let e=0,i=0;for(let s=0;s<this.slider.value();s++){let r=e,t=i,l=s*2+1,o=100*(4/(l*this.renderer.PI));e+=o*this.renderer.cos(l*this.time),i+=o*this.renderer.sin(l*this.time),this.renderer.stroke(255,100),this.renderer.noFill(),this.renderer.ellipse(r,t,o*2),this.renderer.stroke(255),this.renderer.fill(255),this.renderer.line(r,t,e,i)}this.wave.unshift(i),this.renderer.translate(200,0),this.renderer.line(e-200,i,0,this.wave[0]),this.renderer.noFill(),this.renderer.beginShape();for(let s=0;s<this.wave.length;s++)this.renderer.vertex(s,this.wave[s]);this.renderer.endShape(),this.time+=.01,this.wave.length>2e3&&(console.log(this.wave.length),this.wave.pop())}}window.onload=()=>{new u(n=>new f(n))};