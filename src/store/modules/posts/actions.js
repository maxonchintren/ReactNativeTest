import { _getPost, _getPostComments, _getPosts } from '../../../api/http/posts'
import {
  makeRequest
} from '../../utils/redux-utils'
import { SET_POST, SET_POSTS, SET_POST_COMMENTS } from './constants'

export const getPosts = (data, callbackSuccess, callbackError, paging) =>
  makeRequest(
    SET_POSTS,
    _getPosts,
    data,
    callbackSuccess,
    callbackError,
    paging
  )

export const getPost = (data, callbackSuccess, callbackError) =>
  makeRequest(SET_POST, _getPost, data, callbackSuccess, callbackError)

export const getPostComments = (data, callbackSuccess, callbackError) =>
  makeRequest(SET_POST_COMMENTS, _getPostComments, data, callbackSuccess, callbackError)