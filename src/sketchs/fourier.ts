import p5 from "p5";

export default class Sketch{

    private time: number = 0;
    private renderer: p5;
    
    private slider!: p5.Element;

    private wave: number[] = [];

    private sliderValue: HTMLDivElement

    constructor(renderer: p5){
        this.renderer = renderer
        this.renderer.setup = this.setup.bind(this)
        this.renderer.draw = this.draw.bind(this)
        this.sliderValue = document.getElementById("slider-value") as HTMLDivElement
    }

    setup(){
        this.renderer.createCanvas(this.renderer.windowWidth, this.renderer.windowHeight)
        this.slider = this.renderer.createSlider(1, 25, 1, 1)
    }
    handleSliderDrag(){
        this.sliderValue.innerText = String(this.slider.value())
    }
    draw(){
        this.renderer.background(0);
        this.renderer.translate(200, this.renderer.height/2)

        let x = 0
        let y = 0;
        
        for (let i = 0; i < this.slider.value(); i++) {
            let prevX = x;
            let prevY = y;
            let n = i*2+1;
            let radius = 100 * (4 / (n * this.renderer.PI));
            x += radius * this.renderer.cos(n * this.time)
            y += radius * this.renderer.sin(n * this.time)
            
            this.renderer.stroke(255,100);
            this.renderer.noFill()
            this.renderer.ellipse(prevX, prevY, radius*2);
            
            
            this.renderer.stroke(255);
            this.renderer.fill(255);
            this.renderer.line(prevX, prevY, x,y)
        }
        this.wave.unshift(y)


        this.renderer.translate(200, 0)
        this.renderer.line(x-200, y, 0, this.wave[0])
        
        this.renderer.noFill()
        this.renderer.beginShape()
        for(let i=0; i < this.wave.length; i++){
            this.renderer.vertex(i,this.wave[i])
        }
        this.renderer.endShape();

        this.time += 0.01

        if(this.wave.length>2000){
            console.log(this.wave.length)
            this.wave.pop();
        }

    }
}