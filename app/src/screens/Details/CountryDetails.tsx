import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { HeightSpacer, ReusableText } from "../../components";
import { COLORS, TEXT } from "../../../../constants/theme";

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  console.log(item);

  return (
    <View>
        <Text>Calendar</Text>
    </View>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({});
