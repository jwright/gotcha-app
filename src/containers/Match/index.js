import React from "react";

import PlayArenaMutation from "../../mutations/PlayArena";
import MatchesQuery from "../../queries/Matches";

import MatchComponent from "../../components/Match";
import MatchWaiting from "../../containers/MatchWaiting";

class Match extends React.Component {
  state = {
    match: null,
  };

  async componentWillMount() {
    const { arenaId, client } = this.props;

    const { data: { playArena: { arena } } } = await client.mutate({
      mutation: PlayArenaMutation,
      variables: { arenaId }
    });

    const { data: { matches }} = await client.query({
      query: MatchesQuery,
      variables: { arenaId: parseInt(arena.id) }
    });

    if (matches && matches[0]) {
      this.setState({ match: matches[0] });
    }
  }

  render() {
    const { arenaId } = this.props;
    const { match } = this.state;

    const component = match ?
      <MatchComponent match={match} /> :
      <MatchWaiting arenaId={arenaId} onMatchFound={(match) => this.setState({ match })} />;

    return (
      component
    );
  }
}

export default Match;
