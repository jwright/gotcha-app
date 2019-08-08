import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";

const Navigator = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { title: "Home" },
    },
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
