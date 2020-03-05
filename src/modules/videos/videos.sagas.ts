import {put, takeEvery} from 'redux-saga/effects';

import {VideosActions, VideosTypes} from './videos.redux';

export function* fetchVideos() {
  try {
    const fetchedVideosMock = [
      {id: 1, name: 'video 1'},
      {id: 2, name: 'video 2'},
    ];

    yield put(VideosActions.fetchVideosSuccess(fetchedVideosMock));
  } catch (e) {
    console.log('Fetch videos error', e);
  }
}

export default function* videosSaga() {
  yield takeEvery(VideosTypes.FETCH_VIDEOS, fetchVideos);
}
