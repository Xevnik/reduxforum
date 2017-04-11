import axios from 'axios';
import {
  BLOG_KEY,
  FETCH_POSTS,
  CREATE_POST,
  FETCH_POST,
  DELETE_POST } from '../constants';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = `?key=${BLOG_KEY}`;

export function fetchPosts() {
  //fetch some posts from db
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
      type: FETCH_POSTS,
      payload: request
  };
}

export function createPost(props) {
  //add post to db
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  //Makes request to db for single post
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}
