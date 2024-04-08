import React from 'react';
import Image from 'next/image';
import avatar from '../../public/Vector (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className="bg-gray-100 w-full p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">Dua Page</h1>
      
      {/* Search Bar */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search by Dua Name"
          className="pl-10 pr-4 py-2 rounded-md border-2 border-gray-300"
        />
        <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Profile Icon and Dropdown */}
      <div className="flex items-center space-x-2">
      <Image
        src={avatar}
        alt="My SVG"
        width={30}
        height={30}
      />
        <FontAwesomeIcon icon={faCaretDown} className="text-gray-600" />
      </div>
    </header>
  );
};

export default Navbar;