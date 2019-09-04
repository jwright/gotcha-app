import React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 300,
  },
});

const Logo = ({ style }) => (
  <Image
    style={[styles.logo, style]}
    resizeMode="contain"
    source={{uri: "https://www.dropbox.com/s/ayqomdnml52cdj6/gotcha-logo.png?raw=1"}}
  />
);

export default Logo;
