import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { StoreState } from '../types'
import App from '../components/App'
import { fetchPlayers, Actions } from '../actions'

const mapStateToProps = ({ players }: StoreState) => {
  return {
    players
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
  return {
    onFetchPlayers: () => dispatch(fetchPlayers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
