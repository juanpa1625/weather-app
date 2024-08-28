import React from 'react';
import { getWeatherImage } from '../utils/weatherImages';

const getWindDirection = (degrees) => {
  if (degrees > 337.5) return 'N';
  if (degrees > 292.5) return 'NW';
  if (degrees > 247.5) return 'W';
  if (degrees > 202.5) return 'SW';
  if (degrees > 157.5) return 'S';
  if (degrees > 122.5) return 'SE';
  if (degrees > 67.5) return 'E';
  if (degrees > 22.5) return 'NE';
  return 'N';
};

const Highlights = ({ weatherData }) => {
  const windDirection = getWindDirection(weatherData.wind.deg);
  const humidityPercentage = weatherData.main.humidity;

  return (
    <div className="relative p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Today's Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:justify-items-center">
    

        <div className="bg-background-1 p-4 rounded-lg flex flex-col items-center justify-center text-center md:w-[328px] md:h-[204px] lg:w-[328px] lg:h-[204px]">
          <h3 className="text-lg mb-2">Wind Status</h3>
          <p className="text-2xl mb-2">{weatherData.wind.speed} mph</p>
          <div className="flex items-center justify-center mt-2">
            <div
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full"
              style={{
                transform: `rotate(${weatherData.wind.deg}deg)`,
              }}
            >
              <img
                src={getWeatherImage('navegation')}
                alt={`Wind direction: ${windDirection}`}
                className="w-6 h-6"
              />
            </div>
            <span className="ml-2 text-lg">{windDirection}</span>
          </div>
        </div>


        <div className="bg-background-1 p-4 rounded-lg flex flex-col items-center justify-center text-center md:w-[328px] md:h-[204px] lg:w-[328px] lg:h-[204px]">
          <h3 className="text-lg mb-2">Humidity</h3>
          <p className="text-2xl mb-2">{humidityPercentage}%</p>
          <div className="w-full relative">
            <div className="w-full bg-gray-700 rounded-full h-4 relative">
              <div 
                className="bg-yellow-400 h-4 rounded-full" 
                style={{ width: `${humidityPercentage}%` }}>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

     

        <div className="bg-background-1 p-4 rounded-lg flex flex-col items-center justify-center text-center md:w-[328px] md:h-[159px] lg:w-[328px] lg:h-[159px]">
          <h3 className="text-lg mb-2">Visibility</h3>
          <p className="text-2xl mb-2">{weatherData.visibility / 1000} miles</p>
        </div>

      
        <div className="bg-background-1 p-4 rounded-lg flex flex-col items-center justify-center text-center md:w-[328px] md:h-[159px] lg:w-[328px] lg:h-[159px]">
          <h3 className="text-lg mb-2">Air Pressure</h3>
          <p className="text-2xl mb-2">{weatherData.main.pressure} mb</p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
