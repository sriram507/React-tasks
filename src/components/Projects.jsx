import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Built with React and CSS',
      technologies: ['React', 'CSS']
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


