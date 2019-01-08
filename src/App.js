import React, { Component } from 'react';
import { Element } from 'react-scroll'
import './App.css';
import { Header } from './components/sections/header';
import { ProductSpecialization } from './components/sections/productSpecialization';
import { ChooseUs } from './components/sections/chooseUs';
import { ContactUs } from './components/sections/contact/contactUs';
import { Footer } from './components/sections/footer';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        {/* <InfiniteSlide /> */}
        <Element name="productSpecialization"><ProductSpecialization /> </Element>
        <Element name="chooseUs"> <ChooseUs /> </Element>
        <Element name="contactus"> <ContactUs /></Element>
        {/* <AboutUs /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
