import { call, put, takeEvery } from 'redux-saga/effects'

import {
  PLAYERS_FETCH_REQUESTED,
  setPlayers, 
  setError
} from '../actions';
import * as FantasyFootballApi from '../api_clients/fantasyFootball'

const fetchPlayers = function* () {
  try {
    const players = yield call(FantasyFootballApi.fetchPlayers)
    yield put(setPlayers(players))
  } catch (e) {
    yield put(setError(e.message))
  }
}

const runSagaEffects = function* (): any {
  yield takeEvery(PLAYERS_FETCH_REQUESTED, fetchPlayers)
}

export default runSagaEffects
