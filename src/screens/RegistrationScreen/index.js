import React, { useContext } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import PlayerContext from "../../context/PlayerContext";
import RegisterPlayerMutation from "../../mutations/RegisterPlayer";

import Header from "../../components/Header";
import RegistrationForm from "../../components/RegistrationForm";
import ScrollContainer from "../../components/ScrollContainer";

const styles = StyleSheet.create({
  linkButton: {
    color: "#007AFF",
    fontSize: 14,
    padding: 8,
    textAlign: "center",
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
    <ScrollContainer keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
        <Header text="Player Registration" />
        <RegistrationForm
          onRegister={(registration) => registerPlayer({ variables: registration })}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.linkButton}>Already have an account?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollContainer>
  );
};

RegistrationScreen.navigationOptions = {
  title: "Register"
};

export default RegistrationScreen;
