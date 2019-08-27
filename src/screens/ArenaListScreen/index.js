import React from "react";
import { useQuery } from "@apollo/react-hooks";

import ArenasQuery from "../../queries/Arenas";

import Arenas from "../../components/Arenas";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

const ArenaListScreen = ({ navigation }) => {
  const { latitude, longitude } = navigation.getParam("location");
  const { loading, error, data } = useQuery(ArenasQuery, {
    variables: {
      latitude, longitude, radius: 25,
    }
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage
                      error={error}
                      message="Error occured retrieving arenas. Try again later."
                    />;

  return <Arenas arenas={data.arenas} />;
};

ArenaListScreen.navigationOptions = {
  title: "Select An Arena",
};

export default ArenaListScreen;
