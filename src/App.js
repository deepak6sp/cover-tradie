import React, { Component } from 'react';
import './App.css';
import './overwrite.css';
import { Header } from './components/sections/header';
import { InfiniteSlide } from './components/UI/infiniteSlide/infiniteSlide';
import { ProductSpecialization } from './components/sections/productSpecialization';
import { ChooseUs } from './components/sections/chooseUs';
import { ContactUs } from './components/sections/contact/contactUs';
import { AboutUs } from './components/sections/aboutUs';
import { Footer } from './components/sections/footer';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <InfiniteSlide />
        <ProductSpecialization />
        <ChooseUs />
        <ContactUs />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
