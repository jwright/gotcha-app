import React, { useContext } from "react";
import { Alert, Image, StyleSheet, Text } from "react-native";

import PlayerContext from "../../context/PlayerContext";

import Button, { ButtonText } from "../../components/Button";
import Header2 from "../../components/Header2";

const styles = StyleSheet.create({
  avatar: {
    borderColor: "#000",
    borderWidth: 1,
    height: 100,
    width: 100,
  },
  name: {
    color: "#F25EAC",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
  }
});

const Match = ({ match }) => {
  const { opponent, player } = match;
  const { player: currentPlayer } = useContext(PlayerContext);
  const seeker = currentPlayer.id === player.id ? opponent : player;
  const avatar = seeker.avatar || "https://www.dropbox.com/s/0bhghw81hpw4tqi/avatar.png?raw=1";

  return (
    <React.Fragment>
      <Header2 style={{ marginBottom: 24 }} text="You have a new match!" />
      <Image style={styles.avatar} resizeMode="cover" source={{ uri: avatar }} />
      <Text style={styles.name}>{seeker.name}</Text>
      <Button onPress={() => Alert.alert(`Capture ${seeker.name}!`)}>
        <ButtonText text="Capture!" />
      </Button>
    </React.Fragment>
  );
};

export default Match;
