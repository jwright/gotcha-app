import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import ArenaContext from "../../context/ArenaContext";
import PlayArenaMutation from "../../mutations/PlayArena";

import CurrentArenaHeader from "../../components/CurrentArenaHeader";
import MatchWaiting from "../../components/MatchWaiting";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});

const MatchScreen = () => {
  const [match, setMatch] = useState();
  const { arena: { id: arenaId } } = useContext(ArenaContext);
  const [playArena] = useMutation(PlayArenaMutation, {
    onCompleted({ playArena: arena }) {
      console.log("ARENA FOUND:", arena);
    },
  });
  playArena({ variables: { arenaId: parseInt(arenaId) } });

  return (
    <View style={styles.container}>
      <CurrentArenaHeader />
      { !match && <MatchWaiting /> }
    </View>
  );
};

export default MatchScreen;
