import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { HeightSpacer, ReusableBtn, ReusableText } from ".";

const Slides = ({ item }) => {
  const navigation = useNavigation()
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.xxLarge} //map it to xxlarge
          color={COLORS.white}        />
        <HeightSpacer height={40} />
        <ReusableBtn
          onPress={() => {navigation.navigate('HomeTabs')}}
          btnText={"Let's Go"}
          width={(SIZES.width - 50) / 2.2} //Subtract 50 from width and divide by 2.2
          backgroundColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
        <HeightSpacer height={40} />
      </View>
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: SIZES.width,
    height: SIZES.height,
  },
  stack: {
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
});
