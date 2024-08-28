import React from 'react';
import { getWeatherImage } from '../utils/weatherImages';

const Forecast = ({ forecastData, unit, onUnitChange }) => {
  const handleCelsiusClick = () => {
    onUnitChange('C');
  };

  const handleFahrenheitClick = () => {
    onUnitChange('F');
  };

  const convertTemp = (tempK) => {
    return unit === 'C'
      ? `${Math.round(tempK - 273.15)}°C`
      : `${Math.round((tempK - 273.15) * 9/5 + 32)}°F`;
  };

  const formatDate = (dateString, index) => {
    const date = new Date(dateString);
    
    if (index === 0) {
      return "Tomorrow";
    } else {
      const nextDate = new Date();
      nextDate.setDate(date.getDate() + index);
      const options = { weekday: 'short', day: 'numeric', month: 'long' };
      return nextDate.toLocaleDateString('en-US', options);
    }
  };

  return (
    <div className="relative p-4 bg-background-2 rounded-lg">
      <div className="absolute top-0 right-0 flex space-x-2">
        <button 
          onClick={handleCelsiusClick} 
          className={`w-8 h-8 rounded-full flex items-center justify-center ${unit === 'C' ? 'bg-background-1 text-white' : 'bg-gray-500 text-gray-300'} `}
        >
          °C
        </button>
        <button 
          onClick={handleFahrenheitClick} 
          className={`w-8 h-8 rounded-full flex items-center justify-center ${unit === 'F' ? 'bg-background-1 text-white' : 'bg-gray-500 text-gray-300'} `}
        >
          °F
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-12 md:grid-cols-5 md:gap-4">
        {forecastData.list.slice(0, 5).map((item, index) => (
          <div key={index} className="flex flex-col items-center p-2 bg-background-1 rounded-lg md:p-4">
            <p className="text-xs md:text-sm mb-1 md:mb-2">{formatDate(item.dt_txt, index)}</p>
            <img 
              src={getWeatherImage(item.weather[0].main)} 
              alt={item.weather[0].description} 
              className="w-12 h-12 md:w-16 md:h-16 mb-1 md:mb-2" 
            />
            <p className="text-xs md:text-sm">
              Min: {convertTemp(item.main.temp_min)} | Max: {convertTemp(item.main.temp_max)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
