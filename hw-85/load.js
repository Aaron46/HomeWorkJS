/* global $*/
(function () {
    "use strict";
    var loadbtn = $('#loadBtn');
    var msgDiv = $('#msgDiv');
    var siteloaded = $('#siteloaded').val();
    var loader = $('.loader');
    var body = $("body");


    loadbtn.click(function (event) {
        body.addClass("loading");
        setTimeout(function () {

            $.get(siteloaded, function (loadedData) {
                body.removeClass("loading");
                msgDiv.text(loadedData);
            }).fail(function (xhr, statusCode, statusText) {
                body.removeClass("loading");
                msgDiv.text("error: " + statusText);
                console.log(xhr, statusCode, statusText);
            });

        }, 2000)

    });
})();