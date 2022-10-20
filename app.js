let search = document.querySelector(".search");
let searchBtn = document.querySelector(".search-btn");

let locationName = document.querySelector(".location-name");
let temp = document.querySelector(".temp");
let maxTemp = document.querySelector(".max-temp");
let minTemp = document.querySelector(".min-temp");
let feelsLike = document.querySelector(".feels-like");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");

let celsius = document.querySelector(".celsius");
let fahrenheit = document.querySelector(".fahrenheit");

let locationValue = [];

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

async function searchLocationFahrenheit() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        locationValue +
        "&appid=5c5e73f9e818d5c73005dfc4073fea98&units=imperial",
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function searchLocationCelsius() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        locationValue +
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
  maxTemp.innerHTML = "H: ";
  minTemp.innerHTML = "L: ";
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

  celsius.style.backgroundColor = "#64748b";
  celsius.style.border = "2px solid #64748b";
  celsius.style.color = "white";
  celsius.style.borderRadius = "3px";

  locationValue.shift();
  locationValue.push(search.value);

  search.value = "";
});

fahrenheit.addEventListener("click", async (e) => {
  locationName.innerHTML = "";
  temp.innerHTML = "";
  maxTemp.innerHTML = "H: ";
  minTemp.innerHTML = "L: ";
  feelsLike.innerHTML = "Feels Like:";
  humidity.innerHTML = "Humidity:";
  pressure.innerHTML = "Pressure:";

  const weather = await searchLocationFahrenheit();
  console.log(weather);

  locationName.append(" " + weather.name);
  temp.append(" " + Math.floor(weather.main.temp) + "℉");
  maxTemp.append(" " + Math.floor(weather.main.temp_max) + "℉");
  minTemp.append(" " + Math.floor(weather.main.temp_min) + "℉");
  feelsLike.append(" " + weather.main.feels_like);
  humidity.append(" " + weather.main.humidity);
  pressure.append(" " + weather.main.pressure);

  celsius.style.backgroundColor = "#cbd5e1";
  celsius.style.border = "2px solid #cbd5e1";
  celsius.style.color = "black";
  celsius.style.borderRadius = "3px";

  fahrenheit.style.backgroundColor = "#64748b";
  fahrenheit.style.border = "2px solid #64748b";
  fahrenheit.style.color = "white";
  fahrenheit.style.borderRadius = "3px";
})

celsius.addEventListener("click", async (e) => {
  locationName.innerHTML = "";
  temp.innerHTML = "";
  maxTemp.innerHTML = "H: ";
  minTemp.innerHTML = "L: ";
  feelsLike.innerHTML = "Feels Like:";
  humidity.innerHTML = "Humidity:";
  pressure.innerHTML = "Pressure:";

  const weather = await searchLocationCelsius();
  console.log(weather);

  locationName.append(" " + weather.name);
  temp.append(" " + Math.floor(weather.main.temp) + "℃");
  maxTemp.append(" " + Math.floor(weather.main.temp_max) + "℃");
  minTemp.append(" " + Math.floor(weather.main.temp_min) + "℃");
  feelsLike.append(" " + weather.main.feels_like);
  humidity.append(" " + weather.main.humidity);
  pressure.append(" " + weather.main.pressure);

  fahrenheit.style.backgroundColor = "#cbd5e1";
  fahrenheit.style.border = "2px solid #cbd5e1";
  fahrenheit.style.color = "black";
  fahrenheit.style.borderRadius = "3px";

  celsius.style.backgroundColor = "#64748b";
  celsius.style.border = "2px solid #64748b";
  celsius.style.color = "white";
  celsius.style.borderRadius = "3px";
})

