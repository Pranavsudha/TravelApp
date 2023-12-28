import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TEXT } from '../../../../constants/theme'

const DescriptionText = ({lines,text}) => {
  return (
    <View>
      <Text style={styles.description} numberOfLines={lines}>DescriptionText</Text>
    </View>
  )
}

export default DescriptionText

const styles = StyleSheet.create({
    description:{
      paddingVertical:10,
      fontFamily:"regular",
      textAlign:"center",
      fontSize:TEXT.medium,
    }
})
