import gql from "graphql-tag";

export default gql`
  query Matches($arenaId: Int!) {
    matches(arenaId: $arenaId) {
      id
      arena {
        id
        locationName
      }
      player {
        id
        name
      }
      opponent {
        id
        name
      }
    }
  }
`;
