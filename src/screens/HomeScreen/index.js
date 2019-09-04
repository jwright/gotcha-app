import React from "react";
import { Alert, Linking, StyleSheet, Text } from "react-native";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import Button, { ButtonText } from "../../components/Button";
import Container from "../../components/Container";
import Logo from "../../components/Logo";

const styles = StyleSheet.create({
  h4: {
    fontSize: 16,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  instructions: {
    fontSize: 12,
    paddingBottom: 24,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

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
        <Logo style={{ paddingBottom: 100 }} />
        <Text style={styles.h4}>We will get you playing Gotcha! in a moment.</Text>
        <Text style={styles.instructions}>
          In order to get the arenas you can play in, we need to ask for your location first so you can find one nearby.
        </Text>
        <Button onPress={this.handleGrantPermissions}>
          <ButtonText text="Find Nearby Arenas" />
        </Button>
      </Container>
    );
  };
}

export default HomeScreen;
