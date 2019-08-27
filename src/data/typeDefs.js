const typeDefs = `
  type Arena {
    id: Int!
    locationName: String!
    streetAddress1: String!
    streetAddress2: String
    city: String!
    state: String!
    zipCode: String!
    latitude: Float!
    longitude: Float!
  }

  type Query {
    arenas(latitude: Float!, longitude: Float!, radius: Int): [Arena]
  }

  schema {
    query: Query
  }
`;

export default typeDefs;
