# Weather Report

![Project](https://img.shields.io/badge/Weather_Report-32a5ba) ![Status](https://img.shields.io/badge/status-demo-blue)

**JavaScript · OpenWeather**

A city-weather demo using HTML, CSS, JavaScript and OpenWeather's current-weather API. It shows a city's temperature in Celsius, weather description and icon.

## 🚀 Setup
1. Create your own OpenWeather API key.
2. Copy `weather-app/config.example.js` to `weather-app/config.local.js`.
3. Replace `YOUR_OPENWEATHER_API_KEY` in the local file with your key.
4. Serve `weather-app` with `python3 -m http.server 8080`, then open the page and enter a city.

## 🔐 Security
`config.local.js` is ignored by Git. A previous hard-coded key was removed from current source; its owner must rotate or revoke it because it remains in Git history. Do not reuse it.

This is a browser-only demo. A key supplied to browser code is visible to visitors even if it is not committed. For a public production deployment, use a backend proxy with a server-side key and request limits.

## 📌 Limits
Weather requires a network connection and a valid API key. API errors currently use a generic error message. No forecast, saved-city account or offline data is implemented.
