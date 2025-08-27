import React from 'react';
import profilePic from '../assets/profile-pic.jpg';

function Profile() {
  return (
    <section id="profile">
      <div className="profile-content">
        <div className="section__text">
          <h1>I'm Ruby Mbete</h1>
          <p className="section__text__p2">
            Front-End Developer  UI/UX Designer
          </p>
        </div>
        
        <div className="section__pic-container">
          <img src={profilePic} alt="Ruby Mbete profile" />
        </div>
      </div>
    </section>
  );
}

export default Profile;