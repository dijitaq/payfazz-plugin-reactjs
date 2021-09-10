import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './PostSingle.css'

export default class PostSingle extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="container-image">
            <img src={post.featured_image.large} alt=""></img>
          </div>
        </div>

        <div className="col-lg-6 container-text">
          <div className="container-text">
            <h3>{post.title.rendered}</h3>

            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>

            <div className="row mb-2">
              <div className="col-2">Size</div>
              <div className="col-10">: {post._payfazz_size}</div>
            </div>

            <div className="row">
              <div className="col">
                <a href={post._payfazz_ecommerce_link} className="btn btn-success btn-sm inline-block">Go to store</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}