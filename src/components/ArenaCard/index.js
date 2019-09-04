import React from "react";
import { StyleSheet, Text } from "react-native";

import ArenaContext from "../../context/ArenaContext";

import Button from "../../components/Button";
import Container from "../../components/Container";

const styles = StyleSheet.create({
  address: {
    fontSize: 12,
  },
  button: {
    borderLeftColor: "#F25EAC",
    borderLeftWidth: 3,
  },
  buttonText: {
    color: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
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
          <Button style={styles.button} onPress={() => {
              setArena(arena);
              navigation.navigate("Registration");
            }}>
            <Text style={[styles.buttonText, styles.name]}>{locationName}</Text>
            <Text style={[styles.buttonText, styles.address]}>{streetAddress1}</Text>
            {streetAddress2 && <Text style={[styles.buttonText, styles.address]}>{streetAddress2}</Text>}
            <Text style={[styles.buttonText, styles.address]}>{city}, {state} {zipCode}</Text>
          </Button>
        </Container>
      )}
    </ArenaContext.Consumer>
  );
};

export default ArenaCard;
