import React, { useState } from 'react';

const Contact = ({ isActive, isPrevious }) => {
  const sectionClasses = `contact section ${isActive ? 'active' : ''} ${isPrevious ? 'back-section' : ''}`;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // The form will still submit to formsubmit.co via the action attribute
    // But you can add additional client-side logic here if needed
  };

  const contactInfo = [
    {
      icon: 'fa fa-phone',
      title: 'Call Me On',
      info: '+91 8770532413'
    },
    {
      icon: 'fa fa-map-marker-alt',
      title: 'Home',
      info: 'Shivpuri'
    },
    {
      icon: 'fa fa-envelope',
      title: 'Email',
      info: 'sg85207@gmail.com'
    },
    {
      icon: 'fa fa-globe-europe',
      title: 'Website',
      info: 'sagargupta16.github.io/PortFolio'
    }
  ];

  return (
    <section className={sectionClasses} id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd1-15">
            <h2>Contact</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">CONTACT ME</h3>
        <h4 className="contact-sub-title padd-15">
          I'm here to help and answer any question you might have. I look forward to hearing from you!
        </h4>
        <div className="row">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-item padd-15">
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">
          I'm Very Responsive to Messages!
        </h4>
        <div className="row">
          <form 
            className="contact-form padd-15" 
            action="https://formsubmit.co/sg85207@gmail.com" 
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    className="form-control" 
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea 
                    name="message" 
                    className="form-control" 
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
