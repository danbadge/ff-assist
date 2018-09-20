import { runSaga } from 'redux-saga'
import { createSandbox } from 'sinon'

import * as api from '../../apiClients/fantasyFootball'
import { Actions, setPlayers, setError } from '../../actions'
import { StoreState, PlayersArray, ApiResult, ErrorResult } from '../../types'
import { fetchPlayers } from '../../sagas'

let sinonSandbox: sinon.SinonSandbox
let dispatched: Array<Actions> = []

const runFetchPlayersSaga = (state: StoreState) => {
  const config: any = {
    dispatch: (action: Actions) => dispatched.push(action),
    getState: () => state
  }

  return runSaga(
    config,
    fetchPlayers,
  ).done
}

describe('given we have fetched players from the FF API', () => {
  afterEach(() => {
    sinonSandbox.restore()
    dispatched = []
  })

  beforeEach(() => {
    sinonSandbox = createSandbox()
  })

  it('when successful, it dispatches a "set players" event', (done) => {
    const players: PlayersArray = [{name: 'Player 1'}]
    const result: ApiResult<PlayersArray> = { status: 'ok', data: players }
    sinonSandbox.stub(api, 'fetchPlayers').callsFake(() => result)

    const state: StoreState = {
      players: []
    }

    runFetchPlayersSaga(state)
      .then(() => {
        expect(dispatched).toEqual([setPlayers(players)])
        done()
      })
      .catch(done)    
  })

  it('when unsuccessful it dispatches a "set error" event', (done) => {
    const errorResult: ErrorResult = { status: 'error', message: 'This gone wrong' }
    sinonSandbox.stub(api, 'fetchPlayers').callsFake(() => errorResult)

    const state: StoreState = {
      players: []
    }

    runFetchPlayersSaga(state)
      .then(() => {
        expect(dispatched).toEqual([setError(errorResult.message)])
        done()
      })
      .catch(done)    
  })
})
