import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Pet Shop</h1>
      <div className="carousel">
        <img src="assets/download.jpg" alt="Charity event" />
      </div>
      <div className="sponsors">
        <div className="sponsor">
          <h3>Nike</h3>
          <p>Providing financial and material support to our pet stuff.</p>
        </div>
        <div className="sponsor">
          <h3>Royal</h3>
          <p>Royal Distributor</p>
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
