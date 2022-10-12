let temp = document.querySelector(".temp");
let maxTemp = document.querySelector(".max-temp");
let minTemp = document.querySelector(".min-temp");
let feelsLike = document.querySelector(".feels-like");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");

async function getWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=mississauga&appid=5c5e73f9e818d5c73005dfc4073fea98&units=metric"
  );
  const data = await response.json();
  return data;
}

const displayWeatherData = async () => {
  let weatherData = await getWeather();
  console.log(weatherData);
  temp.append(" " + weatherData.main.temp);
  maxTemp.append(" " + weatherData.main.temp_max);
  minTemp.append(" " + weatherData.main.temp_min);

  const feelsLikeData = document.createElement("span");
  feelsLikeData.textContent = " " + weatherData.main.feels_like;
  feelsLike.appendChild(feelsLikeData);

  const humidityData = document.createElement("span");
  humidityData.textContent = " " + weatherData.main.humidity;
  humidity.appendChild(humidityData);

  const pressureData = document.createElement("span");
  pressureData.textContent = " " + weatherData.main.pressure;
  pressure.appendChild(pressureData);
};

displayWeatherData();
