// JavaScript source code

var canvas;
var ctx;
var framePerSec = 30;
var ballX = 50;
var ballY = 50;
var ballRadius = 10;
var ballColor = '#0095DD';

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    //Refresh window
    setInterval(draw, 1000 / framePerSec);

}