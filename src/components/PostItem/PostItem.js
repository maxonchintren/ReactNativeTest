import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const PostItem = ({ title, body, userId, id }) => {
  return (
    <View style={styles.postItemCont}>
      <View style={styles.postHeader}>
        <View style={styles.postAvatar}>
          <Text style={styles.postUserId}>{userId}</Text>
        </View>
        <Text style={styles.postTitle}>{title}</Text>
      </View>
      <Text style={styles.postBody}>{body}</Text>
    </View>
  )
}

export default PostItem
