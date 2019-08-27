import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    borderColor: "#000",
    borderWidth: 1,
    height: 100,
    width: 100,
  },
  avatarContainer: {
    alignSelf: "center",
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10,
  },
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

const RegistrationScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Player Registration</Text>
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} />
      <TouchableOpacity style={styles.button}>
        <Text>Upload Avatar</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.label}>Name:</Text>
    <TextInput
      style={styles.input}
      autoCapitalize="words"
      autoCompleteType="name"
      autoCorrect={false}
      autoFocus={true}
      placeholder="Johnny Appleseed"
      textContentType="name"
    />
    <Text style={styles.label}>Email address:</Text>
    <TextInput
      style={styles.input}
      autoCorrect={false}
      autoCompleteType="email"
      placeholder="johnny@apple.com"
      textContentType="emailAddress"
    />
    <Text style={styles.label}>Password:</Text>
    <TextInput
      style={styles.input}
      autoCorrect={false}
      autoCompleteType="password"
      placeholder="open sesame"
      secureTextEntry={true}
      textContentType="newPassword"
    />
    <TouchableOpacity style={styles.button}>
      <Text>Register</Text>
    </TouchableOpacity>
  </View>
);

RegistrationScreen.navigationOptions = {
  title: "Register"
};

export default RegistrationScreen;
