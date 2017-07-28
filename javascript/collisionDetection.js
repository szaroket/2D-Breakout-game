function collisionDetection() {
    for (i = 0; i < brickColumn; i++) {
        for (j = 0; j < brickRow; j++) {
            var b = bricks[i][j];
            if (b.visible) {
                if (ballX > b.x &&
                    ballX < (b.x + brickWidth) &&
                    ballY > b.y &&
                    ballY < (b.y + brickHeight)) {
                    ballSpeedY = -ballSpeedY;
                    b.visible = false;
                    score++;
                    if (score == brickColumn * brickRow) {
                        alert("YOU WON!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
