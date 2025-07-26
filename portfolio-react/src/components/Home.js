import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = ({ isActive, isPrevious, showSection }) => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (isActive && typedRef.current) {
      // Initialize Typed.js
      typedInstance.current = new Typed(typedRef.current, {
        strings: ["", "Web Designer", "Web Developer", "Programmer", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    }

    return () => {
      // Cleanup Typed.js instance
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [isActive]);

  const sectionClasses = `home section ${isActive ? 'active' : ''} ${isPrevious ? 'back-section' : ''}`;

  return (
    <section className={sectionClasses} id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">Hello, my name is <span className="name">Sagar gupta</span></h3>
            <h3 className="my-profession">I'm a <span ref={typedRef} className="typing"></span></h3>
            <p>I'm student at NITW with Computer Science Branch. My expertise are problem solving, design websites and many more...</p>
            <button 
              className="btn funct"
              onClick={() => showSection('about')}
              data-section-index="0"
            >
              More About Me
            </button>
          </div>
          <div className="home-img padd-15">
            <img src="/images/me.jpeg" alt="Sagar Gupta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
