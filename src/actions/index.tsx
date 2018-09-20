import { PlayersArray } from '../types'

export const PLAYERS_FETCH_REQUESTED = 'PLAYERS_FETCH_REQUESTED'
export const PLAYERS_FETCH_SUCCEEDED = 'PLAYERS_FETCH_SUCCEEDED'
export const PLAYERS_FETCH_FAILED = 'PLAYERS_FETCH_FAILED'

type FetchPlayersRequested = { type: typeof PLAYERS_FETCH_REQUESTED }
type FetchPlayersSucceeded = { type: typeof PLAYERS_FETCH_SUCCEEDED, players: PlayersArray }
type FetchPlayersFailed = { type: typeof PLAYERS_FETCH_FAILED, message: String }

export type Actions = FetchPlayersRequested | FetchPlayersSucceeded | FetchPlayersFailed

export const fetchPlayers = (): FetchPlayersRequested => {
  return {
    type: PLAYERS_FETCH_REQUESTED
  }
}

export const setPlayers = (players: PlayersArray): FetchPlayersSucceeded => {
  return {
    type: PLAYERS_FETCH_SUCCEEDED,
    players: players
  }
}

export const setError = (message: String): FetchPlayersFailed => {
  return {
    type: PLAYERS_FETCH_FAILED,
    message: message
  }
}
