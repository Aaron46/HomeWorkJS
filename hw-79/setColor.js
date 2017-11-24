(function () {
    "use strict";
    window.onload = function () {
        var theButton = document.getElementById("theButton");
        theButton.addEventListener('click', function () {
            var getBgColor = document.getElementById("backgroundColor").value;
            var getFcColor = document.getElementById("fontColor").value;

            document.body.style.backgroundColor = getBgColor;
            // document.getElementById('loremDiv').style.color = getFcColor;
            // document.getElementById('h1div').style.color = getFcColor;
            // document.getElementById('h2div').style.color = getFcColor;
            document.body.style.color = getFcColor;
        });
    };

})();