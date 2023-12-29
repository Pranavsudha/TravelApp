import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import {
  HeightSpacer,
  NetworkImage,
  ReusableBtn,
  ReusableText,
  WidthSpacer,
} from "../../components";
import { reusable } from "../../components/Reusable/resusable.style";
import { Feather } from "@expo/vector-icons";
import { Rating } from "react-native-stock-star-rating";
import DescriptionText from "../../components/Reusable/DescriptionText";
import HotelMap from "../../components/Hotel/HotelMap";
import ReviewsList from "../../components/Hotel/ReviewsList";

const HotelDetails = () => {
  const navigation = useNavigation();
  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Urban Chic Boutique Hotel",
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
    reviews:[
      {
        _id: "64c675793cfa5e847bcd5436",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        rating:4.6,
        user:{
          _id: "64c675793cfa5e847bcd5436",
          username:"John Doe",
          profile:"https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",

        },
        updatedAt:"2023-08-09T13:09:09:200z"
      },
      {
        _id: "64c675793cfa5e847bcd5478",
        review: "Lorem epsum",
        rating:4.8,
        user:{
          _id: "64c675793cfa5e847bcd5478",
          username:"Zoe Doe",
          profile:"https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",

        },
        updatedAt:"2023-08-09T13:09:09:200z"
      }
    ],
  }

  
   
  let coordinates = {
  id:hotel._id,
  title:hotel.title,
  latitude:hotel.latitude,
  longitude:hotel.longitude,
  latitudeDelta:0.01,
  longitudeDelata:0.01
  }
  console.log(hotel.imageUrl);
  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          color={COLORS.white}
          title={"Hotel Details"}
          icon={"left"}
          icon2={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
          top={40}
          left={20}
          right={20}
        />
      </View>
      <View style={styles.container}>
        <NetworkImage
          source={hotel.imageUrl}
          width={"100%"}
          height={200}
          radius={25}
        />
        <View style={styles.titleContainer}>
          <View style={styles.titleColumn}>
            <ReusableText
              text={hotel.title}
              family={"medium"}
              size={SIZES.xLarge}
              color={COLORS.black}
            />
            <ReusableText
              text={hotel.location}
              family={"medium"}
              size={SIZES.xLarge}
              color={COLORS.black}
            />
            <View style={reusable.rowWithSpace("flex-start")}>
              <Rating
                stars={hotel.rating}
                maxStars={5}
                size={25}
                bordered={false}
                color={"#FD9942"}
              />
              <WidthSpacer width={20} />
              <ReusableText
                text={`(${hotel.review})`}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.gray}
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={[styles.container, { paddingTop: 90 }]}>
          <HeightSpacer height={20} />
          <ReusableText
            text={"Description"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <DescriptionText description={hotel.description} />
          <ReusableText
            text={hotel.location}
            family={"regular"}
            size={SIZES.small + 2}
            color={COLORS.gray}
          />
          <HeightSpacer height={15} />
           <HotelMap coordinates={coordinates}  />
           <View style={reusable.rowWithSpace('space-between')}>
           <ReusableText
            text={"Reviews"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
              <TouchableOpacity
            >
              <Feather name="list" size={24} />
           
            </TouchableOpacity>
 
           </View>
           <HeightSpacer height={10}/>
           <ReviewsList reviews={hotel.reviews}/>
           <View>
           <View style={[reusable.rowWithSpace('space-between'),styles.bottom]}>
            <View>
            <ReusableText 
            text={` $ ${hotel.price}`} 
            family={"medium"} 
            size={SIZES.medium} 
            color={COLORS.black} 
           />
            <HeightSpacer height={5} />
            <ReusableText 
            text={`Jan 1 - Dec 25`} 
            family={"medium"} 
            size={SIZES.medium} 
            color={COLORS.gray} 
           />
            </View>
            <ReusableBtn
              onPress={() => { navigation.navigate('SelectRooms') } }
              btnText={"Select Room"}
              width={(SIZES.width - 50) / 2.2} //Subtract 50 from width and divide by 2.2
              backgroundColor={COLORS.green}
              borderColor={COLORS.red}
              borderWidth={0}
              textColor={COLORS.white} 
                     />
            </View>     
            
           </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
  },
  titleContainer: {
    margin: 15,
    backgroundColor: COLORS.lightWhite,
    height: 120,
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    borderRadius: 20,
  },
  titleColumn: {
    padding: 15,
  },
  bottom:{
    paddingHorizontal:10,
    backgroundColor:COLORS.lightWhite,
    height:90,
    paddingVertical:10
  }
});
