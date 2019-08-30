import React from "react";
import { KeyboardAvoidingView, StyleSheet, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import PlayerContext from "../../context/PlayerContext";

import LoginForm from "../../components/LoginForm";

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
  linkButton: {
    color: "#007AFF",
    fontSize: 14,
    padding: 8,
    textAlign: "center",
  },
});

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
        <Text style={styles.header}>Login</Text>
        <LoginForm onLogin={(auth) => console.log(auth)} />
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.linkButton}>Don&apos;t have an account?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

LoginScreen.navigationOptions = {
  title: "Login"
};

export default LoginScreen;