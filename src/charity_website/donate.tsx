import React, { useState } from 'react';
import './donate.css';

const Donate: React.FC = () => {
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleDonate = () => {
    setThankYouMessage('Thank you for your donation!');
  };

  return (
    <div className="donate">
      <h1>Donate</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleDonate(); }}>
        <label htmlFor="amount">Donation Amount:</label>
        <input type="number" id="amount" name="amount" min="1" required />
        <button type="submit">Donate</button>
      </form>
      {thankYouMessage && <p className="thank-you">{thankYouMessage}</p>}
    </div>
  );
};

export default Donate;
