import React from "react";

import ArenaCard from "../ArenaCard";

const Arenas = ({ arenas, navigation }) => (
  <React.Fragment>
    {arenas.map((arena) => (
      <ArenaCard key={arena.id} arena={arena} navigation={navigation} />
    ))}
  </React.Fragment>
);

export default Arenas;
