import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";

import config from "../config";
import schema from "../data/schema";

const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({ uri: config.API_URL }),
    //new SchemaLink({ schema }),
  ]),
  cache: new InMemoryCache(),
});

export default client;
