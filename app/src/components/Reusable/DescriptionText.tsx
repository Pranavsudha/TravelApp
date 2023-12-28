import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TEXT } from '../../../../constants/theme'

const DescriptionText = ({lines,text,description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description} numberOfLines={lines}>{description}</Text>
    </View>
  )
}

export default DescriptionText

const styles = StyleSheet.create({
    description:{
      paddingVertical:10,
      fontFamily:"regular",
      fontSize:TEXT.small,
    }
})
