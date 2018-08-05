export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return [
        ...state,
        ...action.posts
      ];
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ];
    default:
      return state;
  }
};
