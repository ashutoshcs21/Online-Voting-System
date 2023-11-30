// BlinkingLights.jsx
import React from 'react';
import './BlinkingLights.css'; // Import the CSS file for styling

const BlinkingLights = () => {
  return (
    <div className="blinking-lights-container">
      <div className="blinking-light red"></div>
      <div className="blinking-light yellow"></div>
      <div className="blinking-light green"></div>
    </div>
  );
};

export default BlinkingLights;
