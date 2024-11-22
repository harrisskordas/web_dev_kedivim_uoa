import React from 'react';
import './aboutus.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        We are a local Pet Shop offering great food for your lil friends.
      </p>
      <section className="team">
        <div className="team-member">
          <h3>Johan Wiolt</h3>
          <p>CEO & Founder</p>
          <p>Johan has been leading the organization for over 10 years with a strong focus on humanitarian efforts worldwide.</p>
        </div>
        <div className="team-member">
          <h3>Sophia Rivers</h3>
          <p>Director of Operations</p>
          <p>Sophia manages our field operations and ensures that all projects are successfully implemented.</p>
        </div>
        <div className="team-member">
          <h3>Michael Lee</h3>
          <p>Community Outreach Coordinator</p>
          <p>Michael is responsible for connecting with local communities and building partnerships to support our initiatives.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
