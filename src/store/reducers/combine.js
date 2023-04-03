import { combineReducers } from "redux";
import addFav from './addFav';
import removeFav from './removeFav';
import changeMovies from './Movies';

export default combineReducers({

    addFav:addFav,
    // removeFav:removeFav,
    changeMovies:changeMovies
})