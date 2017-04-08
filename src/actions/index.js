import axios from 'axios';
import { BLOG_KEY, FETCH_POSTS } from '../constants';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = `?key=${BLOG_KEY}`;

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
      type: FETCH_POSTS,
      payload: request
  }
}
