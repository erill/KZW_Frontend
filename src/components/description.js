import React from 'react';

export default (props) => {
  if(props.positionImgBeforeText) {
    return (
      <div className="text-content text-content-image-before-text">
        <div className="img-center">
          <img className="img-big" src={props.img} alt={props.imgTitle} />
          <img className="img-small" src={props.imgSmall} alt={props.imgTitle} />
        </div>
        <div className="text-content-container">
          <div className="text-content-container-center">
            <h3>{props.subHeader}</h3>
            <h1>{props.header}</h1>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-content text-content-image-after-text">
        <div className="text-content-container">
          <div className="text-content-container-center">
            <h3>{props.subHeader}</h3>
            <h1>{props.header}</h1>
            <p>{props.text}</p>
          </div>
        </div>
        <div className="img-center">
          <img className="img-big" src={props.img} alt={props.imgTitle} />
          <img className="img-small" src={props.imgSmall} alt={props.imgTitle} />
        </div>
      </div>
    );
  }
}
