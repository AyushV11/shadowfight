function setup() {
  createCanvas(1200,800);
 player1 = new Player(200,500)
 enemy = new Enemy(width-200,500)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}