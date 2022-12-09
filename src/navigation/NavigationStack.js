import { View, Text, Settings } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Formulario from "../screens/Formulario";
import Login from "../components/Login";
import SettingsScreens from "../screens/SettingsScreens";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Formulario" component={Formulario}></Stack.Screen>
      <Stack.Screen name="Settings" component={SettingsScreens}></Stack.Screen>
    </Stack.Navigator>
  );
}
