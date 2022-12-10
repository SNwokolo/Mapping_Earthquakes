// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([43.6777, -79.6248], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Coordinates to map various points in airline routes (SFO to JFK with stops at YYZ and AUS)

let line = [
    [30.1975, -97.6664],
    [37.6213, -122.3790],
    [40.6413, -73.7781],
    [43.6777, -79.6248]
];

// Create a polyline using the line coordinates and make the line red
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight: 4,
    dashArray: "8",                          //creates a dashed line effect
    dashOffset: "3"                          //creates a dashed line effect
}).addTo(map);


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);