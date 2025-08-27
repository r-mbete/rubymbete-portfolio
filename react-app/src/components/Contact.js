import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <h1 className="title">Contact Me</h1>
      </div>
      
      <div className="contact-container">
        <div className="contact-item">
          <div className="contact-icon-wrapper">
            <img src={emailIcon} alt="Email" className="contact-icon" />
          </div>
          <a href="mailto:rubymbete.m@gmail.com">rubymbete.m@gmail.com</a>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon-wrapper">
            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
          </div>
          <a 
            href="https://www.linkedin.com/in/ruby-mbete-278072270/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;