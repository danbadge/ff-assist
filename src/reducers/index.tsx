import {
  Actions,
  PLAYERS_FETCH_SUCCEEDED
} from '../actions';
import { StoreState } from '../types/index';

const initialState: StoreState = {
  players: []
}

export default function (state = initialState, action: Actions): StoreState {
  switch (action.type) {
    case PLAYERS_FETCH_SUCCEEDED:
      return { ...state, players: action.players }
    default:
      return state
  }
}
