(function () {
    "use strict";
    var myTubeList = $("#myTubeList"),
        // myTubeListUl = $("#myTubeList ul li"),
        myTube = $("#myTube video"),
        errorElement = $("#errorElement"),
        storedVideos = "",
        value = 0;

    $.get("jTube.json", function (loadedText) {
        storedVideos = loadedText;
        // console.log(storedVideos);
        storedVideos.forEach(display);
        play();
    }).fail(function (jqxhr, status, statusText) {
        errorElement.text("Failed to load file: " + jqxhr.status + " " + statusText);
        errorElement.show();
    })
    function display(storedVideos) {
        $("#myTubeList ul").append('<li value="' + (value++) + '">' + storedVideos.Title + "</li>");

    }
    function play() {
        // myTubeListUl.click(function (event) {
        $("#myTubeList ul li").click(function (event) {
            console.log(this.value);
            console.log(event);
            myTube.attr('src', storedVideos[this.value].url);
        })
    }
})()