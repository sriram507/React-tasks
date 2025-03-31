import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-container">
        <img src="assets/images/0616gallery07.jpg" alt="Profile" className="profile-image" />
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p>Recent graduate passionate about web development...</p>
          <div className="personal-info">
            <p><strong>Name:</strong> Sriram injarapu</p>
            <p><strong>Email:</strong> sriram.softwaredev@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;