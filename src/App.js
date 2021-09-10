import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Posts from './pages/Posts';
import Post from './pages/Post';

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/post/:slug" component={Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;