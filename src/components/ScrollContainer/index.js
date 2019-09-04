import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F9FC",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 5,
  },
});

const ScrollContainer = ({ children }) => (
  <ScrollView contentContainerStyle={[styles.container]}>
    {children}
  </ScrollView>
);

export default ScrollContainer;
