import { fakeServer } from 'sinon'
import { fetchPlayers } from '../../apiClients/fantasyFootball'

let fakeHttpServer: sinon.SinonFakeServer
const endpointUrl = 'https://fantasy.premierleague.com/drf/bootstrap-static'

describe('when making request to the EPL Fantasy Football API', () => {
  beforeEach(() => {
    fakeHttpServer = fakeServer.create({
      respondImmediately: true
    })
  })

  afterEach(() => {
    fakeHttpServer.restore()
  })

  describe('and it is successful', () => {
    beforeEach(() => {
      const response = [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify({ elements: [{ name: "Player 1" }] })
      ]

      fakeHttpServer.respondWith(
        'GET',
        endpointUrl,
        response
      )
    })

    it('returns the players in the response body', (done) => {
      fetchPlayers()
        .then(result => {
          expect(result).toEqual([{ name: "Player 1" }])
          done()
        })
        .catch(done)
    })
  })

  describe('and it is unsuccessful', () => {
    beforeEach(() => {
      const response = [
        500,
        { 'Content-Type': 'application/json' },
        ""
      ]

      fakeHttpServer.respondWith(
        'GET',
        endpointUrl,
        response
      )
    })

    it('returns an empty list', (done) => {
      fetchPlayers()
        .then(result => {
          expect(result).toEqual([])
          done()
        })
        .catch(done)
    })
  })
})
