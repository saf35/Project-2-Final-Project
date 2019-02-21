/* 
Idea: video game background - something like rhythym games, like Guitar Hero?

    - Analyze a photo??

    - Music choices:
        - Let's Get Lost
        - Falls Remix

    - Advice from:
        - https://p5js.org/examples/sound-measuring-amplitude.html

Other ideas:
    - Two phones, sending emojis
    - Falling shiny shapes

Idea: falling shiny shapes
*/

// Current goal: 

let stars = [];

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(36,113,163);

    for(let i = 0; i < stars.length; i++){
        stars[i].display();
        stars[i].move();
    }
}

class triangles{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    move(){
        let fall = 0.1;
        if(this.y < windowHeight - 10){
            this.y += fall;
        } else {
            this.y = windowHeight - 10;
        }
    }

    display(){
        push(); {
            translate(this.x,this.y);
            if(mouse.x < this.x + 20){ // make triangles glow when the mouse is near
                color(251,255,162,200);
            } else if(mouse.x > this.x - 20){
                color(251,255,162,200);
            } else if(mouse.y < this.y + 10){
                color(251,255,162,200);
            } else if(mouse.y > this.y - 30){
                color(251,255,162,200);
            } else{
                color(208,214,82,100);
            }
            triangles(0,-30,20,10,-20,10)
        } pop();
    }
}
