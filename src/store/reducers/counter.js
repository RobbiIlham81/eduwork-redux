const initialState = {
  count: 0,
  title: "",
};

export const reducerCounter = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "SET_DECREMENT":
      return {
        ...state,
        count: actions.value,
      };

    case "SET_TITLE":
      return {
        ...state,
        title: actions.value,
      };

    default:
      return state;
  }
};
