import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { reusable } from "../../../components/Reusable/resusable.style";
import ReusableText from "../../../components/Reusable/ReusableText";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, TEXT } from "../../../../../constants/theme";
import { Feather } from "@expo/vector-icons";
import HotelCard from "../../../components/Card/HotelCard";
const BestHotels = () => {
  const hotel = [
    {
      availability: {
        start: "2023-08-20T00:00:00.000Z",
        end: "2023-08-25T00:00:00.000Z",
      },
      _id: "64c675793cfa5e847bcd5436",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Urban Chic Boutique",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
      contact: "64c5d95adc7efae2a45ec376",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
      rating: 4.8,
      review: "2312 Reviews",
      location: "San Francisco, CA",
      latitude: 37.7749,
      longitude: -122.4194,
      price: 400,
      facilities: [
        {
          wifi: true,
          _id: "64c675793cfa5e847bcd5437",
        },
      ],
      __v: 0,
    },
    {
      availability: {
        start: "2023-08-20T00:00:00.000Z",
        end: "2023-08-25T00:00:00.000Z",
      },
      _id: "64c675793cfa5e847bcd5437",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Seaside Resort",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
      contact: "64c5d95adc7efae2a45ec376",
      imageUrl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/390820337.jpg?k=0845c4c450d16a9b0fb95cc47bc465ccb2273ebf59f4b54f2a6c224d6dc26f97&o=&hp=1",
      rating: 4.2,
      review: "2312 Reviews",
      location: "San Francisco, CA",
      latitude: 37.7749,
      longitude: -122.4194,
      price: 400,
      facilities: [
        {
          wifi: true,
          _id: "64c675793cfa5e847bcd5437",
        },
      ],
      __v: 0,
    },
    {
      availability: {
        start: "2023-08-20T00:00:00.000Z",
        end: "2023-08-25T00:00:00.000Z",
      },
      _id: "64c675793cfa5e847bcd5438",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Mountain Lodge",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
      contact: "64c5d95adc7efae2a45ec376",
      imageUrl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/84575908.jpg?k=f1a021d7f02804779c730140bdee3df050d4a302e5ec3ec39a52eede1421aaf6&o=&hp=1",
      rating: 4.1,
      review: "2312 Reviews",
      location: "San Francisco, CA",
      latitude: 37.7749,
      longitude: -122.4194,
      price: 400,
      facilities: [
        {
          wifi: true,
          _id: "64c675793cfa5e847bcd5437",
        },
      ],
      __v: 0,
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={[reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text={"Near By Hotels"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('HotelList')}>
          <Feather name="list" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={hotel}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id} //takes an item from data and gets the id of every item -- every unique key
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => <HotelCard item={item} onPress={()=>navigation.navigate('HomeDetails')} />}
      />
    </View>
  );
};

export default BestHotels;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
