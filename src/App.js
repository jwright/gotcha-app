import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./helpers/client";

import ArenaContext from "./context/ArenaContext";
import PlayerContext from "./context/PlayerContext";

import ArenaListScreen from "./screens/ArenaListScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MatchScreen from "./screens/MatchScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [state, setState] = useState({
    arena: null,
    setArena: (arena) => {
      setState(prevState => ({ ...prevState, arena }));
    },
    player: null,
    setPlayer: (player) => {
      const { apiToken } = player;
      setState(prevState => ({ ...prevState, player }));
      AsyncStorage.setItem("apiToken", apiToken);
    },
  });

  return (
    <ApolloProvider client={client}>
      <ArenaContext.Provider value={state}>
        <PlayerContext.Provider value={state}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="ArenaList" component={ArenaListScreen} options={{ headerBackVisible: false, title: "Select An Arena" }} />
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerBackVisible: false, title: "Gotcha!" }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, title: "Login" }} />
              <Stack.Screen name="Match" component={MatchScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false, title: "Register" }} />
            </Stack.Navigator>
          </NavigationContainer>
        </PlayerContext.Provider>
      </ArenaContext.Provider>
    </ApolloProvider>
  );
};

export default App;
