import React, { Component } from 'react';
import Greetings from './greetings';
import Nav from './nav';
import TrainingMetamorphosis from './training';
import Carousel from './carousel';
import GalleryBox from './gallery';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Carousel />
        <TrainingMetamorphosis />
        <Greetings />
        <GalleryBox />
      </div>
    );
  }
}