// Idea: I want objects on the screen to respond to user input, creating a beautiful new planet 
// environment

/*
    Current goal: move diamonds like rain
*/

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(42,28,120);
}

// I want diamonds, inspired by the planet that has diamond rain
class Diamond{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    // moving diamond rain
    move(){
        
    }

    // diamond shape
    diaShp(){
        push();
        {
            fill(211,244,237); // light blue color
            rotate(120); // diamond
            rect(100,30); // base shape for diamond
        }
        pop();
    }
}