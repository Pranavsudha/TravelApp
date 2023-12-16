import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../src/screens/Home";
import { COLORS } from "../../../constants/theme";
import Profile from "../../src/screens/Profile";
import { FontAwesome } from '@expo/vector-icons';
import Chat from "../../src/screens/Chat";
import Location from "../../src/screens/Location";



export default function HomeTabs() {
const BottomTab = createBottomTabNavigator();
  return (
      <BottomTab.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          
          headerShown:false,
          tabBarActiveTintColor: "#3c0a6b",
          tabBarInactiveTintColor:"#3e2465",
          tabBarStyle: {
            backgroundColor: "#fff",
            paddingBottom:40,
          },
  
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarStyle:{
            padding:20,
            borderRadius:20,
            height:80,
            position:"absolute",
            bottom:20,
            left:20,
            right:20
            },
            tabBarShowLabel:false,
            tabBarIcon: ({ focused }) => (
              <Ionicons 
              name={focused ? "grid" : "grid-outline"} 
              size={26} 
              color={focused ? COLORS.red : COLORS.gray}
              />
            )
          }}
        />
          <BottomTab.Screen
          name="Location"
          component={Location}
          options={{
            tabBarStyle:{
                padding:20,
                borderRadius:20,
                height:80,
                position:"absolute",
                bottom:20,
                left:20,
                right:20
                },
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon: ({ focused }) => (
                <Ionicons 
                name={focused ? "location" : "location-outline"} 
                size={26} 
                color={focused ? COLORS.red : COLORS.gray}
                />
              )
          }}
        />
              <BottomTab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarStyle:{
                padding:20,
                borderRadius:20,
                height:80,
                position:"absolute",
                bottom:20,
                left:20,
                right:20
                },
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon: ({ focused }) => (
                <Ionicons 
                name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"} 
                size={26} 
                color={focused ? COLORS.red : COLORS.gray}
                />
              )
          }}
        />
         <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarStyle:{
                padding:20,
                borderRadius:20,
                height:80,
                position:"absolute",
                bottom:20,
                left:20,
                right:20
                },
            headerShown:false,
            tabBarShowLabel:false,
            tabBarHideOnKeyboard:false,
            tabBarIcon: ({ focused }) => (
                <FontAwesome 
                name={focused ? "user-o" : "user-circle-o"} 
                size={26} 
                color={focused ? COLORS.red : COLORS.gray}
                />
              )
          }}
        />
      </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});