function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video, 230, 150, 250, 250);
fill(169, 147, 196);
stroke(118, 100, 140);

circle(50, 50, 80);
circle(50, 430, 80);
circle(580, 50, 80);
circle(580, 430, 80);

fill(250, 162, 243)
stroke(245, 130, 236);

rect(90, 35, 450, 20);
rect(90, 420, 450, 20);
rect(40, 90, 20, 300);
rect(570, 90, 20, 300);
}



function take_snapshot(){
save("my_image.png");
}