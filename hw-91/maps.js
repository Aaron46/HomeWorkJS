/*global google, $*/

function initMap() {
    var place = $("#place");
    var placesDiv = $("#places");
    var search = $("#search");
    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById('map'), {
        minZoom: 2,
        zoom: 8,
        center: uluru
    });
    var layer = new OpenLayer.Layer.Google("Google", {
        wrapDateLine: false,
        sphericalMercator: true
    })
    var doodle = new google.maps.drawing.DrawingManager({
        map: map
    })


    search.click(function () {
        console.log(place.val());
        $.getJSON("http://api.geonames.org/wikipediaSearch?username=aaron46&type=JSON&callback=?", { q: place.val(), maxRows: 10 }, function (a) {
            console.log(a);
            a.geonames.forEach(function (geoname) {
                placesDiv.append("<li><img src='" + geoname.thumbnailImg + " ' /></li > ");
                var marker = new google.maps.Marker({
                    position: { lat: geoname.lat, lng: geoname.lng },
                    map: map
                });
            });

        });


    })
}