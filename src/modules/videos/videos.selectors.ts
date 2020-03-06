import {createSelector} from 'reselect';
import {IVideosItems, IVideosModule} from './Videos.redux';

export const selectVideosDomain = (state: IVideosModule) => ({...state.videos});

export const selectVideosItems = createSelector(
  selectVideosDomain,
  state => (state.items || []) as IVideosItems,
);
