import React, { useContext } from "react";
import { Image, StyleSheet, Text } from "react-native";

import PlayerContext from "../../context/PlayerContext";

const styles = StyleSheet.create({
  avatar: {
    borderColor: "#000",
    borderWidth: 1,
    height: 100,
    width: 100,
  },
});

const Match = ({ match }) => {
  const { opponent, player } = match;
  const { player: currentPlayer } = useContext(PlayerContext);
  const seeker = currentPlayer.id === player.id ? opponent : player;
  const avatar = seeker.avatar || "https://www.dropbox.com/s/0bhghw81hpw4tqi/avatar.png?raw=1";

  return (
    <React.Fragment>
      <Text>You have a new match!</Text>
      <Image style={styles.avatar} resizeMode="cover" source={{ uri: avatar }} />
      <Text>Against: {seeker.name}</Text>
    </React.Fragment>
  );
};

export default Match;
