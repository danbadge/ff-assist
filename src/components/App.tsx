import * as React from 'react'
import { PlayersArray } from '../types' 

export interface Props {
  players: PlayersArray
  onFetchPlayers?: () => void
}

const App = ({ players, onFetchPlayers }: Props) => (
  <div>
    <button onClick={onFetchPlayers}>Load Players</button>
    <ul>
      {
        players.map(x => <li key={`${x.id}`}>{`${x.first_name} ${x.second_name}`}</li>)
      }
    </ul>
  </div>
)

export default App
