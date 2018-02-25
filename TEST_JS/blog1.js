/*global $*/
(function () {
    "use strict";
    var i = 0;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(function (json) {
            var obj = JSON.parse(json);
            obj.forEach(
                $("#bloggers").append("<h1>" + json[i].username + "</h1><h2>" + json[i].website + "</h2><h2>" + json[i].company.name + "</h2>"),
                i++);
        }

        // 



        );
}());