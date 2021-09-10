import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Axios from 'axios';

import PostSingle from '../components/PostSingle';
import ImageGallery from '../components/ImageGallery';

import { POSTS_API_URL, POST_API_URL } from '../lib/constants.js';

import './Post.css';
import RelatedPosts from '../components/RelatedPosts';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      gallery: [],
      galleryNotEmpty: '',
      tags: [],
      loaded: false,
      error: ''
    };

    this.getPost = this.getPost.bind(this);
  }

  getPost(slug) {
    this.setState({ loaded: false });

    Axios.get(`${POST_API_URL}${slug}`)
    .then(
      response => {
        this.setState({
          post: response.data[0],
          gallery: response.data[0]._payfazz_gallery,
          galleryNotEmpty: response.data[0]._payfazz_gallery[0].thumb,
          tags: response.data[0].payfazz_categories,
          loaded: true
        });
      },
      error => {
        this.setState({
          error: error.toJSON().message,
          loaded: true
        });
      }
    );
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    
    this.getPost(slug);
  }

  render() {
    const { post, gallery, galleryNotEmpty, tags, loaded, error } = this.state;

    if (tags.length) {
      var tagsNotEmpty = tags;
    }

    return (
      <div className="single-post">
        <div className="container mb-4">
          <div className="row justify-content-center">
            <div className="col-lg-10 box">
              {loaded && post && <PostSingle post={post} />}
            </div>
          </div>
        </div>

        {loaded && galleryNotEmpty &&  <ImageGallery gallery={gallery} />}

        {loaded && tagsNotEmpty &&
        <RelatedPosts tags={tags} />
        }
      </div>
    );
  }
}

export default withRouter(Post);