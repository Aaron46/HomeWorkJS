(function () {
    "use strict";

    var startstring = "start";
    var stopString = "stop";
    // var r = 0;
    var startTime;
    var div = get("stopWatch");
    var button = get("watchButton");
    var start;
    var div = createElement("div");
    var span = createElement("span");
    var buttonDiv = createElement("button");
    var toggleButton = createElement("button");
    var resetButton = createElement("button");

    div.appendChild(span);

    function createElement(type) {
        return document.createElement(type);
    }

    function get(id) {
        return document.getElementById(id);
    }

    function stopWatchFunc() {
        if (button.innerHTML === startstring) {
            start = setInterval(function () {
                // div.innerHTML = r;
                r++;
                r % 60;
            }, 10);
            button.innerHTML = stopString;
        } else {
            clearInterval(start);
            button.innerHTML = startstring;
        }
    }

    function updateDOM() {
        if (button.innerHTML === startstring) {
            var start = new Date();
            var elapsedTime = new Date() - start;
            var hundredth = elapsedTime % 100;
            var seconds = math.floor(hundredth / 100) % 60;
            var minutes = math.floor(seconds / 60) % 60;
            var hours = math.floor(minutes / 60);
            div.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + hundredth;
            button.innerHTML = stopString;
        } else {

            button.innerHTML = startstring;
        }

    }

    function reset() {
        startTime = new Date();
        clearInterval(start);
        button.innerHTML = startstring;
        r = 0;
        div.innerHTML = r;
    };
    button.innerHTML = startstring;
    // button.addEventListener("click", stopWatchFunc);
    button.addEventListener("click", updateDOM);
}())