export const addPost = post => ({
  type: 'ADD_POST',
  post
});

export const fetchPosts = () => {
  return async dispatch => {
    dispatch(fetchPostsRequest());

    const response = await fetch('/api');
    const posts = await response.json();
    dispatch(fetchPostsSuccess(posts))
  }
};

export const fetchPostsRequest = () => ({
  type: 'FETCH_POSTS_REQUEST'
});

export const fetchPostsSuccess = posts => ({
  type: 'FETCH_POSTS_SUCCESS',
  posts
});
