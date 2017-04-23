import {
  LOAD_IMAGES_START,
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_ERROR,
} from "../../actions";

const errorFormatter = error => (error && error.message ? error.message : "Unknown error occurred");

const initialState = {
  username: null,
  images: null,
  error: null,
  errorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case LOAD_IMAGES_START:
    return {
      ...state,
      username: action.username,
      images: null,
      error: null,
      errorMessage: null,
    };
  case LOAD_IMAGES_SUCCESS:
    return {
      ...state,
      images: action.images,
      error: null,
      errorMessage: null,
    };
  case LOAD_IMAGES_ERROR:
    return {
      ...state,
      images: action.images,
      error: true,
      errorMessage: errorFormatter(action.error),
    };
  default:
    return state;
  }
};
