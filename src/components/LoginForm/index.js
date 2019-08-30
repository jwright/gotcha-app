import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10,
  },
  input: {
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    margin: 5,
  },
  label: {
    marginLeft: 5,
    marginTop: 10,
  }
});

const LoginForm = ({ onLogin }) => {
  const [state, setState] = useState({
    emailAddress: "",
    password: "",
  });

  return (
    <React.Fragment>
      <Text style={styles.label}>Email address:</Text>
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
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCompleteType="password"
        onChangeText={(password) => setState({ ...state, password })}
        placeholder="open sesame"
        secureTextEntry={true}
        textContentType="newPassword"
      />
      <TouchableOpacity style={styles.button} onPress={() => onLogin(state)}>
        <Text>Login</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default LoginForm;
