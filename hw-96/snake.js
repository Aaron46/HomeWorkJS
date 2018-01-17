(function () {
    "use strict";
    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        img = new Image(),
        iHeight = window.innerHeight / 2,
        iWidth = window.innerWidth / 2;
    img.src = 'images/snakehead.jpg';

    img.addEventListener('load', function () {
        setInterval(function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, iWidth, window.innerHeight / 2, 64, 64);
            iWidth += 64;

        }, 1000);

    }, false);
    document.addEventListener('keydown', function (event) {
        console.log(event);
    });


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();


}())