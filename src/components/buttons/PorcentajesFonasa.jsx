import React, { useState } from 'react';
import './PorcentajesFonasa.css'

function PorcentajesFonasa({ options, defaultText }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultText);

  const handleOptionClick = (option) => {
    setSelectedOption(`${option.text} ${option.percentage}`);
    setShowOptions(false);
  };

  return (
    <div className="select-button-container">
      <button onClick={() => setShowOptions(!showOptions)} className="select-button">
        {selectedOption}
      </button>
      {showOptions && (
        <ul className="dropdown-menu-fonasa">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PorcentajesFonasa;
