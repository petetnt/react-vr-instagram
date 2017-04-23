import {
  SET_USERNAME,
  ADD_LETTER_TO_USERNAME,
  REMOVE_LETTER_FROM_USERNAME,
} from "../../actions";

const initialState = {
  username: null,
  buffer: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_USERNAME:
    return {
      ...state,
      username: action.username,
    };
  case ADD_LETTER_TO_USERNAME: {
    const buffer = `${state.buffer}${action.letter}`;
    return {
      ...state,
      buffer,
    };
  }
  case REMOVE_LETTER_FROM_USERNAME: {
    const { buffer } = state;
    const { length } = buffer;
    const newBuffer = buffer.substring(0, length - 1);

    return {
      ...state,
      buffer: newBuffer,
    };
  }
  default:
    return state;
  }
};
