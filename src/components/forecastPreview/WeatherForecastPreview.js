import React from 'react'
import axios from 'axios';
import WeatherForecastDay from '../forecastDay/WeatherForecastDay';
import { useState } from 'react';
import { useEffect } from 'react';
import '../weather/Weather.css';




const WeatherForecastPreview = (props) => {
  let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
        return (
          <div className="weatherForecast">
            <div className="weatherForecast-header">
              Next 5 Days 
            </div>
        
            <div className="row">
              {" "}
              {forecast.map(function (dailyForecast, index) {
                if (index < 6 && index > 0) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast}
                       />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        );
      } else {
        let apiKey = "1fa9ff4126d95b8db54f3897a208e91c";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    
        axios.get(apiUrl).then(handleResponse);
    
        return (
          <div className='loader'>
            <div className="lds-dual-ring"></div>
          </div>
          
          
          
        );
    }
}

export default WeatherForecastPreview

