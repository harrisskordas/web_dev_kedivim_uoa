import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Charity</h1>
      <p>
        We are a non-profit organization dedicated to making a positive impact on the lives of those in need. Our mission is to provide resources, support, and assistance to communities and individuals who require our help.
      </p>
      <div className="carousel">
        <img src="assets/download.jpg" alt="Charity event" />
      </div>
      <div className="sponsors">
        <div className="sponsor">
          <h3>Nike</h3>
          <p>Providing financial and material support to our cause.</p>
        </div>
        <div className="sponsor">
          <h3>Adidas</h3>
          <p>Helping with community outreach and engagement.</p>
        </div>
        <div className="sponsor">
          <h3>TP</h3>
          <p>Offering logistical and technical assistance.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
