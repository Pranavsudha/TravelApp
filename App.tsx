import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/src/screens/Home";
import IconButton from "./app/src/components/Buttons/IconButton";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Onboarding from "./app/src/screens/OnBoarding";
import HomeTabs from "./app/navigation/tabs/BottomTabNavigation";
import Search from "./app/src/screens/Search";


export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    bold: require("./assets/fonts/bold.otf"),
    light: require("./assets/fonts/light.otf"),
    medium: require("./assets/fonts/medium.otf"),
    regular: require("./assets/fonts/regular.otf"),
    xtrabold: require("./assets/fonts/xtrabold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    //Use callback to load the fonts asynchronously
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
           headerShown:false,
           animationEnabled:false
          }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
           headerShown:false,
           animationEnabled:false
          }}
        />
           <Stack.Screen
          name="Search"
          component={Search}
          options={{
           headerShown:false,
           animationEnabled:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "bold",
    fontSize: 24,
  },
});
