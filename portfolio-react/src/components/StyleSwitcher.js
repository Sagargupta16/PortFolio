import React, { useState, useEffect } from 'react';

const StyleSwitcher = ({ isDark, toggleTheme, activeColor, changeColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];

  const toggleStyleSwitcher = () => {
    setIsOpen(!isOpen);
  };

  // Close style switcher on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div className="style-switcher-toggler s-icon" onClick={toggleStyleSwitcher}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="day-night s-icon" onClick={toggleTheme}>
        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        {colors.map((color) => (
          <span 
            key={color}
            className={color} 
            onClick={() => changeColor(color)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;
