import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';

function About() {
  return (
    <section id="about">
      <div className="section-header">
        <h1 className="title">About Me</h1>
      </div>
      
      <div className="about-content">
        <div className="about-cards-container">
          <div className="about-card">
            <img src={experienceIcon} alt="Experience icon" className="icon about-icon" />
            <h3>Experience</h3>
            <p className="card-detail">2+ years</p>
            <p className="card-subdetail">Frontend Development</p>
          </div>
          
          <div className="about-card">
            <img src={educationIcon} alt="Education icon" className="icon about-icon" />
            <h3>Education</h3>
            <p className="card-detail">B.Sc. Bachelors Degree</p>
          </div>
        </div>
        
        <div className="about-text-container">
          <p>
            I am a passionate front-end developer and UI/UX designer persuing a with a B.Sc. in 
            Informatics and Computer Science from Strathmore University. With over 2 years of 
            experience, I specialize I specialize in creating responsive, user-friendly web applications 
            and enjoy solving complex problems with innovative design and code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;