import { StyleSheet } from 'react-native'
import palette from '../../theme/palette'

const styles = StyleSheet.create({
    postItemCont: {
      width: '100%',
      padding: 20,
      paddingBottom: 50,
      backgroundColor: palette['background-main'],
      borderRadius: 8,
      maxHeight: 500
    },
    postHeader: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15
    },
    postAvatar: {
      width: 35,
      height: 35,
      borderRadius: 35,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: palette['background-accent']
    },
    postUserId: {
      color: palette['text-white']
    },
    postTitle: {
      marginTop: 10,
      color: palette['text-main'],
      fontSize: 15,
      flexWrap: 'wrap',
      fontWeight: '500'
    },
    postBody: {
      lineHeight: 22,
      fontSize: 15,
      color: palette['text-sub']
    },
    postComments: {
      marginTop: 15
    },
    postCommentsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    postCommentsTitle: {
      fontWeight: '500',
      fontSize: 20,
      color: palette['text-accent']
    },
    postCommentsCounter: {
      fontSize: 20,
      color: palette['text-sub'],
      fontWeight: '500'
    }
  })

export default styles