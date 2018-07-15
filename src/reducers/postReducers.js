export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
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
