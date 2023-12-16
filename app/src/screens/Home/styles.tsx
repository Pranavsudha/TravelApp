import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../../constants/theme'

 const styles = StyleSheet.create({
    box:{
        backgroundColor:COLORS.white,
        width:40,
        height:40,
        borderRadius:12,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default styles