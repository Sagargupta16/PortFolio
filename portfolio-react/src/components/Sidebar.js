import React from 'react';

const Sidebar = ({ activeSection, showSection, isOpen, toggleSidebar }) => {
  const navItems = [
    { id: 'home', icon: 'fa fa-home', label: 'Home' },
    { id: 'about', icon: 'fa fa-user', label: 'About' },
    { id: 'service', icon: 'fa fa-list', label: 'Service' },
    { id: 'portfolio', icon: 'fa fa-briefcase', label: 'Portfolio' },
    { id: 'contact', icon: 'fa fa-comments', label: 'Contact' }
  ];

  return (
    <div className={`aside ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <span><span>S</span>agar</span>
      </div>
      <div className="nav-toggler" onClick={toggleSidebar}>
        <span></span>
      </div>
      <ul className="nav">
        {navItems.map(item => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                showSection(item.id);
              }}
            >
              <i className={item.icon}></i>{item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
