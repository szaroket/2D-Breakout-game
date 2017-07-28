// JavaScript source code

var canvas;
var ctx;
var framePerSec = 30;
var ballX = 250;
var ballY = 370;
var ballRadius = 10;
var ballColor = '#0095DD';
var ballSpeedX = 8;
var ballSpeedY = -4;
var paddleX = 200;
var paddleY = 390;
var paddleWidth = 100;
var paddleHeight = 10;
var paddleColor = '#0095DD';
var brickColumn = 5;
var brickRow = 3;
var brickWidth = 75;
var brickHeight = 25;
var bricks = [];
for (i = 0; i < brickColumn; i++) {
    bricks[i] = [];
    for (j = 0; j < brickRow; j++) {
        bricks[i][j] = {
            x: 0,
            y: 0,
            visible: true
        };
    }
}
var brickColor = 'blue';
var brickPadding = 15;
var score = 0;
var lives = 3;


window.onload = function () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    //Refresh window
    setInterval(callBoth, 1000 / framePerSec);

    //moving paddle
    movePaddle();
}