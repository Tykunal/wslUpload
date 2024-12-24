import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FamousPlaces from './components/FamousPlaces';
import './App.css';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FamousPlaces/>
      <Testimonials />
      <Footer />
      <Routes>  
      </Routes>
    </div>
  );
}

export default App;
