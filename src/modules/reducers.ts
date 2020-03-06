import {combineReducers} from 'redux';

import {reducer as videosReducer} from './Videos/Videos.redux';

export default combineReducers({
  videos: videosReducer,
});
