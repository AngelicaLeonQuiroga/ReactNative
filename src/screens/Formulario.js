import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

export default function Formulario() {
  return (
    <View>
      <Text>Bienvenido al formulario</Text>
    </View>
  );
}

Formulario.defaultProps = {
  name: "angelica leon",
  lastname: "hola a todos",
};

Formulario.propTypes = {
  lastname: PropTypes.string.isRequired,
};
