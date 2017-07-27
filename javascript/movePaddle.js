
function movePaddle() {
    canvas.addEventListener('mousemove',
        function (evt) {
            var mousePos = calculateMousePos(evt);
            paddleX = mousePos.x - (paddleWidth / 2);
        }
    )
}