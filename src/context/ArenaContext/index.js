import { createContext } from "react";

const ArenaContext = createContext({
  arena: null,
  setArena: (arena) => {},
});

export default ArenaContext;
