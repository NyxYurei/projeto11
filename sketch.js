var ocean; ocean_moviment;
var ship, ship_moviment;

function preload(){
  ocean_moviment = loadAnimation ("sea.png");
  ship_moviment = loadAnimation ("ship-1.png", "ship-3.png", "ship-2.png", "ship-4.png");
 
}

function setup(){
  createCanvas(400,400);
  
  //sprites
  ocean = createSprite (200, 200, 40, 40);
  ocean.addAnimation ("sea", ocean_moviment);
  ocean.scale = 0.3;
  ship = createSprite (115, 260, 50, 50)
  ship.addAnimation ("ship", ship_moviment);
  ship.scale = 0.3;
}


function draw() {
  background("blue");
   
   if(ocean.x < 0){
     ocean.x = ocean.width/10;
   }
   ocean.velocityX = -5;
  
  
  drawSprites();
}
