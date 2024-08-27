import React from 'react';

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
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Today's Highlights</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Wind Status */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <h3 className="text-lg">Wind Status</h3>
          <p className="text-2xl">{weatherData.wind.speed} mph</p>
          <p className="text-lg">Direction: {windDirection}</p>
        </div>

        {/* Humidity */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center">
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

        {/* Visibility */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <h3 className="text-lg">Visibility</h3>
          <p className="text-2xl">{weatherData.visibility / 1000} miles</p>
        </div>

        {/* Air Pressure */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <h3 className="text-lg">Air Pressure</h3>
          <p className="text-2xl">{weatherData.main.pressure} mb</p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
