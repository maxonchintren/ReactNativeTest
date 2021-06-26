import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const PostComment = ({ email, body }) => {
  return (
    <View style={styles.postCommCont}>
      <Text style={styles.postCommEmail}>{email}:</Text>
      <Text style={styles.postCommBody}>{body}</Text>
    </View>
  )
}

export default PostComment
