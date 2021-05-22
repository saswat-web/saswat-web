import React, { Component } from 'react';
import UmbrellaOff from './images/umbrella-off.jpg';
import UmbrellaOn from './images/umbrella-on.jpg';
import "./index.css";

class ClickChangeImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { imageSrc: UmbrellaOff };
    this.changeImage = this.changeImage.bind(this);

  }


  changeImage() {
    if (this.state.imageSrc == UmbrellaOff) {
      this.setState({ imageSrc: UmbrellaOn });
    }
    else {
      this.setState({ imageSrc: UmbrellaOff });
    }
  }




  render() {
    return (
      <div className="on-click-chnage-image-task">
        <div className="inner">
          <div className="btn">
            <button onClick={this.changeImage}>{this.state.imageSrc == UmbrellaOff ? "ON" : "OFF"}</button>
          </div>
          <div className="img-div">
            <img src={this.state.imageSrc} alt="img" />
          </div>
        </div>
     </div>
    );
  }

}

export default ClickChangeImage;
