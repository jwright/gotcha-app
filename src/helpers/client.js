import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { AsyncStorage } from "react-native";

import config from "../config";
import schema from "../data/schema";

const authLink = setContext(async (_, { headers }) => {
  const apiToken = await AsyncStorage.getItem("apiToken");

  return {
    headers: {
      ...headers,
      authorization: apiToken ? `Bearer ${apiToken}` : "",
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([
    authLink.concat(new HttpLink({ uri: config.API_URL })),
    //new SchemaLink({ schema }),
  ]),
  cache: new InMemoryCache(),
});

export default client;
