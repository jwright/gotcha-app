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

const Loading = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
);

export default Loading;
