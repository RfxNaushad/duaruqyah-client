import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingHeart,
  faHouseUser,
  faCog,
  faUserFriends,
  faUser,
  faCommentDots,
  faPhoneVolume,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';

const LeftSidebar = () => {
  const icons = [
    faHandHoldingHeart,
    faHouseUser,
    faCog,
    faUserFriends,
    faUser,
    faCommentDots,
    faPhoneVolume,
    faPowerOff,
  ];

  return (
    <div className="w-20 h-screen m-4 bg-white rounded-lg flex flex-col items-center py-6 space-y-3">
      {/* Top button */}
      <div className="mb-6">
        <button className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={icons[0]} className="w-5 h-5" />
        </button>
      </div>

      {/* Menu items */}
      <div className="flex flex-col justify-center items-center space-y-3 flex-grow">
        {icons.slice(1, -1).map((icon, index) => (
          <button
            key={index}
            className="text-gray-400 bg-black hover:text-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={icon} className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Bottom button */}
      <div className="mt-auto">
        <button className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={icons[icons.length - 1]} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;