
//creating the Variables
var ship, ship_sailing, sea,sea2, seaImage;


function preload(){
  //loading the animations and the images
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}


function setup(){
  //creating the canvas
  createCanvas(500,500);
  
  //creating the sea, adding velocity and image
  sea = createSprite(400,200,20,20);
  sea.velocityX = -4;
  sea.addImage(seaImage);
 
  //creating the ship,adding animation to it
  ship = createSprite(120,250,20,50);
  ship.addAnimation("sailing", ship_sailing);

  //adding scale to ship and sea
  ship.scale=0.2;
  sea.scale=0.46;
}


function draw(){
  //set background color 
  background("white");
 
  //code to reset the background
  if( sea.x <-430){
    sea.x = sea.width/10;
  }

  // drawing the sprites
  drawSprites();
}