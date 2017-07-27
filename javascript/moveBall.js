// Function to move ball
function moveBall() {
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (ballX < ballRadius) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX > (canvas.width - ballRadius)) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY < ballRadius) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY > (canvas.height - ballRadius)) {
        ballSpeedY = -ballSpeedY;
    }
}
