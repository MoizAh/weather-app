let search = document.querySelector(".search");
let searchBtn = document.querySelector(".search-btn");

let locationName = document.querySelector(".location-name");
let temp = document.querySelector(".temp");
let maxTemp = document.querySelector(".max-temp");
let minTemp = document.querySelector(".min-temp");
let feelsLike = document.querySelector(".feels-like");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");

async function searchLocation() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        search.value +
        "&appid=5c5e73f9e818d5c73005dfc4073fea98&units=metric",
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener("click", async (e) => {
  locationName.innerHTML = "";
  temp.innerHTML = "";
  maxTemp.innerHTML = "";
  minTemp.innerHTML = "";
  feelsLike.innerHTML = "Feels Like:";
  humidity.innerHTML = "Humidity:";
  pressure.innerHTML = "Pressure:";

  const weather = await searchLocation();
  console.log(weather);

  locationName.append(" " + weather.name);
  temp.append(" " + Math.floor(weather.main.temp) + "℃");
  maxTemp.append(" " + Math.floor(weather.main.temp_max) + "℃");
  minTemp.append(" " + Math.floor(weather.main.temp_min) + "℃");
  feelsLike.append(" " + weather.main.feels_like);
  humidity.append(" " + weather.main.humidity);
  pressure.append(" " + weather.main.pressure);

  search.value = "";
});
