import { StyleSheet } from 'react-native'
import palette from '../../theme/palette'

const styles = StyleSheet.create({
    postCommCont: {
      // width: '100%',
      paddingBottom: 10,
      marginVertical: 10,
      alignItems: 'flex-start',
      borderBottomColor: palette['background-accent'],
      borderBottomWidth: 1
    },
    postCommEmail: {
      fontWeight: '500',
      fontSize: 15,
      marginBottom: 8
    },
    postCommBody: {
      fontSize: 13,
      color: palette['text-sub']
    }
  })

export default styles