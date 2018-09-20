import reducer from '../../reducers'
import { setPlayers, fetchPlayers } from '../../actions'
import { StoreState } from '../../types';

describe('given players have been fetched successfully', () => {
  it('returns the state with the latest players', () => {
    const previousState: StoreState = {
      players: []
    }

    const players = [
      {name: "Riyad Mahrez"},
      {name: "Jamie Vardy"}
    ]
    
    const updatedState = reducer(previousState, setPlayers(players))

    expect(updatedState.players).toEqual(players)
  })
})

describe('given the players fetch action has been dispatched', () => {
  it('returns the existing state', () => {
    const previousState: StoreState = {
      players: []
    }

    const updatedState = reducer(previousState, fetchPlayers())

    expect(updatedState).toEqual(previousState)
  })
})

describe('given no previous state and the fetch players action', () => {
  it('returns the initial state', () => {
    const state = reducer(undefined, fetchPlayers())

    const expectedState: StoreState = {
      players: []
    }

    expect(state).toEqual(expectedState)
  })
})
