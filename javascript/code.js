// JavaScript source code

var canvas;
var ctx;
var framePerSec = 30;
var ballX = 500 / 2;
var ballY = 400 - 30;
var ballRadius = 10;
var ballColor = '#0095DD';
var ballSpeedX = 10;
var ballSpeedY = 4;


window.onload = function () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    //Refresh window
    setInterval(callBoth, 1000 / framePerSec);

}