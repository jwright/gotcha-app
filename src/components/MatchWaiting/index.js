import React from "react";

import Button, { ButtonText } from "../../components/Button";
import Header2 from "../../components/Header2";

const MatchWaiting = ({ onCheckNewMatch }) => (
  <React.Fragment>
    <Header2 text="Waiting on a match..." />
    <Button onPress={() => onCheckNewMatch()}>
      <ButtonText text="Check for a New Match" />
    </Button>
  </React.Fragment>
);

export default MatchWaiting;
