import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
