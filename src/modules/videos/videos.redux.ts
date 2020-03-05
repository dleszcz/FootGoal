import {createActions, createReducer} from 'reduxsauce';

export type IVideoItem = {
  readonly id: number;
  readonly name: string;
};

export interface IVideosItems extends Array<IVideoItem> {}

export interface IVideosState {
  readonly items: IVideosItems;
  readonly isLoading: boolean;
}

export interface IVideosModule {
  readonly videos: IVideosState;
}

export const {Types: VideosTypes, Creators: VideosActions} = createActions(
  {
    fetchVideos: [],
    fetchVideosSuccess: ['items'],
  },
  {
    prefix: 'VIDEOS/',
  },
);

export const INITIAL_STATE = {
  items: [],
  isLoading: false,
} as IVideosState;

const fetchVideosSuccess = (state = INITIAL_STATE, {items}) => ({
  ...state,
  items,
});

export const reducer = createReducer(INITIAL_STATE, {
  [VideosTypes.FETCH_VIDEOS_SUCCESS]: fetchVideosSuccess,
} as any);
