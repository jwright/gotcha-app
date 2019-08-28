import { createContext } from "react";

const PlayerContext = createContext({
  player: null,
  setPlayer: (player) => {},
});

export default PlayerContext;
