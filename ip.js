const formControl = document.querySelector(".form-control");
const locat = document.querySelector(".location");
const ip = document.querySelector(".ip");
const timezone = document.querySelector(".timezone");
const isp = document.querySelector(".isp");
const btn = document.querySelector(".btn");
let ipAddress = formControl.value;

// const url =
//   "http://ip-api.com/json/24.48.0.1?fields=status,message,country,countryCode,timezone,isp,lat,lon";

const url =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_5DZWRjf7q4nNbnBCV94MBR4ZDlqk5&ipAddress=8.8.8.8";
const getFacts = async () => {
  let response = await fetch(newUrl);
  let data = await response.json();
  console.log(data);

  locat.innerText = data.location.country;
  ip.innerText = formControl.value;
  timezone.innerText = data.location.timezone;
  isp.innerText = data.isp;

  L.marker([data.location.lat, data.location.lng], {
    icon: locationIcon,
  }).addTo(map);
};
btn.addEventListener("click", () => {
  // use .value to get the input from a form
  ipAddress = formControl.value;
  newUrl = url.replace("8.8.8.8", ipAddress);
  getFacts();
});

//http://ip-api.com/json/24.48.0.1
var map = L.map("map", {
  center: [28.652, 77.1663],
  zoom: 13,
});
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// // extra feature
// var popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(map);
// }

// map.on("click", onMapClick);

// adding location icon
var locationIcon = L.icon({
  iconUrl: "images/icon-location.svg",

  iconSize: [38, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location

  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
//adding this icon to map
