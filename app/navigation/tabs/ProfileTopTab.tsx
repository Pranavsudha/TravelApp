import { StyleSheet, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopBookings from "../../src/screens/Profile/TopBookings";
import TopInfo from "../../src/screens/Profile/TopInfo/TopInfo";
import TopTrips from "../../src/screens/Profile/TopTrips/TopTrips";
import { SafeAreaView, View } from "react-native";
import { COLORS, SIZES, TEXT } from "../../../constants/theme";
import { HeightSpacer, NetworkImage, ReusableText } from "../../src/components";
import AppBar from "../../src/components/Reusable/AppBar";

const ProfileTopTab = createMaterialTopTabNavigator();

export function ProfileTabs({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={
              "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg"
            }
            width={"100%"}
            height={300}
            radius={0}
          />
          <AppBar
            color={COLORS.white}
            title={undefined}
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
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={{
              uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
            }}
          />
          <HeightSpacer height={5} />
          <View style={styles.name}>
            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={"Pranavan Sudhahar"}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.white}
              />
            </View>
          </View>
          <HeightSpacer height={5} />
          <View style={styles.name}>
            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={"pranavansudha1999@gmail.com"}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.white}
              />
            </View>
          </View>
        </View>
      </View>
      <ProfileTopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#3c0a6b",
          tabBarStyle: {
            backgroundColor: COLORS.lightWhite,
          },
        }}
      >
        <ProfileTopTab.Screen name="Bookings" component={TopBookings} />
        <ProfileTopTab.Screen name="Trips" component={TopTrips} />
        <ProfileTopTab.Screen name="Info" component={TopInfo} />
      </ProfileTopTab.Navigator>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  profile: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 110,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderColor: COLORS.lightWhite,
    borderWidth: 2,
    resizeMode: "cover",
    borderRadius: 90,
  },
  name: {
    backgroundColor: COLORS.gray,
    padding: 5,
    borderRadius: 12,
  },
});
