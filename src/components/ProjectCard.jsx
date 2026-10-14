import { Link } from "react-router-dom";

function ProjectCard({ title, description, technologies, image, link }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <span className="project-label">PROJETO</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <Link to={link} className="project-button">
          Ver projeto →
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;