import { createReducer } from '@reduxjs/toolkit'
import { SUCCESS, FAILURE, REQUEST } from '../../constants/statuses'
import { SET_POST, SET_POSTS, SET_POST_COMMENTS } from './constants'

const initialState = {
  posts: [],
  selectedPost: null,
  selectedPostComments: [],
  isLoadingPosts: false,
  isLoadingSelectedPost: false,
  paging: {
    page: 0,
    count: 10
  },
  isAllLoaded: false
}

export const postsReducer = createReducer(initialState, {
  [SET_POSTS[REQUEST]]: (state) => {
    state.isLoadingPosts = true
  },

  [SET_POSTS[SUCCESS]]: (state, action) => {
    if (!action.payload.data.length) {
      state.isAllLoaded = true
      state.isLoadingPosts = false
      return
    }
    state.posts = action.payload.paging.page === 1 ?
      action.payload.data :
      [...state.posts, ...action.payload.data]
    state.paging = { ...action.payload.paging }
    state.isLoadingPosts = false
  },

  [SET_POSTS[FAILURE]]: (state) => {
    state.posts = []
    state.isLoadingPosts = false
  },

  [SET_POST[REQUEST]]: (state) => {
    state.isLoadingSelectedPost = true
  },

  [SET_POST[SUCCESS]]: (state, action) => {
    state.selectedPost = action.payload.data
    state.isLoadingSelectedPost = false
  },

  [SET_POST[FAILURE]]: (state) => {
    state.selectedPost = null
    state.isLoadingSelectedPost = false
  },

  [SET_POST_COMMENTS[SUCCESS]]: (state, action) => {
    state.selectedPostComments = action.payload.data
  }
})
