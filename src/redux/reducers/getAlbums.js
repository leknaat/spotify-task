const initialState = {
  albums: []
}

export default function getAlbums(state = initialState, action) {
  switch (action.type) {
    case 'getAlbums/GET_ALBUMS':
      return { ...state, albums: action.payload }
    default:
      return state
  }
}
