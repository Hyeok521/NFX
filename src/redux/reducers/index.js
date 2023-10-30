import { combineReducers } from "redux";
import movieReducer from "./MovieReducrs";

export default combineReducers({
  movie: movieReducer,
});
