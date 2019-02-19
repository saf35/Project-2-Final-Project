/*
Idea: sea slugs/nudibranchs of different, random colors moving across the screen, leaving slime
Extra: can give birth???
Extra: fighting slugs?
*/

// Current goal: make sea slugs (right now, one type of shape, to keep it simple)

/*
Questions:
    - How do I call the images so that they aren't randomly jumping everywhere?
    - How do I translate the antennae so that they are connected to the body, so that all I have to move 
        is the body?
*/ 

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0); // so can see slime
}

function draw(){

}

class seaSlug{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    seaSlugBody(mx,my){ // body and slime
        push(); {
            rotate(random()*360); // rotate by a different amount every time
            fill(random()*255,random()*255,random()*255); // fill with random color every time
            let ssb = ellipse(this.x,this.y,50,15);
        } pop();
    }

    move(){
        let speedX = 0.1;
        let speedY = random();
        if(ssb.y > windowHeight){
            ssb.y = 0;
        }
    }

    /* seaSlugWings(){
        may save this for later if have time
    } */ 

    seaSlugAntennae(){
        push(); {
            let ssa1 = ellipse(7,10);
            let ssa2 = ellipse(7,10);
        } pop();
    }

    display(){

    }
}

/*
Goal log (reverse-chronological order):
- New idea
*/