import React from "react";
import { StyleSheet, Text } from "react-native";

import Container from "../../components/Container";

const styles = StyleSheet.create({
  message: {
    color: "#ff0000",
  },
});

const ErrorMessage = ({ error, message }) => (
  <Container>
    <Text style={styles.message}>{message}{` (${error})`}</Text>
  </Container>
);

export default ErrorMessage;
