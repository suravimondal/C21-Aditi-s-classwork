var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car= createSprite(50,200,40,40);
  car.shapeColor= "white";
  wall= createSprite(800,200,40,80);
  wall.shapeColor= "brown";
  car.velocityX= 5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //call the function
 if(IS_Touching(car, wall)){
  wall.shapeColor= "orange"; 
 }
 BOUNCEOFF(car,wall);
  drawSprites();
}
