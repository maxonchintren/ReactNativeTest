import React from 'react'
import { Text, View, ActivityIndicator, ScrollView } from 'react-native'
import styles from './styles'
import Modal from 'react-native-modal'
import palette from '../../theme/palette'
import PostComment from '../PostComment/PostComment'

const PostModal = ({ title, body, userId, isShown, isLoading, onDismiss, comments }) => {
  return (
    <Modal isVisible={isShown} onBackdropPress={onDismiss}>
      <ScrollView
        style={styles.postItemCont}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {
          isLoading ? (
            <View style={{ height: 500, justifyContent: 'center' }}>
              <ActivityIndicator color={palette['text-sub']} size='large' />
            </View>
          ) : (
            <>
              <View style={styles.postHeader}>
                <View style={styles.postAvatar}>
                  <Text style={styles.postUserId}>{userId}</Text>
                </View>
                <Text style={styles.postTitle}>{title}</Text>
              </View>
              <Text style={styles.postBody}>{body}</Text>
              <View style={styles.postComments}>
                <View style={styles.postCommentsHeader}>
                  <Text style={styles.postCommentsTitle}>Comments</Text>
                  <Text style={styles.postCommentsCounter}>{comments.length}</Text>
                </View>
                {
                  comments.map(( comment ) => (
                    <PostComment key={comment.id} {...comment}/>
                  ))
                }
              </View>
            </>
          )
        }
      </ScrollView>
    </Modal>
  )
}

export default PostModal
