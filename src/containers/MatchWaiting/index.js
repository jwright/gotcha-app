import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";

import MatchesQuery from "../../queries/Matches";

import MatchWaitingComponent from "../../components/MatchWaiting";

const MatchWaiting = ({ arenaId, onMatchFound }) => {
  const [getMatches] = useLazyQuery(MatchesQuery, {
    fetchPolicy: "network-only",
    variables: { arenaId },
    onCompleted({ matches }) {
      const match = matches[0];
      if (match) { onMatchFound(match); }
    }
  });

  return (
    <MatchWaitingComponent onCheckNewMatch={getMatches} />
  );
};

export default MatchWaiting;
