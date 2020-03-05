import {put, takeEvery} from 'redux-saga/effects';

import {VideosActions, VideosTypes} from './videos.redux';

const FETCH_URL = 'https://www.scorebat.com/video-api/v1/';

export function* fetchVideos() {
  try {
    const response = yield fetch(FETCH_URL);
    const videos = yield response.json();

    yield put(VideosActions.fetchVideosSuccess(videos));
  } catch (e) {
    console.log('Fetch videos error', e);
  }
}

export default function* videosSaga() {
  yield takeEvery(VideosTypes.FETCH_VIDEOS, fetchVideos);
}
