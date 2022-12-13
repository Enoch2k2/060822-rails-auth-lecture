import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/dashboard/Profile';
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import { baseUrl } from './globals';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/get-current-user")
      .then(resp => resp.json())
      .then(data => {
        if(!data.message) {
          loginUser(data);
          setLoading(false)
        } else {
          console.log(data.message)
          setLoading(false)
        }
      })
  }, [])

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true);
  }

  const logoutUser = () => {
    setCurrentUser({});
    setLoggedIn(false);
  }

  if(loading) {
    return <div>loading...</div>
  }

  return (
    <Router>
      <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser } />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login loginUser={ loginUser } /> } />
        <Route path="/signup" element={ <Signup loginUser={ loginUser } /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </Router>
  );
}

export default App;
