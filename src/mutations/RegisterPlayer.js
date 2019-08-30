import gql from "graphql-tag";

export default gql`
  mutation RegisterPlayer($name: String!, $emailAddress: String!, $password: String!, $avatar: String) {
    registerPlayer(name: $name, emailAddress: $emailAddress, password: $password, avatar: $avatar) {
      id
      avatar
      name
      emailAddress
      apiToken
    }
  }
`;
