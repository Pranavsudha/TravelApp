import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { reusable } from "./resusable.style";
import { COLORS, TEXT } from "../../../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "./ReusableText";

const AppBar = ({ color, color1, title,icon,icon2,onPress,onPress1 }) => {
  return (
    <SafeAreaView style={styles.overlay}>
      <View style={reusable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
          <AntDesign name={icon} size={26} />
        </TouchableOpacity>
        <ReusableText
          text={title}
          family={"regular"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <TouchableOpacity style={styles.box1(color1)} onPress={onPress1}>
          <AntDesign name={icon2} size={26} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: {
    justifyContent: "center",

  },
  box: (color) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1: (color1) => ({
    backgroundColor: color1,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
