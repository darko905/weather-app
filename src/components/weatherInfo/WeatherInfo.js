import React from 'react'
import FormattedTime from '../formattedTime/FormattedTime.js'
import WeatherIcon from '../weatherIcon/WeatherIcon.js'
import '../weather/Weather.css';
import { FaArrowUp,FaArrowDown, FaThermometerEmpty, FaTint, FaWind } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
       <div className="current-local-time">
        {" "}
        <FormattedTime
          time={props.data.date}
          timezone={props.data.timezone}
        />{" "}
      </div>
      <div className="current-location">
        <MdLocationOn/> {props.data.city}, {props.data.country}
      </div>

      <h1 className="current-weather-description">
            {props.data.description}
      </h1>
     

      <div className="weatherInfo-details">
        <div className="current-icon">
          <WeatherIcon
            code={props.data.icon}
            size={60}
            alt={props.data.description}
          />
        </div>

        <div className="text-center">
          
       
          <h1 className="current-temperature">
            {""}
            {Math.round(props.data.temperature)}
            <span className="unit">°C</span>
          </h1>
          
        </div>

        <div className="current-weather-details">
        <ul>
          <li className="real-feel">
            <FaThermometerEmpty/>
           &nbsp; Real feel: {" "}
             <strong> {Math.round(props.data.feels_like)}°</strong>
          </li>
          <li className="humidity">
            <FaTint/>
            Humidity: <strong>{Math.round(props.data.humidity)}%</strong>
          </li>
          <li className="wind">
            <FaWind/> Wind:{" "}
            <strong>{Math.round(props.data.wind)} km/h</strong>
          </li>
        </ul>
      </div>
      
    </div>
    <div className="max-and-min-temperatures">
      <FaArrowUp/> &nbsp;
      High:
      <span className="current-max-temprature">
      <strong>  {" "}
        {Math.round(props.data.temp_max)}°</strong>
      </span>
      <strong>&nbsp;&nbsp;|</strong>&nbsp;&nbsp;
      <FaArrowDown/> &nbsp;
      Low:{" "}
      <span className="current-min-temperature">
        <strong> {Math.round(props.data.temp_min)}°</strong>
      </span>
    </div>



      
    </div>
  )
}
