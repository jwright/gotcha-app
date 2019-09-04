import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  link: {
    color: "#2C2E92",
    fontSize: 14,
    padding: 8,
    textAlign: "center",
  },
});

const LinkButton = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.link}>{text}</Text>
  </TouchableOpacity>
);

export default LinkButton;
