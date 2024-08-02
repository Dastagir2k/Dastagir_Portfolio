// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import WelcomePage from './WelcomePage/WelcomePage';
import Home from './homepage/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
