(function () {
    "use strict";

    var cimage = $("#carousel img"),
        forward = $("#forward"),
        back = $("#back"),
        i = 0,
        pics;


    $.get("images.json", function (loadedImages) {
        console.log(loadedImages);
        pics = loadedImages;
        rotateImg();
        forward.click(function (event) {
            if (++i == pics.length) {
                i = 0;
            }
            rotateImg();
        });
        back.click(function (event) {
            if (--i < 0) {
                i = pics.length - 1;
            };
            rotateImg();
        })

    }).fail(function (xhr, statusCode, statusText) {
        alert("error: " + statusText);
        console.log(xhr, statusCode, statusText);
    });
    function rotateImg() {
        cimage.attr("src", pics[i].image);
    }
})()