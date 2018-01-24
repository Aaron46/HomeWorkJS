(function () {
    "use strict";
    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        ballRadius = 50,
        ballX = ballRadius,
        ballY = ballRadius,
        dx = 2,
        dy = 2;

    // x = 50,
    // y = 50;


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function drawCircle() {
        context.beginPath();
        context.arc(ballX, ballY, 50, 0, 2 * Math.PI, false);
        context.stroke();
        context.fillStyle = 'red';
        context.fill();
    }


    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawCircle();

        if (ballX + dx < 50 || ballX + dx > canvas.width - ballRadius) {
            dx = -dx;
        }
        if (ballY + dy < 50 || ballY + dy > canvas.height - ballRadius) {
            dy = -dy;
        }
        ballX += dx;
        ballY += dy;
    }, 20);
}())