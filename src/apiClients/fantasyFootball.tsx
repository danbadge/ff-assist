import { PlayersArray } from '../types'
import 'whatwg-fetch'

export function fetchPlayers(): Promise<PlayersArray> {
  const options: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    mode: 'cors'
  }

  return fetch('https://fantasy.premierleague.com/drf/bootstrap-static', options)
    .then(response => {
      if (response.ok)
        return response.json()
      else
        throw new Error(`Unsuccessful request to FPL ${response.status}`)
    })
    .then((responseBody) => {
      return responseBody.elements
    })
    .catch(error => {
      console.error(error)
      return []
    })
}
