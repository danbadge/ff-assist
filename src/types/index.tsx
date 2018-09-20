export type PlayersArray = Array<any>

export interface StoreState {
  players: PlayersArray
}

export interface ApiResult<T> {
  status: string,
  data: Array<T>
}

export interface ErrorResult {
  status: string,
  message: string,
}
