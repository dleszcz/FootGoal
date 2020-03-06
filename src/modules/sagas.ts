import { all, fork } from 'redux-saga/effects';
import videosSaga from './Videos/Videos.sagas';

export default function* rootSaga() {
	yield all([
		fork(videosSaga),
	]);
}
