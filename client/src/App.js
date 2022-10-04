import React from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CardCategories from "./pages/CardCategories";
import Nav from "./components/Navbar";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
      <Router>
        <div>
          <Nav></Nav>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/math"
              element={<CardCategories category={"Math"} />}
            />
            <Route
              path="/computerscience"
              element={<CardCategories category={"Computer Science"} />}
            />
            <Route
              path="/history"
              element={<CardCategories category={"History"} />}
            />
            <Route
              path="/science"
              element={<CardCategories category={"Science"} />}
            />
            <Route
              path="/literature"
              element={<CardCategories category={"Literature"} />}
            />
          </Routes>
          {/* <Footer></Footer> */}
        </div>
      </Router>
    </ApolloProvider>
  );

}
export default App;
