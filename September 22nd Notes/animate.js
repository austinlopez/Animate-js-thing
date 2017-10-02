var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.style.border = "10px salmon solid"
ctx.strokeStyle = "blue";
ctx.fillStyle = "red";
//var speedy = 0;

//var ballX = 75;
//var ballY = 75;

//var ballRadius = 15;
//var id = setInterval(frame, 1);

class Point{
  constructor(x,y,radius,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
  }
  moveRight(){
    if (this.speedX == 0){
      this.speedX = 1;
      this.x += this.speedX;
      this.draw();
      console.log(this.speedX);
    } else if (this.speedX < 5) {
        this.speedX += .2;
        this.x += this.speedX;
        this.draw();
        console.log(this.speedX);
    } else if (this.speedX >= 5) {
      this.x += this.speedX;
      this.draw();
      console.log(this.speedX);
    }
    //this.x += 1;
    //this.draw();
  }
  moveLeft(){
    if (this.speedX == 0){
      this.speedX = -1;
      this.x += this.speedX;
      this.draw();
      console.log(this.speedX);
    } else if (this.speedX > -5) {
        this.speedX -= .2;
        this.x += this.speedX;
        this.draw();
        console.log(this.speedX);
    } else if (this.speedX <= -5) {
      this.x += this.speedX;
      this.draw();
      console.log(this.speedX);
    }
    //this.x -= 1;
    //this.draw();
  }
  moveUp(){
    if (this.speedY == 0){
      this.speedY = -1;
      this.y += this.speedY;
      this.draw();
      console.log(this.speedY);
    } else if (this.speedY > -5) {
        this.speedY -= .2;
        this.y += this.speedY;
        this.draw();
        console.log(this.speedY);
    } else if (this.speedY <= -5) {
      this.y += this.speedY;
      this.draw();
      console.log(this.speedY);
    }
    //this.y -= 1;
    //this.draw();
  }
  moveDown(){
    if (this.speedY == 0){
      this.speedY = 1;
      this.y += this.speedY;
      this.draw();
      console.log(this.speedY);
    } else if (this.speedY < 5) {
        this.speedY += .2;
        this.y += this.speedY;
        this.draw();
        console.log(this.speedY);
    } else if (this.speedY >= 5) {
      this.y += this.speedY;
      this.y = Math.floor(this.y);
      this.draw();
      console.log(this.speedY);
    }
    //this.y += 1;
    //this.draw();
  }
  draw(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius, 0, 2 * Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }
}

var myCircle = new Point(75, 75, 20, "red");

/*function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(ballX,ballY,ballRadius, 0, 2 * Math.PI,false);
  ctx.closePath();
  ctx.fill();
}*/

function clear() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function keyDownHandler(event) {
  var key = event.which;
  if (key > 46) {
    return;
  } else if (myCircle.x <= 20) {
    ballX = 15;
    myCircle.draw();
    switch (key) {
      case 39: //right arrow
        myCircle.moveRight();
      break;
      case 38: //up arrow
        myCircle.moveUp();
      break;
      case 40: //down arrow
        myCircle.moveDown();
      break;
      default:
        break;
    }
  } else if (myCircle.y <= 20) {
    ballY = 15;
    switch (key) {
      case 37: //left arrow
        myCircle.moveLeft();
      break;
      case 39: //right arrow
        myCircle.moveRight();
      break;
      case 40: //down arrow
        myCircle.moveDown();
      break;
      default:
        break;
    }
  } else {
  switch (key) {
    case 37: //left arrow
      myCircle.moveLeft();
    break;
    case 39: //right arrow
      myCircle.moveRight();
    break;
    case 38: //up arrow
      myCircle.moveUp();
    break;
    case 40: //down arrow
      myCircle.moveDown();
    break;
    default:
    break;
  }
  }
  clear();
  myCircle.draw();
}

function keyUpHandler(event) {
  var key = event.which;
  if (key > 46) {
    return;
  }
  switch (key) {
    case 37: //left arrow
    myCircle.speedX = 0;
      console.log("left up");
    break;
    case 38:
    myCircle.speedY = 0;
      console.log("up up");
    break;
    case 39: //right arrow
      myCircle.speedX = 0;
      console.log("right up");
    break;
    case 40:
      myCircle.speedY = 0;
      console.log("down up");
    break;
    default:
    break;
  }
  myCircle.draw();
}

myCircle.draw();

window.addEventListener("keydown",keyDownHandler,true);
window.addEventListener("keyup",keyUpHandler,true);
// make it move up and down
// up arrow = 38
// down arrow = 40
// make it move faster
// make it stop at the edge
