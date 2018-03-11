import React, { Component } from 'react';

import AboutProject from './AboutProject/about_project';
import Greetings from './Greetings/greetings';
import Nav from './Navigation/nav';
import TrainingMetamorphosis from './Training/training';
import Carousel from './Carousel/carousel';
import GalleryBox from './Gallery/gallery';
import Footer from './Footer/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Nav />
        <Carousel />
        <AboutProject />
        <TrainingMetamorphosis />
        <Greetings />
        <GalleryBox /> */}
        <Footer />
      </div>
    );
  }
}