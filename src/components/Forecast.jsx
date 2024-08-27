import React, { useState } from 'react';
import { getWeatherImage } from '../utils/weatherImages';

const Forecast = ({ forecastData }) => {
  const [isCelsius, setIsCelsius] = useState(true); // Estado para manejar la unidad de temperatura

  const handleCelsiusClick = () => {
    setIsCelsius(true);
  };

  const handleFahrenheitClick = () => {
    setIsCelsius(false);
  };

  const convertTemp = (tempK) => {
    if (isCelsius) {
      return `${Math.round(tempK - 273.15)}°C`; // Convertir a Celsius
    } else {
      return `${Math.round((tempK - 273.15) * 9/5 + 32)}°F`; // Convertir a Fahrenheit
    }
  };

  return (
    <div className="relative p-4 bg-gray-900 rounded-lg">
      <div className="absolute top-2 right-2 flex space-x-2">
        <button 
          onClick={handleCelsiusClick} 
          className={`w-8 h-8 rounded-full flex items-center justify-center ${isCelsius ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-300'} hover:bg-blue-600`}
        >
          °C
        </button>
        <button 
          onClick={handleFahrenheitClick} 
          className={`w-8 h-8 rounded-full flex items-center justify-center ${!isCelsius ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-300'} hover:bg-blue-600`}
        >
          °F
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {forecastData.list.slice(1, 6).map((day, index) => (
          <div key={index} className="text-center bg-gray-800 p-4 rounded-lg">
            <p>{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</p>
            <img 
              src={getWeatherImage(day.weather[0].main)} 
              alt={day.weather[0].description} 
              className="w-12 h-12 mx-auto" 
            />
            <p>{convertTemp(day.main.temp_min)} - {convertTemp(day.main.temp_max)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
