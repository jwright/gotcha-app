import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useApolloClient, useMutation } from "@apollo/react-hooks";

import ArenaContext from "../../context/ArenaContext";
import PlayArenaMutation from "../../mutations/PlayArena";
import MatchesQuery from "../../queries/Matches";

import CurrentArenaHeader from "../../components/CurrentArenaHeader";
import Match from "../../components/Match";
import MatchWaiting from "../../containers/MatchWaiting";

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
  const client = useApolloClient();

  const [playArena] = useMutation(PlayArenaMutation, {
    onCompleted({ playArena: arena }) {
      const { arena: { id: arenaId }} = arena;
      client
        .query({ query: MatchesQuery,
                 variables: { arenaId: parseInt(arenaId) } })
        .then(({ data: { matches } }) => {
          if (matches[0]) { setMatch(matches[0]); }
        });
    },
  });

  playArena({ variables: { arenaId: parseInt(arenaId) } });

  return (
    <View style={styles.container}>
      <CurrentArenaHeader />
      { !match && <MatchWaiting
                    arenaId={parseInt(arenaId)}
                    onMatchFound={(match) => setMatch(match)}
                  /> }
      { match && <Match match={match} /> }
    </View>
  );
};

export default MatchScreen;
