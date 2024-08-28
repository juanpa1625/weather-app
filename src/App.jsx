import React, { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Highlights from './components/Highlights';
import Modal from './components/Modal';

const apillave = 'be729431b2120a5f3e1c64ceba987cb4';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unit, setUnit] = useState('C'); 

  useEffect(() => {
    fetchWeatherAndForecast('Helsinki'); 
  }, []);

  const fetchWeatherAndForecast = async (location) => {
    try {
      let geoUrl;
      if (location.includes(',')) {
        const [lat, lon] = location.split(',');
        geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apillave}`;
      } else {
        geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apillave}`;
      }
  
      const geoResponse = await fetch(geoUrl);
      const geoData = await geoResponse.json();
      const { lat, lon } = geoData.coord;
  
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apillave}`);
      const weather = await weatherResponse.json();
      console.log(weather)
      setWeatherData(weather);
  
      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apillave}`);
      const forecast = await forecastResponse.json();
      setForecastData(forecast);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  const handleGeoLocate = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherAndForecast(`${latitude},${longitude}`);
        },
        (error) => {
          console.error('Error obtaining geolocation:', error);
          alert('No se pudo obtener la ubicación. Por favor, inténtalo de nuevo o ingresa una ubicación manualmente.');
        }
      );
    } else {
      alert('La geolocalización no está soportada en tu navegador.');
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (location) => {
    fetchWeatherAndForecast(location);
    setIsModalOpen(false);
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {weatherData && (
        <CurrentWeather
          weatherData={weatherData}
          unit={unit}
          onSearchClick={handleSearchClick}
          onGeoLocate={handleGeoLocate}
        />
      )}
      {forecastData && (
        <Forecast
          forecastData={forecastData}
          unit={unit}
          onUnitChange={handleUnitChange}
        />
      )}
      {weatherData && <Highlights weatherData={weatherData} />}
      {isModalOpen && <Modal onClose={handleModalClose} onSearch={handleSearch} />}
    </div>
  );
}

export default App;
