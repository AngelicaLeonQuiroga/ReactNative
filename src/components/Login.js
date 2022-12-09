import React from "react";
import { TextInput, Button, Text, View } from "react-native";
import Formulario from "../screens/Formulario";

export default function Login(props) {
  const { navigation } = props;
  const goToPage = () => {
    navigation.navigate("Formulario");
  };
  return (
    <View>
      <TextInput placeholder="Digite su usuario"></TextInput>
      <TextInput placeholder="Contraseña" type="password"></TextInput>
      <Button onPress={goToPage} title="Ingresar"></Button>
      <Formulario name="julieta"></Formulario>
      <Formulario></Formulario>
    </View>
  );
}
