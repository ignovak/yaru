export const loadPosts = posts => ({
  type: 'LOAD_POSTS',
  posts
});

export const addPost = post => ({
  type: 'ADD_POST',
  post
});
