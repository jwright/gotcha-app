import React, { useContext } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import LoginMutation from "../../mutations/Login";
import PlayerContext from "../../context/PlayerContext";

import Header from "../../components/Header";
import LinkButton from "../../components/LinkButton";
import LoginForm from "../../components/LoginForm";
import ScrollContainer from "../../components/ScrollContainer";

const LoginScreen = ({ navigation }) => {
  const { setPlayer } = useContext(PlayerContext);
  const [login] = useMutation(LoginMutation, {
    onCompleted({ login: player }) {
      setPlayer(player);
      navigation.navigate("Match");
    },
  });

  return (
    <ScrollContainer keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
        <Header text="Login" />
        <LoginForm onLogin={(auth) => login({ variables: auth})} />
        <LinkButton onPress={() => navigation.navigate("Registration")} text="Don't have an account?" />
      </KeyboardAvoidingView>
    </ScrollContainer>
  );
};

LoginScreen.navigationOptions = {
  title: "Login"
};

export default LoginScreen;
