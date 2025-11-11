async function getWeather() {
  const city = document.getElementById("city").value;
  const resultDiv = document.getElementById("result");

  if (city === "") {
    resultDiv.innerHTML = "dehradun";
    return;
  }

  const apiKey = "ab6e2e2772aca90eb6c518d7840424d3"; // Replace with your API key (see Step 6)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      resultDiv.innerHTML = "❌ City not found!";
    } else {
      const temp = data.main.temp;
      const weather = data.weather[0].main;
      const icon = data.weather[0].icon;

      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${weather}">
        <p>${weather}</p>
        <p>🌡️ ${temp} °C</p>
      `;
    }
  } catch (error) {
    resultDiv.innerHTML = "⚠️ Error fetching weather data.";
  }
}
