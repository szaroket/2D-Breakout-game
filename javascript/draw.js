// Function to draw every element
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(ballX, ballY, ballRadius, ballColor);
    drawRect(paddleX, paddleY, paddleWidth, paddleHeight, paddleColor);
    drawBricks(brickColumn, brickRow, brickWidth, brickHeight, brickColor);
    collisionDetection();
    drawScore();
    drawLives();
}