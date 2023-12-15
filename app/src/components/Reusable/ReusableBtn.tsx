import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../../../constants/theme'

const ReusableBtn = ({onPress,btnText,textColor,width,backgroundColor,borderColor,borderWidth,borderRadius}) => {
  return (
  <TouchableOpacity onPress={onPress} style={styles.btnStyle(width,backgroundColor,borderWidth,borderColor,borderRadius)} >
    <Text style={styles.btnText(textColor)}>{btnText}</Text>
  </TouchableOpacity>
  )
}

export default ReusableBtn

const styles = StyleSheet.create({
    btnText: (textColor) => ({
          fontFamily: "medium",
          fontSize:SIZES.medium,
          color: textColor
        }),
        btnStyle:(width,backgroundColor,borderWidth,borderColor)=>({
         width:width,
         backgroundColor:backgroundColor,
         alignItems:"center",
         justifyContent:"center",
         borderWidth:borderWidth,
         borderColor:borderColor,
         height:45,
         borderRadius:SIZES.small,
        })
  })