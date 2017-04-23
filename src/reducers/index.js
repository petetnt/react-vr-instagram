import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import imageView from "./ImageView";
import username from "./Username";

export default combineReducers({
  imageView,
  username,
  router: routerReducer,
});
