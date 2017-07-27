// JavaScript source code

var canvas;
var ctx;
var framePerSec = 30;
var ballX = 500 / 2;
var ballY = 400 - 30;
var ballRadius = 10;
var ballColor = '#0095DD';
var ballSpeedX = 8;
var ballSpeedY = -4;
var paddleX = 200;
var paddleY = 390;
var paddleWidth = 100;
var paddleHeight = 10;
var paddleColor = '#0095DD';


window.onload = function () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    //Refresh window
    setInterval(callBoth, 1000 / framePerSec);

}