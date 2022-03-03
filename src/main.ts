import p5 from 'p5';
import './style.css'
import Sketch from "./sketchs/fourier";

window.onload = ()=>{
  new p5((p:p5)=>new Sketch(p))
}