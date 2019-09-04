import React from "react";
import { StyleSheet, TextInput as RNTextInput } from "react-native";

const styles = StyleSheet.create({
  input: {
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    margin: 5,
  },
});

const TextInput = ({ style, ...rest }) => (
  <RNTextInput
    style={[styles.input, style]}
    {...rest}
  />
);

export default TextInput;
