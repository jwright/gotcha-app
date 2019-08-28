import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import RegisterPlayerMutation from "../../mutations/RegisterPlayer";

import RegistrationForm from "../../components/RegistrationForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 5,
  },
  header: {
    alignSelf: "center",
    fontSize: 40,
  },
});

const RegistrationScreen = () => {
  const [registerPlayer, { data }] = useMutation(RegisterPlayerMutation);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Player Registration</Text>
      <RegistrationForm onRegister={(registration) => {
        registerPlayer({ variables: registration });
      }} />
    </View>
  );
};

RegistrationScreen.navigationOptions = {
  title: "Register"
};

export default RegistrationScreen;
