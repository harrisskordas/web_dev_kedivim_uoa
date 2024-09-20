import React from 'react';
import './events.css';

const Events: React.FC = () => {
  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <div className="event">
        <h3>Annual Charity Gala</h3>
        <p>Date: October 10, 2024</p>
        <p>Join us for an evening of celebration and fundraising to support our ongoing projects and initiatives.</p>
      </div>
      <div className="event">
        <h3>Community Clean-Up Day</h3>
        <p>Date: November 5, 2024</p>
        <p>Help us clean up the local parks and community areas. All volunteers are welcome!</p>
      </div>
    </div>
  );
};

export default Events;
