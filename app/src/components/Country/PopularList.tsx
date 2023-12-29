import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ReusableTile from '../Reusable/ReusableTile'
import { useNavigation } from '@react-navigation/native'

const PopularList = ({data}) => {
    const navigation = useNavigation()
   
  return (
<FlatList
data={data} //feed data to flatlist
scrollEnabled = {false}
showsVerticalScrollIndicator={false}
keyExtractor={(item)=>item.id}
renderItem={({item})=>
<View style={{marginBottom:15}}>
<ReusableTile item={item} onPress={()=>navigation.navigate('PlaceDetails')}/>
</View>
}
/>
  )
}

export default PopularList

const styles = StyleSheet.create({})
