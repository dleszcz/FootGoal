import {createSelector} from 'reselect';
import {IVideosItems, IVideosModule} from './Videos.redux';

export const selectVideosDomain = (state: IVideosModule) => ({...state.videos});

export const selectItems = createSelector(
  selectVideosDomain,
  state => (state.items || []) as IVideosItems,
);

export const selectFilteredItems = createSelector(
  selectVideosDomain,
  state => (state.items || []).filter((video) => {
    if (!Boolean(state.query)) {
      return true;
    }

    const {title, competition: {name: competitionName}} = video;
    const videoTitle = title.toLowerCase();
    const videoCompetition = competitionName.toLowerCase();
    const query = state.query.toLowerCase();
    const isMatchingTitle = videoTitle.indexOf(query) > -1;
    const isMatchingCompetition = videoCompetition.indexOf(query) > -1;

    return isMatchingTitle || isMatchingCompetition;
  }),
);

export const selectQuery = createSelector(
  selectVideosDomain,
  state => (state.query || '') as string,
);

export const selectIsLoading = createSelector(
  selectVideosDomain,
  state => (state.isLoading || '') as string,
);
