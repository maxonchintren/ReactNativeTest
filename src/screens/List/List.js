import React, { useCallback, useEffect, useState } from 'react'
import { Text, SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, getPostComments, getPosts } from '../../store/modules/posts/actions'
import { isAllLoadedSelector, isLoadingPostsSelector, isLoadingSelectedPostSelector, pagingSelector, postCommentsSelector, postSelector, postsSelector } from '../../store/selectors/posts'
import ListHeader from '../../components/ListHeader/ListHeader'
import styles from './styles'
import palette from '../../theme/palette'
import PostItem from '../../components/PostItem/PostItem'
import PostModal from '../../components/PostModal/PostModal'

const List = () => {
  const dispatch = useDispatch()

  const posts = useSelector(postsSelector)
  const isLoadingPosts = useSelector(isLoadingPostsSelector)
  const post = useSelector(postSelector)
  const isLoadingSelectedPost = useSelector(isLoadingSelectedPostSelector)
  const paging = useSelector(pagingSelector)
  const isAllLoaded = useSelector(isAllLoadedSelector)
  const postComments = useSelector(postCommentsSelector)

  const [isPostModalShown, setIsPostModalShown] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    if (isLoadingPosts || isAllLoaded) return

    dispatch(getPosts(
      {},
      () => {},
      (error) => {
        console.log(error)
      },
      {
        page: paging.page + 1,
        count: paging.count
      }
    ))
  }

  const selectPost = (id) => {
    setIsPostModalShown(true)
    dispatch(getPost(
      { id },
      (data) => {
        dispatch(
          getPostComments({ id: data.id })
        )
      },
      (error) => {
        setIsPostModalShown(false)
        console.log(error)
      }
    ))
  }

  const dismissModal = () => {
    setIsPostModalShown(false)
  }

  const renderItem = useCallback(({ item }) => {
    return (
      <PostItem {...item} selectPost={selectPost}/>
    )
  }, [])

  const listHeaderComponent = (() => {
    return (
      // Здесь должно было быть общее количество сущетсвующих постов, но API не отдает amount :/
      <ListHeader count={posts.length} title="Posts"/>
    )
  })

  const listFooterComponent = useCallback(() => {
    return (
      <View>
        {
          isLoadingPosts && <ActivityIndicator size={'large'} color={palette['text-sub']}/>
        }
      </View>
    )
  }, [isLoadingPosts])

  return (
    <SafeAreaView style={styles.container}>
      <PostModal
        isShown={isPostModalShown}
        isLoading={isLoadingSelectedPost}
        onDismiss={dismissModal}
        comments={postComments}
        {...post}
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => `post-${item.id}`}
        contentContainerStyle={styles.listContainer}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0}
        onEndReached={fetchPosts}
      />
    </SafeAreaView>
  )
}

export default List
