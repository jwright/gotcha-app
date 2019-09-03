import React from "react";
import { Text } from "react-native";

const Match = ({ arena: { locationName }}) => (
  <React.Fragment>
    <Text>You have a new match!</Text>
    <Text>{locationName}</Text>
  </React.Fragment>
);

export default Match;
