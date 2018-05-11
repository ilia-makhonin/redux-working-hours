import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tracks from './tracks';
import playlist from './playlist';
import filterTracks from './findFilterTracks';

export default combineReducers({
    routing: routerReducer,
    tracks,
    playlist,
    filterTracks
});