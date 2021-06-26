import axios from '../index'

export const _getPosts = (data, paging) =>
  axios.get(`/posts?_page=${paging.page}&_limit=${paging.count}`, data)

export const _getPost = (data) => axios.get(`/posts/${data.id}`, data)

export const _getPostComments = (data) => axios.get(`/posts/${data.id}/comments`, data)
