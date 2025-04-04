import React from "react";
import PortfolioCard from "./PortfolioCard";

const projects = [
  {
    title: "React Weather App",
    description: "A simple weather app built with React & OpenWeather API.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/weather-app",
  },
  {
    title: "E-commerce Store",
    description: "An online shopping platform with payment integration.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/ecommerce",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/portfolio",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="portfolio-list">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
