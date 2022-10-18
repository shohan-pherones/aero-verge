import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Drones from "./components/Drones";
import Support from "./components/Support";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/drones">
          <Drones />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
