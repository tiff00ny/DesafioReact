import React from 'react';
import Navbar from './components/Navbar';
import AdoptNow from './components/AdoptNow';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer'; 
import './index.css';

const App = () => {
  return (
    <div className="bg-lavenders dark:bg-dark-bg">
      <Navbar />
      <AdoptNow />
      <Services />
      <Reviews />
      <Footer /> 
    </div>
  );
}

export default App;



