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

// Current goal: let person choose alpha values

let stars = [];
star_num = 90;
let co1 = 208;
// let col1 = 208;
let co2 = 214;
// let col2 = 214;
let co3 = 82;
// let col3 = 82;
let al1 = 100;
let al;
let al2 = 200;
let st = 4;
let changer;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(36,113,163);

    for( let j = 0; j < star_num; j++ ){
        stars[j] = new Triangles(random(20,windowWidth),0,random(0,360),random(0.1,1));
    }
}

function draw(){
    // background(36,113,163);

    for(let i = 0; i < stars.length; i++){
        if(((mouseX < stars[i].x + 20) && (mouseX > stars[i].x - 20))){ // make triangles glow when the mouse is near
            co1 = 251;
            co2 = 255;
            co3 = 162;
            al = 200;
            st = 8;
        } else {
            co1++;
            if(co1 === 255){
                co1 = 0;
            }
            co2++;
            if(co2 === 255){
                co2 = 0;
            }
            co3++;
            if(co3 === 255){
                co3 = 0;
            }
            al = 50;
            st = 4;
        }
        stars[i].display(co1,co2,co3,al,st);
        stars[i].move();
    }
}

/*
function mousePressed(){
    if(star_num === star_num){
        star_num++;
    } 
}
*/

class Triangles{
    constructor(tempX,tempY,tempR,tempS){
        this.x = tempX;
        this.y = tempY;
        this.r = tempR; // orientation of triangle
        this.s = tempS; // speed of triangles
    }

    move(){
        if(this.y < windowHeight - 10){
            this.y += this.s;
        } else {
            this.y = windowHeight - 10;
        }
    }

    display(mc1,mc2,mc3,ma,mw){
        push(); {
            translate(this.x,this.y);
            rotate(this.r);
            noFill();
            stroke(mc1,mc2,mc3,ma);
            strokeWeight(mw);
            triangle(random(0,5),random(-10,-5),random(10,15),random(5,10),random(-10,-5),random(5,10));
        } pop();
    }
}
