import React, { useState } from "react";
import { Alert, Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

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

class RegistrationForm extends React.Component {
  state = {
    avatar: "https://www.dropbox.com/s/0bhghw81hpw4tqi/avatar.png?raw=1",
    emailAddress: "",
    name: "",
    password: "",
  };

  pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === "granted") {
      const camera = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: "Images",
        base64: true,
      });

      if (!camera.cancelled) {
        const { base64 } = camera;
        this.setState({ avatar: `data:image/png;base64, ${base64}` });
      }
    } else {
      Alert.alert("No Access",
                  "Your device does not have permissions to view Camera Roll.", [
        { text: "OK", onPress: () => Linking.openURL("app-settings:") },
      ]);
    }
  };

  render() {
    const { avatar } = this.state;

    return (
      <React.Fragment>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} resizeMode="cover" source={{ uri: avatar }} />
          <TouchableOpacity
             style={styles.button}
             onPress={async () => this.pickImage()}>
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
          onChangeText={(name) => this.setState({ name })}
          placeholder="Johnny Appleseed"
          textContentType="name"
        />
        <Text style={styles.label}>Email address:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          onChangeText={(emailAddress) => this.setState({ emailAddress })}
          placeholder="johnny@apple.com"
          textContentType="emailAddress"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCompleteType="password"
          onChangeText={(password) => this.setState({ password })}
          placeholder="open sesame"
          secureTextEntry={true}
          textContentType="newPassword"
        />
        <TouchableOpacity style={styles.button} onPress={() => console.log(this.state)}>
          <Text>Register</Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
};

export default RegistrationForm;
