import axios from '../index'

export const _getPosts = (data, paging) =>
  axios.get(`/posts?_page=${paging.page}&_limit=${paging.count}`, data)

export const _getPost = (data) => axios.patch(`/posts/${data.id}`, data)
