import React, { Component } from 'react';
import TrainingMetamorphosis from './training';
import Carousel from './carousel';
import GalleryBox from './gallery';

export default class App extends Component {
  render() {
    return (
      <div>
        <TrainingMetamorphosis />
        <Carousel />
        <GalleryBox />
      </div>
    );
  }
}