import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  label: {
    marginLeft: 5,
    marginTop: 10,
  }
});

const Label = ({ style, text }) => (
  <Text style={[styles.label, style]}>{text}</Text>
);

export default Label;
