import React from "react";
import { Alert, Button, Linking, Text } from "react-native";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import Container from "../../components/Container";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Gotcha!",
  };

  static async getLocation() {
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

    return { latitude, longitude };
  };

  static async askLocationPermissions() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    return status === "granted";
  }

  static async hasLocationPermissions() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    return status === "granted";
  }

  handleGrantPermissions = async () => {
    const permissions = await HomeScreen.askLocationPermissions();

    if (await !permissions) {
      Alert.alert("Location Unknown",
                  "You must enable location services so a list of nearby Arenas can be found.", [
                  { text: "OK", onPress: () => Linking.openURL("app-settings:") },
      ]);
      return;
    }

    this.navigate();
  };

  navigate = async () => {
    const { navigation } = this.props;
    const location = await HomeScreen.getLocation();

    navigation.navigate("ArenaList", { location: location });
  };

  async componentDidMount() {
    if (await HomeScreen.hasLocationPermissions() && await Location.hasServicesEnabledAsync()) {
      this.navigate();
    }
  };

  render() {
    return (
      <Container>
        <Text>Welcome to Gotcha.</Text>
        <Text>We will get you playing in a moment.</Text>
        <Text>In order to get the arenas you can play in, we need to ask for your location first so you can find one nearby.</Text>
        <Button onPress={this.handleGrantPermissions} title="Find Nearby Arenas" />
      </Container>
    );
  };
}

export default HomeScreen;
