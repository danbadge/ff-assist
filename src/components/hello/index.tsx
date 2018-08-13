import Hello from './Hello';
import * as actions from '../../actions/';
import { StoreState } from '../../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ increment }: StoreState) {
  return {
    increment,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IncrementAction>) {
  return {
    onIncrement: () => dispatch(actions.increment()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
