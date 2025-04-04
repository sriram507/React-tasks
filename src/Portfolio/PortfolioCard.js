import React from "react";

function PortfolioCard({ title, description, image, link }) {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default PortfolioCard;
