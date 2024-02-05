// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const TOKEN = "pk.eyJ1IjoibWF0dmE4NCIsImEiOiJjbHIyYnFpMW8wejN1MnJvMXUxcHdqaDM2In0.-PHRqAW9yKRl1beEI4AOvg";

//const showMap = (userInput) => {
//  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=${token}`;
//  fetch(url)
//    .then((response) => response.json())
//    .then((data) => {
//      alert(userInput);
//      const disp = document.querySelector(".font-monospace");
//      disp.innerText = data.features[0].geometry.coordinates;
      // - Create a map using the Mapbox API and the coordinates
      // - Add a marker to the map at the coordinates
//    });
//};


//showMap(address.innerText)



//const TOKEN = "your-token-here";

const displayCoordinates = (longitude, latitude) => {
  const paragraphElement = document.getElementById("coordinates");
  paragraphElement.innerText = `${latitude}, ${longitude}`;
};

const injectMap = (lng, lat) => {
  const mapDiv = document.getElementById("map");
  mapDiv.innerHTML = "";

  mapboxgl.accessToken = TOKEN;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [lng, lat],
    zoom: 12,
  });
  new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
};

//const showMapAndCoordinates = (event) => {
//  event.preventDefault();
  const address = document.getElementById("address").innerText;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${TOKEN}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const longitude = data.features[0].center[0];
      const latitude = data.features[0].center[1];
      //displayCoordinates(longitude, latitude);
      console.log(address);
      console.log(longitude);
      console.log(latitude);
      injectMap(longitude, latitude);
    });
//};

//showMapAndCoordinates;
