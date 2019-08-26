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

const ArenaCard = ({ arena: { locationName } }) => (
  <View style={styles.container}>
    <Text>Display {locationName} Now.</Text>
  </View>
);

export default ArenaCard;
