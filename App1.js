// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';  // Check this import statement
import RatingStarsAndComment from './RatingStarsAndComment'
import Login from './Mainlogin';

import Signup from './Signup';
function App1() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/RatingStarsAndComment" element={<RatingStarsAndComment />} />
  
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App1;
