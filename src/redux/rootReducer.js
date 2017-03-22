import { combineReducers } from 'redux'
import todos from './reducers/todos'
import user from './reducers/user'
import getAlbums from './reducers/getAlbums'

const rootReducer = combineReducers({
  todos,
  user,
  getAlbums,
})

export default rootReducer
