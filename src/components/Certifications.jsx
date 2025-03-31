import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'React Certification',
      issuer: 'Coursera',
      year: '2023'
    }
  ];

  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3>{cert.title}</h3>
            <p>{cert.issuer} ({cert.year})</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;