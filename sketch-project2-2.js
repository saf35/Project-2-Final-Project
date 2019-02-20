/*
Idea: sea slugs/nudibranchs of different, random colors moving across the screen, leaving slime
Extra: can give birth???
Extra: fighting slugs?
Extra: have the slugs move or wiggle in some way
*/

// Current goal: make sea slugs (right now, one type of shape, to keep it simple)

/*
Questions:
    - How do I call the images so that they aren't randomly jumping everywhere? Call in setup
    - How do I translate the antennae so that they are connected to the body, so that all I have to move 
        is the body? begin/endShape()
*/ 

let seaslugs = [];

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0); // so can see slime
    rectMode(CENTER);
}

function draw(){
    
}

class seaSlug{
    constructor(tempX,tempY,tempR){
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
    }

    seaSlug(mx,my,mr){ // body
        translate(mx,my);
        push(); {
            rotate(mr);
            ellipse(0,0,100,30); // main body of sea slug
            
        } translate();
        pop();
    }

    move(){
        let speedX = 0.1;
        let speedY = random();
        if(ssb.y > windowHeight){
            ssb.y = 0;
        }
    }

    display(){

    }
}

/*
Goal log (reverse-chronological order):
- New idea
*/