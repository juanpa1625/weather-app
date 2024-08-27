// src/components/Forecast.jsx

import React from 'react';
import { getWeatherImage } from '../utils/weatherImages';

const Forecast = ({ forecastData }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {forecastData.list.slice(1, 6).map((day, index) => (
        <div key={index} className="text-center bg-gray-800 p-4 rounded-lg">
          <p>{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</p>
          <img 
            src={getWeatherImage(day.weather[0].main)} 
            alt={day.weather[0].description} 
            className="w-12 h-12 mx-auto" 
          />
          <p>{Math.round(day.main.temp_min - 273.15)}°C - {Math.round(day.main.temp_max - 273.15)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;


