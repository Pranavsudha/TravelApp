import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { reusable } from "./resusable.style";
import { COLORS, SIZES, TEXT } from "../../../../constants/theme";
import NetworkImage from "./NetworkImage";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import HeightSpacer from "./HeightSpacer";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

const ReusableTile = ({ item,onPress }) => {
    const navigation =useNavigation()
  console.log(item);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={reusable.rowWithSpace('flex-start')}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          radius={12}
        />
        <WidthSpacer width={12} />
        <View>
        <View>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />
        </View>
        <HeightSpacer height={10} />
        <View>
          <ReusableText
            text={item.location}
            family={"medium"}
            size={14}
            color={COLORS.gray}
          />
      <HeightSpacer height={10} />
        </View>
        <View style={reusable.rowWithSpace("flex-start")}>
          <Rating Rating={item.rating} />
          <WidthSpacer width={10} />
          <ReusableText
            text={`${item.review}`}
            family={"medium"}
            size={14}
            color={COLORS.gray}
          />
        </View>
      </View>
      
</View>
      
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
