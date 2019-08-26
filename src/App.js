import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./helpers/client";

import ArenaListScreen from "./screens/ArenaListScreen";
import HomeScreen from "./screens/HomeScreen";

const Navigator = createSwitchNavigator(
  {
    ArenaList: { screen: ArenaListScreen },
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: "Home",
  },
);

const AppNavigationContainer = createAppContainer(Navigator);

const App = () => (
  <ApolloProvider client={client}>
    <AppNavigationContainer />
  </ApolloProvider>
);

export default App;
