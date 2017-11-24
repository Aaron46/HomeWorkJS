(function () {
    "use strict";

    window.onload = function () {
        var theButton = document.getElementById("theButton");
        theButton.addEventListener('click', function () {
            var getBgColor = document.getElementById("backgroundColor").value;
            var getFcColor = document.getElementById("fontColor").value;

            document.body.style.backgroundColor = getBgColor;
            document.body.style.color = getFcColor;
        });

        var divTT = document.getElementById("hw-80");
        var intervalId;
        var i = 0;
        var startString = 'Start';
        var stopString = 'Stop';

        function colorItAgain() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return "rgb(" + r + "," + g + "," + b + ")";
        }

        // function colorit() {
        //     var color = "rgb(";
        //     for (var i = 0; i < 3; i++) {
        //         color += Math.floor(Math.random() * 256);
        //         if (i != 2) {
        //             color += ",";
        //         }

        //     }
        //     color += ")";
        //     divTT.style.backgroundColor = color;
        //     divTT.style.color = color;
        // }


        var theColorItButton = document.getElementById("theColorItButton");
        theColorItButton.innerHTML = startString;

        theColorItButton.addEventListener('click', function () {

            if (theColorItButton.innerHTML === startString) {
                // intervalId = setInterval(colorit, 1000);
                intervalId = setInterval(function () {
                    divTT.style.backgroundColor = colorItAgain();
                    divTT.style.color = colorItAgain();
                }, 1000);
                theColorItButton.innerHTML = stopString;

            } else {
                clearInterval(intervalId);
                theColorItButton.innerHTML = startString;
            }
        });

    };

})();