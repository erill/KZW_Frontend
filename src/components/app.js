import React, { Component } from 'react';
import Carousel from './carousel';
import GalleryBox from './gallery';

export default class App extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <GalleryBox />
      </div>
    );
  }
}