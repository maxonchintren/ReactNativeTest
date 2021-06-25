import { StyleSheet } from 'react-native'
import palette from '../../theme/palette'

const styles = StyleSheet.create({
    postItemCont: {
      width: '100%',
      borderWidth: 1,
      borderColor: palette['background-sub'],
      borderRadius: 8,
      padding: 10,
      marginVertical: 15
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
    }
  })

export default styles