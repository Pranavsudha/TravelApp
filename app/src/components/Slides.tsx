import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants/theme'
import { ReusableText } from '../screens'
import ReusableBtn from './Reusable/ReusableBtn'



const Slides = ({item}) => {
  return (
    <View>
      <Image source={item.image} style={styles.image}/>
      <View style={styles.stack}>
      <ReusableText 
      text={item.title} 
      family={'medium'}
      size={SIZES.xxLarge} //map it to xxlarge
      color={COLORS.white}
      />
      <ReusableBtn
      onPress={()=>{
      
      }}
      btnText={"Let's Go"}
      width={(SIZES.width -50) /2.2} //Subtract 50 from width and divide by 2.2
      backgroundColor={COLORS.red}
      borderColor={COLORS.red}
      borderWidth={0}
      textColor={COLORS.white}
      />
      </View>
    </View>
  )
}

export default Slides

const styles = StyleSheet.create({
    image:{
        resizeMode:'contain',
        width:SIZES.width,
        height:SIZES.height,
    },
    stack:{
        position:"absolute",
        bottom:0,
        marginBottom:60,
        marginHorizontal:20
    }
})
