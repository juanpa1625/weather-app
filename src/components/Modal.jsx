import React, { useState } from 'react';

const Modal = ({ onClose, onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearchClick = () => {
    onSearch(location);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 text-white flex flex-col z-50 md:w-[459px] md:h-[1023px] md:left-0 md:top-0">
      <div className="flex justify-end p-4">
        <button 
          onClick={onClose} 
          className="text-white text-2xl font-bold"
        >
          X
        </button>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-800 shadow-lg">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="w-full p-2 text-gray-900 rounded"
        />
        <button 
          onClick={handleSearchClick} 
          className="bg-blue-500 p-2 rounded text-white ml-2 hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </div>
      <div className="flex flex-col space-y-2 p-4">
        <button 
          onClick={() => onSearch('London')} 
          className="w-full bg-gray-700 p-4 rounded text-white hover:bg-gray-600 transition duration-200"
        >
          London
        </button>
        <button 
          onClick={() => onSearch('New York')} 
          className="w-full bg-gray-700 p-4 rounded text-white hover:bg-gray-600 transition duration-200"
        >
          New York
        </button>
        <button 
          onClick={() => onSearch('Tokyo')} 
          className="w-full bg-gray-700 p-4 rounded text-white hover:bg-gray-600 transition duration-200"
        >
          Tokyo
        </button>
      </div>
    </div>
  );
};

export default Modal;
