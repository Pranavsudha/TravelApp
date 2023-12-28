import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  HeightSpacer,
  NetworkImage,
  ReusableBtn,
  ReusableText,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../../../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "../../components/Reusable/AppBar";
import DescriptionText from "../../components/Reusable/DescriptionText";
import { reusable } from "../../components/Reusable/resusable.style";
import { Feather } from "@expo/vector-icons";
import PopularList from "../../components/Country/PopularList";
import HotelCard from "../../components/Card/HotelCard";

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const country = {
    _id: "64c62bfc65af9f8c969a8d04",
    country: "USA",
    description:
      "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
    popular: [
      {
        _id: "64c631650298a05640539adc",
        title: "Walt Disney World",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
        rating: 4.7,
        review: "1204 Reviews",
        location: "Orlando, USA",
      },
      {
        _id: "64d062a3de20d7c932f1f70a",
        title: "Statue of Liberty",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
        rating: 4.8,
        review: "1452 Reviews",
        location: "Liberty Island, New York Harbor",
      },
    ],
    region: "North America, USA",
  };

  return (
    <ScrollView >
      <View>
        <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />
        <AppBar
          color={COLORS.white}
          title={country.country}
          icon={"left"}
          icon2={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
          top={40}
          left={20}
          right={20}
        />
      </View>
      <View style={styles.description}>
        <ReusableText
          text={country.region}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <DescriptionText description={country.description} />

      <View style={{ alignContent: "center" }}>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Recommendations"}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
            <Feather name="list" size={24} color="black" />
          </TouchableOpacity>
        </View>
        </View>
        <HeightSpacer height={20}/>
        <PopularList data={country.popular}/>
        <HeightSpacer height={20}/>
        <ReusableBtn
          onPress={() => { navigation.navigate('HomeTabs'); } }
          btnText={"Find Best Hotels"}
          width={SIZES.width - 40} //Subtract 50 from width and divide by 2.2
          backgroundColor={COLORS.green}
          borderColor={COLORS.green}
          borderWidth={0}
          textColor={COLORS.white}   
               />
                     
      </View>
      <HeightSpacer height={20}/>
    </ScrollView>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3f4f8",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
