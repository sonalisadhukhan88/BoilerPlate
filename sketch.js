function setup() {
  createCanvas(1200,800);
  mr = createSprite(400, 800, 80, 30);
  fr = createSprite(400, 100, 50, 80);
mr.shapeColor = "green";
fr.shapeColor = "green";


}

function draw() {
  background(255,255,255);  
  mr.x = World.mouseX;
  mr.y=World.mouseY;
  
  drawSprites();
}
