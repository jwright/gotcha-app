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

const ArenasList = ({ navigation }) => {
  const { latitude, longitude } = navigation.getParam("location");

  return (
    <View style={styles.container}>
      <Text>Display Arenas Now for {latitude}/{longitude}</Text>
    </View>
  );
};

export default ArenasList;
