import { combineReducers } from 'redux'
import { postsReducer as posts } from './posts/reducer'

export default combineReducers({
  posts
})
