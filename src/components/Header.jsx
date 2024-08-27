// src/components/Header.js

import React from 'react';

const Header = ({ onSearchClick, onGeoLocate }) => {
  return (
    <div className="flex justify-between p-4">
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
  );
}

export default Header;
