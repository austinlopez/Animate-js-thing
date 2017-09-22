var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.style.border = "10px salmon solid"
ctx.strokeStyle = "blue";
ctx.fillStyle = "red";
var speedy = 0;

var ballX = 75;
var ballY = 75;

var ballRadius = 15;
//var id = setInterval(frame, 1);
draw();

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(ballX,ballY,ballRadius, 0, 2 * Math.PI,false);
  ctx.closePath();
  ctx.fill();
}

function speed(vel){
  if (vel <= 3){
    vel++;
      return vel;
  } else {
      return vel;
  }
}

function preDownHandler(event){
  keyDownHandler(event, vel);
}

/*function frame() {
    if (pos == 350) {
      clearInterval(id);
  } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
  }
}*/

function keyDownHandler(event) {
  var key = event.which;
  if (key > 46) {
    return;
  } else if (ballX <= 15) {
    ballX = 15;
    draw();
    switch (key) {
      case 39: //right arrow
        ballX += 1;
      break;
      case 38: //up arrow
        ballY -= 1;
      break;
      case 40: //down arrow
        ballY += 1;
      break;
      default:
        break;
    }
  } else if (ballY <= 15) {
    ballY = 15;
    switch (key) {
      case 37: //left arrow
        ballX -= 1;
      break;
      case 39: //right arrow
        ballX += 1;
      break;
      case 40: //down arrow
        ballY += 1;
      break;
      default:
        break;
    }
  } else {
  switch (key) {
    case 37: //left arrow
    speedy = 0;
      ballX -= speed(speedy);
    break;
    case 39: //right arrow
    var myVar = setInterval(function(){ moveright() }, 10);
    function moveright(){
      ballX++;
    }
    /*var id = setInterval(frame, 1);

      function frame() {
          if ((ballX <= 15)||(ballX >= 585)) {
            clearInterval(id);
        } else {
            ballX+= 1;
            draw();
            return;
        }
      }*/
    break;
    case 38: //up arrow
      ballY--;
    break;
    case 40: //down arrow
      ballY++;
    break;
    default:
    break;
  }
  }
  draw();
}

function keyUpHandler(event) {
  var key = event.which;
  if (key > 46) {
    return;
  }
  switch (key) {
    case 37: //left arrow
    speedy = 0;
      ballX -= speed(speedy);
    break;
    /*case 39: //right arrow

      var id = setInterval(frame, 1);
      function frame() {
          if ((ballX <= 15)||(ballX >= 585)) {
            clearInterval(id);
        } else {
            ballX+= 1;
            draw();
            return;
        }
      }
    break;
    case 38: //up arrow
      ballY--;
    break;
    case 40: //down arrow
      ballY++;
    break;*/
    case 39: //right arrow
    /*var id = setInterval(frame, 1);
    //clearInterval(id);
    function frame() {
        if ((ballX >= 15)||(ballX <= 585)) {
          clearInterval(id);
      } else {
          ballX-= 1;
          draw();
          return;
      }
    }*/
      console.log("right up");
    break;
    default:
    break;
  }
  draw();
}

window.addEventListener("keydown",keyDownHandler,true);
window.addEventListener("keyup",keyUpHandler,true);
// make it move up and down
// up arrow = 38
// down arrow = 40
// make it move faster
// make it stop at the edge
