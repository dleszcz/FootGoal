import {createSelector} from 'reselect';
import {IVideosItems, IVideosModule} from './videos.redux';

export const selectVideosDomain = (state: IVideosModule) => ({...state.videos});

export const selectVideosItems = createSelector(
  selectVideosDomain,
  state => (state.items || []) as IVideosItems,
);
