import arenas from "./arenas";

const resolvers = {
  Query: () => ({
    arenas: (_, { latitude, longitude, radius }) => {
      return arenas;
    },
  }),
};

export default resolvers;
