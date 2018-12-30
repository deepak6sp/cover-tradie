import React, { Component } from 'react';
import './App.css';
import { TopBar } from './components/UI/topBar';
import { Navigation } from './components/UI/navigation';
import { Banner } from './components/UI/banner';
import { InfiniteSlide } from './components/UI/infiniteSlide/infiniteSlide';
import { ProductSpecialization } from './components/sections/productSpecialization';
import { ChooseUs } from './components/sections/chooseUs';
import { ContactUs } from './components/sections/contact/contactUs';
import { AboutUs } from './components/sections/aboutUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Navigation />
        <Banner />
        <InfiniteSlide />
        <ProductSpecialization />
        <ChooseUs />
        <ContactUs />
        <AboutUs />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
