import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  },
});

const ArenaCard = ({ arena }) => {
  const { id,
          locationName,
          streetAddress1,
          streetAddress2,
          city,
          state,
          zipCode } = arena;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => alert(`Store ${id}`)}>
        <Text>{locationName}</Text>
        <Text>{streetAddress1}</Text>
        {streetAddress2 && <Text>{streetAddress2}</Text>}
        <Text>{city}, {state} {zipCode}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArenaCard;
