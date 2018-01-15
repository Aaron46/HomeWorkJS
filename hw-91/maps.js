/*global google, $*/

function initMap() {
    var place = $("#place");
    var placesDiv = $("#places");
    var search = $("#search");
    var uluru = { lat: -25.363, lng: 131.044 };
    var marker;

    var map = new google.maps.Map(document.getElementById('map'), {
        minZoom: 3,
        zoom: 3,
        center: uluru
    });

    var doodle = new google.maps.drawing.DrawingManager({
        map: map
    })
    var markers = [];
    var clear = $("#clear");


    search.click(function () {
        console.log(place.val());
        $.getJSON("http://api.geonames.org/wikipediaSearch?username=aaron46&type=JSON&callback=?", { q: place.val(), maxRows: 10 }, function (a) {
            console.log(a);

            if (a && markers.length !== 0) {
                markers.forEach(function (marker) {
                    marker.setMap(null)
                })
                markers = [];
                placesDiv.empty();
            };
            var bounds = new google.maps.LatLngBounds();
            a.geonames.forEach(function (geoname) {
                var location = { lat: geoname.lat, lng: geoname.lng };
                if (geoname.thumbnailImg) {
                    placesDiv.append("<li><h1>" + geoname.title + "</h1><img src='" + geoname.thumbnailImg + " ' /></li > ");
                } else {
                    // ("<li><img src='" + geoname.thumbnailImg + " ' /></li > ")
                    ("<li><h1>" + geoname.title + "</h1><h1>No Image Available</h1></li > ")
                }

                marker = new google.maps.Marker({
                    position: location,
                    map: map
                });
                bounds.extend(location);
                markers.push(marker);
            });
            map.fitBounds(bounds);
        });
    })

    clear.click(function clear() {
        markers.forEach(function (marker) {
            marker.setMap(null)
        })
        markers = [];
        placesDiv.empty();
    });

    google.maps.event.addListener(doodle, 'overlaycomplete', function (event) {
        if (event.type == 'circle') {
            var radius = event.overlay.getRadius();
            console.log("this is a circle. its radius is" + radius);
        }
    });
}