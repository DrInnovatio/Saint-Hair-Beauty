import React from 'react';
import Header from './components/Header/Header.jsx';
import Landing from './components/Landing/Landing.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Contact from './components/Contact/Contact.jsx';
import Services from './components/Services/Services.jsx'
import Location from './components/Location/Location.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Landing/>
        <AboutMe/>
        <Services/>
        <Location/>
        <Contact/>
    </div>
  );
}

export default App;
