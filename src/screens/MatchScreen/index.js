import React, { useContext } from "react";
import { useApolloClient } from "@apollo/react-hooks";

import ArenaContext from "../../context/ArenaContext";

import Container from "../../components/Container";
import CurrentArenaHeader from "../../components/CurrentArenaHeader";
import Match from "../../containers/Match";

const MatchScreen = () => {
  const { arena: { id: arenaId } } = useContext(ArenaContext);
  const client = useApolloClient();

  return (
    <Container>
      <CurrentArenaHeader />
      <Match arenaId={parseInt(arenaId)} client={client} />
    </Container>
  );
};

export default MatchScreen;
