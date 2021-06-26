import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const PostItem = ({ title, body, userId, id, selectPost }) => {

  const handlePress = () => {
    selectPost(id)
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.postItemCont}>
      <View style={styles.postHeader}>
        <View style={styles.postAvatar}>
          <Text style={styles.postUserId}>{userId}</Text>
        </View>
        <Text style={styles.postTitle}>{title}</Text>
      </View>
      <Text style={styles.postBody}>{body}</Text>
    </TouchableOpacity>
  )
}

export default PostItem
