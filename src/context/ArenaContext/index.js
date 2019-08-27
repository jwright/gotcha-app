import { createContext } from "react";

const ArenaContext = createContext({
  arenaId: null,
  setArenaId: (arenaId) => {},
});

export default ArenaContext;
