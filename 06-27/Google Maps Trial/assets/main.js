var map;
var service;
var infowindow;
var pos;

$(document).ready(function () {
    initMap();
});

$("#submit").on("click", function () {
    var queryTerm = $("#searchBar").val().trim();
    searchByName(queryTerm);
})

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 18
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    };

    document.add;

};

//Searches for places by name submitted. If the user submits search data
//that doesn't match with restaurant names, do a custom search
function searchByName(name) {
    var testName = name.toLowerCase();
    if (testName==="bar"||"bars"||"restaurant"||"restaurants"||"food"||"beer") {
        var request = {
            location: pos,
            radius: '500',
            type: ['bar', 'restaurant']
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
    } else {
        var request = {
            query: name,
            fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
            locationBias: {radius: 50, center: pos}
        };
        service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, callback);
    };
};

function searchByArea() {
    var request = {
        location: pos,
        radius: '500',
        type: ['bar', 'restaurant']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

};

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
        };
    };
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};

//This is the Nearby Search Function of Google Maps
/* Study it
[√] var map;
[√] var service;
[√] var infowindow;

[√] function initialize() {
  [√] var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  [√]map = new google.maps.Map(document.getElementById('map'), {
      [√]center: pyrmont,
      [√]zoom: 15
    [√]});

  var request = {
    location: pyrmont,
    radius: '500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
[√]

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
*/

//Category Google Maps Search -- Study
/*
var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
*/

//Find place Google Maps API
/*
var map;
var service;
var infowindow;

function initMap() {
  var mapCenter = new google.maps.LatLng(-33.8617374,151.2021291);

  map = new google.maps.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 15
  });

  var request = {
    query: 'Museum of Contemporary Art Australia',
    fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
*/

//Using Google Maps URLs, this launches a map at user's current location
// https://www.google.com/maps/@?api=1&map_action=map

//Could give the user ablity to type in responses to the api as locations
//and build it using google maps url app