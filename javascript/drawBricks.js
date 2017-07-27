function drawBricks(brickColumn, brickRow, brickWidth, brickHeight, brickColor) {

    for (i = 0; i < brickColumn; i++) {
        for (j = 0; j < brickRow; j++) {
            var brickX = (i * (brickWidth + brickPadding))+30;
            var brickY = (j * (brickHeight + brickPadding))+30;

            bricks[i][j].x = brickX;
            bricks[i][j].y = brickY;
            drawRect(brickX, brickY, brickWidth, brickHeight, brickColor);
        }
    }
}