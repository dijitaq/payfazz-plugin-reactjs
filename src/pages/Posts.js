import React, { Component } from 'react'
import Axios from 'axios'
import Masonry from 'react-masonry-component';

import PostCard from '../components/PostCard';

import { POSTS_API_URL } from '../lib/constants.js';

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = {
columnWidth: '.payfazz-item',
horizontalOrder: false }

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loaded: false,
      error: ''
    };

    this.getPosts = this.getPosts.bind(this);
  }

  getPosts() {
    this.setState({ loaded: false });

    return Axios.get(POSTS_API_URL)
    .then(
      response => {
        const { posts} = this.state;
        this.setState({
          posts: posts.concat(response.data),
          loaded: true,
        });

      },
      error => {
        const { posts} = this.state;
        this.setState({
          error: error.toJSON().message,
          loaded: true,
        });

      },
    );
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { posts, loaded, error} = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {posts && (
              <div>
                <Masonry
                  className={'my-gallery-class'} // default ''
                  elementType={'div'} // default 'div'
                  options={masonryOptions} // default {}
                  disableImagesLoaded={false} // default false
                  updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                  imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                  {posts.map(post => (
                    <PostCard key={post.id} item={post} />
                  ))}
                </Masonry>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Posts;