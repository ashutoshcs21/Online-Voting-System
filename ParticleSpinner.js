// ParticleSpinner.js
import React from 'react';
import './ParticleSpinner.css'; // Adjust the path based on your project structure

const ParticleSpinner = ({ isLoading }) => {
  return isLoading ? (
    <div className="particle-spinner"><span class="loader"></span></div>
  ) : null;
};

export default ParticleSpinner;
