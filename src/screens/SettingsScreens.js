import { View, Text, Button } from "react-native";
import React from "react";

export default function SettingsScreens(props) {
  const { navigation } = props;
  const goToFormulario = () => {
    navigation.navigate("Formulario");
  };
  return (
    <View>
      <Text>SettingsScreens</Text>
      <Button onPress={goToFormulario} title="ir a Formulario"></Button>
    </View>
  );
}
