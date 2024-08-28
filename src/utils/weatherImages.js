// src/utils/weatherImages.js

const weatherImages = {
    Clear: "/images/Clear.png",
    Hail: "/images/Hail.png",
    Clouds: "/images/HeavyCloud.png",       
    Rain: "/images/HeavyRain.png",          
    Drizzle: "/images/LightRain.png",       
    LightCloud: "/images/LightCloud.png",   
    Shower: "/images/Shower.png",           
    Sleet: "/images/Sleet.png",            
    Snow: "/images/Snow.png",               
    Thunderstorm: "/images/Thunderstorm.png",
    background:"/images/Cloud-background.png",
    mylocation:"/images/location.png",
    navegation:"/images/navegation.png"
  };
  
  export const getWeatherImage = (weatherMain) => {
    return weatherImages[weatherMain] || "/images/default.png";
  };