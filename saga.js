import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { actionTypes, failure, loadDataSuccess } from './actions'

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users")
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* lodaDataOther() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users")
    const data = yield res.json()
    yield put(loadOtherSuccess(data[0]))
  } catch (err) {
    yield put(failure(err))
  }
}

function loadOtherSuccess(payload) {
  return {
    payload,
    type: actionTypes.SAVE_OTHER
  }
}

function* rootSaga() {
  yield all([
    // call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.LOAD_OTHER, lodaDataOther),
  ])
}

export default rootSaga
