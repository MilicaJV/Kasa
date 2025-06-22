import React, { useState } from 'react';

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-title">{title}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          {isOpen ? '︿' : '﹀'}
        </span>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-inner">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
