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

export const ButtonText = ({ text }) => (
  <Text style={styles.text}>{text}</Text>
);

const Button = ({ children, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default Button;
