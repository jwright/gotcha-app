import React, { useState } from "react";

import Button, { ButtonText } from "../../components/Button";
import Label from "../../components/Label";
import TextInput from "../../components/TextInput";

const LoginForm = ({ onLogin }) => {
  const [state, setState] = useState({
    emailAddress: "",
    password: "",
  });

  return (
    <React.Fragment>
      <Label text="Email address:" />
      <TextInput
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
