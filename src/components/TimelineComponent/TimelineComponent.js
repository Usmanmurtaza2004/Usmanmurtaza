import React from 'react';
import { TimeLineData } from '../../data/constants';  // Adjusted the import path
import './TimelineComponent.css'; // Make sure this CSS file exists

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
