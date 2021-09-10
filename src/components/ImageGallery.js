import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class ImageGallery extends React.Component {

  render() {
    const { gallery } = this.props;

    return (
        <div className="container mb-4">
          <div className="row">
            <div className="col">
              <h2 className="text-center">Image Gallery</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row row-cols-2 row-cols-md-4 justify-content-center">
              {gallery.map(image => (
                <div key={image.thumb} className="col">
                  <img src={image.thumb} alt=""/>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      )
  }

}