import React, { useState, useEffect } from 'react';
import './styles/style.css';
import './styles/style-switcher.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import StyleSwitcher from './components/StyleSwitcher';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [previousSection, setPreviousSection] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [activeColor, setActiveColor] = useState('color-1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSection = (sectionName) => {
    setPreviousSection(activeSection);
    setActiveSection(sectionName);
    
    if (window.innerWidth < 1200) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const changeColor = (color) => {
    setActiveColor(color);
    // Remove all color classes
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });
  };

  useEffect(() => {
    document.body.className = isDark ? 'dark' : '';
  }, [isDark]);

  return (
    <div className="App">
      <div className={`main-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar 
          activeSection={activeSection}
          showSection={showSection}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        
        <div className="main-content">
          <Home 
            isActive={activeSection === 'home'}
            isPrevious={previousSection === 'home'}
            showSection={showSection}
          />
          <About 
            isActive={activeSection === 'about'}
            isPrevious={previousSection === 'about'}
          />
          <Services 
            isActive={activeSection === 'service'}
            isPrevious={previousSection === 'service'}
          />
          <Portfolio 
            isActive={activeSection === 'portfolio'}
            isPrevious={previousSection === 'portfolio'}
          />
          <Contact 
            isActive={activeSection === 'contact'}
            isPrevious={previousSection === 'contact'}
          />
        </div>

        <StyleSwitcher 
          isDark={isDark}
          toggleTheme={toggleTheme}
          activeColor={activeColor}
          changeColor={changeColor}
        />
      </div>
    </div>
  );
}

export default App;
