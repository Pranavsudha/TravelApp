import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { reusable } from "../../../components/Reusable/resusable.style";
import { COLORS, SIZES } from "../../../../../constants/theme";
import ReusableTile from "../../../components/Reusable/ReusableTile";
import { AntDesign } from "@expo/vector-icons";
import HotelCard from "../../../components/Card/HotelCard";
import { HeightSpacer } from "../../../components";
import AppBar from "../../../components/Reusable/AppBar";
const HotelSearch = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setResults] = useState([]);
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
  return (
    <SafeAreaView  >
      <View style={{height:50}}>
      <AppBar
          color={COLORS.white}
          title={'Look For Hotels'}
          icon={"left"}
          icon2={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
          top={10}
          left={20}
          right={20}
        />
      </View>
       
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Where do you want to stay?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <AntDesign name="search1" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {hotel.length === 0 ? (
        <View>
          <Image
            source={require("../../../../../assets/images/search.png")}
            style={styles.image}
          />
        </View>
      ) : (
       <View style={{paddingLeft:12}}>
         <FlatList
          data={hotel}
          numColumns={2}
          ItemSeparatorComponent={()=>(
          <HeightSpacer height={15}  />        )}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <HotelCard
              margin={10}
              item={item}
              onPress={() => navigation.navigate("HotelDetails", item._id)}
            />
          )}
        />
       </View>
      )}
    </SafeAreaView>
  );
};

export default HotelSearch;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  input: {
    width: "100%",
    height: "100%",
    fontFamily: "regular",
    paddingHorizontal: 20,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: SIZES.height / 2.2,
    paddingHorizontal: 20,
  },
  tile: { marginHorizontal: 12, marginBottom: 10 },
});
