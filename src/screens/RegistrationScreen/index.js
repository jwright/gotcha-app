import React, { useContext } from "react";
import { KeyboardAvoidingView, StyleSheet, ScrollView, Text, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import PlayerContext from "../../context/PlayerContext";
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

const RegistrationScreen = ({ navigation }) => {
  const { setPlayer } = useContext(PlayerContext);
  const [registerPlayer] = useMutation(RegisterPlayerMutation, {
    onCompleted({ registerPlayer: player }) {
      setPlayer(player);
      navigation.navigate("Match");
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
        <Text style={styles.header}>Player Registration</Text>
        <RegistrationForm
          onRegister={(registration) => registerPlayer({ variables: registration })}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

RegistrationScreen.navigationOptions = {
  title: "Register"
};

export default RegistrationScreen;
