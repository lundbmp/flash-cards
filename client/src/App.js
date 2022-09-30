import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import "./index.css";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// defining out graphql route
const httpLink = createHttpLink({
  uri: "/graphql",
});

// passing token into the headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("exam_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header></Header>
        <Home></Home>
        <Dashboard></Dashboard>
        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
