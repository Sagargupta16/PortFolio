import React from 'react';

const Portfolio = ({ isActive, isPrevious }) => {
  const sectionClasses = `portfolio section ${isActive ? 'active' : ''} ${isPrevious ? 'back-section' : ''}`;

  const projects = [
    {
      id: 1,
      title: 'PortFolio Website',
      image: '/images/1_2.png',
      github: 'https://github.com/Sagargupta16/PortFolio',
      website: 'https://sagargupta16.github.io/PortFolio/'
    },
    {
      id: 2,
      title: 'Music Player',
      image: '/images/2_1.png',
      github: 'https://github.com/Sagargupta16/Music-Web-App',
      website: 'https://sagargupta16.github.io/Music-Web-App/'
    },
    {
      id: 3,
      title: 'Mine-Sweeper Game',
      image: '/images/3_1.png',
      github: 'https://github.com/Sagargupta16/Minesweeper-Game__UnityEngine',
      website: null
    },
    {
      id: 4,
      title: 'Snake Game',
      image: '/images/4_2.png',
      github: 'https://github.com/Sagargupta16/Snake-Game__UnityEngine',
      website: null
    }
  ];

  return (
    <section className={sectionClasses} id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects :</h2>
          </div>
        </div>
        
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item padd-15">
              <h2 className="project-head">{project.id}. {project.title}</h2>
              
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
              
              <div className="row padd-15">
                <div className="project-repo btn2 shadow-dark padd-15">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>GitHub-Repo
                  </a>
                </div>
                {project.website && (
                  <div className="project-link btn2 shadow-dark padd-15">
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-earth-europe"></i>Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="portfolio-item padd-15">
            {/* Empty item for layout */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
