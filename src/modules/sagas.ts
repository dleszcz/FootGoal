import { all, fork } from 'redux-saga/effects';
import videosSaga from './Videos/Videos.sagas';
// import startupSaga from './startup/startup.sagas';
// <-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
	yield all([
		fork(videosSaga),
	]);
}
