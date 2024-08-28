import React from 'react';
import { getWeatherImage } from '../utils/weatherImages';

const CurrentWeather = ({ weatherData, onSearchClick, onGeoLocate, unit }) => {
  const weatherMain = weatherData.weather[0].main;

  // Formatear la fecha en el formato "Fri, 4 June"
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  });

  const convertTemp = (tempK) => {
    return unit === 'C'
      ? `${Math.round(tempK - 273.15)}°C`
      : `${Math.round((tempK - 273.15) * 9/5 + 32)}°F`;
  };

  return (
    <div className="relative flex flex-col h-screen p-4">
      <div className="flex justify-between p-2 mb-4">
        <button 
          onClick={onSearchClick} 
          className="bg-gray-700 text-white py-2 px-4 rounded">
          Search for places
        </button>
        <button 
          onClick={onGeoLocate} 
          className="bg-gray-700 text-white p-2 rounded-full flex items-center justify-center">
          <img 
            src={getWeatherImage('mylocation')} 
            alt="My Location" 
            className="w-6 h-6" 
          />
        </button>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="relative flex-grow flex justify-center items-center rounded-lg mb-4">
          <div 
            className="absolute inset-0 bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${getWeatherImage('background')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.5,
            }}
          >
            <img 
              src={getWeatherImage(weatherMain)} 
              alt={weatherData.weather[0].description} 
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" 
            />
          </div>
        </div>

        <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-lg">
          <p className="text-8xl font-bold mb-5">{convertTemp(weatherData.main.temp)}</p>
          <p className="text-xl mb-5">{weatherMain}</p> 
          <p className="text-lg mb-5">Today • {today}</p>
          <p className="text-lg mt-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {weatherData.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
