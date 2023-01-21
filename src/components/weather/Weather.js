import React, { useState }  from 'react'
import axios from "axios";
import WeatherForecastPreview from '../forecastPreview/WeatherForecastPreview.js';
import WeatherInfo from '../weatherInfo/WeatherInfo.js';
import './Weather.css';
import './Search.css';
import { FaSearch } from 'react-icons/fa';


const Weather = (props) => {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feels_like:  response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      temp_max: response.data.main.temp_max,
      temp_min: response.data.main.temp_min,
      timezone: response.data.timezone,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "1fa9ff4126d95b8db54f3897a208e91c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  
  if (weatherData.ready) {
    return (
      <div className="WeatherApp-content">
        <form onSubmit={handleSubmit}>
          <div className="row row-form">
            <div className="col-9">
              <input
                type="search"
                className="form-control search-input"
                placeholder="Search for a city here"
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-3 p-0">
              <button
                className="search-city-button"
                id="search-city-button"
                type="submit"
              >
                <FaSearch/>
              </button>
            </div>

         
         
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecastPreview coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="lds-dual-ring"></div>
    );
  }
}

export default Weather

