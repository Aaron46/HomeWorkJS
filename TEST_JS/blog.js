/*global $*/
(function () {
    "use strict";

    function arrangeBloggers(bloggers) {
        bloggers.forEach(function (bloggers) {
            $("#bloggers").append("<div id=" + bloggers.id + "><h1>" + bloggers.username + "</h1><h2>" + bloggers.website + "</h2><h2>" + bloggers.company.name + "</h2></div>");
            $("#" + bloggers.id).css('border', '1px solid black');

        });
    }

    function clickTheBloggers(bloggers) {

        $("#bloggers div").each(function (i) {
            $(this).click(function () {
                $("#bloggers div").remove();
                $("body").append('<div><button id="back">back</button></div>');
                getposts(i);
                $("#back").click(function () {
                    arrangeBloggers(bloggers);
                    clickTheBloggers(bloggers);
                });
                console.log(i + " was clicked!");
            });
        });
    }

    function getposts() {
        var ids;
        $.get('https://jsonplaceholder.typicode.com/posts', function (loadedData) {
            console.log(loadedData);
            loadedData.forEach(function (data, i) {
                i += 1;
                console.log(data.filter(data.userId[i]));
                if (data.userId === i) {
                    data.id.forEach(function (id) {
                        $("#bloggers").append("<div id=" + data.id + "><p>" + data.title + "</p></div>");
                    });
                    console.log("my title is " + data.title);
                }
            });

        });
    }

    $.get('https://jsonplaceholder.typicode.com/users', function (bloggers) {

        arrangeBloggers(bloggers);
        clickTheBloggers(bloggers);

    }).fail(function (jqxhr, status, statusText) {
        errorElement.text("Failed to load file: " + jqxhr.status + " " + statusText);
        errorElement.show();
    });

}());