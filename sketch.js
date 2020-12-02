var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(120,130);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 60,height/2);
  wall.shapeColor = (80,0,0);
  
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
  if(wall.x-car.x < (wall.width+car.width)){
    car.velocityX = 0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100 )
    {
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}