import { all, fork } from 'redux-saga/effects';
import videosSaga from './videos/videos.sagas';
// import startupSaga from './startup/startup.sagas';
// <-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
	yield all([
		// fork(startupSaga),
		fork(videosSaga),
	]);
}
