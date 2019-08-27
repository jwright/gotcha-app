import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});

const MatchScreen = () => (
  <View style={styles.container}>
    <Text>Waiting on a match...</Text>
  </View>
);

export default MatchScreen;
