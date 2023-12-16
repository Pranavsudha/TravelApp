import {StyleSheet} from "react-native"

export const reusable = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20 // left and right 20px
    },
    rowWithSpace:(justifyContent)=>({
        flexDirection:"row",
        alignItems:"center",
        justifyContent:justifyContent
    })
   
   
})