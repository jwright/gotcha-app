import gql from "graphql-tag";

export default gql`
  mutation Login($emailAddress: String!, $password: String!) {
    login(emailAddress: $emailAddress, password: $password) {
      id
      avatar
      name
      emailAddress
      apiToken
    }
  }
`;
