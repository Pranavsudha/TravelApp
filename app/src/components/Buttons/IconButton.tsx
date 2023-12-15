import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 


function IconButton ({icon,size,color,onPress,style}){
  return (
    <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed }>
      <View style={[styles.buttonContainer,style]}>
         <Ionicons name={icon} color={color} size={size}/>
      </View>
    </Pressable>
   
  )
}

export default IconButton

const styles = StyleSheet.create({
    buttonContainer:{
        padding:6,
        marginRight:10
    },
    pressed:{
        opacity:0.75, //75 percent transparent 25 percent opaque,


    }
})