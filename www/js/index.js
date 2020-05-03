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
    var alt = position.coords.altitude;
    var accuracy = position.coords.accuracy;
    var timeS = position.timestamp; 

    var output = "<strong>Latitude:</strong> " + lat;
        output += "<br/><strong>Longitude:</strong> " + long;
        output += "<br/><strong>Altitude:</strong> " + alt;
        output += "<br/><strong>Accuracy:</strong> " + accuracy;
        output += "<br/><strong>Time Stamp:</strong> " + timeS;

    document.getElementById('result').innerHTML = output;
}

function failure(message) {
    alert("Error: " + message.message);
}