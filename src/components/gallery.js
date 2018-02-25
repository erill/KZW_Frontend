import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';

  const IMAGES =
  [{
    src: "../img/pre-event/1.jpg",
    thumbnail: "../img/pre-event/1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    isSelected: true,
    caption: "test"
  },
  {
    src: "../img/pre-event/2.jpg",
    thumbnail: "../img/pre-event/2.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "test2"
  },
  {
    src: "../img/pre-event/3.jpg",
    thumbnail: "../img/pre-event/3.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test3"
  },
  {
    src: "../img/pre-event/4.jpg",
    thumbnail: "../img/pre-event/4.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/1.jpg",
    thumbnail: "../img/workshops/1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test5"
  },
  {
    src: "../img/workshops/2.jpg",
    thumbnail: "../img/workshops/2.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/3.jpg",
    thumbnail: "../img/workshops/3.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/4.jpg",
    thumbnail: "../img/workshops/4.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/5.jpg",
    thumbnail: "../img/workshops/5.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/6.jpg",
    thumbnail: "../img/workshops/6.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/7.jpg",
    thumbnail: "../img/workshops/7.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/8.jpg",
    thumbnail: "../img/workshops/8.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/9.jpg",
    thumbnail: "../img/workshops/9.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/10.jpg",
    thumbnail: "../img/workshops/10.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/11.jpg",
    thumbnail: "../img/workshops/11.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/12.jpg",
    thumbnail: "../img/workshops/12.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/13.jpg",
    thumbnail: "../img/workshops/13.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/workshops/14.jpg",
    thumbnail: "../img/workshops/14.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  },
  {
    src: "../img/metamorphosis/1.png",
    thumbnail: "../img/metamorphosis/1.png",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "test4"
  }];

export default class GalleryBox extends Component {
  render() {
    return (
      <Gallery images={IMAGES} />
    );
  }
}