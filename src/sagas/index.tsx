import { call, put, takeEvery } from 'redux-saga/effects'

import {
  PLAYERS_FETCH_REQUESTED,
  setPlayers, 
  setError
} from '../actions';

import * as FantasyFootballApi from '../apiClients/fantasyFootball'

export const fetchPlayers = function* (): any {
  const result = yield call(FantasyFootballApi.fetchPlayers)

  result.status == 'ok'
    ? yield put(setPlayers(result.data))
    : yield put(setError(result.message))
}

const runSagaEffects = function* (): any {
  yield takeEvery(PLAYERS_FETCH_REQUESTED, fetchPlayers)
}

export default runSagaEffects
