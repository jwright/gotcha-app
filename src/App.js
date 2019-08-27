import React, { useState } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./helpers/client";

import ArenaContext from "./context/ArenaContext";

import ArenaListScreen from "./screens/ArenaListScreen";
import HomeScreen from "./screens/HomeScreen";
import MatchScreen from "./screens/MatchScreen";

const Navigator = createSwitchNavigator(
  {
    ArenaList: { screen: ArenaListScreen },
    Home: { screen: HomeScreen },
    Match: { screen: MatchScreen },
  },
  {
    initialRouteName: "Home",
  },
);

const AppNavigationContainer = createAppContainer(Navigator);

const App = () => {
  const [state, setState] = useState({
    arenaId: null,
    setArenaId: (arenaId) => {
      setState({ arenaId });
    },
  });

  return (
    <ApolloProvider client={client}>
      <ArenaContext.Provider value={state}>
        <AppNavigationContainer />
      </ArenaContext.Provider>
    </ApolloProvider>
  );
};

export default App;
