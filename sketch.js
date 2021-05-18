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
  if(mr.x-fr.x < mr.width/2+fr.width/2
    && fr.x-mr.x < mr.width/2+fr.width/2
    && mr.y-fr.y < mr.height/2+fr.height/2
    && fr.y-mr.y < mr.height/2+fr.height/2){
    mr.shapeColor = "red";
fr.shapeColor = "red";
  }
  else{
    mr.shapeColor = "green";
fr.shapeColor = "green";
  }
  drawSprites();
}