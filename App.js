import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
     
      <Routes>
       
        <Route exact path="/" element={<News key="General" pageSize={4} country="in" category="General" />} />
        <Route exact  path="/Buisness" element={<News key="Buisness" pageSize={4} country="in" category="Buisness" />} />
        <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={4} country="in" category="Entertainment" />} />
        <Route exact path="/Health" element={<News key="Health" pageSize={4} country="in" category="Health" />} />
        <Route exact path="/Science" element={<News key ="Science" pageSize={4} country="in" category="Science" />} />
        <Route exact path="/Sports" element={<News key ="Sports" pageSize={4} country="in" category="Sports" />} />
        <Route exact path="/Technology" element={<News key="Technology" pageSize={4} country="in" category="Technology" />} />
      
      </Routes>
     
    </Router>
  );
}

export default App;