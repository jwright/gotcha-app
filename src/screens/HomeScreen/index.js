import React from "react";
import { Alert, Button, Linking, StyleSheet, Text, View } from "react-native";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
      <View style={styles.container}>
        <Text>Welcome to Gotcha.</Text>
        <Text>We will get you playing in a moment.</Text>
        <Text>In order to get the arenas you can play in, we need to ask for your location first so you can find one nearby.</Text>
        <Button onPress={this.handleGrantPermissions} title="Find Nearby Arenas" />
      </View>
    );
  };
}

export default HomeScreen;
