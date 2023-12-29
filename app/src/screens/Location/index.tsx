import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Location = () => {
  const coordinates = {
    latitude:35.6855,
    longitude:139.68884,
    latitudeDelta:0.01,
    longitudeDelta:0.01,
    title:'My Location'

  }
  return (
   <MapView initialRegion={coordinates} style={styles.map}>
    <Marker coordinate={coordinates} title={coordinates.title}/>
   </MapView>
  )
}

export default Location

const styles = StyleSheet.create({
  map:{
 width:'100%',
 height:"100%"
  }
})
