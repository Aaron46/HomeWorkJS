(function () {
    "use strict";
    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        img = new Image(),
        // snakeY       = window.innerHeight / 2,
        // snakeX      = window.innerWidth / 2,
        snakeY = 0,
        snakeX = 10,
        snakeSize = 64,
        direction;
    const LEFT = 37,
        DOWN = 38,
        RIGHT = 39,
        UP = 40;
    img.src = 'images/Snake.png';

    function resizeCanvas() {
        var width = window.innerWidth - 10;
        var height = window.innerHeight - 10;

        canvas.width = width - width % snakeSize;
        canvas.height = height - height % snakeSize;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    img.addEventListener('load', function () {
        var interval = setInterval(function () {
            context.clearRect(0, 0, canvas.width, canvas.height);

            if (snakeX + snakeSize < 0 || snakeX + snakeSize > canvas.width - snakeSize) {
                clearInterval(interval);
            }
            if (snakeY + snakeSize < 50 || snakeY + snakeSize > canvas.height - snakeSize) {
                clearInterval(interval);
            }

            switch (direction) {
                case LEFT:
                    snakeX -= snakeSize;
                    break;
                case UP:
                    snakeY += snakeSize;
                    break;
                case RIGHT:
                    snakeX += snakeSize;
                    break;
                case DOWN:
                    snakeY -= snakeSize;
                    break;
                    direction = event.keyCode;
                    break;
            }

            context.drawImage(img, snakeX, snakeY, 64, 64);

        }, 100);

    }, false);
    document.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 37:
            case 38:
            case 39:
            case 40:
                direction = event.keyCode;
                break;
        }
        console.log(event);
    });


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();


}())