import { PlayersArray, ApiResult, ErrorResult } from '../types'
import { reject } from 'promise'
import 'whatwg-fetch'

export function fetchPlayers(): Promise<ApiResult<PlayersArray> | ErrorResult> {
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
      else {
        console.log("here")
        return reject(`Unsuccessful request to FPL ${response.status}`)
      }
    })
    .then((responseBody) => {
      const result: ApiResult<PlayersArray> = {
        status: 'ok',
        data: responseBody.elements
      }

      return result
    })
    .catch(error => {
      const errorResult: ErrorResult = {
        status: 'error',
        message: error
      }

      return errorResult
    })
}
