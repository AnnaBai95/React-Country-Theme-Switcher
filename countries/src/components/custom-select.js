import React, { useState } from "react";

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
        className="relative rounded bg-white cursor-pointer custom-select"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <svg
            className={`w-5 h-5 ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="absolute z-10 w-full rounded bg-white mt-1 shadow-border">
            {options.map((option) => (
              <div
                key={option.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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
