var bullet,wall,speed,weight,thikness
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 20);
  bullet.shapeColor=("white")
speed=random(223,321)
weight=random(30,52)
thikness=random(22,83)
bullet.velocityX=speed
wall=createSprite(1500, 200, 60, height/2);
wall.shapeColor=("brown")

}

function draw() {
  background(0,0,0);
  if(wall.x- bullet.x<wall.width/2+ bullet.width/2){
    bullet.velocityX=0
    var damage=0.5*speed*speed*weight/(thikness*thikness*thikness)
    if(damage>10){     
      bullet.shapeColor=("red")
    }
    
    if(damage<10){     
      bullet.shapeColor=("green")
    }
  }
  drawSprites();
    
}