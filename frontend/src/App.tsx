import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
