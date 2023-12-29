import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MapView,{Marker} from "react-native-maps";

const HotelMap = ({coordinates}) => {
  return (
    <TouchableOpacity>
      <MapView
        style={styles.map}
       region={coordinates}
      >
        <Marker coordinate={coordinates} title={coordinates.title}/>
      </MapView>
    </TouchableOpacity>
  );
};

export default HotelMap;

const styles = StyleSheet.create({
  map: {
    marginvertical:10,
    width: "100%",
    height: 180,
    borderRadius:12
  },
});
