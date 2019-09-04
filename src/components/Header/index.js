import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    fontSize: 40,
  }
});

const Header = ({ style, text }) => (
  <Text style={[styles.header, style]}>{text}</Text>
);

export default Header;
