import { runSaga } from 'redux-saga'
import { sandbox } from 'sinon'

import * as api from '../../apiClients/fantasyFootball'
import { Actions, setPlayers } from '../../actions'
import { StoreState, PlayersArray } from '../../types'
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
    sinonSandbox = sandbox.create()
  })

  it('when successful, it dispatches a "set players" event', (done) => {
    const players: PlayersArray = [{name: 'Player 1'}]
    sinonSandbox.stub(api, 'fetchPlayers').callsFake(() => players)

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

  // it('when unsuccessful it dispatches a "set error" event', (done) => {
  //   sinonSandbox.stub(api, 'fetchPlayers').callsFake(() => throw new Error())

  //   const state: StoreState = {
  //     players: []
  //   }

  //   runFetchPlayersSaga(state)
  //     .then(() => {
  //       expect(dispatched).toEqual([setError()])
  //       done()
  //     })
  //     .catch(done)    
  // })
})
