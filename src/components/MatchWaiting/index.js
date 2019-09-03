import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10,
  },
});

const MatchWaiting = ({ onCheckNewMatch }) => (
  <React.Fragment>
    <Text>Waiting on a match...</Text>
    <TouchableOpacity style={styles.button} onPress={() => onCheckNewMatch()}>
      <Text>Check for a New Match</Text>
    </TouchableOpacity>
  </React.Fragment>
);

export default MatchWaiting;