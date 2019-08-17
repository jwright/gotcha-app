import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

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
  <AppNavigationContainer />
);

export default App;
