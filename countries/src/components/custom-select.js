import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const CustomSelect = ({ options, placeholder, onRegionChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onRegionChange) {
      onRegionChange(option.value);
    }
  };

  return (
    <div className="relative w-48">
      <div
        className="relative rounded bg-white dark:bg-darkBlue shadow-custom dark:text-white dark:shadow-customDark cursor-pointer custom-select"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={` w-3 h-3 ${isOpen ? "transform rotate-180" : ""}`}
          ></FontAwesomeIcon>
        </div>
        {isOpen && (
          <div className="absolute z-10 w-full rounded bg-white  dark:bg-darkBlue dark:text-white mt-1 shadow">
            {options.map((option) => (
              <div
                key={option.value}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
