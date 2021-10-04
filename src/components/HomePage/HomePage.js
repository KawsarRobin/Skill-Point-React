import React from 'react';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceFeatures from '../ServiceFeatures/ServiceFeatures';

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Features></Features>
      <ServiceFeatures></ServiceFeatures>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
