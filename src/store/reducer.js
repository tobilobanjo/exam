export const initialState = {
  count: 0
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, count: action.payload};
    case "DECREMENT":
      return {...state, count: action.payload};
    case "RESET":
      return {...state, count: initialState.count};
    case "SET_VALUE": 
      return {...state, count: action.payload};
    default:
      return state;
  }
};

