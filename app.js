let temperature = document.querySelector(".temp");

async function getWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=5c5e73f9e818d5c73005dfc4073fea98&units=metric"
  );
  const data = await response.json();
  return data;
}

const displayWeatherData = async () => {
  let weatherData = await getWeather();
  temperature.append(weatherData.main.temp);

};

displayWeatherData();
