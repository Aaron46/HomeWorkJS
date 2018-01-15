(function () {
    "use strict";
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Ant() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;

    }
    function setNumbers(a, b) {
        Math.random
    }
    Ant.prototype.move = function () {
        this.x++;
        this.y++;
        context.color = 'black';
        context.fillRect(this.x, this.y, 2, 2);
    };
    var ant = new Ant();
    setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ant.move();
    }, 300);

}());