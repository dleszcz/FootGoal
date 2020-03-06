import {createActions, createReducer} from 'reduxsauce';

export type IVideoItem = {
  readonly id: number;
  readonly name: string;
};

export interface IVideosItems extends Array<IVideoItem> {}

export interface IVideosState {
  readonly items: IVideosItems;
  readonly isLoading: boolean;
  readonly query: string;
}

export interface IVideosModule {
  readonly videos: IVideosState;
}

export const {Types: VideosTypes, Creators: VideosActions} = createActions(
  {
    fetchVideos: [],
    fetchVideosSuccess: ['items'],
    fetchVideosFailure: [],
    setVideosQuery: ['query'],
  },
  {
    prefix: 'VIDEOS/',
  },
);

export const INITIAL_STATE = {
  items: [],
  isLoading: true,
  query: '',
} as IVideosState;

const fetchVideosSuccess = (state = INITIAL_STATE, {items}) => ({
  ...state,
  items,
  isLoading: false,
});

const fetchVideosFailure = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
});

const setVideosQuery = (state = INITIAL_STATE, {query}) => ({
  ...state,
  query,
});

export const reducer = createReducer(INITIAL_STATE, {
  [VideosTypes.FETCH_VIDEOS_SUCCESS]: fetchVideosSuccess,
  [VideosTypes.FETCH_VIDEOS_FAILURE]: fetchVideosFailure,
  [VideosTypes.SET_VIDEOS_QUERY]: setVideosQuery,
} as any);
