import React, { Component } from 'react';
import Nav from './nav';
import TrainingMetamorphosis from './training';
import Carousel from './carousel';
import GalleryBox from './gallery';

export default class App extends Component {
  render() {
    return (
      <Nav />
      <div>
        <TrainingMetamorphosis />
        <Carousel />
        <GalleryBox />
      </div>
    );
  }
}