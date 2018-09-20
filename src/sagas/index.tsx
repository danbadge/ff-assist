import { call, put, takeEvery } from 'redux-saga/effects'

import { PlayersArray, ApiResult, ErrorResult } from '../types'
import {
  PLAYERS_FETCH_REQUESTED,
  setPlayers, 
  setError
} from '../actions';

import * as FantasyFootballApi from '../apiClients/fantasyFootball'

const isSuccessful = function(result: ErrorResult | ApiResult<PlayersArray>): result is ApiResult<PlayersArray> {
  return result.status === 'ok'
}

export const fetchPlayers = function* (): any {
  const result: (ErrorResult | ApiResult<PlayersArray>) = yield call(FantasyFootballApi.fetchPlayers)

  isSuccessful(result)
    ? yield put(setPlayers(result.data))
    : yield put(setError(result.message))
}

const runSagaEffects = function* (): any {
  yield takeEvery(PLAYERS_FETCH_REQUESTED, fetchPlayers)
}

export default runSagaEffects
