export const SET_USERNAME = "SET_USERNAME";
export const ADD_LETTER_TO_USERNAME = "ADD_LETTER_TO_USERNAME";
export const REMOTE_LETTER_FROM_USERNAME = "REMOTE_LETTER_FROM_USERNAME";

export const setUsername = username => ({
  type: SET_USERNAME,
  username,
});

export const addLetterToUsername = letter => ({
  type: ADD_LETTER_TO_USERNAME,
  letter,
});

export const remoteLetterFromUsername = () => ({
  type: REMOTE_LETTER_FROM_USERNAME,
});
