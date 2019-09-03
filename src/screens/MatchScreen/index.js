import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useApolloClient } from "@apollo/react-hooks";

import ArenaContext from "../../context/ArenaContext";

import CurrentArenaHeader from "../../components/CurrentArenaHeader";
import Match from "../../containers/Match";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});

const MatchScreen = () => {
  const { arena: { id: arenaId } } = useContext(ArenaContext);
  const client = useApolloClient();

  return (
    <View style={styles.container}>
      <CurrentArenaHeader />
      <Match arenaId={parseInt(arenaId)} client={client} />
    </View>
  );
};

export default MatchScreen;
