import gql from "graphql-tag";

export default gql`
  query Arenas($latitude: Float!, $longitude: Float!, $radius: Int) {
    arenas(latitude: $latitude, longitude: $longitude, radius: $radius) {
      id
      locationName
      streetAddress1
      streetAddress2
      city
      state
      zipCode
    }
  }
`;
