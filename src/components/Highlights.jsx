// src/components/Highlights.js

import React from 'react';

const Highlights = ({ weatherData }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Today's Highlights</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg">Wind Status</h3>
          <p className="text-2xl">{weatherData.wind.speed} mph</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg">Humidity</h3>
          <p className="text-2xl">{weatherData.main.humidity}%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg">Visibility</h3>
          <p className="text-2xl">{weatherData.visibility / 1000} miles</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg">Air Pressure</h3>
          <p className="text-2xl">{weatherData.main.pressure} mb</p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
