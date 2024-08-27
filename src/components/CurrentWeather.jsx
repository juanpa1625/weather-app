import React from 'react';
import { getWeatherImage } from '../utils/weatherImages';

const CurrentWeather = ({ weatherData, onSearchClick, onGeoLocate }) => {
  const weatherMain = weatherData.weather[0].main;
  const today = new Date().toLocaleDateString();

  return (
    <div className="relative flex flex-col justify-between h-screen p-4">
      <div className="flex justify-between p-2 mb-4">
        <button 
          onClick={onSearchClick} 
          className="bg-gray-700 text-white py-2 px-4 rounded">
          Search for places
        </button>
        <button 
          onClick={onGeoLocate} 
          className="bg-gray-700 text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75M12 15.75h.008v.008H12v-.008zm0-10.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" />
          </svg>
        </button>
      </div>

      <div className="relative flex-grow flex flex-col justify-center items-center">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover opacity-20"
          style={{
            backgroundImage: `url(${getWeatherImage('background')})`,
            backgroundSize: 'cover',
           
          }}
        ></div>
        <img 
          src={getWeatherImage(weatherMain)} 
          alt={weatherData.weather[0].description} 
          className="w-40 h-40 mx-auto mb-4 relative z-10" 
        />
        <p className="text-6xl font-bold relative z-10">{Math.round(weatherData.main.temp - 273.15)}°C</p>
        <p className="text-lg mt-4 relative z-10">Today • {today}</p>
        <p className="text-lg mt-2 flex items-center justify-center relative z-10">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-5 h-5 mr-2"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 9v3.75M12 15.75h.008v.008H12v-.008zm0-10.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" 
            />
          </svg>
          {weatherData.name}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
