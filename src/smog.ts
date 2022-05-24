import * as PIXI from 'pixi.js'
import { Shark } from './Shark'


export class Smog extends PIXI.Graphics{

    player : Shark
    radius:number
    


    constructor(player: Shark, radius:number){
        super()
        this.player = player
        this.radius = radius
        this.interactive = true
        this.draw()
        
        
    }

    draw() {
        this.beginFill(0xffffff)
        this.drawCircle(this.player.x, this.player.y,this.radius)
        this.endFill

    }

    updatePos() {
       
    }

    update(){
        if(this.radius >= 1) {
        this.radius -= 0.1
        this.clear()
        this.draw()
        console.log(`radius: ${this.radius}`)
        }
        else{
            console.log(`radius is already 0`)
            console.log('resetting circle to 200 radius')
            this.radius = 200
            this.clear()
            this.draw()
        }
    }



}