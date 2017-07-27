// Function to move ball and calculate collision
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
        if (ballX > paddleX &&
            ballX < (paddleX + paddleWidth) &&
            ballY > (canvas.height - paddleHeight)) {
            ballSpeedY = -ballSpeedY;
        } else {
            alert("GAME OVER");
            document.location.reload();
        }
    }
}
