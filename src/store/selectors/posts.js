export const isLoadingPostsSelector = (state) => state.posts.isLoadingPosts
export const isLoadingSelectedPostSelector = (state) => state.posts.isLoadingSelectedPost
export const postsSelector = (state) => state.posts.posts
export const postSelector = (state) => state.posts.selectedPost
export const pagingSelector = (state) => state.posts.paging
export const isAllLoadedSelector = (state) => state.posts.isAllLoaded
export const postCommentsSelector = (state) => state.posts.selectedPostComments
