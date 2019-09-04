import React from "react";

import ArenaCard from "../../components/ArenaCard";
import Container from "../../components/Container";
import Header from "../../components/Header";

const Arenas = ({ arenas, navigation }) => (
  <Container stretched>
    <Header style={{ marginTop: 200 }} text="Available Arenas" />
    {arenas.map((arena) => (
      <ArenaCard key={arena.id} arena={arena} navigation={navigation} />
    ))}
  </Container>
);

export default Arenas;
