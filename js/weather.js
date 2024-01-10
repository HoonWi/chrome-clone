const API_KEY = "75f0b43f95bbf3ff2636621ef8a4e145"

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    weather.innerText = `${data.weather[0].mai} / ${Math.floor(data.main.temp)}`;
    city.innerText = data.name;
  })
}
function onGeoError() {
  console.log("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)