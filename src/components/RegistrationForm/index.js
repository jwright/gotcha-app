import React from "react";
import { Alert, Image, Linking, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Button, { ButtonText } from "../../components/Button";
import Label from "../../components/Label";
import TextInput from "../../components/TextInput";

const styles = StyleSheet.create({
  avatar: {
    borderColor: "#000",
    borderWidth: 1,
    height: 100,
    width: 100,
  },
  avatarButton: {
    alignSelf: "auto",
    backgroundColor: "#ddd",
  },
  avatarButtonText: {
    color: "#000",
    fontWeight: "normal",
  },
  avatarContainer: {
    alignSelf: "center",
    marginTop: 10,
  },
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
    const { onRegister } = this.props;

    return (
      <React.Fragment>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} resizeMode="cover" source={{ uri: avatar }} />
          <Button
             style={styles.avatarButton}
             onPress={async () => this.pickImage()}>
            <ButtonText style={styles.avatarButtonText} text="Upload Avatar" />
          </Button>
        </View>
        <Label text="Name:" />
        <TextInput
          autoCapitalize="words"
          autoCompleteType="name"
          autoCorrect={false}
          autoFocus={true}
          onChangeText={(name) => this.setState({ name })}
          placeholder="Johnny Appleseed"
          textContentType="name"
        />
        <Label text="Email address:" />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          onChangeText={(emailAddress) => this.setState({ emailAddress })}
          placeholder="johnny@apple.com"
          textContentType="emailAddress"
        />
        <Label text="Password:" />
        <TextInput
          autoCorrect={false}
          autoCompleteType="password"
          onChangeText={(password) => this.setState({ password })}
          placeholder="open sesame"
          secureTextEntry={true}
          textContentType="newPassword"
        />
        <Button onPress={() => onRegister(this.state)}>
          <ButtonText text="Register" />
        </Button>
      </React.Fragment>
    );
  }
};

export default RegistrationForm;
