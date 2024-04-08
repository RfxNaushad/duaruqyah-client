import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faGear,
  faFont,
  faDesktop,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "./ThemeContext";

const MainRight = () => {
  const [nightMode, setNightMode] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  // Handle night mode toggle
  const toggleNightMode = () => {
    setNightMode(!nightMode);
    toggleTheme()
    if (!nightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    } 
  };

  const textColor = nightMode ? 'text-white' : 'text-gray-800';

  return (
    <div className="bg-white w-64 min-h-screen p-4 shadow-lg rounded-lg">
      <div className="font-bold text-xl mb-6 text-black text-center">Settings</div>

      {/* Settings Items */}
      <div className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-inner">
        <div className="group flex items-center p-2 cursor-pointer rounded-md hover:bg-green-500">
          <FontAwesomeIcon
            icon={faLanguage}
            className="text-black group-hover:text-white"
          />
          <span  className="ml-3  text-black group-hover:text-white">
            Language Settings
          </span>
        </div>

        <div className="group flex items-center p-2 cursor-pointer rounded-md hover:bg-green-500">
          <FontAwesomeIcon
            icon={faGear}
            className="text-black group-hover:text-white"
          />
          <span className="ml-3 text-black group-hover:text-white">
            General Settings
          </span>
        </div>

        <div className="group flex items-center p-2 cursor-pointer rounded-md hover:bg-green-500">
          <FontAwesomeIcon
            icon={faFont}
            className="text-black group-hover:text-white"
          />
          <span className="ml-3 text-black group-hover:text-white">
            Font Settings
          </span>
        </div>

        <div className="group flex items-center p-2 cursor-pointer rounded-md hover:bg-green-500">
          <FontAwesomeIcon
            icon={faDesktop}
            className="text-black group-hover:text-white"
          />
          <span className="ml-3 text-black group-hover:text-white">
            Appearance Settings
          </span>
        </div>
      </div>

      {/* Night Mode Toggle */}
      <div className="flex items-center justify-between mt-6">
        <span className={`${nightMode ? "text-green-500" : "text-gray-500"}`}>
          Night Mode
        </span>
        <label
          htmlFor="night-mode-toggle"
          className="flex items-center cursor-pointer"
        >
          {/* The switch */}
          <div
            className={`relative w-14 h-8 transition duration-200 ease-linear rounded-full ${
              nightMode ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            {/* The toggle circle */}
            <input
              id="night-mode-toggle"
              type="checkbox"
              className="sr-only"
              checked={nightMode}
              onChange={toggleNightMode}
            />
            <span
              className={`absolute top-0 left-0 w-8 h-8 transition-transform transform bg-white rounded-full shadow-sm ${
                nightMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default MainRight;
