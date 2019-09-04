import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ArenaContext from "../../context/ArenaContext";

const styles = StyleSheet.create({
  address: {
    color: "#fff",
    fontSize: 12,
  },
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F25EAC",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  }
});

const CurrentArenaHeader = () => (
  <ArenaContext.Consumer>
    {({ arena: { locationName,
                 streetAddress1,
                 streetAddress2,
                 city,
                 state,
                 zipCode } }) => (
      <View style={styles.container}>
        <Text style={styles.name}>{locationName}</Text>
        <Text style={styles.address}>{streetAddress1}</Text>
        {streetAddress2 && <Text style={styles.address}>{streetAddress2}</Text>}
        <Text style={styles.address}>{city}, {state} {zipCode}</Text>
      </View>
    )}
  </ArenaContext.Consumer>
);

export default CurrentArenaHeader;
