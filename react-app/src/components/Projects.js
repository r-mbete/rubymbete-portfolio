import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.png';

function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <h1 className="title">Projects</h1>
      </div>
      
      <div className="section-content">
        <div className="project-cards-container">
          <div className="project-card">
            <div className="project-img-container">
              <img src={project1} alt="Machine Learning Employee Classification" className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Machine Learning Employee Classification</h3>
              <a 
                href="https://github.com/r-mbete/workforce-management-optimization.git" 
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-img-container">
              <img src={project2} alt="Glow in the Dark Mini Game" className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Glow in the Dark Mini Game</h3>
              <a 
                href="https://github.com/r-mbete/Ray_Tracing_Implementation.git" 
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-img-container">
              <img src={project3} alt="Your Fridge - Food Management App" className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Your Fridge - Food Management App</h3>
              <a 
                href="https://github.com/r-mbete/yourfridge.git" 
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;