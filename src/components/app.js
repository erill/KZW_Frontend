import React, { Component } from 'react';
import AboutProject from './about_project';
import Greetings from './greetings';
import Nav from './nav';
import TrainingMetamorphosis from './training';
import Carousel from './carousel';
import GalleryBox from './gallery';

export default class App extends Component {
  render() {
    return (
      <div>
        <AboutProject />
        <Nav />
        <Carousel />
        <TrainingMetamorphosis />
        <Greetings />
        <GalleryBox />
      </div>
    );
  }
}