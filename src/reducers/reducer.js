import { combineReducers } from 'redux';

import addMusic from './add';
import musicSearch from './search';

const reducers = combineReducers({
    musicSearch,
    addMusic
});

export default reducers;