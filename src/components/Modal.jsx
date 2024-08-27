import React, { useState } from 'react';

const Modal = ({ onClose, onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearchClick = () => {
    onSearch(location);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 text-white flex flex-col z-50">
      <div className="flex justify-between items-center p-4 bg-gray-800">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="w-full p-2 text-gray-900"
        />
        <button 
          onClick={handleSearchClick} 
          className="bg-blue-500 p-2 rounded text-white ml-2"
        >
          Search
        </button>
        <button 
          onClick={onClose} 
          className="text-white text-xl ml-4"
        >
          X
        </button>
      </div>
      <div className="flex flex-col space-y-2 p-4">
        <button 
          onClick={() => onSearch('London')} 
          className="w-full bg-gray-800 p-4 rounded text-white"
        >
          London
        </button>
        <button 
          onClick={() => onSearch('New York')} 
          className="w-full bg-gray-800 p-4 rounded text-white"
        >
          New York
        </button>
        <button 
          onClick={() => onSearch('Tokyo')} 
          className="w-full bg-gray-800 p-4 rounded text-white"
        >
          Tokyo
        </button>
      </div>
    </div>
  );
};

export default Modal;
