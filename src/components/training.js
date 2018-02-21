import React, { Component } from 'react';
import Description from './description';
import { Parallax } from '../../style/description-styles';

export default class TrainingMetamorphosis extends Component {
  render() {
    return (
      <div>
        <Description
          subHeader="Wszystko z myślą o Tobie"
          header="Nasze szkolenia"
          text="Kluczem do sukcesu młodych kobiet jest ich pewność siebie i otwartość na wszystko, co przyniesie życie – wiemy to i projektujemy nasze szkolenia w taki sposób, żeby jednocześnie Cię zrelaksować i rozwijać."
          img="img/training.jpg"
          imgSmall="img/training-small.jpg"
          imgTitle="Trening"
          positionImgBeforeText="rtl"
        />
        <Description
          subHeader="Zostań kobietą z wiggorem"
          header="Metamorfoza"
          text="Coroczny konkurs, którego nagrodą jest wizażowa przemiana dokonywana pod opieką specjalistów. Zwyciężczyni spędzi dzień pełen wrażeń w towarzystwie makijażystki, stylistki fryzur oraz eksperta od wizerunku. Wisienką na torcie będzie udział w profesjonalnej sesji zdjęciowej."
          img="img/metamorphosis.jpg"
          imgSmall="img/metamorphosis-small.jpg"
          imgTitle="Metamorfoza"
          positionImgBeforeText="ltr"
        />
        <Parallax />
      </div>
    );
  }
}