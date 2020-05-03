var options;

window.onload = function() {
    document.addEventListener('deviceready', init, false);
    init();     //delete to run on device
}

function init() {
    //document.getElementById('btnLocation').style.display = "block";

    options = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
    };
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(success, failure, options);
}

function success(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    var output = "<strong>Latitude:</strong> " + lat;
        output += "<br/><strong>Longitude:</strong> " + long;
 
    document.getElementById('result').innerHTML = output;

  var mapOptions = {
    center: {lat: lat, lng: long},
    zoom: 18
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
    position: {lat: lat, lng: long},
    map: map
  });
}

function failure(message) {
    alert("Error: " + message.message);
}

function clearScreen() {
  document.getElementById('map-canvas').innerHTML = "";
  document.getElementById('map-canvas').style.backgroundColor ="white";
  document.getElementById('result').innerHTML = "";
}