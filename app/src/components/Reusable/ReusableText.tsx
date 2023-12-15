import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReusableText = ({text,family,size,color}) => {
  return (
    <View>
      <Text style={styles.textStyle(family,size,color)}>{text}</Text>
    </View>
  )
}

export default ReusableText

const styles = StyleSheet.create({
  textStyle: (family,size,color) => ({
        fontFamily: family,
        fontSize: size,
        color: color
      })      
})