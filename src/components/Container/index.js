import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F9FC",
    justifyContent: "center",
  },
});

const Container = ({ children, stretched }) => (
  <View style={[styles.container, { alignItems: stretched ? "stretch" : "center" }]}>
    {children}
  </View>
);

export default Container;
