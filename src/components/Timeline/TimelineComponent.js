import React from 'react';
import { TimeLineData } from './constants.js';  // Import the TimeLineData from constants.js
import './TimelineComponent.css'; // Import the associated CSS file

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2>My Timeline</h2>
      {TimeLineData.map((item, index) => (
        <div key={index} className="timeline-item">
          <h4 className="timeline-year">{item.year}</h4>
          <p className="timeline-text">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Timeline;
