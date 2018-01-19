(function () {
    "use strict";
    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        img = new Image(),
        // iHeight = window.innerHeight / 2,
        // iWidth = window.innerWidth / 2,
        iHeight = 0,
        iWidth = 0,
        direction;
    const LEFT = 37,
        DOWN = 38,
        RIGHT = 39,
        UP = 40;
    img.src = 'images/snakehead.jpg';

    img.addEventListener('load', function () {
        setInterval(function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            switch (direction) {
                case LEFT:
                    iWidth -= 64;
                    break;
                case UP:
                    iHeight += 64;
                    break;
                case RIGHT:
                    iWidth += 64;
                    break;
                case DOWN:
                    iHeight -= 64;
                    break;
                    direction = event.keyCode;
                    break;
            }
            context.drawImage(img, iWidth, iHeight, 64, 64);

        }, 1000);

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