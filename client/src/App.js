import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
      </Routes>
    </Router>
  );
}

export default App;
