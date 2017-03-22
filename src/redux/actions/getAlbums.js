
import request from 'superagent'
import _ from 'lodash'

export const getAlbums = () => {
  return (dispatch) => {
    request
      .get('https://api.spotify.com/v1/artists/1aSxMhuvixZ8h9dK9jIDwL/albums')
      .end((err, res) => {
        const bushAlbums = _.uniq(_.map(res.body.items, (obj) => obj.name))
        return dispatch({ type: 'getAlbums/GET_ALBUMS', payload: bushAlbums })
      })
  }
}

