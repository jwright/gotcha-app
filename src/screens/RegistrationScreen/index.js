import React, { useContext } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import PlayerContext from "../../context/PlayerContext";
import RegisterPlayerMutation from "../../mutations/RegisterPlayer";

import Header from "../../components/Header";
import LinkButton from "../../components/LinkButton";
import RegistrationForm from "../../components/RegistrationForm";
import ScrollContainer from "../../components/ScrollContainer";

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
        <LinkButton onPress={() => navigation.navigate("Login")} text="Already have an account?" />
      </KeyboardAvoidingView>
    </ScrollContainer>
  );
};

RegistrationScreen.navigationOptions = {
  title: "Register"
};

export default RegistrationScreen;
