import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import Button, { ButtonText } from "../../components/Button";
import Label from "../../components/Label";

const styles = StyleSheet.create({
  input: {
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    margin: 5,
  },
});

const LoginForm = ({ onLogin }) => {
  const [state, setState] = useState({
    emailAddress: "",
    password: "",
  });

  return (
    <React.Fragment>
      <Label text="Email address:" />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        autoFocus={true}
        onChangeText={(emailAddress) => setState({ ...state, emailAddress })}
        placeholder="johnny@apple.com"
        textContentType="emailAddress"
      />
      <Label text="Password:" />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCompleteType="password"
        onChangeText={(password) => setState({ ...state, password })}
        placeholder="open sesame"
        secureTextEntry={true}
        textContentType="newPassword"
      />
      <Button onPress={() => onLogin(state)}>
        <ButtonText text="Login" />
      </Button>
    </React.Fragment>
  );
};

export default LoginForm;
