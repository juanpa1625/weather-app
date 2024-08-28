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
      return "Mañana";
    } else {
      const nextDate = new Date();
      nextDate.setDate(date.getDate() + index);
      const options = { weekday: 'short', day: 'numeric', month: 'long' };
      return nextDate.toLocaleDateString('en-US', options);
    }
  };

  return (
    <div className="relative p-4 bg-gray-900 rounded-lg">
      <div className="absolute top-0 right-0 flex space-x-2 ">
        <button 
          onClick={handleCelsiusClick} 
          className={`w-8 h-8 rounded-full flex items-center justify-center ${unit === 'C' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-300'} hover:bg-blue-600`}
        >
          °C
        </button>
        <button 
          onClick={handleFahrenheitClick} 
          className={`w-8 h-8 rounded-full flex items-center justify-center ${unit === 'F' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-300'} hover:bg-blue-600`}
        >
          °F
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-11">
        {forecastData.list.slice(0, 5).map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <p className="text-sm">{formatDate(item.dt_txt, index)}</p>
              <img 
                src={getWeatherImage(item.weather[0].main)} 
                alt={item.weather[0].description} 
                className="w-16 h-16 mb-2" 
              />
              <p className="text-sm">{`Min: ${convertTemp(item.main.temp_min)} | Max: ${convertTemp(item.main.temp_max)}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
