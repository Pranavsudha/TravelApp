import { SafeAreaView, StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Slides from '../../components/Slides'


const Onboarding = () => {
    const slides = [{
        id:1,
        image:require('../../../../assets/images/1.png'),
        title:"Find the perfect place to stay"
    },
    {
        id:2,
        image:require('../../../../assets/images/2.png'),
        title:"Discover the world"
    },
    {
        id:3,
        image:require('../../../../assets/images/3.png'),
        title:"Find the best hotels in the world"
    }
]
  return (
 <FlatList
 data={slides}
 keyExtractor={(item)=> item.id} //takes an item from data and gets the id of every item -- every unique key
 renderItem={({item})=> <Slides item={item}/> }
 pagingEnabled
 horizontal={true}
 showsHorizontalScrollIndicator={false}
 />
  )
}

export default Onboarding

const styles = StyleSheet.create({})
