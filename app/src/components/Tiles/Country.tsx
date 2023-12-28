import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, TEXT } from "../../../../constants/theme";
import { HeightSpacer, NetworkImage } from "..";
import { useNavigation } from "@react-navigation/native";


const Country = ({item}) => {
  const navigation = useNavigation() //instance
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('CountryDetails',{item})}>
      <View>
        <NetworkImage width={75} height={75} radius={12} source={item.imageUrl} />
        <HeightSpacer height={10}/> 
        <ReusableText
          text={item.country}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;

const styles = StyleSheet.create({});
