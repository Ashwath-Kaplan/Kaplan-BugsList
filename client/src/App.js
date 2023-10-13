import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient";
import Body from "./components/Body";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Body />
    </ApolloProvider>
  );
};

export default App;
