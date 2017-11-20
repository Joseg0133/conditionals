var x = 1
var y = 1
var xSpeed = 3
var ySpeed = 3

function setup(){
  createCanvas(800, 600)
}

function draw() {
  noStroke()

  fill(255)
  rect(0, 0, width, height/2)

  fill(0)
  rect(0, height/2, width, height/2)
  
  if(true) {
      fill(0, 225, 0);
      
  }

  ellipse(x, y, 20, 20)

  x += xSpeed
  y += ySpeed
}