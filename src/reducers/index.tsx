import { IncrementAction, INCREMENT } from '../actions';
import { StoreState } from '../types/index';

export function increment(state: StoreState, action: IncrementAction): StoreState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, increment: state.increment + 1 };
    default:
      return state;
  }
}
