import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ReviewsTile from '../Tiles/ReviewsTile/ReviewsTile'

const ReviewsList = ({reviews}) => {
  return (
   <FlatList
   data={reviews}
   scrollEnabled={false}
   keyExtractor={(item)=>item.id}
   showsVerticalScrollIndicator={false}
   renderItem={({item})=> 
   <View>
 <ReviewsTile review={item}/>
   </View>
  }
   />
  )
}

export default ReviewsList

const styles = StyleSheet.create({})