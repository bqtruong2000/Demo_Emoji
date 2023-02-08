let canvas = document.getElementById("myCanvas");

/**
 * @param {any} canvas
 * @returns {CanvasRenderingContext2D}
 */

function createPaper(canvas) {
  return canvas.getContext("2d");
}

let paper = createPaper(canvas);

/*let currentTime = Date.now();
let velocityX = 100;
let circleX = 70;
let omega = 1;

let randomColor = Math.floor(Math.random() * 16777215).toString(16);

setInterval(() => {
  let delta = (Date.now() - currentTime) / 1000;
  let fps = 1 / delta;
  currentTime = Date.now();
  paper.clearRect(0, 0, canvas.Width, canvas.height);
  paper.fillText("FPS: " + Math.round(fps), 15, 30);
  console.log("FPS: " + fps);

  //draw

  if (circleX < 270) {
    paper.beginPath();
    paper.strokeStyle = "#" + randomColor;
    paper.fillStyle = "#" + randomColor;
    paper.arc(circleX, 90, 30, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    circleX = 270 + (270 / 2) * Math.cos((omega * currentTime) / 1000 + 0);
  } else {
    paper.beginPath();
    paper.strokeStyle = "red";
    paper.fillStyle = "red";
    paper.arc(circleX, 90, 30, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    circleX = 270 + (270 / 2) * Math.cos((omega * currentTime) / 1000 + 0);
  }
}, 1000 / 60);*/
function render() {
  paper.beginPath();
  paper.strokeStyle = "#FCEC62";
  paper.fillStyle = "#FCEC62";
  paper.arc(240, 120, 100, 0, 2 * Math.PI);
  paper.stroke();
  paper.fill();
  paper.closePath();

  //right eye
  paper.beginPath();
  paper.fillStyle = "#2C2525";
  paper.arc(280, 100, 20, 0, 2 * Math.PI);
  paper.stroke();
  paper.fill();
  paper.closePath();

  //left eye
  paper.beginPath();
  paper.fillStyle = "#2C2525";
  paper.arc(200, 100, 20, 0, 2 * Math.PI);
  paper.stroke();
  paper.fill();
  paper.closePath();
}

render();

paper.beginPath();
paper.fillStyle = "#F30404";
paper.arc(240, 150, 40, 2 * Math.PI, 1 * Math.PI);
paper.fill();
paper.closePath();

paper.beginPath();
paper.moveTo(75, 40);
paper.bezierCurveTo(75, 37, 70, 25, 50, 25);
paper.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
paper.bezierCurveTo(20, 80, 40, 102, 75, 120);
paper.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
paper.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
paper.bezierCurveTo(85, 25, 75, 37, 75, 40);
paper.fillStyle = "red";
paper.fill();
paper.closePath();

let x = "cuoi";

canvas.addEventListener("mousedown", () => {
  paper.clearRect(0, 0, canvas.width, canvas.height);
  render();
  if (x == "cuoi") {
    paper.beginPath();
    paper.fillStyle = "#F30404";
    paper.arc(240, 150, 40, 2 * Math.PI, 1 * Math.PI);
    paper.fill();
    paper.closePath();

    paper.beginPath();
    paper.moveTo(75, 40);
    paper.bezierCurveTo(75, 37, 70, 25, 50, 25);
    paper.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    paper.bezierCurveTo(20, 80, 40, 102, 75, 120);
    paper.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    paper.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    paper.bezierCurveTo(85, 25, 75, 37, 75, 40);
    paper.fillStyle = "red";
    paper.fill();
    paper.closePath();

    x = "im";
  } else {
    paper.beginPath();
    paper.strokeStyle = "black";
    paper.moveTo(200, 170);
    paper.lineTo(285, 170);
    paper.lineWidth = 15;
    paper.stroke();
    paper.closePath();

    paper.beginPath();
    paper.fillStyle = "#2C2525";
    paper.arc(280, 100, 23, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    paper.closePath();

    paper.beginPath();
    paper.font = "20px Arial";
    paper.fillText("BRUHH ???", 20, 50);

    paper.closePath();
    x = "cuoi";
  }
});
