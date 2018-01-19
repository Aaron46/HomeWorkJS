(function () {
    "use strict";
    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        x = 50,
        y = 50;


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function drawCircle() {
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI, false);
        context.stroke();
    }


    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawCircle();
        var situation;
        if (x >= 50) {
            situation = "BOUNCEDOWN";
        }
        else if (x = canvas.height - 50) {
            situation = "BOUNCEUP";
        }
        switch (situation) {
            case "BOUNCEDOWN":
                x++;
                y++;
                break;
            case "BOUNCEUP":
                x++;
                y--;
                break;
            // default:
            //     bounceDown;
            //     break;
        };



    }, 20);
}())