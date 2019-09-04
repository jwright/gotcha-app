import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#0AD4E1",
    padding: 10,
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  }
});

export const ButtonText = ({ style, text }) => (
  <Text style={[styles.text, style]}>{text}</Text>
);

const Button = ({ children, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default Button;
