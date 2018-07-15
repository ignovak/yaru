export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        ...action.data
      ];
    default:
      return state;
  }
};
