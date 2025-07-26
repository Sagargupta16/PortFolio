import React from 'react';

const Services = ({ isActive, isPrevious }) => {
  const sectionClasses = `service section ${isActive ? 'active' : ''} ${isPrevious ? 'back-section' : ''}`;

  const services = [
    {
      icon: 'fa fa-laptop-code',
      title: 'Problem Solving',
      description: 'I can Solve Various Coding problems.'
    },
    {
      icon: 'fa fa-palette',
      title: 'Web Design',
      description: 'I can Design Websites in Very Creative and Innovative Ways.'
    },
    {
      icon: 'fa fa-mobile-alt',
      title: 'Responsive Web Design',
      description: 'I can make Various Website Responsive'
    },
    {
      icon: 'fa fa-code',
      title: 'Coding',
      description: 'I can do Clean Coding.'
    },
    {
      icon: 'fa fa-search',
      title: 'Finder',
      description: 'Can Find Any Problem Solution.'
    },
    {
      icon: 'fa fa-bullhorn',
      title: 'Communication',
      description: 'Am good in Communication.'
    }
  ];

  return (
    <section className={sectionClasses} id="service">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
