import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  //get all stored post on arriving front page before render
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add Post
          </Link>
        </div>
        List of Blog Posts
      </div>
    );
  }
};

export default connect(null, { fetchPosts })(PostsIndex);
