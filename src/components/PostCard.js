import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './PostCard.css'

export default class PostCard extends React.Component {

  render() {
    return (
        <div>
          <Link to={`/post/${this.props.item.slug}`} className="post-card">
            <div className="mask">
              <img src={this.props.item.featured_image.medium} alt={this.props.item.title.rendered}/>
            </div>
            <p>{this.props.item.title.rendered}</p>
          </Link>
        </div>
      )
  }

}