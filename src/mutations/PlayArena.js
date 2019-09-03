import gql from "graphql-tag";

export default gql`
  mutation PlayArena($arenaId: Int!) {
    playArena(arenaId: $arenaId) {
      arena {
        id
        locationName
        streetAddress1
        streetAddress2
        city
        state
        zipCode
      }
    }
  }
`;
