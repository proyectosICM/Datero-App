import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapaRuta } from "./screens/MapaRuta";
import { RegistroRuta } from "./screens/RegistroRuta";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { BoletosRuta } from "./screens/BoletosRuta";
const Tab = createBottomTabNavigator();

export function CustomBottomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#A69677",
        tabBarInactiveTintColor: "#9CA4A6",
      }}
    >
      <Tab.Screen
        name="MapaRuta"
        component={MapaRuta}
        options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" color={color} size={size} /> }}
      />
      <Tab.Screen
        name="RegistroRuta"
        component={RegistroRuta}
        options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" color={color} size={size} /> }}
      />
      <Tab.Screen
        name="BoletosRuta"
        component={BoletosRuta}
        options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" color={color} size={size} /> }}
      />
    </Tab.Navigator>
  );
}
