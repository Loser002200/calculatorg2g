let somDoSusto
let galinha





function preload(){
    somDoSusto = loadSound("susto.mp4");
    galinha = loadImage("galinha.png");
}




function draw(){
    galinha();
}


function galinha(){
    image(galinha, xDkrod, yDkrod, 50, 50);
}


let xDkrod = 15
let yDkrod = 450