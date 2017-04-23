import {
  SET_USERNAME,
} from "../../actions";

const initialState = {
  username: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_USERNAME:
    return {
      ...state,
      username: action.username,
    };
  default:
    return state;
  }
};
