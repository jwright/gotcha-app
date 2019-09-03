import React from "react";
import { Text } from "react-native";

import ArenaContext from "../../context/ArenaContext";

const CurrentArenaHeader = () => (
  <ArenaContext.Consumer>
    {({ arena: { locationName,
                 streetAddress1,
                 streetAddress2,
                 city,
                 state,
                 zipCode } }) => (
      <React.Fragment>
        <Text>{locationName}</Text>
        <Text>{streetAddress1}</Text>
        {streetAddress2 && <Text>{streetAddress2}</Text>}
        <Text>{city}, {state} {zipCode}</Text>
      </React.Fragment>
    )}
  </ArenaContext.Consumer>
);

export default CurrentArenaHeader;
