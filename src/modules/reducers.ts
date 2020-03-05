import {combineReducers} from 'redux';

import {reducer as videosReducer} from './videos/videos.redux';

export default combineReducers({
  videos: videosReducer,
});
