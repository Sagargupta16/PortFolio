import React from 'react';

const About = ({ isActive, isPrevious }) => {
  const sectionClasses = `about section ${isActive ? 'active' : ''} ${isPrevious ? 'back-section' : ''}`;

  return (
    <section className={sectionClasses} id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>I'm Sagar Gupta and <span>Coder</span></h3>
                <p>
                  I solve problems in creative ways. <br />
                  I am pursuing Master's in Computer Applications at National Institute of Technology, Warangal. <br />
                  Learning lot new skills. <br />
                  Exploring computer Science.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <h3 className="title">Personal Info</h3>
                <div className="row">
                  <div className="info-item padd-15">
                    <p>Date of Birth : <span>16 oct 2000</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Age : <span>21</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>E-Mail : <span>sg85207@gmail.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Phone No. : <span>+91 8770532413</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Hometown : <span>Shivpuri(M.P)</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Nationality : <span>Indian</span></p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <a 
                      href="https://drive.google.com/file/d/1ej8NgK5Lo9dm7fe6Blj-C9xed7JU4PF2/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <h3 className="title">Skills</h3>
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>Languages</h5>
                    <div className="elements">
                      C, C++, R, JAVA, JS, PHP, SQL.
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Web Technologies</h5>
                    <div className="elements">
                      HTML5, CSS3.
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Tools</h5>
                    <div className="elements">
                      GitHub, Unity_Engine, SQL_Developer.
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Courses</h5>
                    <div className="elements">
                      Programming_with_C++, Data_Structure, Database_System, OOPs_With_Java.
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Other-Skills</h5>
                    <div className="elements">
                      Problem_Solving, Leadership, Teamwork, Critical_Thinking, Communication.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2021 - 2024
                        </h3>
                        <h4 className="timeline-title">Master's in Computer Applications (MCA)</h4>
                        <p className="timeline-text">National Institute of Technology, Warangal</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2018 - 2021
                        </h3>
                        <h4 className="timeline-title">Bachelor's in Computer Applications (BCA)</h4>
                        <p className="timeline-text">Sanskar College Of Professional Studies (DAVV University), Indore</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2016 - 2018
                        </h3>
                        <h4 className="timeline-title">Higher Secondary School (PCM+PE)</h4>
                        <p className="timeline-text">Happy Days School, Shivpuri</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2014 - 2016
                        </h3>
                        <h4 className="timeline-title">High School</h4>
                        <p className="timeline-text">Kids Garden School, Shivpuri</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <h4 className="timeline-title" style={{ textAlign: 'center' }}>None</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
