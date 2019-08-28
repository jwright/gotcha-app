import React, { useState } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./helpers/client";

import ArenaContext from "./context/ArenaContext";
import PlayerContext from "./context/PlayerContext";

import ArenaListScreen from "./screens/ArenaListScreen";
import HomeScreen from "./screens/HomeScreen";
import MatchScreen from "./screens/MatchScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

const Navigator = createSwitchNavigator(
  {
    ArenaList: { screen: ArenaListScreen },
    Home: { screen: HomeScreen },
    Match: { screen: MatchScreen },
    Registration: { screen: RegistrationScreen },
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
      setState({ ...state, arenaId });
    },
    player: null,
    setPlayer: (player) => {
      setState({ ...state, player });
    },
  });

  return (
    <ApolloProvider client={client}>
      <ArenaContext.Provider value={state}>
        <PlayerContext.Provider value={state}>
          <AppNavigationContainer />
        </PlayerContext.Provider>
      </ArenaContext.Provider>
    </ApolloProvider>
  );
};

export default App;
