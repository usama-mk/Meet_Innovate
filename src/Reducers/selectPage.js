const selectPageReducer = (
  state = {
    home: true,
    about: false
  },
  action
) => {
  switch (action.type) {
    case "SELECT_HOME":
      return {...state, home: action.payload};
      case "SELECT_ABOUT":
        return {...state, about: action.payload};
    default:
      return state;
  }
};

export default selectPageReducer;
