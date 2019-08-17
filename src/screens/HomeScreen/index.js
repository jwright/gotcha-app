import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>You are now viewing the Home screen</Text>
  </View>
);

export default HomeScreen;
