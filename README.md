# Weather Report

![Project](https://img.shields.io/badge/project-Weather_Report-32a5ba) ![Status](https://img.shields.io/badge/status-demo-blue)

**JavaScript · Open-Meteo**

A city-weather app with geocoding search, current conditions and a five-day forecast. No API key or account is needed.

## ✨ Features
- City search with a location picker, so "Springfield"-style ambiguous names resolve to the right place.
- Current temperature, feels-like, humidity, wind and today's rain chance.
- Five-day forecast with high/low temperatures and precipitation probability.
- °C / °F toggle and a responsive dark interface.
- Friendly error and empty states; in-flight requests are cancelled when a new search starts.

## 🚀 Run locally
Serve `weather-app` with `python3 -m http.server 8080` and open the page. No dependencies, build step or API key are required.

Weather data comes from the free [Open-Meteo](https://open-meteo.com/) forecast and geocoding APIs (non-commercial use).

## 🔐 Security
An earlier version of this project used a hard-coded OpenWeather key. The app no longer needs any key, but the old key remains in Git history and its owner must rotate or revoke it. Do not reuse it.

## 📌 Limits
Weather requires a network connection. Forecasts are estimates, not safety advice. Open-Meteo's free tier has rate limits, so this demo is not suited to high-traffic production use.
