import { addMockFunctionsToSchema, makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks: resolvers });

export default schema;
