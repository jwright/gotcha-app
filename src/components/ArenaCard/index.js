import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import ArenaContext from "../../context/ArenaContext";

import Container from "../../components/Container";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

const ArenaCard = ({ arena, navigation }) => {
  const { id,
          locationName,
          streetAddress1,
          streetAddress2,
          city,
          state,
          zipCode } = arena;

  return (
    <ArenaContext.Consumer>
      {({ setArena }) => (
        <Container stretched>
          <TouchableOpacity style={styles.button} onPress={() => {
              setArena(arena);
              navigation.navigate("Registration");
            }}>
            <Text>{locationName}</Text>
            <Text>{streetAddress1}</Text>
            {streetAddress2 && <Text>{streetAddress2}</Text>}
            <Text>{city}, {state} {zipCode}</Text>
          </TouchableOpacity>
        </Container>
      )}
    </ArenaContext.Consumer>
  );
};

export default ArenaCard;
