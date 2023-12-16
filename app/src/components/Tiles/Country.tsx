import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, TEXT } from "../../../../constants/theme";
import { NetworkImage } from "..";


const Country = ({item}) => {
  return (
    <TouchableOpacity>
      <View>
        <NetworkImage width={85} height={85} radius={12} source={item.imageUrl} />
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
